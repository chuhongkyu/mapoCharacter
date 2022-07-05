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
  height: auto;
  padding: 60px 250px;
  transform-origin: top;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  position: relative;
  @media ${(props) => props.theme.device.tablet} {
    padding: 60px 150px;
  }
  @media ${(props) => props.theme.device.mobile} {
    padding: 60px 0px;
  }
`;

const Modal = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ArrowBtn = styled.div`
  width: 73px;
  height: 73px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e6e6e6;
  cursor: pointer;
  img {
    width: 12px;
    height: 21px;
  }
  @media ${(props) => props.theme.device.tablet} {
  }
  @media ${(props) => props.theme.device.mobile} {
    position: absolute;
    bottom: -50px;
    right: 60%;
  }
`;

const RightArrowBtn = styled(ArrowBtn)`
  transform: rotateZ(180deg);
  @media ${(props) => props.theme.device.mobile} {
    position: absolute;
    bottom: -50px;
    left: 60%;
  }
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
      <ArrowBtn>
        <img src={env.PUBLIC_URL + "/assets/icons/Arrow.svg"} alt="left" />
      </ArrowBtn>

      <Modal>
        {Buddies_data.map((intro) =>
          index === intro.id ? (
            <Character
              key={intro.id}
              character={intro.character}
              name={intro.name}
              nickname={intro.nickname}
              hashs={intro.hashs}
              description={intro.description}
              subImg={intro.subImg}
            />
          ) : null
        )}
      </Modal>
      <RightArrowBtn></RightArrowBtn>
    </Wrapper>
  );
};

export default Characters;
