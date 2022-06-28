import styled from "styled-components";

const env = process.env;
env.PUBLIC_URL = env.PUBLIC_URL || "";

const Wrapper = styled.section`
  width: 100%;
  height: 115vh;
`;

const Container = styled.div`
  width: 100%;
  height: 110vh;
  background-image: url("${env.PUBLIC_URL}/assets/page1/Bg.png");
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  position: relative;
`;

const Title = styled.div`
  width: 694px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 50px;
  span {
    padding: 5px 50px;
    font-weight: 300;
    font-size: 40px;
    line-height: 160%;
    background-color: ${(props) => props.theme.black};
    color: ${(props) => props.theme.white.light};
    border-radius: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  h1 {
    font-size: 65px;
    margin-bottom: 5px;
  }
`;

const TitleImg = styled.img`
  width: 694px;
  height: 183px;
`;

const MoveBtn = styled.div`
  position: relative;
  bottom: 30px;
  width: 338px;
  height: 86px;
  background-color: ${(props) => props.theme.black};
  color: ${(props) => props.theme.white.light};
  border-radius: 10px 10px 30px 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 30px;
  line-height: 160%;
  span {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    position: absolute;
    bottom: -20px;
    background-color: black;
    display: flex;
    justify-content: center;
    align-items: center;
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
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FirstSection = () => {
  const onClick = () => {
    window.scrollTo({ top: 1100, behavior: "smooth" });
  };
  return (
    <Wrapper>
      <Header>
        <img src={env.PUBLIC_URL + "/assets/icons/header.png"} alt="header" />
      </Header>
      <Container>
        <Title>
          <TitleImg
            src={env.PUBLIC_URL + "/assets/page1/title.png"}
            alt="title"
          />
          <span>
            <img
              style={{ width: 30, height: 25, marginRight: 10 }}
              src={env.PUBLIC_URL + "/assets/page1/Letter.png"}
              alt="편지"
            />
            희망과 소식을 전하는 우체부
            <img
              style={{ width: 30, height: 25, marginLeft: 10 }}
              src={env.PUBLIC_URL + "/assets/page1/Letter.png"}
              alt="편지"
            />
          </span>
        </Title>
        <MoveBtn onClick={onClick}>
          버디즈 보러가기
          <span>
            <img src={env.PUBLIC_URL + "/assets/icons/down.png"} alt="down" />
          </span>
        </MoveBtn>
        <Sns_Box>
          <img src={env.PUBLIC_URL + "/assets/icons/01.svg"} alt="facebook" />
          <img src={env.PUBLIC_URL + "/assets/icons/02.svg"} alt="카카오" />
          <img src={env.PUBLIC_URL + "/assets/icons/03.svg"} alt="insta" />
        </Sns_Box>
      </Container>
    </Wrapper>
  );
};

export default FirstSection;
