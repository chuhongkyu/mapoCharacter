import styled from "styled-components";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Container = styled(motion.div)`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
  background-color: white;
`;

const Variant = {
  initial: {
    y: "100%",
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const Cunny = () => {
  const navigate = useNavigate();
  const onExit = () => {
    navigate("/");
  };
  return (
    <Container
      onClick={onExit}
      variants={Variant}
      animate="animate"
      initial="initial"
    >
      <h1>Cunny</h1>
    </Container>
  );
};

export default Cunny;
