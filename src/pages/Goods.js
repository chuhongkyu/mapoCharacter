import styled from "styled-components";
import NavBar from "../components/NavBar";

const env = process.env;
env.PUBLIC_URL = env.PUBLIC_URL || "";

const Wrapper = styled.section`
  width: 100%;
  height: 100vh;
  background-color: ${(props) => props.theme.navy};
  color: ${(props) => props.theme.white.light};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Goods = () => {
  return (
    <Wrapper>
      <NavBar />
    </Wrapper>
  );
};

export default Goods;
