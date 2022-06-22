import styled from "styled-components";
import NavBar from "../components/NavBar";
import { Link } from "react-router-dom";

const env = process.env;
env.PUBLIC_URL = env.PUBLIC_URL || "";

const Wrapper = styled.section`
  width: 100%;
  height: 100vh;
  background-color: ${(props) => props.theme.navy};
  color: ${(props) => props.theme.white.light};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  div {
    width: 461px;
    height: 160px;
  }
  img {
    width: 40%;
  }
`;

const Btn = styled.span`
  padding: 10px 50px;
  border-radius: 20px;
  color: ${(props) => props.theme.white.light};
  background-color: ${(props) => props.theme.blue};
`;

const Enter = () => {
  return (
    <Wrapper>
      <NavBar />
      <MainContainer>
        <div>
          <p>메타마포 도시 마포둥둥섬에 오신 걸 환영합니다~</p>
        </div>
        <img src={env.PUBLIC_URL + "/assets/map.png"} alt="버디즈" />
      </MainContainer>
      <Link to="/home">
        <Btn>입장하기</Btn>
      </Link>
    </Wrapper>
  );
};

export default Enter;
