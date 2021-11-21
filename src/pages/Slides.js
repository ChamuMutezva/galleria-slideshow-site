import { useContext } from "react"
//import { Link } from "react-router-dom"
import { useParams } from "react-router-dom";
import { DataContext } from "../context/DataContext"
const Slides = () => {
    let params = useParams();
    const { getOne } = useContext(DataContext)
    const targetObj = getOne(parseInt(params.id.substring(1), 10))

    if (targetObj === undefined) {
        return <main><h2>Nothing to show here</h2></main>
    }
    console.log(targetObj)


    return (
        <div className="main">
            <h1 className="sr-only">
                Additional information for {targetObj.name} the works of {targetObj.artist.name}
            </h1>

            <div className="image-content">
                <div className="main-image relative">
                    <div className="view-image absolute-top">
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
                <a href={targetObj.source}>Go to source
                    <span className="sr-only">Wikipedia documents</span>
                </a>
            </div>
        </div>
    )
}
export default Slides