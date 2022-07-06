import { motion } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";
import Characters from "../components/Characters";
import SubTitle from "../components/SubTitle";

const env = process.env;
env.PUBLIC_URL = env.PUBLIC_URL || "";

const Wrapper = styled.section`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  padding: 100px 0px;
  @media ${(props) => props.theme.device.tablet} {
    padding: 70px 0px;
  }
  @media ${(props) => props.theme.device.mobile} {
    padding: 30px 0px;
  }
`;

const PostBox = styled.div`
  .post_main {
    margin-top: 30px;
    width: 1005px;
    background: #ffffff;
    border-radius: 60px 60px 15px 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border: 6px solid #7d613b;
    position: relative;
    padding: 50px 0px;
    .post_header {
      position: absolute;
      top: 0;
      width: 100%;
      background: #ffc143;
      border-radius: 55px 55px 0px 0px;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 15px 0px;
    }
    .post_footer {
      position: absolute;
      bottom: 0;
      width: 100%;
      background: #ffead2;
      border-radius: 5px 5px 15px 15px;
      padding: 15px;
    }
    h1 {
      font-weight: 700;
      font-size: 45px;
      line-height: 160%;
    }
    .buddies {
      margin-top: 100px;
      width: 668px;
      height: 276px;
    }
  }
  @media ${(props) => props.theme.device.tablet} {
    .post_main {
      width: 800px;
      .buddies {
        width: 500px;
        height: auto;
      }
    }
    h1 {
      font-weight: 700;
      font-size: 35px;
      line-height: 160%;
    }
  }
  @media ${(props) => props.theme.device.mobile} {
    .post_main {
      width: 430px;
      .buddies {
        width: 300px;
        height: auto;
      }
    }
    h1 {
      font-weight: 700;
      font-size: 25px;
      line-height: 160%;
    }
  }
`;

const Shadow = styled.div`
  width: 1005px;
  height: 800px;
  background: #ebc278;
  border: 6px solid #7d613b;
  border-radius: 60px 60px 15px 15px;
  position: absolute;
  bottom: -10px;
  left: 10px;
  z-index: -1;
  @media ${(props) => props.theme.device.tablet} {
    width: 800px;
    height: 700px;
  }
  @media ${(props) => props.theme.device.mobile} {
    width: 430px;
    height: 520px;
  }
`;

const LongBong = styled.img`
  position: absolute;
  bottom: -110px;
`;

const ShortBong = styled.img`
  position: absolute;
  bottom: -110px;
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
  font-size: 30px;
  line-height: 160%;
  @media ${(props) => props.theme.device.tablet} {
    font-size: 30px;
    line-height: 160%;
  }
  @media ${(props) => props.theme.device.mobile} {
    font-size: 20px;
    line-height: 150%;
  }
`;

const Btn = styled(motion.span)`
  width: 370px;
  height: 80px;
  font-weight: 700;
  font-size: 36px;
  line-height: 160%;
  border-radius: 50px;
  background-color: ${(props) => props.theme.yellow};
  /* border: 3px solid #150b05;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px; */
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
  cursor: pointer;
  @media ${(props) => props.theme.device.tablet} {
    width: 370px;
    height: 80px;
    font-size: 26px;
  }
  @media ${(props) => props.theme.device.mobile} {
    width: 270px;
    height: 60px;
    font-size: 22px;
  }
`;

const MapBox = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: auto;
  margin-top: 50px;
  @media ${(props) => props.theme.device.tablet} {
  }
  @media ${(props) => props.theme.device.mobile} {
  }
`;

const Symbol = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 200px;
  @media ${(props) => props.theme.device.tablet} {
    margin-top: 180px;
  }
  @media ${(props) => props.theme.device.mobile} {
    margin-top: 100px;
  }
`;

const SymbolItem = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 50px;
  flex-direction: column;
  width: 232px;
  height: 307px;
  border: 3px solid #ffc100;
  border-radius: 150px 150px 20px 20px;
  position: relative;
  user-select: none;
  &:last-child {
    margin-right: 0;
  }
  img {
    -webkit-user-drag: none;
  }
  .symbol_name {
    position: absolute;
    bottom: 0;
    margin-top: 10px;
    width: 100%;
    background: #ffc100;
    border-bottom-right-radius: 10%;
    border-bottom-left-radius: 10%;
    font-weight: 300;
    font-size: 24px;
    line-height: 160%;
    text-align: center;
  }
  @media ${(props) => props.theme.device.tablet} {
    width: 232px;
    height: 307px;
    margin-right: 20px;
    img {
      width: 100px;
      height: auto;
    }
  }
  @media ${(props) => props.theme.device.mobile} {
    width: 120px;
    height: 180px;
    margin-right: 10px;
    img {
      width: 50px;
      height: auto;
    }
    .symbol_name {
      font-weight: 300;
      font-size: 12px;
      text-align: center;
    }
  }
