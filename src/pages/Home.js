import styled from "styled-components";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import FirstSection from "./FirstSection";
import Illustration from "./Illustration";
import Introduction from "./Introduction";
import Letter from "./Letter";

const Wrapper = styled.section`
  width: 100%;
`;

const Home = () => {
  return (
    <Wrapper>
      <NavBar />
      <FirstSection />
      <Introduction />
      <Illustration />
      <Letter />
      <Footer />
    </Wrapper>
  );
};

export default Home;
