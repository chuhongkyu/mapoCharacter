import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const env = process.env;
env.PUBLIC_URL = env.PUBLIC_URL || "";

const Wrapper = styled(motion.div)`
  position: fixed;
  left: 0;
  bottom: 20px;
  width: 150px;
  height: 70vh;
  margin-top: 10px;
  z-index: 99;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  color: ${(props) => props.theme.white.light};
`;

const NavBarContainer = styled.div`
  width: 100px;
  height: 250px;
  border-radius: 50px;
  background-color: ${(props) => props.theme.black};
  border: 4px solid gray;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  img {
    position: absolute;
    top: -40px;
    right: 40px;
    z-index: 99;
  }
`;

const NavBtn = styled.span`
  width: 100px;
  height: 70px;
  border-bottom: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ArrowBtn = styled.span`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.black};
  font-size: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NavBar = () => {
  return (
    <Wrapper>
      <NavBarContainer>
        <img src={env.PUBLIC_URL + "/assets/page1/02.png"} alt="편지" />
        <img
          style={{
            top: -30,
            right: 35,
            transform: "rotateZ(-30deg)",
            zIndex: 97,
          }}
          src={env.PUBLIC_URL + "/assets/page1/02.png"}
          alt="편지"
        />
        <NavBtn>버디즈 소개</NavBtn>
        <NavBtn>버디즈 소개</NavBtn>
        <NavBtn style={{ borderBottom: "none" }}>버디즈 소개</NavBtn>
      </NavBarContainer>
      <ArrowBtn>^</ArrowBtn>
    </Wrapper>
  );
};

export default NavBar;
