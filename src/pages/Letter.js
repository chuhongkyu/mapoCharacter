import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import { motion } from "framer-motion";
import SubTitle from "../components/SubTitle";
import FireCracker from "../components/FireCracker";

const YOUR_SERVICE_ID = "service_rpllskw";
const YOUR_TEMPLATE_ID = "template_fq3wg3f";

const env = process.env;
env.PUBLIC_URL = env.PUBLIC_URL || "";
const API = env.REACT_APP_API_KEY;

const Wrapper = styled(motion.section)`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  @media ${(props) => props.theme.device.tablet} {
  }
  @media ${(props) => props.theme.device.mobile} {
  }
`;

const Panel = styled.span`
  text-align: center;
  padding: 5px 100px;
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
    font-size: 21px;
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
  padding: 80px 190px;
  @media ${(props) => props.theme.device.tablet} {
    padding: 70px 100px;
  }
  @media ${(props) => props.theme.device.mobile} {
    padding: 30px 15px;
  }
`;

const Logo = styled(motion.img)`
  width: 100px;
  height: 90px;
  margin-bottom: 50px;
  @media ${(props) => props.theme.device.tablet} {
  }
  @media ${(props) => props.theme.device.mobile} {
    width: 50px;
    height: 50px;
    margin-bottom: 40px;
  }
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
  @media ${(props) => props.theme.device.tablet} {
    h1 {
      font-weight: 300;
      font-size: 27px;
      line-height: 160%;
    }
  }
  @media ${(props) => props.theme.device.mobile} {
    h1 {
      font-weight: 300;
      font-size: 15px;
      line-height: 160%;
    }
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
  @media ${(props) => props.theme.device.tablet} {
    margin-top: 40px;
  }
  @media ${(props) => props.theme.device.mobile} {
    margin-top: 20px;
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
    white-space: nowrap;
  }
  input {
    background: #ffffff;
    border: 2px solid #b8b8b8;
    border-radius: 20px;
    width: 516px;
    height: 43px;
    padding: 5px 5px 5px 20px;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px,
      rgb(209, 213, 219) 0px 0px 0px 1px inset;
  }
  @media ${(props) => props.theme.device.tablet} {
    label {
      font-weight: 800;
      margin-right: 40px;
    }
    input {
      width: 416px;
      height: 43px;
    }
  }
  @media ${(props) => props.theme.device.mobile} {
    justify-content: center;
    label {
      font-size: 15px;
      font-weight: 800;
      margin-right: 15px;
    }
    input {
      width: 266px;
      height: 43px;
    }
  }
`;

const Btn = styled.button`
  font-family: "Maple_story";
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  border-style: none;
  border-radius: 50px;
  background-color: ${(props) => props.theme.yellow};
  line-height: 160%;
  padding: 10px 80px;
  &:hover {
    transform: translateY(-2px);
    background-color: #fff082;
  }
  @media ${(props) => props.theme.device.tablet} {
    font-size: 30px;
  }
  @media ${(props) => props.theme.device.mobile} {
    font-size: 25px;
    padding: 10px 70px;
  }
`;

const ErrorBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
  margin-bottom: 50px;
  p {
    font-weight: 300;
    font-size: 15px;
    line-height: 160%;
    color: #8a8a8a;
  }
  @media ${(props) => props.theme.device.tablet} {
    margin-bottom: 40px;
  }
  @media ${(props) => props.theme.device.mobile} {
    margin-bottom: 30px;
    p {
      font-size: 12px;
    }
  }
`;

const Modal = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h1 {
    font-size: 40px;
    margin-bottom: 20px;
    margin-top: 50px;
    color: #ffc100;
  }
  h3 {
    font-size: 25px;
    font-weight: 300;
    color: white;
    line-height: 30px;
  }
  @media ${(props) => props.theme.device.tablet} {
  }
  @media ${(props) => props.theme.device.mobile} {
    h1 {
      font-size: 30px;
      margin-bottom: 15px;
      margin-top: 50px;
      color: #ffc100;
    }
    h3 {
      font-size: 20px;
      font-weight: 300;
      color: white;
      line-height: 30px;
      margin-bottom: 5px;
    }
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
      /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    setCheckMail(emailRegex.test(email.target.value));
    if (!checkMail) {
      console.log("이메일 오류");
    } else {
      console.log("이메일 확인");
    }
  };

  return (
    <Wrapper>
      <SubTitle
        title={"버디레터 이벤트"}
        bColor={"#FFC700"}
        sub={"버디레터 신청하기"}
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
                style={!checkMail ? { color: "black" } : { color: "black" }}
              >
                버디레터 받기
              </Btn>
            </form>
          </FormContainer>
        </Container>
      ) : (
        <Modal>
          <FireCracker />
          <img src={env.PUBLIC_URL + "/assets/dongeun.png"} alt="전송 완료" />
          <h1>버디레터 배달 완료!</h1>
          <h3>
            버디레터가 발송되었습니다.
            <br /> 이메일을 확인해주세요!
          </h3>
        </Modal>
      )}
    </Wrapper>
  );
};

export default Letter;
