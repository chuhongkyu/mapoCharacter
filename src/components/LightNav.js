import { Link, Route, Routes, useMatch, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Shop from "../pages/Shop";
import Introduction from "./Introduction";

const env = process.env;
env.PUBLIC_URL = env.PUBLIC_URL || "";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: absolute;
  left: 0;
  top: 0;
  height: 100vh;
  background-color: rgba(255, 255, 255, 0.5);
  z-index: 10;
  overflow-y: hidden;
  h5 {
    width: 100%;
    margin-bottom: 15px;
    padding-left: 40px;
    color: gray;
    margin-top: 10px;
  }
  ul {
    width: 100%;
    height: 100vh;
  }
`;

const Logo = styled.img`
  width: 248px;
  height: 80px;
  margin: 5px 10px 5px 10px;
`;

const Li = styled.li`
  width: 100%;
  font-size: 20px;
  font-weight: 500;
  list-style: none;
  padding: 10px 40px;
  &:hover {
    background-color: gray;
    color: ${(props) => (props.isActive ? "white" : "black")};
  }
`;

const LightNav = () => {
  const navigate = useNavigate();
  const introMatch = useMatch("/introduction");
  const shopMatch = useMatch("/shop");
  return (
    <>
      <Container>
        <Logo src={env.PUBLIC_URL + "/assets/logo.svg"} />
        <h5>마포 캐릭터 소개</h5>
        <ul>
          <Li>
            <Link to={"/"}>About</Link>
          </Li>
          <Li isActive={introMatch !== null}>
            <Link to={"/introduction"}>Introduction</Link>
          </Li>
          <Li isActive={shopMatch !== null}>
            <Link to={"/shop"}>Shop</Link>
          </Li>
        </ul>
        <Routes>
          <Route path="introduction" element={<Introduction />} />
        </Routes>
      </Container>
      <Routes>
        <Route path="shop" element={<Shop />} />
      </Routes>
    </>
  );
};

export default LightNav;
