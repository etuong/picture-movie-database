import "./App.scss";
import Home from "./components/Home";
import ImageList from "./components/ImageList";
import Navigation from "./components/Navigation";
import MovieList from "./components/MovieList";
import NotFound from "./components/NotFound";
import Movie from "./components/Movie";
import { HashRouter, Route, Routes } from "react-router-dom";

const App = () => (
  <HashRouter>
    <main className="app">
      <Navigation />
      <div className="noise" />
      <div className="overlay" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pictures" element={<ImageList />} />
        <Route path="/movies" element={<MovieList />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/movies/:id" element={<Movie />} />
      </Routes>
    </main>
  </HashRouter>
);

export default App;

