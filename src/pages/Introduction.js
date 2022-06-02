import styled from "styled-components";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const env = process.env;
env.PUBLIC_URL = env.PUBLIC_URL || "";

const IntroPanel = styled(motion.div)`
  width: 100%;
  background-color: white;
  height: 100%;
  position: absolute;
  bottom: 0;
  z-index: 11;
  overflow-y: hidden;
  padding: 50px;
`;

const IntroBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    margin-right: 100px;
  }
`;

function Introduction() {
  const navigate = useNavigate();
  const onHomeClick = () => {
    navigate("/");
  };
  return (
    <IntroPanel
      onClick={onHomeClick}
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "100%" }}
      transition={{ duration: 1 }}
    >
      <h1>Introduction</h1>
      <IntroBox>
        <img src={env.PUBLIC_URL + "/assets/라이언.png"} />
        <div>
          <p>
            한국의 캐릭터 강자인 만큼, 카카오는 다양한 산업군에서 컬래버레이션이
            이루어집니다. 지난 2월 카카오프렌즈와 콜라보한 클럭의 한정판 미니
            마사지기는 완판 후 2차 앙코르 판매가 진행되기도 했고, 일동제약은
            2018년 카카오프렌즈 캐릭터를 이용한 젤리를 출시한 후 최근 비타민C,
            반창고, 진통제를 내놓았습니다. 다양한 소비재에 이용되는
            카카오프렌즈의 모습이 인상적인데요.
          </p>
        </div>
      </IntroBox>
    </IntroPanel>
  );
}

export default Introduction;
