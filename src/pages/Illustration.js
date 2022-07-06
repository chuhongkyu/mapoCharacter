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

const Panel = styled.span`
  text-align: center;
  padding: 5px 60px;
  font-weight: 300;
  font-size: 32px;
  line-height: 160%;
  border-radius: 31px;
  background-color: #cd782a;
  color: white;
  margin-bottom: 50px;
`;

const IlluBox = styled.div`
  position: relative;
  background: #ffffff;
  border: 6px solid #7d613b;
  border-radius: 10px;
  display: flex;
  padding: 20px 30px;
  @media ${(props) => props.theme.device.tablet} {
  }
  @media ${(props) => props.theme.device.mobile} {
  }
  .Illu_title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    margin-right: 30px;
    div {
      h1 {
        font-weight: 700;
        font-size: 36px;
        line-height: 180%;
      }
      p {
      }
    }
  }
  .Illu_botton {
    font-weight: 300;
    font-size: 30px;
    line-height: 140%;
    color: #c4b7a6;
    text-align: center;
  }
  .Illu_title2 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    margin-left: 30px;
    div {
      h1 {
        font-weight: 700;
        font-size: 36px;
        line-height: 180%;
      }
      p {
      }
    }
  }
`;

const MainImg = styled.div`
  width: 694px;
  height: 485px;
  border: 3px solid #7d613b;
  border-radius: 10px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  @media ${(props) => props.theme.device.tablet} {
  }
  @media ${(props) => props.theme.device.mobile} {
  }
`;

const Moon = styled(motion.div)`
  width: 167px;
  height: 167px;
  position: absolute;
  background-color: white;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
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
    if (scrollY <= 3600) {
      setYPosition(0);
      setXPosition(-700);
    }
    if (scrollY >= 4000) {
      setYPosition(800);
      setXPosition(500);
      console.log("반달");
    }
    if (scrollY >= 4700) {
      setYPosition(1350);
      setXPosition(850);
      console.log("달");
    }
    if (scrollY >= 5200) {
      setYPosition(1950);
      setXPosition(600);
      console.log("초승달");
    }
    if (scrollY >= 6020) {
      setYPosition(2300);
      setXPosition(500);
      console.log("달");
    }
    if (scrollY >= 6230) {
      setYPosition(3000);
      setXPosition(0);
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
          transition: { duration: 1.5 },
        }}
      >
        {scrollY}
      </Moon>

      <SubTitle
        title={"버디즈의 하루"}
        bColor={"black"}
        sub={"버디즈의 업무는?"}
        sColor={"#FA9600"}
        stroke={false}
      />
      <Panel>마포 버디즈 하루일과 : 9:00~18:00</Panel>

      <IlluBox style={{ transform: "rotate(2.39deg)" }}>
        <div className="Illu_title">
          <div>
            <h1>출근 준비</h1>
            <p>7:00~8:00</p>
          </div>
          <h2 className="Illu_botton">지각 위기..</h2>
        </div>
        <MainImg
          style={{
            backgroundImage: `url(${env.PUBLIC_URL}/assets/page3/01.jpg)`,
          }}
        ></MainImg>
      </IlluBox>

      <IlluBox style={{ transform: "rotateZ(-2deg)" }}>
        <MainImg
          style={{
            backgroundImage: `url(${env.PUBLIC_URL}/assets/page3/02.jpg)`,
          }}
        ></MainImg>
        <div className="Illu_title2">
          <div>
            <h1>오전 근무</h1>
            <p>9:00~11:00</p>
          </div>
          <h2 className="Illu_botton">편지 배달중..!</h2>
        </div>
      </IlluBox>

      <IlluBox style={{ transform: "rotate(2.39deg)" }}>
        <div className="Illu_title">
          <div>
            <h1>{"점심&휴식"}</h1>
            <p>11:00~14:00</p>
          </div>
          <h2 className="Illu_botton">식후 운동 좋아</h2>
        </div>
        <MainImg
          style={{
            backgroundImage: `url(${env.PUBLIC_URL}/assets/page3/03.jpg)`,
          }}
        ></MainImg>
      </IlluBox>

      <IlluBox style={{ transform: "rotateZ(-2deg)" }}>
        <div className="Illu_title">
          <div>
            <h1>출근 준비</h1>
            <p>7:00~8:00</p>
          </div>
          <h2 className="Illu_botton">지각 위기..</h2>
        </div>
        <MainImg></MainImg>
      </IlluBox>

      <IlluBox style={{ transform: "rotate(2.39deg)" }}>
        <MainImg
          style={{
            backgroundImage: `url(${env.PUBLIC_URL}/assets/page3/05.jpg)`,
          }}
        ></MainImg>
        <div className="Illu_title2">
          <div>
            <h1>퇴근 이후</h1>
            <p>7:00~8:00</p>
          </div>
          <h2 className="Illu_botton">버디즈는 휴식중..</h2>
        </div>
      </IlluBox>
    </Wrapper>
  );
};

export default Illustration;
