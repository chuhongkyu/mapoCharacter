import styled from "styled-components";

const env = process.env;
env.PUBLIC_URL = env.PUBLIC_URL || "";

const Wrapper = styled.section`
  width: 100%;
  height: 100%;
`;

const Header = styled.header`
  width: 100%;
  padding: 10px;
  background-color: ${(props) => props.theme.black};
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 182px;
    height: 31.45px;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 95vh;
  background-image: url("${env.PUBLIC_URL}/assets/page1/Bg.png");
  background-size: cover;
  background-position: center bottom;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  position: relative;
  @media ${(props) => props.theme.device.tablet} {
    height: 70%;
  }
  @media ${(props) => props.theme.device.mobile} {
    height: 50%;
  }
`;

const Title = styled.div`
  width: 594px;
  height: 350px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  margin-top: 30px;
  span {
    padding: 5px 40px;
    font-weight: 300;
    font-size: 30px;
    line-height: 160%;
    background-color: ${(props) => props.theme.black};
    color: ${(props) => props.theme.white.light};
    border-radius: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    white-space: nowrap;
    h2 {
      margin: 0 20px;
    }
  }
  @media ${(props) => props.theme.device.tablet} {
    span {
      padding: 5px 30px;
      font-weight: 300;
      font-size: 25px;
      line-height: 160%;
    }
  }
  @media ${(props) => props.theme.device.mobile} {
    span {
      padding: 5px 25px;
      font-weight: 300;
      font-size: 15px;
      line-height: 160%;
    }
  }
`;

const TitleImg = styled.img`
  width: 554px;
  @media ${(props) => props.theme.device.tablet} {
    width: 400px;
  }
  @media ${(props) => props.theme.device.mobile} {
    width: 300px;
  }
`;

const MoveBtn = styled.div`
  position: relative;
  bottom: 60px;
  width: 258px;
  height: 76px;
  background-color: ${(props) => props.theme.black};
  color: ${(props) => props.theme.white.light};
  border-radius: 10px 10px 30px 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 25px;
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
  &:hover {
    transform: translateY(-5px);
  }
  @media ${(props) => props.theme.device.tablet} {
    width: 200px;
    height: 60px;
    font-size: 24px;
    span {
      width: 40px;
      height: 40px;
      img {
        width: 15px;
      }
    }
  }
  @media ${(props) => props.theme.device.mobile} {
    width: 200px;
    height: 55px;
    font-size: 20px;
    span {
      width: 30px;
      height: 30px;
      img {
        width: 10px;
      }
    }
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
    width: 50px;
    padding: 5px;
    margin-left: 5px;
  }
  @media ${(props) => props.theme.device.tablet} {
  }
  @media ${(props) => props.theme.device.mobile} {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    img {
      width: 40px;
    }
  }
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
              style={{ width: 32, height: 25 }}
              src={env.PUBLIC_URL + "/assets/page1/Letter.png"}
              alt="편지"
            />
            <h2>희망과 소식을 전하는 우체부</h2>
            <img
              style={{ width: 32, height: 25 }}
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
          <a target="blank_" href="https://ko-kr.facebook.com/mapoguoffice">
            <img
              src={env.PUBLIC_URL + "/assets/icons/icon-f.png"}
              alt="facebook"
            />
          </a>
          <a target="blank_" href="https://pf.kakao.com/_xfjqgj">
            <img
              src={env.PUBLIC_URL + "/assets/icons/icon-k.png"}
              alt="카카오"
            />
          </a>
          <a
            target="blank_"
            href="https://www.instagram.com/accounts/login/?next=/mapogu_official/"
          >
            <img
              src={env.PUBLIC_URL + "/assets/icons/icon-i.png"}
              alt="insta"
            />
          </a>
        </Sns_Box>
      </Container>
    </Wrapper>
  );
};

export default FirstSection;
