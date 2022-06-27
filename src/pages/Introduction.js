import styled from "styled-components";
import Sub_Title from "../components/Sub_Title";

const Wrapper = styled.section`
  width: 100%;
  height: 200vh;
`;

const Introduction = () => {
  return (
    <Wrapper>
      <Sub_Title title={"마포 버디즈란?"} order={1} />
    </Wrapper>
  );
};

export default Introduction;
