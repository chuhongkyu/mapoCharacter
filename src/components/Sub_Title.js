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
`;

const Text_Box = styled.div`
  width: 400px;
  position: relative;
  z-index: 4;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 45px;
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
`;

const Shadow = styled.div`
  width: 400px;
  height: 30px;
  position: absolute;
  bottom: 5px;
  z-index: 2;
  background-color: ${(props) => props.theme.yellow};
`;

const Sub_Title = ({ title, order }) => {
  return (
    <Wrapper>
      <Text_Box>
        <span>{order}</span>
        <h1>{title}</h1>
      </Text_Box>
      <Shadow />
    </Wrapper>
  );
};

Sub_Title.propTypes = {
  title: PropTypes.string,
  order: PropTypes.number,
};

export default Sub_Title;
