import { motion } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";
import Characters from "../components/Characters";
import SubTitle from "../components/SubTitle";

const env = process.env;
env.PUBLIC_URL = env.PUBLIC_URL || "";

const Wrapper = styled.section`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  padding: 100px 0px;
  @media ${(props) => props.theme.device.tablet} {
    padding: 70px 0px;
  }
  @media ${(props) => props.theme.device.mobile} {
    padding: 30px 0px;
  }
`;

const ScrabBox = styled.div`
  margin-top: 30px;
  width: 1005px;
  background: #ffffff;
  border-radius: 60px 60px 15px 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  z-index: 4;
  border: 6px solid #7d613b;
  .scrab_header {
    position: absolute;
    z-index: 5;
    top: 0;
    width: 100%;
    background: #ffc143;
    border-radius: 55px 55px 0px 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
  }
  .scrab_footer {
    position: absolute;
    bottom: 0;
    width: 100%;
    background: #ffead2;
    border-radius: 5px 5px 15px 15px;
    padding: 15px;
  }
  h1 {
    font-weight: 700;
    font-size: 45px;
    line-height: 160%;
  }
  @media ${(props) => props.theme.device.tablet} {
    .buddies {
      width: 500px;
    }
  }
  @media ${(props) => props.theme.device.mobile} {
    .buddies {
      width: 300px;
    }
  }
`;

const LongBong = styled.img`
  position: absolute;
  bottom: -110px;
  z-index: 7;
`;

const ShortBong = styled.img`
  position: absolute;
  bottom: -110px;
  z-index: 7;
`;

const TextBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 50px;
  margin-bottom: 50px;
  font-weight: 700;
  font-size: 30px;
  line-height: 160%;
  @media ${(props) => props.theme.device.tablet} {
    font-size: 30px;
    line-height: 160%;
  }
  @media ${(props) => props.theme.device.mobile} {
    font-size: 20px;
    line-height: 150%;
  }
`;

const Btn = styled.span`
  width: 388px;
  height: 96px;
  font-size: 45px;
  font-weight: 700;
  line-height: 160%;
  border-radius: 50px;
  background-color: ${(props) => props.theme.yellow};
  border: 3px solid #150b05;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const Symbol = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .symbol_item {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 50px;
    flex-direction: column;
    width: 232px;
    height: 307px;
    border: 3px solid #ffc100;
    border-radius: 150px 150px 20px 20px;
    position: relative;
    &:last-child {
      margin-right: 0;
    }
    img {
    }
    .symbol_name {
      position: absolute;
      bottom: 0;
      margin-top: 10px;
      width: 100%;
      background: #ffc100;
      border-radius: 0px 0px 10px 10px;
      font-weight: 300;
      font-size: 24px;
      line-height: 160%;
      text-align: center;
    }
  }

  @media ${(props) => props.theme.device.tablet} {
  }
  @media ${(props) => props.theme.device.mobile} {
  }
`;

const MapBox = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  @media ${(props) => props.theme.device.tablet} {
  }
  @media ${(props) => props.theme.device.mobile} {
  }
`;

const Introduction = () => {
  const [open, setOpen] = useState(false);
  const onClick = () => {
    setOpen(!open);
  };
  return (
    <Wrapper>
      <SubTitle
        sub={"버디즈를 알아보자"}
        color={"#FA9600"}
        title={"마포버디즈 소개"}
      />
      <ScrabBox style={{ padding: "120px 0px" }}>
        <div className="scrab_header ">
          <h1>캐릭터 소개</h1>
        </div>
        <img
          className="buddies"
          src={env.PUBLIC_URL + "/assets/Buddies_Cha_01.png"}
          alt="캐릭터"
        />
        <TextBox>
          <h3>'마포 버디즈'는 (예비) '마포구 홍보대사'이자</h3>
          <h3>편지를 전하는 '동물 우체부'예요!</h3>
        </TextBox>
        {!open ? null : <Characters />}
        <Btn onClick={onClick}>상세보기</Btn>
        <div className="scrab_footer"></div>
        <LongBong
          style={{ left: 15, zIndex: 10 }}
          src={env.PUBLIC_URL + "/assets/pattern/bong1.png"}
          alt="bong1"
        />
        <ShortBong
          style={{ right: 15 }}
          src={env.PUBLIC_URL + "/assets/pattern/bong2.png"}
          alt="bong2"
        />
      </ScrabBox>

      <ScrabBox style={{ transform: "rotate(-0.86deg)", height: "788px" }}>
        <div className="scrab_header ">
          <h1>업무 소개</h1>
        </div>
        <MapBox src={env.PUBLIC_URL + "/assets/page2/map.png"} alt="Map" />
        <TextBox style={{ position: "absolute", bottom: 10 }}>
          <h3>버디즈의 주요 업무는 마포구 전역을 돌면서</h3>
          <h3>구민들에게 '편지를 전하기'입니다</h3>
        </TextBox>
        <div className="scrab_footer"></div>
        <LongBong
          style={{ right: 15 }}
          src={env.PUBLIC_URL + "/assets/pattern/bong1.png"}
          alt="bong1"
        />
        <ShortBong
          style={{ left: 15 }}
          src={env.PUBLIC_URL + "/assets/pattern/bong2.png"}
          alt="bong2"
        />
      </ScrabBox>

      <ScrabBox style={{ transform: "rotateZ(1deg)", height: "788px" }}>
        <div className="scrab_header ">
          <h1>버디 레터</h1>
        </div>
        <Symbol>
          <div className="symbol_item">
            <img
              src={env.PUBLIC_URL + "/assets/intro/Re-leaf.png"}
              alt="속식 단풍잎"
            />
            <div className="symbol_name">소식 단풍잎</div>
          </div>
          <div className="symbol_item">
            <img
              src={env.PUBLIC_URL + "/assets/intro/Re-hope.png"}
              alt="희망 결정체 "
            />
            <div className="symbol_name">희망 결정체</div>
          </div>
          <div className="symbol_item">
            <img
              src={env.PUBLIC_URL + "/assets/intro/Re-hope.png"}
              alt="캐릭터"
            />
            <div className="symbol_name">행운의 깃털</div>
          </div>
        </Symbol>
        <TextBox style={{ marginBottom: 0 }}>
          <h3>마포 버디즈가 전하는 편지들에는</h3>
          <h3>희망과 소식, 그리고 행운이 담겨있어요!</h3>
        </TextBox>
        <div className="scrab_footer"></div>
      </ScrabBox>
    </Wrapper>
  );
};

export default Introduction;
