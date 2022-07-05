import { useEffect, useState } from "react";
import styled from "styled-components";
import SubTitle from "../components/SubTitle";
import { motion } from "framer-motion";

const env = process.env;
env.PUBLIC_URL = env.PUBLIC_URL || "";

const Wrapper = styled.section`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  padding: 200px 0px;
  position: relative;
  @media ${(props) => props.theme.device.tablet} {
    padding: 100px 0px;
  }
  @media ${(props) => props.theme.device.mobile} {
    padding: 70px 0px;
  }
`;

const TextBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 50px;
  margin-bottom: 50px;
  font-weight: 700;
  font-size: 36px;
  line-height: 140%;
  @media ${(props) => props.theme.device.tablet} {
    font-size: 30px;
    line-height: 160%;
  }
  @media ${(props) => props.theme.device.mobile} {
    font-size: 20px;
    line-height: 150%;
  }
`;

const IlluBox = styled.div`
  position: relative;
  margin-bottom: 50px;
  @media ${(props) => props.theme.device.tablet} {
  }
  @media ${(props) => props.theme.device.mobile} {
    margin-bottom: 30px;
  }
`;

const MainImg = styled.div`
  width: 992px;
  height: 550px;
  background-color: white;
  border: 2px solid black;
  @media ${(props) => props.theme.device.tablet} {
  }
  @media ${(props) => props.theme.device.mobile} {
    width: 400px;
    height: 250px;
  }
`;

const Title = styled.img`
  position: absolute;
  z-index: 2;
  width: 248px;
  height: 114px;
  @media ${(props) => props.theme.device.tablet} {
  }
  @media ${(props) => props.theme.device.mobile} {
    width: 100px;
    height: auto;
    margin-top: 25px;
  }
`;

const Character = styled.img`
  position: absolute;
  width: 200px;
  @media ${(props) => props.theme.device.tablet} {
  }
  @media ${(props) => props.theme.device.mobile} {
    width: 100px;
    height: auto;
  }
`;

const Moon = styled(motion.div)`
  width: 100px;
  height: 100px;
  position: absolute;
  background-color: white;
  border-radius: 50%;
`;

const Illustration = () => {
  const [scrollY, setScrollY] = useState(0);
  const [positionX, setXPosition] = useState(-700);
  const [positionY, setYPosition] = useState(0);
  const listener = () => {
    setScrollY(window.pageYOffset);
  };
  useEffect(() => {
    window.addEventListener("scroll", listener);
    return () => {
      window.removeEventListener("scroll", listener);
    };
  });
  useEffect(() => {
    if (scrollY <= 3220) {
      setYPosition(0);
      setXPosition(-700);
    }
    if (scrollY >= 3390) {
      setYPosition(300);
      setXPosition(100);
      console.log("달");
    }
    if (scrollY >= 3900) {
      setYPosition(800);
      setXPosition(600);
      console.log("반달");
    }
    if (scrollY >= 4497) {
      setYPosition(1350);
      setXPosition(700);
      console.log("초승달");
    }
    if (scrollY >= 5050) {
      setYPosition(1750);
      setXPosition(600);
      console.log("반달");
    }
    if (scrollY >= 5620) {
      setYPosition(2300);
      setXPosition(0);
      console.log("달");
    }
    if (scrollY >= 5900) {
      setYPosition(2800);
      setXPosition(-700);
    } else {
      console.log("헷");
    }
  }, [scrollY]);
  return (
    <Wrapper>
      <Moon
        initial={{ y: 0, x: -700 }}
        animate={{
          y: positionY,
          x: positionX,
          // y: [0, 1000, 2000, 3000],
          // x: [-700, 500, 700, 500, -700],
          transition: { duration: 1 },
        }}
      >
        {scrollY}
      </Moon>
      <SubTitle
        sub={"버디즈의 업무는?"}
        color={"#FA9600"}
        title={"버디즈의 하루"}
      />
      <TextBox>
        <h3>
          이번에는 마포버디즈의
          <br />
          하루일과를 소개해드릴게요!
        </h3>
      </TextBox>
      <IlluBox>
        <Title
          style={{ top: -50, left: -50 }}
          src={env.PUBLIC_URL + "/assets/page2/이미지_출근준비.png"}
          alt="알림"
        />
        <MainImg></MainImg>
        <Character
          style={{ bottom: -40, left: -130 }}
          src={env.PUBLIC_URL + "/assets/sub_img/MC-A.png"}
          alt="캐릭터"
        />
      </IlluBox>
      <IlluBox>
        <Title
          style={{ top: -50, right: -50 }}
          src={env.PUBLIC_URL + "/assets/page2/이미지_점심.png"}
          alt="알림"
        />
        <MainImg style={{ transform: "rotateZ(-3deg)" }}></MainImg>
        <Character
          style={{ right: -130, bottom: 0 }}
          src={env.PUBLIC_URL + "/assets/sub_img/BY-A.png"}
          alt="캐릭터"
        />
      </IlluBox>
      <IlluBox>
        <Title
          style={{ top: -50, left: -50 }}
          src={env.PUBLIC_URL + "/assets/page2/이미지_오후근무.png"}
          alt="알림"
        />
        <MainImg style={{ transform: "rotateZ(3deg)" }}></MainImg>
        <Character
          style={{ bottom: -20, left: -130 }}
          src={env.PUBLIC_URL + "/assets/sub_img/DG-A2.png"}
          alt="캐릭터"
        />
      </IlluBox>
      <IlluBox>
        <Title
          style={{ top: -50, right: -50 }}
          src={env.PUBLIC_URL + "/assets/page2/이미지_퇴근.png"}
          alt="알림"
        />
        <MainImg style={{ transform: "rotateZ(-3deg)" }}></MainImg>
        <Character
          style={{ right: -130, bottom: -5 }}
          src={env.PUBLIC_URL + "/assets/sub_img/BM-A.png"}
          alt="캐릭터"
        />
      </IlluBox>
    </Wrapper>
  );
};

export default Illustration;
