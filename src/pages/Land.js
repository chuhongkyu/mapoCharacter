import styled from "styled-components";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import BuddiesLogo from "../components/BuddiesLogo";
import Character from "../components/Character";
import { Route, Routes } from "react-router-dom";
import Bred from "./Bred";
import Bunny from "./Bunny";
import DongGeun from "./DongGeun";
import Cunny from "./Cunny";
import ContactUs from "../components/ContactUs";
import Navigation from "../components/Navigation";

const env = process.env;
env.PUBLIC_URL = env.PUBLIC_URL || "";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
`;

const Iland = styled(motion.div)`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 50%;
  }
`;

const MovingC = styled(motion.div)`
  position: absolute;
  width: 100px;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5;
  @media screen and (max-width: 768px) {
    width: 50px;
    height: 100px;
  }
`;

const LandImg = styled(motion.img)`
  height: 100%;
  -webkit-user-drag: none;
  user-select: none;
  @media screen and (max-width: 768px) {
    height: 70%;
  }
`;

const Land = () => {
  const handlePlayer = useRef(null);
  const [logo, setLogo] = useState(false);
  const logoTime = () => setLogo(true);

  useEffect(() => {
    setTimeout(logoTime, 2000);
  }, []);

  useEffect(() => {
    const titleElement = document.getElementsByTagName("title")[0];
    titleElement.innerHTML = `버디즈 홈`;
  }, []);

  return (
    <>
      {!logo ? (
        <BuddiesLogo />
      ) : (
        <Wrapper>
          <Iland
            ref={handlePlayer}
            initial={{ y: 0 }}
            animate={{ y: [0, -10, 0] }}
            transition={{
              repeat: Infinity,
              duration: 2,
              type: "spring",
            }}
          >
            <MovingC drag dragConstraints={handlePlayer} style={{ left: 400 }}>
              <Character
                show={"/bred"}
                name={"Bred"}
                img={`${env.PUBLIC_URL}/assets/characters/Buddies_Cha_Bred.M.png`}
              />
            </MovingC>

            <MovingC drag dragConstraints={handlePlayer} style={{ top: 20 }}>
              <Character
                show={"/banny"}
                name={"바니"}
                img={`${env.PUBLIC_URL}/assets/characters/Buddies_Cha_Bunny.png`}
              />
            </MovingC>

            <MovingC
              drag
              dragConstraints={handlePlayer}
              style={{ left: 750, bottom: 25 }}
            >
              <Character
                show={"/dongeun"}
                name={"동근"}
                img={`${env.PUBLIC_URL}/assets/characters/Buddies_Cha_DongGeun.png`}
              />
            </MovingC>

            <MovingC
              drag
              dragConstraints={handlePlayer}
              style={{ right: 320, bottom: 270 }}
            >
              <Character
                show={"/cunny"}
                name={"Mc_cunny"}
                img={`${env.PUBLIC_URL}/assets/characters/Buddies_Cha_Mc_cunny.png`}
              />
            </MovingC>

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
          </Iland>
          <Routes>
            <Route path="bred" element={<Bred />} />
            <Route path="banny" element={<Bunny />} />
            <Route path="dongeun" element={<DongGeun />} />
            <Route path="cunny" element={<Cunny />} />
            <Route path="letter" element={<ContactUs />} />
          </Routes>
          <Navigation />
        </Wrapper>
      )}
    </>
  );
};

export default Land;