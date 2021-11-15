import { useContext } from "react"
import logo from "../assets/shared/logo.svg"
import { DataContext } from "../context/DataContext"


const Header = () => {

  const data = useContext(DataContext)
  console.log(data)

  return (
    <header className="flex">
      <div className="image-holder">
        <img className="logo" src={logo} alt="" aria-hidden="true" />
      </div>
      <button className="btn uppercase fs-100 text-med-grey">
        Start slideshow
      </button>
    </header>
  )
}
export default Header