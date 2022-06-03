import styled from "styled-components";
import { motion } from "framer-motion";

const Container = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 100vh;
  z-index: 10;
  background-color: white;
`;

const Variant = {
  initial: {
    y: "100%",
  },
  animate: {
    y: 0,
    transition: {
      duration: 2,
    },
  },
};

const Bunny = () => {
  return (
    <Container variants={Variant} animate="animate" initial="initial">
      <h1>Bunny</h1>
    </Container>
  );
};

export default Bunny;
