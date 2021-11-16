import { useContext } from "react"
import { DataContext } from "../context/DataContext"

const Main = () => {

    const { data } = useContext(DataContext)
    console.log(data)

    return (
        <main>
            <h1>main page</h1>
            <div className="flex image-container">
                {data.map(elm => {
                    return <a className="anchor-color" href="./" key={elm.name}>
                        <figure className="relative">
                            <img src={elm.images.thumbnail} alt="" />
                            <figcaption className="absolute">
                                <h2 className="fs-900">{elm.name}</h2>
                                 <h3 className="fs-400">{elm.artist.name}</h3>
                            </figcaption>
                        </figure>
                    </a>
                })}
            </div>
        </main>
    )
}
export default Main