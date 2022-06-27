import styled from "styled-components";

const env = process.env;
env.PUBLIC_URL = env.PUBLIC_URL || "";

const Wrapper = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TextBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Character = ({
  character,
  name,
  nickname,
  hashs,
  description,
  subImg,
}) => {
  return (
    <Wrapper>
      <img src={env.PUBLIC_URL + { character }} alt={name} />
      <TextBox>
        <h4>{nickname}</h4>
        <h1>{name}</h1>
        {hashs.map((hash, index) => (
          <span key={index}>#{hash}</span>
        ))}
        <p>{description}</p>
        {subImg.map((img, index) => (
          <img key={index} src={env.PUBLIC_URL + { img }} alt={index} />
        ))}
      </TextBox>
    </Wrapper>
  );
};

export default Character;
