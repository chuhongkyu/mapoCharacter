import { motion } from "framer-motion";
import styled from "styled-components";

const Player = styled(motion.div)`
  width: 100px;
  height: 150px;
  position: absolute;
  z-index: 5;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  img {
    width: 100%;
    height: 100%;
  }
`;

const Character = ({ name, img }) => {
  return (
    <>
      <Player>
        <h1>{name}</h1>
        <img src={img} alt={name} />
      </Player>
    </>
  );
};

export default Character;
