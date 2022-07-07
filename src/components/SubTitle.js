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
  h1 {
    color: black;
    font-weight: 700;
    font-size: 100px;
    line-height: 146.69%;
  }
  h2 {
    font-weight: 300;
    font-size: 50px;
    line-height: 146.69%;
  }
  @media ${(props) => props.theme.device.tablet} {
    h1 {
      font-size: 80px;
    }
    h2 {
      font-size: 40px;
    }
  }
  @media ${(props) => props.theme.device.mobile} {
    h1 {
      font-size: 40px;
    }
    h2 {
      font-size: 24px;
    }
  }
`;

const TextBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .stroke {
    -webkit-text-stroke: 2px #000;
  }
`;

const SubTitle = ({ title, sub, sColor, bColor, stroke }) => {
  return (
    <Wrapper>
      <h2 style={{ color: sColor }}># {sub}</h2>
      <TextBox>
        <h1 className={stroke ? "stroke" : null} style={{ color: bColor }}>
          {title}
        </h1>
      </TextBox>
    </Wrapper>
  );
};

SubTitle.propTypes = {
  title: PropTypes.string,
  sub: PropTypes.string,
  sColor: PropTypes.string,
  bColor: PropTypes.string,
  stroke: PropTypes.bool,
};

export default SubTitle;
