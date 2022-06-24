import styled from "styled-components";
import NavBar from "../components/NavBar";

const env = process.env;
env.PUBLIC_URL = env.PUBLIC_URL || "";

const Wrapper = styled.section`
  width: 100%;
  height: 500vh;
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url("${env.PUBLIC_URL}/assets/page1/00.png");
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
    padding: 10px 50px;
    background-color: ${(props) => props.theme.root_blue};
    border-radius: 25px;
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
    padding: 10px 50px;
    background-color: ${(props) => props.theme.root_blue};
    border-radius: 25px;
  }
`;

const Sns_Box = styled.div`
  width: 300px;
  height: 100px;
  position: absolute;
  z-index: 2;
  bottom: 50px;
  right: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 50px;
  }
`;

const Header = styled.header`
  width: 100%;
  height: 10vh;
  background-color: ${(props) => props.theme.root_blue};
`;

const Home = () => {
  return (
    <Wrapper>
      <NavBar />
      <Container>
        <Header></Header>
        <Title>
          <h1>마포 버디즈</h1>
          <span>희망과 소식을 전하는 우체부</span>
        </Title>
        <MoveBtn href="#Character">
          <span>캐릭터 보러가기</span>
        </MoveBtn>
        <Sns_Box>
          <img
            src={env.PUBLIC_URL + "/assets/icons/facebook.svg"}
            alt="facebook"
          />
          <img
            src={env.PUBLIC_URL + "/assets/icons/insta.svg"}
            alt="facebook"
          />
          <img
            src={env.PUBLIC_URL + "/assets/icons/insta.svg"}
            alt="facebook"
          />
        </Sns_Box>
      </Container>
    </Wrapper>
  );
};

export default Home;
