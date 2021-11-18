import logo from "../assets/shared/logo.svg"

const Header = () => {  

  return (
    <header className="flex">
      <div className="image-holder">
        <img className="logo" src={logo} alt="" aria-hidden="true" />
      </div>
      <button className="btn uppercase fs-100 fw-bold text-med-grey">
        Start slideshow
      </button>
    </header>
  )
}
export default Header