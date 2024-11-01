import styled from "styled-components";
import { publicUrl } from "../utils/publicUrl";


const LetterBottom = styled.div`
  width: 100%;
  height: 100%;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  img {
    position: relative;
    z-index: 6;
    width: 100%;
    height: auto;
    top: 10px;
  }
  div {
    width: 100%;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: ${(props) => props.theme.purple};
    color: ${(props) => props.theme.white.light};
    white-space: nowrap;
    h5 {
      letter-spacing: 0.6em;
      font-weight: 300;
      font-size: 20px;
      line-height: 22px;
      margin-bottom: 10px;
    }
    p {
      font-weight: 300;
      font-size: 20px;
      line-height: 22px;
    }
  }

  @media ${(props) => props.theme.device.tablet} {
  }
  @media ${(props) => props.theme.device.mobile} {
    height: 300px;
    div {
      h5 {
        letter-spacing: 0.5em;
        font-weight: 300;
        font-size: 12px;
        line-height: 22px;
        margin-bottom: 7px;
      }
      p {
        font-weight: 300;
        font-size: 11px;
      }
    }
  }
`;

const Footer = () => {
  return (
    <LetterBottom>
      <img src={publicUrl + "/assets/page3/Bg_2.png"} alt="footer" />
      <div>
        <h5>희망과 소식을 전하는 마포 버디즈</h5>
        <p>Copyright. Godlifes. All rights reserved.</p>
      </div>
    </LetterBottom>
  );
};

export default Footer;
