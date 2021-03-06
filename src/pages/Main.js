import { useContext, useRef, useEffect } from "react"
import { Link } from "react-router-dom"
import { DataContext } from "../context/DataContext"
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"

const Main = () => {
    const mainPage = useRef()
    const cardRef = useRef()
    const { data, startSlide, slide, isReady } = useContext(DataContext)

    useEffect(() => {
        // stop the slideshow when the main page is slected
        if (startSlide) {
            slide()
        }
    })

    return (
        !isReady() ? <div>Loading</div> :
            <main className="main container"
                tabIndex="-1"
                ref={mainPage}>
                <h1 className="sr-only">galleria photo center - home of the most acclaimed pictures</h1>
                <ResponsiveMasonry columnsCountBreakPoints={{ 310: 1, 620: 2, 930: 3, 1100: 4 }} >
                    <Masonry gutter={`1.5rem`}>
                        {data && data.map(elm => {
                            return <Link to={`/slides/${elm.id}`}
                                className="anchor-color link-card flex-2"
                                key={elm.name}
                                ref={cardRef}>
                                <figure className="relative">
                                    <img className="anchor-img"
                                        src={elm.images.thumbnail}
                                        alt="" />
                                    <figcaption className="absolute">
                                        <h2 className="fs-900 fw-bold">{elm.name}</h2>
                                        <h3 className="fs-400 darken-color">{elm.artist.name}</h3>
                                    </figcaption>
                                </figure>
                            </Link>

                        })}

                    </Masonry>
                </ResponsiveMasonry>
            </main>
    )
}
export default Main