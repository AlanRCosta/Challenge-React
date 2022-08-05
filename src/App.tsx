import { BrowserRouter } from "react-router-dom";

import Header from "./components/Header";
import GlobalStyle from "./styles/GlobalStyle";
import Routes from "./routes";

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Header />
      <GlobalStyle />
      <Routes />
    </BrowserRouter>
  );
}

export default App;
