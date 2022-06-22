import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import NavBar from "../components/NavBar";

const YOUR_SERVICE_ID = "service_rpllskw";
const YOUR_TEMPLATE_ID = "template_fq3wg3f";
const API = "8COq9QAPVe_wIh5BW";

const env = process.env;
env.PUBLIC_URL = env.PUBLIC_URL || "";

const Wrapper = styled(motion.div)`
  width: 100%;
  height: 100vh;
  header {
    width: 100%;
    border: 1px solid black;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const FormContainer = styled.div`
  width: 100%;
  background-color: #ebd5b3;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 50px;
  border: 2px solid #52371b;
  h2 {
    margin-bottom: 20px;
  }
  div {
    width: 70%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    padding: 0 5%;
    form {
      height: 300px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-direction: column;
      margin-top: 20px;
      input {
        padding: 10px 40px 11px 1.5rem;
        margin-bottom: 5px;
      }
    }
    img {
      position: absolute;
      left: 60%;
      bottom: 0;
      width: 350px;
    }
  }
`;

const Btn = styled.button`
  border-style: none;
  border-radius: 5px;
  background-color: black;
  color: white;
  padding: 10px 20px;
  &:hover {
    background-color: white;
    color: black;
  }
`;

const Modal = styled.div`
  width: 100%;
  height: 200px;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 10px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px;
`;

const LetterBox = styled.div`
  width: 100%;
  height: 70px;
  background-color: #52371b;
  color: #ebd5b3;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ErrorBox = styled.div`
  width: 100%;
  color: gray;
  font-size: 11px;
`;

const Letter = () => {
  const [checkMail, setCheckMail] = useState(false);
  const navigate = useNavigate();
  const onExit = () => {
    navigate("/");
  };
  const form = useRef();
  const [subscribe, setSubscribe] = useState(false);
  const onClick = (e) => {
    setSubscribe(!subscribe);
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
    <Wrapper
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5 }}
      onClick={(e) => e.stopPropagation()}
    >
      <NavBar />
      <header>
        <h1>우리가 시간이 없지, 세상이 안 궁금하냐!</h1>
      </header>
      <FormContainer>
        <div>
          <h2>🚀 지금 구독하면 내일 아침에 읽을 수 있어요.</h2>
          <p>
            세상 돌아가는 소식, 알고는 싶지만 신문 볼 새 없이 바쁜 게 <br />
            우리 탓은 아니잖아요!{" "}
          </p>
        </div>
        <div>
          <form ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              name="user_name"
              placeholder="닉네임"
              minLength="1"
              maxLength="15"
            />
            <input
              type="email"
              name="user_email"
              placeholder="이메일 주소"
              onBlur={isEmail}
            />

            {!checkMail ? (
              <ErrorBox>
                <p>🍳이메일을 확인해주세요</p>
              </ErrorBox>
            ) : (
              <Btn type="submit" onClick={onClick}>
                구독
              </Btn>
            )}
          </form>
          <img
            src={env.PUBLIC_URL + "/assets/characters/Buddies_Cha_Bred.M.png"}
            alt="캐릭터"
          />
        </div>
        {!subscribe ? null : (
          <Modal onClick={onClick}>
            <h1>❤ 구독이 완료 되었습니다.</h1>
          </Modal>
        )}
      </FormContainer>
      <LetterBox>
        <h1>-Method-</h1>
      </LetterBox>
    </Wrapper>
  );
};

export default Letter;
