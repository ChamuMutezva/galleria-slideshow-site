import "./sass/App.scss"
import Header from "./layouts/Header"
import Main from "./layouts/Main";
import { DataProvider } from "./context/DataContext"

function App() {
  return (
    <div className="App container bg-white">
      <DataProvider>
        <Header />
        <Main />
      </DataProvider>
    </div>
  );
}

export default App;
