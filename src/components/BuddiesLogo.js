import { motion } from "framer-motion";
import styled from "styled-components";

const env = process.env;
env.PUBLIC_URL = env.PUBLIC_URL || "";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const LogoImg = styled(motion.img)`
  height: 50%;
`;

const CharacterBox = styled(motion.div)`
  height: 200px;
  width: 600px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const CharacterVariants = {
  initial: {
    backgroundImage: `url("${env.PUBLIC_URL}/assets/Buddies_Cha_03.png")`,
    transition: { duration: 1 },
  },
  animate: {
    backgroundImage: `url("${env.PUBLIC_URL}/assets/Buddies_Cha_04.png")`,
    transition: { duration: 1 },
  },
  whileHover: {
    backgroundImage: `url("${env.PUBLIC_URL}/assets/Buddies_Cha_03.png")`,
    transition: { duration: 0.5 },
  },
};

const BuddiesLogo = () => {
  return (
    <Wrapper>
      <LogoImg
        initial={{ y: -400 }}
        animate={{ y: 0 }}
        transition={{
          duration: 1,
          type: "spring",
          bounce: 1,
        }}
        src={env.PUBLIC_URL + "/assets/logos/Buddies_Title_00.png"}
        alt="캐릭터 팀"
      />
      <CharacterBox
        variants={CharacterVariants}
        initial="initial"
        animate="animate"
        whileHover="whileHover"
      />
    </Wrapper>
  );
};

export default BuddiesLogo;
