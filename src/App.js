import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MovieList from "./Components/MovieList";
import MovieDetails from "./MovieDetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MovieList />} />

        <Route path="/watch/:id" element={<MovieDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
