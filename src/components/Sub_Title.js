import styled from "styled-components";
import PropTypes from "prop-types";

const Wrapper = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 45px;
  h1 {
    margin-left: 10px;
  }
  span {
    padding: 0.1rem 1rem;
    border-radius: 50%;
    background-color: black;
    color: white;
    font-weight: 800;
  }
`;

const Sub_Title = ({ title, order }) => {
  return (
    <Wrapper>
      <span>{order}</span>
      <h1>{title}</h1>
    </Wrapper>
  );
};

Sub_Title.propTypes = {
  title: PropTypes.string,
  order: PropTypes.number,
};

export default Sub_Title;
