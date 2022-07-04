import styled from "styled-components";
import SubTitle from "../components/SubTitle";

const env = process.env;
env.PUBLIC_URL = env.PUBLIC_URL || "";

const Wrapper = styled.section`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  padding: 200px 0px;
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
`;

const MainImg = styled.div`
  width: 992px;
  height: 550px;
  background-color: white;
  border: 2px solid black;
`;

const Title = styled.img`
  position: absolute;
  z-index: 2;
`;

const Character = styled.img`
  position: absolute;
  width: 200px;
`;

const Illustration = () => {
  return (
    <Wrapper>
      <SubTitle title={"마포 버디즈의 하루"} order={2} />
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
