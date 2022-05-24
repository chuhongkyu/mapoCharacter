import { useEffect, useState } from "react";
import Logo from "../Logo";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;
  position: relative;
`;

const Canvas = styled.canvas`
  width: 50%;
  height: 100vh;
  border: 1px solid black;
`;

const SlideContainer = styled.div`
  width: 50%;
  background-color: white;
  height: 100vh;
  border-radius: 5%;
  position: absolute;
  left: 99%;
  &:hover {
    right: 0;
    left: 50%;
  }
`;

function Home() {
  const [logo, setLogo] = useState(false);
  const logoTime = () => setLogo(true);
  useEffect(() => {
    setTimeout(logoTime, 5000);
  }, []);
  return (
    <>
      {!logo ? (
        <Logo />
      ) : (
        <Wrapper>
          <Canvas></Canvas>
          <SlideContainer></SlideContainer>
        </Wrapper>
      )}
    </>
  );
}

export default Home;
