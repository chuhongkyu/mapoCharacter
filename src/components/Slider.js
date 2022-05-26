import styled from "styled-components";
import { motion } from "framer-motion";

const SlideContainer = styled(motion.div)`
  position: absolute;
  width: 50%;
  right: 0;
  background-color: white;
  height: 100vh;
  border-top-left-radius: 5%;
  border-bottom-left-radius: 5%;
  transform-origin: right center;
`;

const SliderVariant = {
  initial: {
    scaleX: 0.05,
  },
  hover: {
    scaleX: 1,
    position: "static",
    right: 0,
  },
  animate: {
    transition: {
      duration: 2,
    },
  },
};

const Slider = () => {
  return (
    <SlideContainer
      variants={SliderVariant}
      animate="animate"
      initial="initial"
      whileHover="hover"
    >
      <h1>라이언</h1>
    </SlideContainer>
  );
};

export default Slider;