`;

const Variants = {
  whileHover: { scale: 1.1 },
};

const Introduction = () => {
  const [open, setOpen] = useState(false);
  const onClick = () => {
    setOpen(!open);
  };
  return (
    <Wrapper>
      <SubTitle
        title={"마포버디즈 소개"}
        bColor={"black"}
        sub={"버디즈를 알아보자"}
        sColor={"#FA9600"}
        stroke={false}
      />
      <PostBox style={{ zIndex: 4 }}>
        <div className="post_main">
          <div className="post_header ">
            <h1>캐릭터 소개</h1>
          </div>
          <img
            className="buddies"
            src={env.PUBLIC_URL + "/assets/main_img.png"}
            alt="캐릭터"
          />
          <TextBox>
            <h3>'마포 버디즈'는 (예비) '마포구 홍보대사'이자</h3>
            <h3>편지를 전하는 '동물 우체부'예요!</h3>
          </TextBox>
          {!open ? (
            <Btn
              whileHover={{ y: -5, backgroundColor: "#FFF082" }}
              whileTap={{ backgroundColor: "#FFF082" }}
              onClick={onClick}
            >
              상세보기
            </Btn>
          ) : (
            <>
              <Characters />
              <Btn
                whileHover={{ y: -5, backgroundColor: "#FFF082" }}
                whileTap={{ backgroundColor: "#FFF082" }}
                onClick={onClick}
              >
                접기
              </Btn>
            </>
          )}
          <div className="post_footer"></div>

          <LongBong
            style={{ left: 15 }}
            src={env.PUBLIC_URL + "/assets/pattern/bong1.png"}
            alt="bong1"
          />
          <ShortBong
            style={{ right: 15 }}
            src={env.PUBLIC_URL + "/assets/pattern/bong2.png"}
            alt="bong2"
          />
        </div>
      </PostBox>

      <PostBox style={{ zIndex: 3, transform: "rotate(-0.86deg)" }}>
        <div className="post_main">
          <div className="post_header ">
            <h1>업무 소개</h1>
          </div>
          <MapBox src={env.PUBLIC_URL + "/assets/page2/map.png"} alt="Map" />
          <TextBox>
            <h3>버디즈의 주요 업무는 마포구 전역을 돌면서</h3>
            <h3>구민들에게 '편지를 전하기'입니다</h3>
          </TextBox>
          <div className="post_footer"></div>
          <LongBong
            style={{ right: 15 }}
            src={env.PUBLIC_URL + "/assets/pattern/bong1.png"}
            alt="bong1"
          />
          <ShortBong
            style={{ left: 15 }}
            src={env.PUBLIC_URL + "/assets/pattern/bong2.png"}
            alt="bong2"
          />
        </div>
        <Shadow style={{ bottom: -15 }}></Shadow>
      </PostBox>

      <PostBox style={{ zIndex: 2, transform: "rotateZ(0.5deg)" }}>
        <div className="post_main">
          <div className="post_header ">
            <h1>버디 레터</h1>
          </div>
          <Symbol>
            <SymbolItem variants={Variants} whileHover="whileHover">
              <img
                src={env.PUBLIC_URL + "/assets/intro/Re-leaf.png"}
                alt="속식 단풍잎"
              />
              <div className="symbol_name">소식 단풍잎</div>
            </SymbolItem>
            <SymbolItem variants={Variants} whileHover="whileHover">
              <img
                src={env.PUBLIC_URL + "/assets/intro/Re-hope.png"}
                alt="희망 결정체 "
              />
              <div className="symbol_name">희망 결정체</div>
            </SymbolItem>
            <SymbolItem variants={Variants} whileHover="whileHover">
              <img
                src={env.PUBLIC_URL + "/assets/intro/Re-hope.png"}
                alt="캐릭터"
              />
              <div className="symbol_name">행운의 깃털</div>
            </SymbolItem>
          </Symbol>
          <TextBox>
            <h3>마포 버디즈가 전하는 편지들에는</h3>
            <h3>희망과 소식, 그리고 행운이 담겨있어요!</h3>
          </TextBox>
          <div className="post_footer"></div>
        </div>
        <Shadow style={{ bottom: -17, transform: "rotateZ(-1.5deg)" }}></Shadow>
      </PostBox>
    </Wrapper>
  );
};

export default Introduction;
