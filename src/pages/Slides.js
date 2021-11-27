import { useContext} from "react"
import { useParams, Link } from "react-router-dom";
import { DataContext } from "../context/DataContext"
import Next from "../assets/shared/icon-next-button.svg"
import Back from "../assets/shared/icon-back-button.svg"

const Slides = () => {


    const { getOne } = useContext(DataContext)
    const {id} = useParams();
    const showImage = '';
    const handleShowImage = () => null;

    const targetObj = getOne(id);
    const nextSlide = targetObj.id >= 15 ? null : targetObj.id + 1;
    const previousSlide = targetObj.id > 1 ?  targetObj.id - 1 : null;


    return (
        <div className="slide">
            <main className="main container main-slide">
                <h1 className="sr-only">
                    Additional information for {targetObj.name} the works of {targetObj.artist.name}
                </h1>

                <div className="image-content">
                    <div className="main-image relative">
                        <div className="view-image absolute-top-bottom">
                            <button className="btn btn-image" onClick={handleShowImage}>
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
                            <h2 className="fs-900 fw-bold slide-image-name">{targetObj.name}</h2>
                            <h3 className="fs-600 slide-artist-name">{targetObj.artist.name}</h3>
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
                        <h2 className="fs-900 fw-bold slide-image-name-footer">{targetObj.name}</h2>
                        <h3 className="fs-600 slide-artist-name-footer">{targetObj.artist.name}</h3>
                    </div>
                    <div className="controls">
                        <Link to={`/slides/${previousSlide}`}
                            className={`btn-back ${previousSlide ? "" : "btn-disabled"}`}
                        
                        >
                            <span className="sr-only">select previous data</span>
                            <img src={Back} alt="" />
                        </Link>

                        <Link to={`/slides/${nextSlide}`}
                            className={`btn-next ${nextSlide ? "" : "btn-disabled"}`}
                       >

                            <span className="sr-only">select previous data</span>
                            <img src={Next} alt="" />
                        </Link>
                    </div>
                </div>
            </footer>
            <div className={`overlay ${showImage ? "overlay-show" : ""}`}>
                <div className="overlay-container">
                    <button className="btn-close" onClick={handleShowImage}>Close</button>
                    <img src={targetObj.images.gallery} alt="" />
                </div>
            </div>
        </div>
    )
}
export default Slides