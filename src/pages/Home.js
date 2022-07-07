import styled from "styled-components";
import CreatePattern from "../components/CreatePattern";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import FirstSection from "./FirstSection";
import Illustration from "./Illustration";
import Introduction from "./Introduction";
import Letter from "./Letter";

const Wrapper = styled.section`
  width: 100%;
  overflow-x: hidden;
`;

const BackGround = styled.section`
  width: 100%;
  background: ${(prop) => prop.theme.bgColor};
  overflow: hidden;
  position: relative;
`;

const BIG_PATTERN = "/assets/pattern/1.png";
const SMALL_PATTERN = "/assets/pattern/2.png";

const Home = () => {
  const makePattern = () => {
    const pattern = [];
    for (let i = 0; i <= 50; i++) {
      pattern.push(
        <CreatePattern
          key={i}
          alt={i}
          icon={i % 2 === 0 ? BIG_PATTERN : SMALL_PATTERN}
        />
      );
    }
    return pattern;
  };
  return (
    <Wrapper>
      <NavBar />
      <FirstSection />
      <BackGround>
        {makePattern()}
        <Introduction />
        <Illustration />
        <Letter />
        <Footer />
      </BackGround>
    </Wrapper>
  );
};

export default Home;
