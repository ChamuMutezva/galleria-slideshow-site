import "./sass/App.scss"
import logo from "./assets/shared/logo.svg"

function App() {
  return (
    <div className="App container bg-white">
      <header className="flex">
        <div className="image-holder">
          <img class="logo" src={logo} alt="" aria-hidden="true" />
        </div>
        <button className="btn uppercase fs-100 text-med-grey">
          Start slideshow
        </button>
      </header>
    </div>
  );
}

export default App;
