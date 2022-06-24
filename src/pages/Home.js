import styled from "styled-components";
import NavBar from "../components/NavBar";
import FirstSection from "./FirstSection";
import Letter from "./Letter";

const Wrapper = styled.section`
  width: 100%;
  height: 500vh;
`;

const Home = () => {
  return (
    <Wrapper>
      <NavBar />
      <FirstSection />
      <Letter />
    </Wrapper>
  );
};

export default Home;
