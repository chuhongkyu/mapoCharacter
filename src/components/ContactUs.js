import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const YOUR_SERVICE_ID = "service_rpllskw";
const YOUR_TEMPLATE_ID = "template_fq3wg3f";
const API = "8COq9QAPVe_wIh5BW";

const env = process.env;
env.PUBLIC_URL = env.PUBLIC_URL || "";

const BackContainer = styled(motion.div)`
  width: 100%;
  height: 100vh;
  position: absolute;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled(motion.div)`
  background-color: white;
  width: 90%;
  height: 90vh;
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
  background-color: gray;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  padding: 50px;
  h2 {
    margin-bottom: 20px;
  }
  div {
    width: 50%;
    display: flex;
    justify-content: flex-start;
    padding: 0 5%;
    form {
      height: 300px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
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
  padding: 5px 10px;
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

const ContactUs = () => {
  const navigate = useNavigate();
  const onExit = () => {
    navigate("/");
  };
  const form = useRef();
  const [subscribe, setSubscribe] = useState(false);
  const onClick = () => {
    setSubscribe(!subscribe);
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

  return (
    <BackContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      onClick={onExit}
    >
      <Wrapper
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        onClick={(e) => e.stopPropagation()}
      >
        <header>
          <h1>우리가 시간이 없지, 세상이 안 궁금하냐!</h1>
        </header>
        <FormContainer>
          <div>
            <h2>🚀 지금 구독하면 내일 아침에 읽을 수 있어요.</h2>
          </div>
          <div>
            <form ref={form} onSubmit={sendEmail}>
              <input type="text" name="user_name" placeholder="닉네임" />
              <input type="email" name="user_email" placeholder="이메일 주소" />
              <Btn type="submit" onSubmit={onClick}>
                구독
              </Btn>
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
      </Wrapper>
    </BackContainer>
  );
};

export default ContactUs;
