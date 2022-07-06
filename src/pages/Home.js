import styled from "styled-components";
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
  overflow-x: hidden;
`;

const Home = () => {
  return (
    <Wrapper>
      <NavBar />
      <FirstSection />
      <BackGround>
        <Introduction />
        <Illustration />
        <Letter />
      </BackGround>
    </Wrapper>
  );
};

export default Home;
