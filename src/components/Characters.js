import { motion } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";
import { bred_Data } from "../utils/mapoCharacterData";
import Character from "./Character";

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
  overflow: hidden;
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
      <Character
        character={bred_Data.character}
        name={bred_Data.name}
        nickname={bred_Data.nickname}
        hashs={bred_Data.hashs}
        description={bred_Data.description}
        subImg={bred_Data.subImg}
      />
      <ArrowBtn
        src={env.PUBLIC_URL + "/assets/icons/LeftArrow.svg"}
        alt="right"
      />
    </Wrapper>
  );
};

export default Characters;
