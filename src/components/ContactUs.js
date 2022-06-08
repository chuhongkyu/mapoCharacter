import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";

const YOUR_SERVICE_ID = "service_rpllskw";
const YOUR_TEMPLATE_ID = "template_fq3wg3f";
const API = "8COq9QAPVe_wIh5BW";

const env = process.env;
env.PUBLIC_URL = env.PUBLIC_URL || "";

const Wrapper = styled.div`
  background-color: white;
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
  width: 50%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 10px;
  position: absolute;
  z-index: 10;
  top: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 50px;
  div {
    display: flex;
    justify-content: center;
  }
`;

const ContactUs = () => {
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
  };

  return (
    <Wrapper>
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
            <Btn onClick={onClick}>구독</Btn>
            {!subscribe ? null : (
              <Modal>
                <h1>구독</h1>
                <h3>진짜 구독 하시겠습니까?</h3>
                <div>
                  <Btn style={{ margin: 10 }} type="submit">
                    네
                  </Btn>
                  <Btn style={{ margin: 10 }} onClick={onClick}>
                    아니요
                  </Btn>
                </div>
              </Modal>
            )}
          </form>
          <img
            src={env.PUBLIC_URL + "/assets/characters/Buddies_Cha_Bred.M.png"}
            alt="캐릭터"
          />
        </div>
      </FormContainer>
    </Wrapper>
  );
};

export default ContactUs;
