import styled from "styled-components";
import PropTypes from "prop-types";

const Wrapper = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 45px;
  position: relative;
  margin-top: 50px;
  @media ${(props) => props.theme.device.tablet} {
    font-size: 40px;
  }
  @media ${(props) => props.theme.device.mobile} {
    font-size: 30px;
  }
`;

const TextBox = styled.div`
  width: 400px;
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
  width: 400px;
  height: 30px;
  position: absolute;
  bottom: 5px;
  z-index: 2;
  background-color: ${(props) => props.theme.yellow};
  @media ${(props) => props.theme.device.tablet} {
    width: 350px;
    height: 30px;
  }
  @media ${(props) => props.theme.device.mobile} {
    width: 265px;
    height: 20px;
  }
`;

const Sub_Title = ({ title, order }) => {
  return (
    <Wrapper>
      <TextBox>
        <span>{order}</span>
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
