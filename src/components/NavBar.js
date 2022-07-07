import styled from "styled-components";
import { motion } from "framer-motion";

const env = process.env;
env.PUBLIC_URL = env.PUBLIC_URL || "";

const Wrapper = styled(motion.div)`
  margin-top: 50px;
  position: fixed;
  left: 0;
  width: 180px;
  height: 100%;
  z-index: 99;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  color: ${(props) => props.theme.white.light};
  @media ${(props) => props.theme.device.tablet} {
    width: 140px;
  }
  @media ${(props) => props.theme.device.mobile} {
    width: 80px;
  }
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
    left: -5px;
    z-index: 99;
    transform: rotateZ(10deg);
  }
  @media ${(props) => props.theme.device.tablet} {
    width: 80px;
    height: 230px;
    img {
      width: 40px;
      top: -25px;
      left: -5px;
    }
  }
  @media ${(props) => props.theme.device.mobile} {
    width: 50px;
    height: 140px;
    img {
      width: 30px;
      top: -10px;
      left: 0px;
    }
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
  user-select: none;
  @media ${(props) => props.theme.device.tablet} {
    width: 80px;
    height: 60px;
    font-size: 13px;
    font-weight: 600;
  }
  @media ${(props) => props.theme.device.mobile} {
    width: 70px;
    height: 50px;
    font-size: 9px;
  }
`;

const ArrowBtn = styled.span`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.black};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  user-select: none;
  &:hover {
    transform: translateY(-5px);
  }
  @media ${(props) => props.theme.device.tablet} {
    width: 100px;
    height: 100px;
    img {
      width: 40px;
    }
  }
  @media ${(props) => props.theme.device.mobile} {
    width: 50px;
    height: 50px;
    img {
      width: 20px;
    }
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
    window.scrollTo({ top: 1100, behavior: "smooth" });
  };
  const onMiddleOfMiddle = () => {
    window.scrollTo({ top: 4000, behavior: "smooth" });
  };
  const onBottom = () => {
    window.scrollTo({ top: 7400, behavior: "smooth" });
  };

  return (
    <Wrapper variants={Variants} initial="initial" animate="animate">
      <NavBarContainer>
        <img src={env.PUBLIC_URL + "/assets/page1/Letter.png"} alt="편지" />
        <img
          style={{
            top: -10,
            left: -13,
            transform: "rotateZ(-27deg)",
            zIndex: 97,
          }}
          src={env.PUBLIC_URL + "/assets/page1/Letter.png"}
          alt="편지"
        />
        <NavBtn onClick={onMiddle}>마포버디즈</NavBtn>
        <NavBtn onClick={onMiddleOfMiddle}>하루일과 </NavBtn>
        <NavBtn onClick={onBottom}>버디레터 </NavBtn>
      </NavBarContainer>
      <ArrowBtn onClick={onTop}>
        <img src={env.PUBLIC_URL + "/assets/icons/Arrow.svg"} alt="top" />
      </ArrowBtn>
    </Wrapper>
  );
};

export default NavBar;
