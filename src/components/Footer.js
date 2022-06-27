import styled from "styled-components";

const Wrapper = styled.section`
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: ${(props) => props.theme.white.light};
  background-color: ${(props) => props.theme.purple};
  h5 {
    margin-bottom: 10px;
  }
`;

const Footer = () => {
  return (
    <Wrapper>
      <h5>희망과 소식을 전하는 마포 버디즈</h5>
      <p>Copyright. Godlifes. All rights reserved.</p>
    </Wrapper>
  );
};

export default Footer;
