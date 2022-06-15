import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const env = process.env;
env.PUBLIC_URL = env.PUBLIC_URL || "";

const Container = styled(motion.div)`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-y: scroll;
`;

const PaddingContainer = styled.div`
  width: 100%;
  height: 100vh;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const TitleContainer = styled.div`
  width: 100%;
  height: 836px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Introduction = styled.div`
  width: 70%;
  height: 836px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
`;

const Run = keyframes`
to {
    background-position: -2943px 0;
  }
`;

const TurnCharacter = styled.div`
  top: 0;
  left: 0;
  width: 588.6px;
  height: 836px;
  background: url(${env.PUBLIC_URL}/assets/turn/BredM_turn.png) no-repeat;
  animation: ${Run} 1s infinite steps(5);
  transform: scale(0.5);
`;

const LineCharacter = styled.div`
  width: 100%;
  height: 836px;
  background: url(${env.PUBLIC_URL}/assets/turn/Bred_turn_line.png);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

const Variant = {
  initial: {
    y: "100%",
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const Bred = () => {
  const navigate = useNavigate();
  const onExit = () => {
    navigate("/");
  };
  return (
    <Container
      onClick={onExit}
      variants={Variant}
      animate="animate"
      initial="initial"
    >
      <PaddingContainer>
        <h1>Bred</h1>
        <TitleContainer>
          <TurnCharacter></TurnCharacter>
          <Introduction>
            <h1>캐릭터란 무엇인가?</h1>
            <p>마포구의 새로운 마스코트</p>
            <p>
              청년 생각 <span>과학</span>
            </p>
            <p>청년들의 창의력</p>
          </Introduction>
        </TitleContainer>

        <LineCharacter></LineCharacter>
      </PaddingContainer>
    </Container>
  );
};

export default Bred;
