import { Link } from "react-router-dom";
import styled from "styled-components";

const Player = styled.div`
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
    img {
      width: 100%;
      height: 100%;
      -webkit-user-drag: none;
    }
  }
`;

const Character = ({ name, img, show }) => {
  return (
    <>
      <Player>
        <Link to={show}>
          <img src={img} alt={name} />
        </Link>
      </Player>
    </>
  );
};

export default Character;
