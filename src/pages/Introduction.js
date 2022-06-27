import { useState } from "react";
import styled from "styled-components";
import Characters from "../components/Characters";
import Sub_Title from "../components/Sub_Title";

const env = process.env;
env.PUBLIC_URL = env.PUBLIC_URL || "";

const Wrapper = styled.section`
  width: 100%;
  height: 300vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  padding: 50px 0px;
`;

const Text_Box = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 50px;
  margin-bottom: 50px;
`;

const Btn = styled.span`
  width: 388px;
  height: 96px;
  font-size: 45px;
  font-weight: 700;
  line-height: 160%;
  border-radius: 50px;
  margin-top: 50px;
  background-color: ${(props) => props.theme.yellow};
  border: 3px solid #150b05;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Symbol = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
    flex-direction: column;
  }
  img {
    border-radius: 50%;
    background-color: ${(props) => props.theme.black};
    background-position: center center;
    background-size: cover;
  }
  span {
    margin-top: 10px;
    padding: 5px 10px;
    background-color: ${(props) => props.theme.black};
    color: white;
    border-radius: 25px;
  }
`;

const Introduction = () => {
  const [open, setOpen] = useState(false);
  const onClick = () => {
    setOpen(!open);
  };
  return (
    <Wrapper>
      <Sub_Title title={"마포 버디즈란?"} order={1} />
      <Text_Box>
        <h3>'마포 버디즈'는 (예비) '마포구 홍보대사'이자</h3>
        <h3>편지를 전하는 '동물 우체부'예요!</h3>
      </Text_Box>
      <img src={env.PUBLIC_URL + "/assets/Buddies_Cha_01.png"} alt="캐릭터" />
      {!open ? null : <Characters />}
      <Btn onClick={onClick}>상세보기</Btn>
      <Text_Box>
        <h3>버디즈의 주요 업무는 마포구 전역을 돌면서</h3>
        <h3>구민들에게 '편지를 전하기'입니다</h3>
      </Text_Box>
      <img src={env.PUBLIC_URL + "/assets/Buddies_Cha_01.png"} alt="캐릭터" />
      <Text_Box>
        <h3>마포 버디즈가 전하는 편지들에는</h3>
        <h3>희망과 소식, 그리고 행운이 담겨있어요!</h3>
      </Text_Box>
      <Symbol>
        <div>
          <img src={env.PUBLIC_URL + "/assets/intro/01.png"} alt="단" />
          <span>소식 단풍잎</span>
        </div>
        <div>
          <img src={env.PUBLIC_URL + "/assets/intro/dan.png"} alt="캐릭터" />
          <span>소식 단풍잎</span>
        </div>
        <div>
          <img src={env.PUBLIC_URL + "/assets/intro/dan.png"} alt="캐릭터" />
          <span>소식 단풍잎</span>
        </div>
      </Symbol>
    </Wrapper>
  );
};

export default Introduction;
