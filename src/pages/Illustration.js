import styled from "styled-components";
import Sub_Title from "../components/Sub_Title";

const env = process.env;
env.PUBLIC_URL = env.PUBLIC_URL || "";

const Wrapper = styled.section`
  width: 100%;
  height: 200vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
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
    </Wrapper>
  );
};

export default Illustration;
