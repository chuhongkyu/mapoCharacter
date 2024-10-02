import styled from "styled-components";

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
    -webkit-text-stroke: 3px #000;
  }
  @media ${(props) => props.theme.device.mobile} {
    .stroke {
      -webkit-text-stroke: 1px #000;
    }
  }
`;

interface IProps{
  title:string;
  sub:string;
  sColor:string;
  bColor:string;
  stroke: boolean;
}

const SubTitle = ({ title, sub, sColor, bColor, stroke }:IProps) => {
  return (
    <Wrapper>
      <h2 style={{ color: sColor }}># {sub}</h2>
      <TextBox>
        <h1 className={stroke ? "stroke" : " "} style={{ color: bColor }}>
          {title}
        </h1>
      </TextBox>
    </Wrapper>
  );
};

export default SubTitle;
