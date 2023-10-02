import { ThemeProvider } from 'styled-components';
import { HashRouter } from 'react-router-dom';
import { GlobalStyles } from './GlobalStyles';
import { theme } from './theme';
import { Pagination } from './common/Pagination';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <HashRouter>
        <GlobalStyles />
          <Pagination />
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;