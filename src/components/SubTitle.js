import styled from "styled-components";
import PropTypes from "prop-types";

const Wrapper = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 100px;
  font-weight: bold;
  line-height: 146.69%;
  position: relative;
  -webkit-text-stroke: 5px #000;
  margin-top: 50px;
  width: 1110px;
  height: 179px;
  background-color: white;
  border: 6px solid #7d613b;
  border-radius: 60px;
  @media ${(props) => props.theme.device.tablet} {
    font-size: 40px;
  }
  @media ${(props) => props.theme.device.mobile} {
    font-size: 30px;
  }
`;

const TextBox = styled.div`
  width: 100%;
  position: relative;
  z-index: 4;
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    margin-left: 10px;
  }
  span {
    width: 50px;
    height: 50px;
    padding: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: black;
    color: white;
    font-weight: 800;
  }
  @media ${(props) => props.theme.device.tablet} {
    span {
      width: 40px;
      height: 40px;
      padding: 30px;
    }
  }
  @media ${(props) => props.theme.device.mobile} {
    span {
      width: 20px;
      height: 20px;
      padding: 20px;
    }
  }
`;

const Shadow = styled.div`
  width: 600px;
  height: 70px;
  background: #000000;
  border-radius: 65px;
  position: absolute;
  z-index: 2;
  @media ${(props) => props.theme.device.tablet} {
    width: 350px;
    height: 30px;
  }
  @media ${(props) => props.theme.device.mobile} {
    width: 265px;
    height: 20px;
  }
`;

const Sub_Title = ({ title }) => {
  return (
    <Wrapper>
      <TextBox>
        <h1>{title}</h1>
      </TextBox>
      <Shadow />
    </Wrapper>
  );
};

Sub_Title.propTypes = {
  title: PropTypes.string,
  order: PropTypes.number,
};

export default Sub_Title;
