import styled from "styled-components";
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
`;

const Home = () => {
  return (
    <Wrapper>
      <NavBar />
      <FirstSection />
      <Introduction />
      <BackGround>
        <Illustration />
        <Letter />
        <Footer />
      </BackGround>
    </Wrapper>
  );
};

export default Home;
