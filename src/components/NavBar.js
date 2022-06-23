import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Wrapper = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 0;
  width: 150px;
  height: 100vh;
  margin-top: 10px;
  z-index: 9;
`;

const Navigation = styled.div`
  height: 100vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 100px;
  }
`;

const LogoBtn = styled.span`
  width: 150px;
  height: 150px;
  padding: 0px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 100%;
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
  margin-bottom: 20px;
  white-space: nowrap;
  background-color: rgb(200, 200, 200);
  h1 {
    font-size: 23px;
  }
  p {
    font-size: 11px;
  }
  &:hover {
    transform: scale(1.2);
    transition: 0.5s;
    background-color: ${(props) => props.theme.blue};
  }
`;

const env = process.env;
env.PUBLIC_URL = env.PUBLIC_URL || "";

const NavBar = () => {
  return (
    <Wrapper>
      <Navigation>
        <Link to="/">
          <LogoBtn>
            <img
              src={env.PUBLIC_URL + "/assets/logos/Buddies_Title_00.png"}
              alt="로고"
            />
          </LogoBtn>
        </Link>

        <div>
          <Link to="/home">
            <NavBtn>
              <h1>ICON</h1>
              <p>버디즈 소개</p>
            </NavBtn>
          </Link>
          <Link to="/goods">
            <NavBtn>
              <h1>ICON</h1>
              <p>굿즈 소개</p>
            </NavBtn>
          </Link>
          <Link to="/letter">
            <NavBtn>
              <h1>ICON</h1>
              <p>버디레터 신청</p>
            </NavBtn>
          </Link>
        </div>
      </Navigation>
    </Wrapper>
  );
};

export default NavBar;
