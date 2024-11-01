import styled, { keyframes } from "styled-components";

const Anim = keyframes`
0%{
  transform: rotateZ(20deg) translateY(0);
}
50%{
  transform: rotateZ(20deg) translateY(-5px);
}
100%{
  transform: rotateZ(20deg) translateY(0);
}
`;

const Pattern = styled.img`
  width: 40px;
  height: auto;
  position: absolute;
  z-index: 0;
  display: flex;
  animation: ${Anim} 4s ease-in-out infinite;
  transform: rotateZ(20deg);
  transition: 0.5s;
  user-select: none;
`;

const CreatePattern = ({ alt, icon }:{alt: string , icon: string }) => {
  const randomX = Math.floor(Math.random() * 90);
  const randomY = Math.floor(Math.random() * 180);
  const positionX = randomX + "%";
  const positionY = randomY + "%";
  return (
    <>
      <Pattern
        style={{
          marginLeft: positionX,
          marginTop: positionY,
        }}
        src={icon}
        alt={alt}
      />
    </>
  );
};

export default CreatePattern;
