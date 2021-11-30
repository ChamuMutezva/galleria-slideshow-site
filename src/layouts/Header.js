import { useContext } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import logo from "../assets/shared/logo.svg"
import { DataContext } from "../context/DataContext"

const Header = () => {

  const navigate = useNavigate()
  const loc = useLocation()
 // console.log(loc)
  const { slide, startSlide } = useContext(DataContext)

  function handleStart() {
    if (loc.pathname === "/") {
      navigate(`/slides/1`)
    }
    slide()
  }

  return (
    <header className="container flex">
      <Link to="/" className="btn image-holder" aria-label="the gallery slideshow">
        <img className="logo" src={logo} alt="" aria-hidden="true" />
      </Link>
      <button onClick={handleStart}
        className="btn uppercase fs-100 fw-bold  lighten-mid-grey letter-spacing">
        {!startSlide ? "Start slideshow" : "Stop slideshow"}
      </button>
    </header>
  )
}
export default Header