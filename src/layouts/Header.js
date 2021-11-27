import { useContext } from "react"
import { Link } from "react-router-dom"
import logo from "../assets/shared/logo.svg"
import { DataContext } from "../context/DataContext"

const Header = () => {
 
  const { slide, startSlide } = useContext(DataContext)
 
  function handleStart() {   
    slide()     
  }

  return (
    <header className="container flex">
      <Link to="/" className="image-holder">
        <img className="logo" src={logo} alt="" aria-hidden="true" />
      </Link>
      <button onClick={handleStart}
        className="btn uppercase fs-100 fw-bold  lighten-mid-grey letter-spacing">
          { !startSlide ? "Start slideshow" : "Stop slideshow"}      
      </button>
    </header>
  )
}
export default Header