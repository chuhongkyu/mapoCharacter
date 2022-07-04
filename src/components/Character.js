import styled from "styled-components";

const env = process.env;
env.PUBLIC_URL = env.PUBLIC_URL || "";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media ${(props) => props.theme.device.tablet} {
  }
  @media ${(props) => props.theme.device.mobile} {
  }
`;

const Main_img = styled.img`
  width: 200px;
  margin-right: 100px;
  @media ${(props) => props.theme.device.tablet} {
    margin-right: 70px;
  }
  @media ${(props) => props.theme.device.mobile} {
    width: 100px;
    margin-right: 30px;
  }
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
    white-space: nowrap;
  }
  p {
    line-height: 25px;
    margin-bottom: 20px;
  }
  .small_img {
    width: 100px;
    height: auto;
  }
  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media ${(props) => props.theme.device.tablet} {
    .small_img {
      width: 70px;
      height: auto;
    }
  }
  @media ${(props) => props.theme.device.mobile} {
    h4 {
      font-size: 12px;
      margin-bottom: 10px;
    }
    h1 {
      margin-bottom: 10px;
      font-size: 20px;
    }
    span {
      font-size: 12px;
      padding: 5px 10px;
      margin-bottom: 5px;
    }
    p {
      line-height: 13px;
      margin-bottom: 15px;
      font-size: 12px;
    }
    .small_img {
      width: 50px;
      height: auto;
    }
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
            <img
              className="small_img"
              key={index}
              src={env.PUBLIC_URL + img}
              alt={index}
            />
          ))}
        </div>
      </TextBox>
    </Wrapper>
  );
};

export default Character;
