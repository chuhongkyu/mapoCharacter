import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import { motion } from "framer-motion";

const YOUR_SERVICE_ID = "service_rpllskw";
const YOUR_TEMPLATE_ID = "template_fq3wg3f";
const API = "8COq9QAPVe_wIh5BW";

const env = process.env;
env.PUBLIC_URL = env.PUBLIC_URL || "";

const Wrapper = styled(motion.section)`
  width: 100%;
  height: 150vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-image: url("${env.PUBLIC_URL}/assets/page3/00.png");
  background-position: bottom;
  background-repeat: no-repeat;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
`;

const TextBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  header {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    margin-bottom: 10px;
    h1 {
      font-size: 30px;
      margin-bottom: 10px;
    }
    p {
      font-size: 15px;
    }
  }
  div {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
  }
  span {
    font-size: 15px;
    font-weight: 700;
  }
`;

const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  margin-top: 50px;

  div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 5px;
    margin-top: 10px;
    label {
      font-weight: 800;
      margin-right: 10px;
    }
    input {
      padding: 10px 15px;
      border-radius: 5px;
      width: 300px;
      border: none;
      box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px,
        rgb(209, 213, 219) 0px 0px 0px 1px inset;
    }
    &:last-of-type {
      margin-bottom: 50px;
    }
  }
`;

const Btn = styled.button`
  border-style: none;
  border-radius: 25px;
  background-color: black;
  color: white;
  padding: 10px 60px;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  &:hover {
    background-color: white;
    color: black;
  }
`;

const Modal = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgba(255, 255, 255, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h1 {
    font-size: 30px;
    margin-bottom: 15px;
    margin-top: 50px;
  }
  h3 {
    font-size: 21px;
    font-weight: 300;
  }
`;

const ErrorBox = styled.div`
  font-size: 11px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  p {
    width: 100%;
    text-align: end;
  }
`;

const Letter = () => {
  const [checkMail, setCheckMail] = useState(false);
  const form = useRef();
  const [subscribe, setSubscribe] = useState(false);
  // const onClick = (e) => {
  //   setSubscribe(!subscribe);
  //   e.stopPropagation();
  // };
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
      {!subscribe ? (
        <Container>
          <TextBox>
            <header>
              <h1>버디레터</h1>
              <p>버디레터 간단한 설명 2~3줄</p>
            </header>
            <div>
              <p>
                <span>이벤트 기간</span>: 7월 14일 ~7월 19일
              </p>
              <p>
                <span>참여자</span>: ~200명 선착순
              </p>
            </div>
          </TextBox>

          <FormContainer>
            <form ref={form} onSubmit={sendEmail}>
              <div>
                <label htmlFor="user_name">닉네임</label>
                <input
                  id="user_name"
                  type="text"
                  name="user_name"
                  placeholder="닉네임을 입력해 주세요."
                  minLength="1"
                  maxLength="15"
                />
              </div>
              <div>
                <label htmlFor="user_email">주소(Email)</label>
                <input
                  id="user_email"
                  type="email"
                  name="user_email"
                  placeholder="이메일을 입력해 주세요."
                  onBlur={isEmail}
                />
              </div>
              <ErrorBox>
                <p>
                  {!checkMail
                    ? "🍳이메일을 확인해주세요"
                    : "이메일을 확인 완료"}
                </p>
              </ErrorBox>

              <Btn
                type="submit"
                disabled={!checkMail}
                style={
                  !checkMail
                    ? { backgroundColor: "gray" }
                    : { backgroundColor: "black" }
                }
              >
                신청하기
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
    </Wrapper>
  );
};

export default Letter;
