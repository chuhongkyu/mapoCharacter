import { Suspense, useEffect, useState } from "react";
import Logo from "../Logo";
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import { ContactShadows, Environment, OrbitControls } from "@react-three/drei";
import Model from "../Model";
import { motion } from "framer-motion";
import LightNav from "../components/LightNav";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;
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
          <LightNav />
          <Canvas
            transition={{ transition: { duration: 2 } }}
            camera={{ fov: 10, position: [0, 100, 500] }}
          >
            <ambientLight intensity={0.4} />
            <spotLight
              intensity={0.1}
              angle={0.1}
              penumbra={1}
              position={[0, 15, 10]}
              castShadow
            />
            <Suspense fallback={null}>
              <Model />
              <Environment preset={"sunset"} />
              <ContactShadows />
            </Suspense>
            <OrbitControls
              minPolarAngle={Math.PI / 2}
              maxPolarAngle={Math.PI / 2}
              enableZoom={false}
              enablePan={false}
            />
          </Canvas>
        </Wrapper>
      )}
    </>
  );
}

export default Home;
