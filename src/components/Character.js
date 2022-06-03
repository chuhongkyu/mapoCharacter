import { motion } from "framer-motion";
import styled from "styled-components";

const Player = styled(motion.div)`
  width: 100px;
  height: 150px;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: absolute;
  user-select: none;
  img {
    width: 100%;
    height: 100%;
    -webkit-user-drag: none;
  }
`;

const Character = ({ name, img }) => {
  return (
    <>
      <Player>
        <h1>{name}</h1>
        <img src={img} alt={name} disabled />
      </Player>
    </>
  );
};

export default Character;
