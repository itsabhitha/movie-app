import "./css/App.css";
import Favorites from "./pages/Favourites.jsx";
import Home from "./pages/Home.jsx";
import { Routes, Route } from "react-router-dom";
import { MovieProvider } from "./contexts/MovieContext";
import NavBar from "./components/NavBar";

function App() {
  return (
    <MovieProvider>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favourites" element={<Favorites />} />
        </Routes>
      </main>
    </MovieProvider>
  );
}

export default App;