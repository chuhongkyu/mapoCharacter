import styled from "styled-components";
import Sub_Title from "../components/Sub_Title";

const env = process.env;
env.PUBLIC_URL = env.PUBLIC_URL || "";

const Wrapper = styled.section`
  width: 100%;
  height: 200vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
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
  padding: 0.5rem 5rem;
  font-size: 45px;
  background-color: black;
  color: white;
  border-radius: 40px;
  margin-top: 50px;
`;

const Introduction = () => {
  return (
    <Wrapper>
      <Sub_Title title={"마포 버디즈란?"} order={1} />
      <Text_Box>
        <h3>'마포 버디즈'는 (예비) '마포구 홍보대사'이자</h3>
        <h3>편지를 전하는 '동물 우체부'예요!</h3>
      </Text_Box>
      <img src={env.PUBLIC_URL + "/assets/Buddies_Cha_01.png"} alt="캐릭터" />
      <Btn>상세보기</Btn>
    </Wrapper>
  );
};

export default Introduction;
