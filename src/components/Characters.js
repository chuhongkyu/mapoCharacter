import { motion } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";

const env = process.env;
env.PUBLIC_URL = env.PUBLIC_URL || "";

const Wrapper = styled(motion.section)`
  width: 100%;
  height: 60vh;
  background-color: white;
  transform-origin: top;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ArrowBtn = styled.img`
  position: relative;
  z-index: 5;
`;

const Variants = {
  initial: {
    scaleY: 0,
  },
  animate: {
    scaleY: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const Characters = () => {
  const [index, setIndex] = useState(0);
  const onIncrease = () => {
    setIndex((prev) => prev + 1);
  };
  return (
    <Wrapper variants={Variants} initial="initial" animate="animate">
      <ArrowBtn
        src={env.PUBLIC_URL + "/assets/icons/LeftArrow.svg"}
        alt="left"
      />

      <ArrowBtn
        src={env.PUBLIC_URL + "/assets/icons/LeftArrow.svg"}
        alt="right"
      />
    </Wrapper>
  );
};

export default Characters;
