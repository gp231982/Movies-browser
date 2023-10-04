import { GlobalStyle } from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import { MovieList } from "../../features/MovieList";

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MovieList />
      </ThemeProvider>
    </div>
  );
}

export default App;
