import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./sass/App.scss"
import Header from "./layouts/Header"
import Main from "./pages/Main";
import Slides from './pages/Slides';
import { DataProvider } from "./context/DataContext"

function App() {
  return (
    <div className="App bg-white">
      <DataProvider>

        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="slides/:id" element={<Slides />} />
          </Routes>
        </BrowserRouter>

      </DataProvider>


    </div >
  );
}

export default App;
