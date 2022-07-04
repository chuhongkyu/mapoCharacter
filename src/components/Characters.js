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
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  @media ${(props) => props.theme.device.tablet} {
  }
  @media ${(props) => props.theme.device.mobile} {
    position: absolute;
    bottom: -50px;
    left: 40%;
  }
`;

const ArrowSvg = styled(motion.svg)`
  width: 50px;
  @media ${(props) => props.theme.device.tablet} {
    width: 40px;
  }
  @media ${(props) => props.theme.device.mobile} {
    width: 20px;
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
        <ArrowSvg
          onClick={onDecrease}
          width="82"
          height="148"
          viewBox="0 0 82 148"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          whileHover={{ stroke: "RGB(48, 48, 48)" }}
          stroke="rgb(0,0,0)"
          strokeWidth="15"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <motion.path d="M74 140L8.00001 74L74 8" />
        </ArrowSvg>
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
      <RightArrowBtn>
        <ArrowSvg
          onClick={onIncrease}
          width="82"
          height="148"
          viewBox="0 0 82 148"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          whileHover={{ stroke: "RGB(48, 48, 48)" }}
          stroke="rgb(0,0,0)"
          strokeWidth="15"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <motion.path d="M74 140L8.00001 74L74 8" />
        </ArrowSvg>
      </RightArrowBtn>
    </Wrapper>
  );
};

export default Characters;
