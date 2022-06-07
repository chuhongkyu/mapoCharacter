import React, { useRef } from "react";
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
  div {
    width: 100%;
    display: flex;
    justify-content: center;
    form {
      height: 400px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      margin-right: 50px;
      input {
        padding: 10px 40px 11px 1.5rem;
        margin-bottom: 5px;
      }
    }
  }
`;

const ContactUs = () => {
  const form = useRef();
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
        <p>🚀 지금 구독하면 내일 아침에 읽을 수 있어요.</p>
        <p>🚀 지금 구독하면 내일 아침에 읽을 수 있어요.</p>
        <div>
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="user_name" placeholder="닉네임" />
            <input type="email" name="user_email" placeholder="이메일 주소" />
            <label>피드백</label>
            <textarea name="message" placeholder="너무 많이 누르지 마세요" />
            <input type="submit" value="구독" />
          </form>
          <img
            src={`${env.PUBLIC_URL}/assets/characters/Buddies_Cha_Bred.M.png`}
          />
        </div>
      </FormContainer>
    </Wrapper>
  );
};

export default ContactUs;
