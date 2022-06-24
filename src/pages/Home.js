import styled from "styled-components";
import NavBar from "../components/NavBar";

const env = process.env;
env.PUBLIC_URL = env.PUBLIC_URL || "";

const Wrapper = styled.section`
  width: 100%;
  height: 500vh;
`;

const Header = styled.header`
  width: 100%;
  height: 10vh;
  background-color: ${(props) => props.theme.root_blue};
`;

const Home = () => {
  return (
    <Wrapper>
      <Header></Header>
      <NavBar />
    </Wrapper>
  );
};

export default Home;
