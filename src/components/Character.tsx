import { motion } from "framer-motion";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media ${(props) => props.theme.device.tablet} {
  }
  @media ${(props) => props.theme.device.mobile} {
    margin-bottom: 50px;
  }
`;

const MainImg = styled(motion.img)`
  width: 400px;
  height: auto;
  margin-right: 30px;
  @media ${(props) => props.theme.device.tablet} {
    width: 300px;
    height: auto;
    margin-right: 0px;
  }
  @media ${(props) => props.theme.device.mobile} {
    width: 145px;
    height: auto;
    margin-right: 0px;
  }
`;

const TextBox = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  h1 {
    margin-bottom: 30px;
    font-size: 45px;
  }
  h5 {
    font-size: 16px;
    font-weight: bold;
    line-height: 25px;
  }
  p {
    font-size: 15px;
    line-height: 25px;
  }
  .small_img {
    width: 100px;
    height: auto;
  }
  div {
    line-height: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    span {
      white-space: nowrap;
      font-size: 16px;
      color: #ababab;
      margin-right: 5px;
      margin-bottom: 15px;
    }
  }
  @media ${(props) => props.theme.device.tablet} {
    h1 {
      margin-bottom: 10px;
      font-size: 30px;
    }
    h5 {
      font-size: 15px;
    }
    p {
      font-size: 14px;
    }

    .small_img {
      width: 70px;
      height: auto;
    }
  }
  @media ${(props) => props.theme.device.mobile} {
    h1 {
      margin-bottom: 5px;
      font-size: 20px;
    }
    h5 {
      font-size: 11px;
    }
    p {
      line-height: 13px;
      margin-bottom: 5px;
      font-size: 11px;
    }
    .small_img {
      width: 50px;
      height: auto;
    }
    div {
      line-height: 25px;
      display: flex;
      justify-content: center;
      align-items: center;
      span {
        color: #ababab;
        font-size: 11px;
        margin-right: 4px;
        margin-bottom: 10px;
      }
    }
  }
`;

const Character = ({
  character,
  name,
  nickName,
  color,
  description,
  subImg,
  hash,
}:any) => {
  return (
    <Wrapper>
      <MainImg
        initial={{ x: -200, opacity: 0 }}
        animate={{
          x: [-200, 0],
          opacity: 1,
          transition: { duration: 0.5, delay: 0.5 },
        }}
        src={character}
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
        <h1 style={{ color: color }}>{name}</h1>
        <h5>{nickName}</h5>
        <p>
          {description[0]}
          <br />
          {description[1]}
        </p>
        <div>
          {hash.map((m:string) => (
            <span>#{m}</span>
          ))}
        </div>
        <div>
          {subImg.map((img:string, index:number) => (
            <img
              className="small_img"
              key={index}
              src={img}
              alt={index + "sub-img"}
            />
          ))}
        </div>
      </TextBox>
    </Wrapper>
  );
};

export default Character;
