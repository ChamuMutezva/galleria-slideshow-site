import { useContext, useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom";
import { DataContext } from "../context/DataContext"
import Next from "../assets/shared/icon-next-button.svg"
import Back from "../assets/shared/icon-back-button.svg"

const Slides = () => {

    let params = useParams();
    const { getOne } = useContext(DataContext)
    const [currentID, setCurrentID] = useState(parseInt(params.id.substring(1), 10))
    const [targetObj, setTargetObj] = useState(getOne(currentID))

    useEffect(() => {

    }, [targetObj, currentID])

    const [goBack, setGoBack] = useState(parseInt(targetObj.id) <= 1 ? false : true)
    const [goForward, setGoForward] = useState(parseInt(targetObj.id) === 15 ? false : true)

    if (targetObj === undefined) {
        return <main><h2>Nothing to show here</h2></main>
    }

    function handleBack(evt) {
        console.log(goBack)
        setGoForward(true)
        if (currentID <= 1) {
            setGoBack(false)

        } else {
            setCurrentID(currentID - 1)
            setTargetObj(getOne(currentID))
            setGoBack(true)
        }

    }

    function handleNext() {
        console.log(goForward)
        setGoBack(true)
        if (currentID >= 15) {
            setGoForward(false)

        } else {
            setGoForward(true)
            setCurrentID(currentID + 1)
            setTargetObj(getOne(currentID))
        }

    }


    return (
        <>
            <main className="main container main-slide">
                <h1 className="sr-only">
                    Additional information for {targetObj.name} the works of {targetObj.artist.name}
                </h1>

                <div className="image-content">
                    <div className="main-image relative">
                        <div className="view-image absolute-top-bottom">
                            <button className="btn btn-image">
                                <img src="../assets/shared/icon-view-image.svg" alt="" />
                                <span>View image</span>
                            </button>
                        </div>
                        <picture className="main-image-container">
                            <source media="(min-width: 680px)" srcSet={targetObj.images.hero.large} />
                            <img className="anchor-img"
                                src={targetObj.images.hero.small}
                                alt="" />
                        </picture>
                        <div className="absolute">
                            <h2 className="fs-900 fw-bold">{targetObj.name}</h2>
                            <h3 className="fs-600 image-heading">{targetObj.artist.name}</h3>
                        </div>
                    </div>
                    <div className="author-image">
                        <img src={targetObj.artist.image} alt={targetObj.artist.image} />
                    </div>
                </div>

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

            <footer className="footer">
                <div className="footer-slide container">
                    <div className="footer-heading">
                        <h2 className="fs-900 fw-bold">{targetObj.name}</h2>
                        <h3 className="fs-600 image-heading">{targetObj.artist.name}</h3>
                    </div>
                    <div className="controls">
                        <Link to={`/slides/:${currentID}`}
                            className={`btn-back ${goBack ? "" : "btn-disabled"}`}
                            onClick={handleBack}
                        >
                            <span className="sr-only">select previous data</span>
                            <img src={Back} alt="" />
                        </Link>
                        <Link to={`/slides/:${currentID}`}
                            className={`btn-next ${goForward ? "" : "btn-disabled"}`}
                            onClick={handleNext}>
                            <span className="sr-only">select previous data</span>
                            <img src={Next} alt="" />
                        </Link>
                    </div>
                </div>
            </footer>
        </>
    )
}
export default Slides