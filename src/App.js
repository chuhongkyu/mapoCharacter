import { createGlobalStyle } from "styled-components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Enter from "./pages/Enter";
import Goods from "./pages/Goods";
import Letter from "./pages/Letter";

const GlobalStyles = createGlobalStyle`
*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body{
  background-color: ${(prop) => prop.theme.bgColor};
}

a,ul,li{
  text-decoration: none;
  color: inherit;
}
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<Enter />} />
          <Route path="/home" element={<Home />} />
          <Route path="/goods" element={<Goods />} />
          <Route path="/letter" element={<Letter />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
