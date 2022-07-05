import styled from "styled-components";
import PropTypes from "prop-types";

const Wrapper = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  margin-top: 50px;
`;

const HashText = styled.span`
  font-weight: 300;
  font-size: 50px;
  line-height: 146.69%;
`;

const TextBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    color: black;
    font-weight: 700;
    font-size: 100px;
    line-height: 146.69%;
  }
  @media ${(props) => props.theme.device.tablet} {
    font-size: 40px;
  }
  @media ${(props) => props.theme.device.mobile} {
    font-size: 30px;
  }
`;

const SubTitle = ({ title, sub, color }) => {
  return (
    <Wrapper>
      <HashText>
        <h2 style={{ color: color }}># {sub}</h2>
      </HashText>
      <TextBox>
        <h1>{title}</h1>
      </TextBox>
    </Wrapper>
  );
};

SubTitle.propTypes = {
  title: PropTypes.string,
  order: PropTypes.number,
};

export default SubTitle;
