import { useContext, useState, useRef, useEffect } from "react"
import { useParams, useNavigate, Link } from "react-router-dom"
import { gsap } from "gsap"
import { DataContext } from "../context/DataContext"
import Next from "../assets/shared/icon-next-button.svg"
import Back from "../assets/shared/icon-back-button.svg"

const Slides = () => {

    const slidePage = useRef()
    const currentSlide = useRef()

    const { getOne, startSlide, slide, data } = useContext(DataContext)
    const dataLength = data.length
    const [showImage, setShowImage] = useState(false)
    const { id } = useParams()
    const navigate = useNavigate()
    const [progressPercent, setProgressPercent] = useState(`${Math.round(id / dataLength * 100)}`)

    function handleShowImage() {
        if (startSlide) {
            slide()
        }
        setShowImage(!showImage)
    }

    function handleNextProgressBar() {
        setProgressPercent(Math.round(nextSlide / dataLength * 100))
        gsap.fromTo(".slide",
            {
                ease: "power4",
                duration: 2,
                x: -300,
            },
            {
                x: 0,
            }
        )
    }

    function handleBackProgressBar() {
        setProgressPercent(Math.round(previousSlide / dataLength * 100))
        gsap.fromTo(".slide",
        {
            ease: "power4",
            duration: 2,
            x: 300,
        },
        {
            x: 0,
        }
    )
    }

    const targetObj = getOne(id);
    const nextSlide = targetObj.id >= 15 ? 1 : targetObj.id + 1;
    const previousSlide = targetObj.id > 1 ? targetObj.id - 1 : null;


    useEffect(() => {
        slidePage.current.focus()
        currentSlide.current.focus()
    })

    /* ---------------SLIDE PRESENTATION--------------------- */
    useEffect(() => {
        if (startSlide) {
            const timer = setInterval(() => {
                navigate(`/slides/${nextSlide}`)
                setProgressPercent(Math.round(nextSlide / dataLength * 100))

                gsap.fromTo(".slide",
                    {
                        ease: "power4",
                        duration: 2,
                        x: -300,
                    },
                    {
                        x: 0,
                    }


                )
            }, 5000)
            return () => clearInterval(timer)
        }
    }, [startSlide, previousSlide, nextSlide, navigate, dataLength, progressPercent])
    /* ---------------END SLIDE PRESENTATION--------------------- */


    return (
        <div className="slide"
            tabIndex="-1"
            ref={slidePage}>

            <main className="main container main-slide">
                <h1 className="sr-only">
                    Additional information for {targetObj.name} the works of {targetObj.artist.name}
                </h1>

                <div className="image-content"
                    tabIndex="-1"
                    ref={currentSlide}>
                    <div className="main-image relative">
                        <div className="view-image absolute-top-bottom">
                            <button className="btn btn-image" onClick={handleShowImage}>
                                <img src="../assets/shared/icon-view-image.svg" alt="" aria-hidden="true" />
                                <span>View image</span>
                            </button>
                        </div>
                        <picture className="main-image-container">
                            <source media="(min-width: 680px)"
                                srcSet={targetObj.images.hero.large} />
                            <img className="anchor-img"
                                src={targetObj.images.hero.small}
                                alt={`${targetObj.name}`} />
                        </picture>
                        <div className="absolute">
                            <h2 className="fs-900 fw-bold slide-image-name">{targetObj.name}</h2>
                            <h3 className="fs-600 slide-artist-name">{targetObj.artist.name}</h3>
                        </div>
                    </div>
                    <div className="author-image">
                        <img src={targetObj.artist.image} alt={`author ${targetObj.artist.name}`} />
                    </div>
                </div>

                {/******************------------- OVERLAY SECTION------------ **********************/}
                <div className={`overlay ${showImage ? "overlay-show" : ""}`}>
                    <div className="overlay-container">
                        <button className="btn-close" onClick={handleShowImage}>Close</button>
                        <img src={targetObj.images.gallery} alt="" />
                    </div>
                </div>
                {/******************------------- OVERLAY SECTION END------------ **********************/}

                <div className="additional-content">
                    <h2 className="fs-1200 year">{targetObj.year}</h2>
                    <p className="fs-500 lighten-mid-grey fw-bold description">{targetObj.description}</p>
                    <div className="container-btn-source">
                        <a href={targetObj.source}
                            className="fs-100 uppercase lighten-mid-grey btn-source letter-spacing"
                            target="_blank"
                            rel="noreferrer">
                            Go to source
                            <span className="sr-only">Wikipedia documents</span>
                        </a>
                    </div>
                </div>
            </main>

            {/******************------------- FOOTER SECTION------------ **********************/}
            <footer className="footer">
                <div className="progressive-bar">
                    <span className="progress" style={{ width: `${progressPercent}%` }}></span>
                </div>
                <div className="footer-slide container">
                    <div className="footer-heading">
                        <h2 className="fs-900 fw-bold slide-image-name-footer">{targetObj.name}</h2>
                        <h3 className="fs-600 slide-artist-name-footer">{targetObj.artist.name}</h3>
                    </div>
                    <div className="controls">
                        <Link to={`/slides/${previousSlide}`} onClick={handleBackProgressBar}
                            className={`btn btn-back ${previousSlide ? "" : "btn-disabled"}`}

                        >
                            <span className="sr-only">select previous data</span>
                            <img src={Back} alt="" />
                        </Link>

                        <Link to={`/slides/${nextSlide}`} onClick={handleNextProgressBar}
                            className={`btn btn-next ${nextSlide ? "" : "btn-disabled"}`}
                        >

                            <span className="sr-only">select next data</span>
                            <img src={Next} alt="" />
                        </Link>
                    </div>
                </div>
            </footer>

            {/******************------------- FOOTER SECTION END------------ **********************/}



        </div>
    )
}
export default Slides