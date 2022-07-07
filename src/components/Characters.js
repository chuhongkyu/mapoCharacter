import { motion } from "framer-motion";
import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import { Buddies_data } from "../utils/mapoCharacterData";
import Character from "./Character";

const env = process.env;
env.PUBLIC_URL = env.PUBLIC_URL || "";

const Wrapper = styled(motion.section)`
  width: 100%;
  height: 500px;
  padding: 0px 50px;
  transform-origin: top;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  position: relative;
  overflow-y: hidden;
  @media ${(props) => props.theme.device.tablet} {
  }
  @media ${(props) => props.theme.device.mobile} {
    height: 300px;
    padding: 10px 20px;
  }
`;

const Modal = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ArrowBtn = styled(motion.div)`
  width: 73px;
  height: 64px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e6e6e6;
  user-select: none;
  cursor: pointer;
  img {
    width: 12px;
    height: 21px;
  }
  @media ${(props) => props.theme.device.tablet} {
  }
  @media ${(props) => props.theme.device.mobile} {
    img {
      width: 10px;
      height: 14px;
    }
    width: 43px;
    height: 43px;
    position: absolute;
    bottom: 20px;
    right: 55%;
  }
`;

const RightArrowBtn = styled(ArrowBtn)`
  transform: rotateZ(180deg);
  user-select: none;
  @media ${(props) => props.theme.device.mobile} {
    position: absolute;
    bottom: 20px;
    left: 55%;
  }
`;

const Variants = {
  initial: {
    scaleY: 0,
    opacity: 0,
  },
  animate: {
    scaleY: 1,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const Characters = () => {
  const [index, setIndex] = useState(0);
  const onIncrease = () => {
    if (index >= Buddies_data.length - 1) {
      setIndex(0);
    } else {
      setIndex((prev) => prev + 1);
    }
  };
  const onDecrease = () => {
    if (index <= 0) {
      setIndex(Buddies_data.length - 1);
    } else {
      setIndex((prev) => prev - 1);
    }
  };
  useEffect(() => {
    console.log("길이:" + Buddies_data.length);
    console.log("인덱스:" + index);
  }, [index]);
  return (
    <Wrapper variants={Variants} initial="initial" animate="animate">
      <ArrowBtn
        onClick={onIncrease}
        whileHover={{
          backgroundColor: "#FFC143",
          transition: { duration: 0.5 },
        }}
      >
        <img src={env.PUBLIC_URL + "/assets/icons/LeftArrow.svg"} alt="left" />
      </ArrowBtn>

      <Modal>
        {Buddies_data.map((intro) =>
          index === intro.id ? (
            <Character
              key={intro.id}
              character={intro.character}
              name={intro.name}
              description={intro.description}
              subImg={intro.subImg}
            />
          ) : null
        )}
      </Modal>

      <RightArrowBtn
        onClick={onDecrease}
        whileHover={{
          backgroundColor: "#FFC143",
          transition: { duration: 0.5 },
        }}
      >
        <img src={env.PUBLIC_URL + "/assets/icons/LeftArrow.svg"} alt="right" />
      </RightArrowBtn>
    </Wrapper>
  );
};

export default Characters;
