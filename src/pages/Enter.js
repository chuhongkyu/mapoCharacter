import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Loading from "./Loading";

const env = process.env;
env.PUBLIC_URL = env.PUBLIC_URL || "";

const Wrapper = styled.section`
  width: 100%;
  height: 100vh;
  background-color: ${(props) => props.theme.root_blue};
  color: ${(props) => props.theme.white.light};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  z-index: 99;
`;

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50vh;
  div {
    width: 461px;
    height: 160px;
    font-size: 35px;
    font-weight: 600;
  }
`;

const Land = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 100%;
  }
`;

const Btn = styled.span`
  padding: 10px 50px;
  border-radius: 20px;
  color: ${(props) => props.theme.white.light};
  background: linear-gradient(100deg, white 50%, #000aff 50%);
  background-size: 220% 100%;
  background-position: right bottom;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px,
    rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px,
    rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;
  &:hover {
    background-position: left bottom;
    transition: 0.5s;
    color: black;
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

const Enter = () => {
  return (
    <Wrapper>
      <Loading />
      <MainContainer>
        <div>
          <p>
            메타마포 도시
            <br />
            마포둥둥섬에 오신 걸
            <br />
            환영합니다~
          </p>
        </div>
        <Land variants={Variant} initial="initial" animate="animate">
          <img src={env.PUBLIC_URL + "/assets/map.png"} alt="버디즈" />
        </Land>
      </MainContainer>
      <Link to="/home">
        <Btn>입장하기</Btn>
      </Link>
    </Wrapper>
  );
};

export default Enter;
