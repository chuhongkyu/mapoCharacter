import styled from "styled-components";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const env = process.env;
env.PUBLIC_URL = env.PUBLIC_URL || "";

const Wrapper = styled(motion.div)`
  position: fixed;
  left: 0;
  bottom: 50px;
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
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  img {
    position: absolute;
    top: -25px;
    left: -10px;
    z-index: 99;
    transform: rotateZ(10deg);
  }
`;

const NavBtn = styled.span`
  width: 100px;
  height: 70px;
  font-weight: 700;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  white-space: nowrap;
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
  &:hover {
    transform: translateY(-5px);
  }
`;

const Variants = {
  initial: {
    x: -100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const NavBar = () => {
  const onTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const onMiddle = () => {
    window.scrollTo({ top: 1200, behavior: "smooth" });
  };
  const onBottom = () => {
    window.scrollTo({ top: 9999, behavior: "smooth" });
  };

  return (
    <Wrapper variants={Variants} initial="initial" animate="animate">
      <NavBarContainer>
        <img src={env.PUBLIC_URL + "/assets/page1/Letter.png"} alt="편지" />
        <img
          style={{
            top: -10,
            left: -15,
            transform: "rotateZ(-30deg)",
            zIndex: 97,
          }}
          src={env.PUBLIC_URL + "/assets/page1/Letter.png"}
          alt="편지"
        />
        <NavBtn onClick={onTop}>마포 버디즈 소개</NavBtn>
        <NavBtn onClick={onMiddle}>버디즈의 하루</NavBtn>
        <NavBtn onClick={onBottom}>버디레터 신청</NavBtn>
      </NavBarContainer>
      <ArrowBtn onClick={onTop}>
        <img src={env.PUBLIC_URL + "/assets/icons/Arrow.svg"} alt="top" />
      </ArrowBtn>
    </Wrapper>
  );
};

export default NavBar;
