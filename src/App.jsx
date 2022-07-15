import "./App.scss";
import ImageList from "./components/ImageList";
import Navigation from "./components/Navigation";
import NotFound from "./components/NotFound";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<ImageList />} />
          <Route path="/pictures" element={<ImageList />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  )
}

export default App;
