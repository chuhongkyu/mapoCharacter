import { motion } from "framer-motion";
import { Link } from "react-router-dom";
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
  a {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  img {
    width: 100%;
    height: 100%;
    -webkit-user-drag: none;
  }
`;

const IdStyle = styled.h3`
  color: black;
  font-size: 20px;
  font-weight: 700;
  background-color: white;
`;

const Character = ({ name, img, show }) => {
  return (
    <>
      <Player>
        <Link to={show}>
          <IdStyle>{name}</IdStyle>
        </Link>

        <img src={img} alt={name} />
      </Player>
    </>
  );
};

export default Character;
