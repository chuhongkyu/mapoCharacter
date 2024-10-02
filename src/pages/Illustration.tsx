import { useEffect, useState } from "react";
import styled from "styled-components";
import SubTitle from "../components/SubTitle";
import { motion } from "framer-motion";
import { publicUrl } from "../utils/publicUrl";

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
  @media ${(props) => props.theme.device.tablet} {
  }
  @media ${(props) => props.theme.device.mobile} {
    padding: 5px 20px;
    font-weight: 300;
    font-size: 21px;
  }
`;

const IlluBox = styled.div`
  position: relative;
  background: #ffffff;
  border: 6px solid #7d613b;
  border-radius: 10px;
  display: flex;
  padding: 20px 30px;
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
  .Illu_bottom {
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
  @media ${(props) => props.theme.device.tablet} {
    padding: 15px 25px;
    .Illu_title {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-direction: column;
      margin-right: 30px;
      div {
        h1 {
          font-weight: 700;
          font-size: 20px;
          line-height: 180%;
        }
        p {
          font-size: 11px;
        }
      }
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
          font-size: 20px;
          line-height: 180%;
        }
        p {
        }
      }
    }
    .Illu_bottom {
      font-weight: 300;
      font-size: 15px;
      line-height: 140%;
      color: #c4b7a6;
      text-align: center;
    }
  }
  @media ${(props) => props.theme.device.mobile} {
    padding: 5px 5px;
    .Illu_title {
      display: none;
    }
    .Illu_title2 {
      display: none;
    }
  }
`;

const MainImg = styled(motion.div)`
  width: 694px;
  height: 485px;
  border: 3px solid #7d613b;
  border-radius: 10px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  @media ${(props) => props.theme.device.tablet} {
    width: 594px;
    height: 385px;
  }
  @media ${(props) => props.theme.device.mobile} {
    width: 335px;
    height: 215px;
  }
`;

const Moon = styled(motion.div)`
  width: 167px;
  height: 167px;
  border-radius: 50%;
  background-color: white;
  box-shadow: 0px 4px 90px #ffc100;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  @media ${(props) => props.theme.device.tablet} {
  }
  @media ${(props) => props.theme.device.mobile} {
    width: 100px;
    height: 100px;
  }
`;

const Illustration = () => {
  const [scrollY, setScrollY] = useState(0);
  const [positionX, setXPosition] = useState(-700);
  const [positionY, setYPosition] = useState(0);
  const [moon1, setMoon1] = useState("rgba(255, 255, 255, 1)");
  const [moon2, setMoon2] = useState("0px 4px 90px #ffc100");

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
      setMoon1("rgba(255, 255, 255, 1)");
      setMoon2("0px 4px 90px #ffc100");
    }
    if (scrollY >= 4000) {
      setYPosition(800);
      setXPosition(500);
      setMoon1("rgba(255, 255, 255, 1)");
      setMoon2("0px 4px 90px #ffc100");
    }
    if (scrollY >= 4700) {
      setYPosition(1350);
      setXPosition(850);
      setMoon1("rgba(255, 255, 255, 1)");
      setMoon2("0px 4px 90px #ffc100");
    }
    if (scrollY >= 5300) {
      setYPosition(1950);
      setXPosition(700);
      setMoon1("rgba(255, 255, 255, 1)");
      setMoon2("0px 4px 80px #AA5D1D");
    }
    if (scrollY >= 6020) {
      setYPosition(2350);
      setXPosition(410);
      setMoon1("rgba(255, 255, 255, 0)");
      setMoon2("50px 10px 1px 0px white");
    }
    if (scrollY >= 6230) {
      setYPosition(3000);
      setXPosition(0);
      setMoon1("rgba(255, 255, 255, 0)");
      setMoon2("30px 10px 1px 0 white");
    } else {
    }
  }, [scrollY]);
  return (
    <Wrapper>
      <Moon
        initial={{ y: 0, x: -700 }}
        animate={{
          x: positionX,
          y: positionY,
          backgroundColor: moon1,
          boxShadow: moon2,
        }}
        transition={{ duration: 1.5 }}
      ></Moon>

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
          <h2 className="Illu_bottom">지각 위기..</h2>
        </div>
        <MainImg
          initial={{ backgroundSize: "100%" }}
          whileHover={{ backgroundSize: "107%" }}
          transition={{ duration: 0.5 }}
          style={{
            backgroundImage: `url(${publicUrl}/assets/page3/01.jpg)`,
          }}
        />
      </IlluBox>

      <IlluBox style={{ transform: "rotateZ(-2deg)" }}>
        <MainImg
          initial={{ backgroundSize: "100%" }}
          whileHover={{ backgroundSize: "107%" }}
          transition={{ duration: 0.5 }}
          style={{
            backgroundImage: `url(${publicUrl}/assets/page3/02.jpg)`,
          }}
        />
        <div className="Illu_title2">
          <div>
            <h1>오전 근무</h1>
            <p>9:00~11:00</p>
          </div>
          <h2 className="Illu_bottom">편지 배달중..!</h2>
        </div>
      </IlluBox>

      <IlluBox style={{ transform: "rotate(2.39deg)" }}>
        <div className="Illu_title">
          <div>
            <h1>{"점심&휴식"}</h1>
            <p>11:00~14:00</p>
          </div>
          <h2 className="Illu_bottom">식후 운동 좋아</h2>
        </div>
        <MainImg
          initial={{ backgroundSize: "100%" }}
          whileHover={{ backgroundSize: "107%" }}
          transition={{ duration: 0.5 }}
          style={{
            backgroundImage: `url(${publicUrl}/assets/page3/03.jpg)`,
          }}
        />
      </IlluBox>

      <IlluBox style={{ transform: "rotateZ(-2deg)" }}>
        <MainImg
          initial={{ backgroundSize: "100%" }}
          whileHover={{ backgroundSize: "107%" }}
          transition={{ duration: 0.5 }}
          style={{
            backgroundImage: `url(${publicUrl}/assets/page3/04.jpg)`,
          }}
        />
        <div className="Illu_title2">
          <div>
            <h1>오후 근무</h1>
            <p>15:00~18:00</p>
          </div>
          <h2 className="Illu_bottom">열심히 근무중!</h2>
        </div>
      </IlluBox>

      <IlluBox style={{ transform: "rotate(2.39deg)" }}>
        <MainImg
          initial={{ backgroundSize: "100%" }}
          whileHover={{ backgroundSize: "107%" }}
          transition={{ duration: 0.5 }}
          style={{
            backgroundImage: `url(${publicUrl}/assets/page3/05.jpg)`,
          }}
        />
        <div className="Illu_title2">
          <div>
            <h1>퇴근 이후</h1>
            <p>18:00~</p>
          </div>
          <h2 className="Illu_bottom">버디즈는 휴식중..</h2>
        </div>
      </IlluBox>
    </Wrapper>
  );
};

export default Illustration;
