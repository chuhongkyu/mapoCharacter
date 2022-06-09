import { Link } from "react-router-dom";
import styled from "styled-components";

const env = process.env;
env.PUBLIC_URL = env.PUBLIC_URL || "";

const Wrapper = styled.div`
  width: 50px;
  height: 100%;
  position: absolute;
  right: 50px;
  top: 50px;
`;

const Btn = styled.span`
  img {
    width: 50px;
    height: 50px;
  }
  &:hover {
    img {
      transform: scale(1.2);
    }
  }
`;

const Navigation = () => {
  return (
    <Wrapper>
      <Btn>
        <Link to="letter">
          <img src={`${env.PUBLIC_URL}/assets/icons/facebook.svg`} alt="버튼" />
        </Link>
      </Btn>
      <Btn>
        <img src={`${env.PUBLIC_URL}/assets/icons/insta.svg`} alt="버튼" />
      </Btn>
      <Btn>
        <img src={`${env.PUBLIC_URL}/assets/icons/insta.svg`} alt="버튼" />
      </Btn>
    </Wrapper>
  );
};

export default Navigation;
