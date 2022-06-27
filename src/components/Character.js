import styled from "styled-components";

const env = process.env;
env.PUBLIC_URL = env.PUBLIC_URL || "";

const Wrapper = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Main_img = styled.img`
  width: 256px;
  margin-right: 50px;
`;

const TextBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  h4 {
    margin-bottom: 10px;
  }
  h1 {
    margin-bottom: 10px;
    font-size: 25px;
  }
  span {
    padding: 5px 10px;
    margin-bottom: 5px;
  }
  p {
    line-height: 25px;
    margin-bottom: 20px;
  }
  img {
    width: 100px;
  }
  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
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
      <Main_img src={env.PUBLIC_URL + character} alt={name} />
      <TextBox>
        <h4>{nickname}</h4>
        <h1>{name}</h1>
        <div>
          {hashs.map((hash, index) => (
            <span key={index}>#{hash}</span>
          ))}
        </div>
        <p>
          {description[0]}
          <br />
          {description[1]}
          <br />
          {description[2]}
        </p>
        <div>
          {subImg.map((img, index) => (
            <img key={index} src={env.PUBLIC_URL + img} alt={index} />
          ))}
        </div>
      </TextBox>
    </Wrapper>
  );
};

export default Character;
