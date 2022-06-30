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
  height: 60vh;
  transform-origin: top;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  @media ${(props) => props.theme.device.tablet} {
  }
  @media ${(props) => props.theme.device.mobile} {
  }
`;

const Modal = styled.div`
  width: 100%;
  display: flex;
`;

const ArrowBtn = styled.div`
  position: relative;
  z-index: 5;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ArrowSvg = styled(motion.svg)``;

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
          style={{ marginLeft: 200 }}
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
      <ArrowBtn>
        <ArrowSvg
          style={{ marginRight: 200, transform: "rotateZ(180deg)" }}
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
      </ArrowBtn>
    </Wrapper>
  );
};

export default Characters;
