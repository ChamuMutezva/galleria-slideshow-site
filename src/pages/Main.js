import { useContext } from "react"
import { Link } from "react-router-dom"
import { DataContext } from "../context/DataContext"
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"

const Main = () => {

    const { data } = useContext(DataContext)
    console.log(data)

    return (
        <main className="main">
            <h1 className="sr-only">galleria photo center - home of the most acclaimed pictures</h1>
            <ResponsiveMasonry columnsCountBreakPoints={{310: 1, 620: 2, 930: 3, 1100: 4}} >
                <Masonry gutter={`1.5rem`}>
                    {data.map(elm => {
                        return <Link to="/slides" className="anchor-color link-card flex-2" key={elm.name} >
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