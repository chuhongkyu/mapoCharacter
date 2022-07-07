import { createGlobalStyle } from "styled-components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

const env = process.env;
env.PUBLIC_URL = env.PUBLIC_URL || "";

const FontUrl = `${env.PUBLIC_URL}/assets/fonts/`;

const GlobalStyles = createGlobalStyle`
@font-face {
  font-family: "Maple_story";
  src: url(${FontUrl}Maple_story_Bold.ttf) format("truetype");
  font-weight: bold;
  font-style: normal;
}

@font-face {
  font-family: "Maple_story";
  src: url(${FontUrl}Maple_story_Light.ttf) format("truetype");
  font-weight: normal;
  font-style: normal;
}

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
  width: 100%;
	line-height: 1;
  font-family: "Maple_story";
  overflow-x: hidden;
  position: relative;
}
h1{
  font-weight: bold;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
a,ul,li{
  text-decoration: none;
  color: inherit;
}
::-moz-selection {
  background: ${(prop) => prop.theme.yellow};
  color: ${(prop) => prop.theme.white.light};
}

::selection {
  background: ${(prop) => prop.theme.yellow};
   color: ${(prop) => prop.theme.white.light};
}
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
