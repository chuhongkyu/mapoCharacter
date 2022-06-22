import styled from "styled-components";
import { motion } from "framer-motion";

const Wrapper = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 0;
  width: 150px;
  height: 100%;
  margin-top: 50px;
`;

const Navigation = styled.div`
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 50px;
  }
`;

const NavBtn = styled.span`
  border-radius: 50%;
  width: 100px;
  height: 100px;
  border: 2px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 10px;
  white-space: nowrap;
  h1 {
    font-size: 23px;
  }
  p {
    font-size: 11px;
  }
`;

const env = process.env;
env.PUBLIC_URL = env.PUBLIC_URL || "";

const NavBar = () => {
  return (
    <Wrapper>
      <Navigation>
        <NavBtn
          style={{
            backgroundColor: "rgb(50,50,50)",
            width: "122px",
            height: "122px",
          }}
        >
          <h1>LOGO</h1>
          <p>마포버디즈</p>
        </NavBtn>
        <div>
          <NavBtn style={{ backgroundColor: "rgb(200,200,200)" }}>
            <h1>ICON</h1>
            <p>버디즈 소개</p>
          </NavBtn>
          <NavBtn style={{ backgroundColor: "rgb(200,200,200)" }}>
            <h1>ICON</h1>
            <p>굿즈 소개</p>
          </NavBtn>
          <NavBtn style={{ backgroundColor: "rgb(200,200,200)" }}>
            <h1>ICON</h1>
            <p>버디레터 신청</p>
          </NavBtn>
        </div>
      </Navigation>
    </Wrapper>
  );
};

export default NavBar;
