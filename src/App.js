import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MovieList from "./Components/MovieList";
import MovieLink from "./Components/MovieLink";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MovieList />} />

        <Route path="/watch/:id" element={<MovieLink />} />
      </Routes>
    </Router>
  );
}

export default App;
