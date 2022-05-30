import { motion } from "framer-motion";
import styled from "styled-components";

const AboutContainer = styled(motion.div)`
  width: 80%;
  height: 100vh;
  position: absolute;
  z-index: 10;
  background-color: white;
  overflow-y: scroll;
  transform-origin: bottom;
  padding: 100px 100px 0px 100px;
  img {
    width: 100%;
  }
`;

const About = () => {
  return (
    <>
      <AboutContainer
        initial={{ scaleY: 0, opacity: 0 }}
        animate={{ scaleY: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <img
          src="https://www.busanbank.co.kr/resource/img/etc/bki/img_char_2019.png"
          alt="character"
        />
      </AboutContainer>
    </>
  );
};

export default About;
