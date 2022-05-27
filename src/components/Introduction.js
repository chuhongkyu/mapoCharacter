import styled from "styled-components";
import { motion } from "framer-motion";

const IntroPanel = styled(motion.div)`
  width: 100%;
  background-color: white;
  height: 70%;
`;

function Introduction() {
  return (
    <IntroPanel
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: 900 }}
      transition={{ duration: 2 }}
    >
      <h1>Introduction</h1>
    </IntroPanel>
  );
}

export default Introduction;
