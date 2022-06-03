import styled from "styled-components";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import BuddiesLogo from "../components/BuddiesLogo";
import Character from "../components/Character";

const env = process.env;
env.PUBLIC_URL = env.PUBLIC_URL || "";

const Wrapper = styled(motion.div)`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
`;

const LandImg = styled(motion.img)`
  height: 100%;
`;

const Land = () => {
  const handlePlayer = useRef(null);
  const [logo, setLogo] = useState(false);
  const logoTime = () => setLogo(true);
  useEffect(() => {
    setTimeout(logoTime, 2000);
  }, []);
  return (
    <>
      {!logo ? (
        <BuddiesLogo />
      ) : (
        <Wrapper
          ref={handlePlayer}
          initial={{ y: 0 }}
          animate={{ y: [0, -10, 0] }}
          transition={{
            repeat: Infinity,
            duration: 2,
            type: "spring",
          }}
        >
          <LandImg
            src={env.PUBLIC_URL + "/assets/map_Field.png"}
            alt="캐릭터_map"
          />
          <LandImg
            initial={{ x: 0 }}
            animate={{ x: [0, -10, 0] }}
            transition={{
              repeat: Infinity,
              duration: 2,
              type: "spring",
            }}
            style={{ position: "absolute", zIndex: 2 }}
            src={env.PUBLIC_URL + "/assets/cloud.png"}
            alt="캐릭터 팀"
          />

          <Character
            drag
            dragConstraints={handlePlayer}
            name={"야옹"}
            img={`${env.PUBLIC_URL}/assets/characters/Buddies_Cha_Bred.M.png`}
          />
        </Wrapper>
      )}
    </>
  );
};

export default Land;
