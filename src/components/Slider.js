import styled from "styled-components";
import { motion } from "framer-motion";

const SlideContainer = styled(motion.div)`
  position: absolute;
  width: 15%;
  height: 100vh;
  left: 0;
  background-color: white;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  img {
    width: 90%;
    margin-top: 10px;
  }
`;

const NavBtn = styled.span`
  width: 100%;
  height: 50px;
  border-bottom: 5px solid #0079ff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
`;

const env = process.env;
env.PUBLIC_URL = env.PUBLIC_URL || "";

const Slider = () => {
  return (
    <SlideContainer>
      <img
        src={env.PUBLIC_URL + "/assets/logos/Buddies_Title_00.png"}
        alt="버디즈_로고"
      />
      <NavBtn>캐릭터</NavBtn>
      <NavBtn>굿즈</NavBtn>
      <NavBtn></NavBtn>
    </SlideContainer>
  );
};

export default Slider;
