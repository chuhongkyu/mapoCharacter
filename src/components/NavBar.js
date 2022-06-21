import styled from "styled-components";
import { motion } from "framer-motion";

const Wrapper = styled(motion.div)`
  position: fixed;
  left: 10px;
  top: 10px;
  width: 150px;
  height: 100%;
`;

const Navigation = styled.div`
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 50px;
  }
`;

const NavBtn = styled.span`
  border-radius: 50%;
  width: 100px;
  height: 100px;
  padding: 60px;
  border: 2px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 10px;
  white-space: nowrap;
  h1 {
  }
  p {
  }
`;

const env = process.env;
env.PUBLIC_URL = env.PUBLIC_URL || "";

const NavBar = () => {
  return (
    <Wrapper>
      <Navigation>
        <NavBtn style={{ backgroundColor: "rgb(50,50,50)" }}>
          <h1>LOGO</h1>
          <p>마포버디즈</p>
        </NavBtn>
        <div>
          <NavBtn style={{ backgroundColor: "rgb(200,200,200)" }}>
            <h1>LOGO</h1>
            <p>마포버디즈</p>
          </NavBtn>
          <NavBtn style={{ backgroundColor: "rgb(200,200,200)" }}>
            <h1>LOGO</h1>
            <p>마포버디즈</p>
          </NavBtn>
          <NavBtn style={{ backgroundColor: "rgb(200,200,200)" }}>
            <h1>LOGO</h1>
            <p>마포버디즈</p>
          </NavBtn>
        </div>
      </Navigation>
    </Wrapper>
  );
};

export default NavBar;
