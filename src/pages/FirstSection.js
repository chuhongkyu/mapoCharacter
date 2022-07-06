import styled from "styled-components";

const env = process.env;
env.PUBLIC_URL = env.PUBLIC_URL || "";

const Wrapper = styled.section`
  width: 100%;
  height: 100vh;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-image: url("${env.PUBLIC_URL}/assets/page1/bg.jpg");
  background-size: cover;
  background-position: center top;
  display: flex;
  justify-content: center;
  position: relative;
  @media ${(props) => props.theme.device.tablet} {
  }
  @media ${(props) => props.theme.device.mobile} {
  }
`;

const MoveBtn = styled.div`
  position: absolute;
  bottom: 15px;
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
      <Container>
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
