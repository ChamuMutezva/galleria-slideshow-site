import "./sass/App.scss"
import Header from "./layouts/Header";
import { DataProvider } from "./context/DataContext";

function App() {
  return (
    <div className="App container bg-white">
      <DataProvider>
        <Header />
      </DataProvider>
    </div>
  );
}

export default App;
