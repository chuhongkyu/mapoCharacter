import styled from "styled-components";
import Sub_Title from "../components/Sub_Title";

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

const Text_Box = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 50px;
  margin-bottom: 50px;
`;

const Illu_Box = styled.div`
  position: relative;
  margin-bottom: 50px;
`;

const Main_img = styled.div`
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
      <Sub_Title title={"마포 버디즈의 하루"} order={2} />
      <Text_Box>
        <h3>
          이번에는 마포버디즈의
          <br />
          하루일과를 소개해드릴게요!
        </h3>
      </Text_Box>
      <Illu_Box>
        <Title
          style={{ top: -50, left: -50 }}
          src={env.PUBLIC_URL + "/assets/page2/이미지_출근준비.png"}
          alt="알림"
        />
        <Main_img></Main_img>
        <Character
          style={{ bottom: -40, left: -130 }}
          src={env.PUBLIC_URL + "/assets/sub_img/MC-A.png"}
          alt="캐릭터"
        />
      </Illu_Box>
      <Illu_Box>
        <Title
          style={{ top: -50, right: -50 }}
          src={env.PUBLIC_URL + "/assets/page2/이미지_점심.png"}
          alt="알림"
        />
        <Main_img style={{ transform: "rotateZ(-3deg)" }}></Main_img>
        <Character
          style={{ right: -130, bottom: 0 }}
          src={env.PUBLIC_URL + "/assets/sub_img/BY-A.png"}
          alt="캐릭터"
        />
      </Illu_Box>
      <Illu_Box>
        <Title
          style={{ top: -50, left: -50 }}
          src={env.PUBLIC_URL + "/assets/page2/이미지_오후근무.png"}
          alt="알림"
        />
        <Main_img style={{ transform: "rotateZ(3deg)" }}></Main_img>
        <Character
          style={{ bottom: -20, left: -130 }}
          src={env.PUBLIC_URL + "/assets/sub_img/DG-A2.png"}
          alt="캐릭터"
        />
      </Illu_Box>
      <Illu_Box>
        <Title
          style={{ top: -50, right: -50 }}
          src={env.PUBLIC_URL + "/assets/page2/이미지_퇴근.png"}
          alt="알림"
        />
        <Main_img style={{ transform: "rotateZ(-3deg)" }}></Main_img>
        <Character
          style={{ right: -130, bottom: -5 }}
          src={env.PUBLIC_URL + "/assets/sub_img/BM-A.png"}
          alt="캐릭터"
        />
      </Illu_Box>
    </Wrapper>
  );
};

export default Illustration;
