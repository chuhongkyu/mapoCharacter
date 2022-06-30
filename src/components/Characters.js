import { motion } from "framer-motion";
import { useEffect } from "react";
import { useRef, useState } from "react";
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

const ArrowBtn = styled.img`
  position: relative;
  z-index: 5;
  img {
    width: 20px;
  }
  @media ${(props) => props.theme.device.tablet} {
  }
  @media ${(props) => props.theme.device.mobile} {
    img {
      height: 50px;
    }
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
      <ArrowBtn
        style={{ marginLeft: 200 }}
        src={env.PUBLIC_URL + "/assets/icons/LeftArrow.svg"}
        alt="left"
        onClick={onDecrease}
      />
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
      <ArrowBtn
        style={{ marginRight: 200, transform: "rotateY(180deg)" }}
        src={env.PUBLIC_URL + "/assets/icons/LeftArrow.svg"}
        alt="right"
        onClick={onIncrease}
      />
    </Wrapper>
  );
};

export default Characters;
