import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import { GlobalStyle } from "./GlobalStyle";
import { Routes, Route, Navigate } from "react-router-dom";

import { MovieList } from "../../features/MovieList";
import MoviePeople from "../../features/MovieList/MoviePeople";
import Header from "../../common/Header";

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header />
        <Routes>
          <Route path="/movies" element={<MovieList />} />
          <Route path="/people" element={<MoviePeople />} />
          <Route path="/" element={<Navigate to="/movies" />} />
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
