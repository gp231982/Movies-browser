import React from "react";
import { Routes, Route, Navigate, HashRouter } from "react-router-dom";
import { MovieList } from "../../features/MovieList";
import MoviePeople from "../../features/MoviePeople";
import Header from "../../common/Header";
import MovieDetails from "../../features/MovieDetails";
import { PersonDetails } from "../../features/PersonDetails";

function App() {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/person/:id" element={<PersonDetails />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/movies" element={<MovieList />} />
        <Route path="/people" element={<MoviePeople />} />
        <Route path="/" element={<Navigate to="/movies" />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
