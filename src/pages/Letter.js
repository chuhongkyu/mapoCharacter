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
  height: 150vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  position: relative;
  background-image: url("${env.PUBLIC_URL}/assets/page3/Bg_2.png");
  background-position: bottom center;
  background-repeat: no-repeat;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
`;

const BigBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  .center {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
  }
`;

const TextBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  header {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
    h1 {
      font-weight: 700;
      font-size: 80px;
      line-height: 140%;
      text-align: center;
      margin-bottom: 10px;
      margin-top: 50px;
    }
  }
  div {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    p {
      margin-bottom: 20px;
    }
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
  position: relative;
  .right {
    width: 100%;
    display: flex;
    justify-content: flex-end;
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
  border: 3px solid #150b05;
  border-radius: 50px;
  background-color: ${(props) => props.theme.yellow};
  font-size: 40px;
  line-height: 160%;
  width: 388px;
  height: 96px;
  font-weight: bold;
  &:hover {
    transform: translateY(-2px);
  }
`;

const Doneun = styled.img`
  margin-left: 50px;
  margin-bottom: 20px;
`;

const Modal = styled.div`
  width: 100%;
  height: 100vh;
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
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 15px;
  p {
    font-size: 13px;
  }
  margin-bottom: 50px;
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
      <SubTitle title={"버디레터 신청하기"} />
      {!subscribe ? (
        <Container>
          <TextBox>
            <header>
              <h1>
                마포 버디즈의
                <br /> 편지를 받아보고 싶으신가요?
              </h1>
            </header>
          </TextBox>
          <BigBox>
            <div className="center">
              <TextBox>
                <div>
                  <p>
                    캐릭터 라이선싱 페어 참여자분들에게
                    <br /> 시범운영으로 버디레터를 무료로 보내드리고 있어요!
                  </p>
                  <p>
                    <span>이벤트 기간</span>: 7월 14일 ~7월 19일
                    <br />
                    <span>참여자</span>: ~200명 선착순
                  </p>
                </div>
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
                    <p>
                      {!checkMail
                        ? "*개인정보 자료는 이벤트 기간 이후 모두 일괄 폐기됩니다."
                        : "이메일을 확인 완료"}
                    </p>
                  </ErrorBox>
                  <div className="right">
                    <Btn
                      type={!checkMail ? "button" : "submit"}
                      onClick={!checkMail ? onCheck : null}
                      style={
                        !checkMail ? { color: "gray" } : { color: "black" }
                      }
                    >
                      버디레터 받기
                    </Btn>
                  </div>
                </form>
              </FormContainer>
            </div>
            <Doneun
              src={env.PUBLIC_URL + "/assets/dongeun.png"}
              alt="전송 완료"
            />
          </BigBox>
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
