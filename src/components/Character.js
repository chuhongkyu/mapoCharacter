import { motion } from "framer-motion";
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

const MainImg = styled(motion.img)`
  width: 400px;
  height: auto;
  margin-right: 30px;
  @media ${(props) => props.theme.device.tablet} {
  }
  @media ${(props) => props.theme.device.mobile} {
    width: 200px;
    height: auto;
    margin-right: 0px;
  }
`;

const TextBox = styled(motion.div)`
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

const Character = ({ character, name, nickname, description, subImg }) => {
  return (
    <Wrapper>
      <MainImg
        initial={{ x: -200, opacity: 0 }}
        animate={{
          x: [-200, 0],
          opacity: 1,
          transition: { duration: 0.5, delay: 0.5 },
        }}
        src={env.PUBLIC_URL + character}
        alt={name}
      />
      <TextBox
        initial={{ x: 200, opacity: 0 }}
        animate={{
          x: [200, 0],
          opacity: 1,
          transition: { duration: 0.5, delay: 0.5 },
        }}
      >
        <h4>{nickname}</h4>
        <h1>{name}</h1>
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
