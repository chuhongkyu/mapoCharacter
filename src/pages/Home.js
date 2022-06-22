import styled from "styled-components";
import NavBar from "../components/NavBar";

const env = process.env;
env.PUBLIC_URL = env.PUBLIC_URL || "";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Btn = styled.span`
  padding: 10px 50px;
  border-radius: 20px;
  color: ${(props) => props.theme.white.light};
  background-color: ${(props) => props.theme.blue};
`;

const Contents = styled.div`
  position: absolute;
  bottom: 50px;
  right: 100px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  flex-direction: column;
  img {
    width: 300px;
  }
`;

const Icons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5px;
  span {
    margin-right: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  img {
    width: 50px;
    height: 50px;
  }
`;

const Home = () => {
  return (
    <Wrapper>
      <NavBar />
      <Btn>버디즈 만나기</Btn>
      <Contents>
        <img src={env.PUBLIC_URL + "/assets/Buddies_Cha_03.png"} alt="버디즈" />
        <Icons>
          <span>
            <img
              src={env.PUBLIC_URL + "/assets/icons/facebook.svg"}
              alt="facebook"
            />
          </span>
          <span>
            <img
              src={env.PUBLIC_URL + "/assets/icons/insta.svg"}
              alt="facebook"
            />
          </span>
        </Icons>
      </Contents>
    </Wrapper>
  );
};

export default Home;
