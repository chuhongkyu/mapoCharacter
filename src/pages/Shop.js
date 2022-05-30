import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { mapoCharacterData } from "../utils/mapoCharacterData";

const ShopContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 10;
`;

const ShopModal = styled(motion.div)`
  width: 90%;
  height: 90%;
  background-color: rgba(255, 255, 255, 0.5);
  padding: 10px;
  z-index: 11;
`;

const ShopVariants = {
  initial: {
    scale: 0,
  },
  animate: {
    scale: 1,
  },
  transition: {
    duration: 2,
    type: "spring",
  },
  exit: {
    scale: 0,
  },
};

function Shop() {
  const navigate = useNavigate();
  const onBackHomeClick = () => {
    navigate("/");
  };
  return (
    <ShopContainer>
      <ShopModal
        variants={ShopVariants}
        initial="initial"
        animate="animate"
        transition="transition"
        onClick={onBackHomeClick}
      >
        <h1>Shop</h1>
      </ShopModal>
    </ShopContainer>
  );
}

export default Shop;
