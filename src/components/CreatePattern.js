import { useEffect } from "react";
import styled from "styled-components";

const env = process.env;
env.PUBLIC_URL = env.PUBLIC_URL || "";

const Pattern = styled.img`
  width: 20px;
  position: absolute;
  z-index: 5;
`;

const CreatePattern = () => {
  const randomPosition = () => {
    Math.floor(Math.random() * 100);
  };
  const position = randomPosition() + "%";
  useEffect(() => {
    randomPosition();
  }, []);
  return (
    <>
      <Pattern
        style={{ marginLeft: position }}
        src={env.PUBLIC_URL + "/assets/pattern/1.png"}
        alt="1"
      />
    </>
  );
};

export default CreatePattern;
