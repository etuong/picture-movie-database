import "./App.scss";
import Home from "./components/Home";
import ImageList from "./components/ImageList";
import Navigation from "./components/Navigation";
import MovieList from "./components/MovieList";
import NotFound from "./components/NotFound";
import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <React.Fragment>
      <HashRouter>
        <Navigation />
        <div className="noise"></div>
        <div className="overlay"></div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pictures" element={<ImageList />} />
          <Route path="/movies" element={<MovieList />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </React.Fragment>
  )
}

export default App;
