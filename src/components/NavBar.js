import styled from "styled-components";
import { motion } from "framer-motion";

const Wrapper = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 0;
  width: 150px;
  height: 100%;
`;

const Navigation = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`;

const env = process.env;
env.PUBLIC_URL = env.PUBLIC_URL || "";

const NavBar = () => {
  return (
    <Wrapper>
      <Navigation>
        <top>ddd</top>
        <div>
          <p>saf</p>
          <p>afs</p>
        </div>
      </Navigation>
    </Wrapper>
  );
};

export default NavBar;
