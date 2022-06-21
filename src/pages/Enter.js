import styled from "styled-components";

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
    width: 30%;
  }
  img {
    width: 50%;
  }
`;

const Btn = styled.span`
  padding: 5px 15px;
  border-radius: 15px;
  color: ${(props) => props.theme.white.light};
  background-color: ${(props) => props.theme.blue};
`;

const Enter = () => {
  return (
    <Wrapper>
      <MainContainer>
        <div>
          <h1>Enter</h1>
        </div>
        <img src={env.PUBLIC_URL + "/assets/map.png"} alt="버디즈" />
      </MainContainer>
      <Btn>입장</Btn>
    </Wrapper>
  );
};

export default Enter;
