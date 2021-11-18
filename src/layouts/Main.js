import { useContext } from "react"
import { DataContext } from "../context/DataContext"
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"

const Main = () => {

    const { data } = useContext(DataContext)
    console.log(data)

    return (
        <main className="main">
            <h1 className="sr-only">galleria photo center - home of the most acclaimed pictures</h1>
            <ResponsiveMasonry columnsCountBreakPoints={{ 310: 1, 620: 2, 930: 3 , 1240: 4 }} >
                <Masonry gutter={`1.5rem`}>
                    {data.map(elm => {
                        return <a className="anchor-color link-card flex-2" href="./" key={elm.name} >
                            <figure className="relative">
                                <img className="anchor-img" src={elm.images.thumbnail} alt="" />
                                <figcaption className="absolute">
                                    <h2 className="fs-900 fw-bold">{elm.name}</h2>
                                    <h3 className="fs-400">{elm.artist.name}</h3>
                                </figcaption>
                            </figure>
                        </a>

                    })}
                </Masonry>
            </ResponsiveMasonry>
        </main>
    )
}
export default Main