import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import { motion } from "framer-motion";
import SubTitle from "../components/SubTitle";

const YOUR_SERVICE_ID = "service_rpllskw";
const YOUR_TEMPLATE_ID = "template_fq3wg3f";
const API = "8COq9QAPVe_wIh5BW";

const env = process.env;
env.PUBLIC_URL = env.PUBLIC_URL || "";

const Wrapper = styled(motion.section)`
  width: 100%;
  height: 190vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  position: relative;
  overflow: hidden;
`;

const Panel = styled.span`
  text-align: center;
  padding: 5px 60px;
  font-weight: 300;
  font-size: 32px;
  line-height: 160%;
  border-radius: 31px;
  background-color: #362a64;
  color: white;
  margin-bottom: 50px;
  @media ${(props) => props.theme.device.mobile} {
    padding: 5px 20px;
    font-weight: 300;
    font-size: 22px;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  flex-direction: column;
  background-color: #ffffff;
  border: 6px solid #362a64;
  border-radius: 20px;
  padding: 70px 100px;
`;

const Logo = styled(motion.img)`
  width: 100px;
  height: 90px;
  margin-bottom: 50px;
`;

const TextBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  h1 {
    font-weight: 300;
    font-size: 32px;
    line-height: 160%;
  }
`;

const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 50px;
  form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

const InputDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
  margin-top: 10px;
  label {
    font-weight: 800;
    margin-right: 50px;
  }
  input {
    background: #ffffff;
    border: 2px solid #b8b8b8;
    border-radius: 20px;
    width: 516px;
    height: 43px;
    padding: 5px 10px;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px,
      rgb(209, 213, 219) 0px 0px 0px 1px inset;
  }
`;

const Btn = styled.button`
  border-style: none;
  border-radius: 50px;
  background-color: ${(props) => props.theme.yellow};
  font-size: 40px;
  line-height: 160%;
  width: 370px;
  height: 80px;
  font-weight: bold;
  &:hover {
    transform: translateY(-2px);
  }
`;

const ErrorBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
  p {
    font-weight: 300;
    font-size: 15px;
    line-height: 160%;
    color: #8a8a8a;
  }
  margin-bottom: 50px;
`;

const Modal = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h1 {
    font-size: 40px;
    margin-bottom: 55px;
    margin-top: 50px;
    color: #ffc100;
  }
  h3 {
    font-size: 25px;
    font-weight: 300;
    color: white;
    line-height: 30px;
  }
`;

const LetterBottom = styled.footer`
  position: absolute;
  width: 100%;
  height: 700px;
  z-index: 5;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  bottom: 0;
  img {
    width: 100%;
    height: auto;
  }
  div {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-bottom: 50px;
    color: ${(props) => props.theme.white.light};
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
    bottom: -100px;
  }
  @media ${(props) => props.theme.device.mobile} {
    bottom: -200px;
  }
`;

const Letter = () => {
  const [checkMail, setCheckMail] = useState(false);
  const form = useRef();
  const [subscribe, setSubscribe] = useState(false);
  const onCheck = (e) => {
    alert("이름과 이메일을 확인해 주세요");
    e.stopPropagation();
  };
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, form.current, API).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
    setSubscribe(!subscribe);
    e.stopPropagation();
    console.log(form.current);
  };

  const isEmail = (email) => {
    const emailRegex =
      /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    setCheckMail(emailRegex.test(email.target.value));
    if (checkMail === false) {
      console.log("이메일 오류");
    } else {
      console.log("이메일 확인");
    }
  };

  return (
    <Wrapper>
      <SubTitle
        title={"버디레터 신청하기"}
        bColor={"#FFC700"}
        sub={"버디레터 이벤트"}
        sColor={"#FFFFFF"}
        stroke={true}
      />
      <Panel>이벤트 기간 : 7월 14일 ~7월 19일</Panel>
      {!subscribe ? (
        <Container>
          <Logo
            src={env.PUBLIC_URL + "/assets/icons/letter_logo.png"}
            alt="Logo"
          />
          <TextBox>
            <h1>
              캐릭터 라이선싱 페어 참여자분들에게
              <br /> 시범운영으로 버디레터를 무료로 보내드리고 있어요!
              <br /> 마포버디즈가 행운의 편지를 전해드립니다.
            </h1>
          </TextBox>
          <FormContainer>
            <form ref={form} onSubmit={sendEmail}>
              <InputDiv>
                <label htmlFor="user_name">닉네임</label>
                <input
                  id="user_name"
                  type="text"
                  name="user_name"
                  placeholder="닉네임을 입력해 주세요."
                  minLength="1"
                  maxLength="15"
                />
              </InputDiv>
              <InputDiv>
                <label htmlFor="user_email">이메일</label>
                <input
                  id="user_email"
                  type="email"
                  name="user_email"
                  placeholder="이메일을 입력해 주세요."
                  onBlur={isEmail}
                />
              </InputDiv>
              <ErrorBox>
                {!checkMail ? (
                  <p>
                    * 본 이벤트는 선착순 200명에게만 진행됩니다. <br />*
                    개인정보 자료는 이벤트 기간 이후 모두 일괄 폐기 예정입니다.
                  </p>
                ) : (
                  <p>이메일을 확인 완료</p>
                )}
              </ErrorBox>

              <Btn
                type={!checkMail ? "button" : "submit"}
                onClick={!checkMail ? onCheck : null}
                style={!checkMail ? { color: "gray" } : { color: "black" }}
              >
                버디레터 받기
              </Btn>
            </form>
          </FormContainer>
        </Container>
      ) : (
        <Modal>
          <img src={env.PUBLIC_URL + "/assets/dongeun.png"} alt="전송 완료" />
          <h1>버디레터 배달 완료!</h1>
          <h3>
            {" "}
            버디레터가 발송되었습니다.
            <br /> 이메일을 확인해주세요!
          </h3>
        </Modal>
      )}
      <LetterBottom>
        <img src={env.PUBLIC_URL + "/assets/page3/Bg_2.png"} alt="전송 완료" />
        <div>
          <h5>희망과 소식을 전하는 마포 버디즈</h5>
          <p>Copyright. Godlifes. All rights reserved.</p>
        </div>
      </LetterBottom>
    </Wrapper>
  );
};

export default Letter;
