import { Link } from "react-router-dom"
import logo from "../assets/shared/logo.svg"

const Header = () => {
  return (
    <header className="flex">
      <Link to="/" className="image-holder">
        <img className="logo" src={logo} alt="" aria-hidden="true" />
      </Link>
      <button className="btn uppercase fs-100 fw-bold  lighten-mid-grey letter-spacing">
        Start slideshow
      </button>
    </header>
  )
}
export default Header