import { motion } from "framer-motion";
import styled from "styled-components";

const Cloud = styled(motion.img)`
  position: absolute;
  z-index: -1;
`;

const Variant = {
  initial: {
    y: 0,
  },
  animate: {
    y: [0, 5, 0],
    transition: {
      duration: 2,
      Infinity,
      repeat: Infinity,
    },
  },
};

const env = process.env;
env.PUBLIC_URL = env.PUBLIC_URL || "";

const Loading = () => {
  return (
    <>
      <Cloud
        variants={Variant}
        initial="initial"
        animate="animate"
        src={env.PUBLIC_URL + "/assets/cloud.png"}
        alt="구름"
      />
    </>
  );
};

export default Loading;
