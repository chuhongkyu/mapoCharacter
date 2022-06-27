import styled from "styled-components";

const env = process.env;
env.PUBLIC_URL = env.PUBLIC_URL || "";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url("${env.PUBLIC_URL}/assets/page1/Bg.png");
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  position: relative;
  h1 {
    font-size: 55px;
    font-weight: 800;
  }
`;

const Title = styled.div`
  width: 500px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  span {
    padding: 15px 60px;
    background-color: ${(props) => props.theme.black};
    color: ${(props) => props.theme.white.light};
    border-radius: 25px;
    display: flex;
    img {
      width: 20px;
      margin-right: 10px;
      margin-left: 10px;
    }
  }
  h1 {
    font-size: 65px;
    margin-bottom: 5px;
  }
`;

const MoveBtn = styled.a`
  position: absolute;
  bottom: 100px;
  span {
    padding: 15px 50px;
    background-color: ${(props) => props.theme.black};
    color: ${(props) => props.theme.white.light};
    border-radius: 25px;
  }
`;

const Sns_Box = styled.div`
  position: absolute;
  z-index: 2;
  bottom: 50px;
  right: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 30px;
    background-color: black;
    padding: 5px;
    border-radius: 11px;
    margin-left: 5px;
  }
`;

const Header = styled.header`
  width: 100%;
  height: 5vh;
  background-color: ${(props) => props.theme.black};
`;

const FirstSection = () => {
  return (
    <Container>
      <Header></Header>
      <Title>
        <h1>마포 버디즈</h1>
        <span>
          <img src={env.PUBLIC_URL + "/assets/page1/02.png"} alt="편지" />
          희망과 소식을 전하는 우체부
          <img src={env.PUBLIC_URL + "/assets/page1/02.png"} alt="편지" />
        </span>
      </Title>
      <MoveBtn href="#Character">
        <span>캐릭터 보러가기</span>
      </MoveBtn>
      <Sns_Box>
        <img src={env.PUBLIC_URL + "/assets/icons/01.svg"} alt="facebook" />
        <img src={env.PUBLIC_URL + "/assets/icons/02.svg"} alt="카카오" />
        <img src={env.PUBLIC_URL + "/assets/icons/03.svg"} alt="insta" />
      </Sns_Box>
    </Container>
  );
};

export default FirstSection;
