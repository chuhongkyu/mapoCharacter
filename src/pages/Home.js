import { motion } from "framer-motion";
import styled from "styled-components";
import NavBar from "../components/NavBar";

const env = process.env;
env.PUBLIC_URL = env.PUBLIC_URL || "";

const Wrapper = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50vh;
`;

const TextBox = styled.div`
  color: ${(props) => props.theme.black};
  font-size: 25px;
  font-weight: 800;
  span {
    font-size: 26px;
    color: ${(props) => props.theme.blue};
  }
`;

const Land = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
  img {
    width: 100%;
  }
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

const Variant = {
  initial: {
    y: 0,
  },
  animate: {
    y: [0, 5, 0],
    transition: {
      duration: 2,
      Infinity,
      repeat: Infinity,
    },
  },
};

const Home = () => {
  return (
    <Wrapper>
      <NavBar />
      <MainContainer>
        <TextBox>
          코로나 19이후 나타난
          <br /> 비대면의 시대, <br />
          <span>연결의 중요성</span>을 느끼다.
        </TextBox>
        <Land variants={Variant} initial="initial" animate="animate">
          <img src={env.PUBLIC_URL + "/assets/map.png"} alt="버디즈" />
        </Land>
      </MainContainer>
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
