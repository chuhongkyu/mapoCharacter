import { motion } from "framer-motion";
import styled from "styled-components";

const env = process.env;
env.PUBLIC_URL = env.PUBLIC_URL || "";

const Wrapper = styled.section`
  width: 100%;
  height: 100vh;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  box-shadow: rgba(255, 240, 130, 0.5) 0px -30px 16px 0px inset;
  background-image: url("${env.PUBLIC_URL}/assets/page1/bg.jpg");
  background-size: cover;
  background-position: center top;
  display: flex;
  justify-content: center;
  position: relative;
  @media ${(props) => props.theme.device.tablet} {
  }
  @media ${(props) => props.theme.device.mobile} {
  }
`;

const MoveBtn = styled(motion.div)`
  position: absolute;
  z-index: 50;
  bottom: 15px;
  width: 258px;
  height: 76px;
  background-color: ${(props) => props.theme.black};
  color: ${(props) => props.theme.white.light};
  border-radius: 10px 10px 30px 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 25px;
  line-height: 160%;
  user-select: none;
  span {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    position: absolute;
    bottom: -20px;
    background-color: black;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media ${(props) => props.theme.device.tablet} {
    width: 200px;
    height: 60px;
    font-size: 24px;
    span {
      width: 40px;
      height: 40px;
      img {
        width: 15px;
      }
    }
  }
  @media ${(props) => props.theme.device.mobile} {
    width: 200px;
    height: 55px;
    font-size: 20px;
    span {
      width: 30px;
      height: 30px;
      img {
        width: 10px;
      }
    }
  }
`;

const SnsBox = styled.div`
  position: absolute;
  z-index: 2;
  bottom: 50px;
  right: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  a {
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
    background-color: black;
    border-radius: 11px;
  }
  @media ${(props) => props.theme.device.tablet} {
  }
  @media ${(props) => props.theme.device.mobile} {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    bottom: 80px;
    a {
      width: 40px;
      height: 40px;
      margin-right: 0px;
      margin-bottom: 5px;
    }
  }
`;

const SnsSvg = styled(motion.svg)``;

const Variants = {
  initial: {
    y: 10,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
  whileHover: {
    y: -10,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
};

const FirstSection = () => {
  const onClick = () => {
    window.scrollTo({ top: 1100, behavior: "smooth" });
  };
  return (
    <Wrapper>
      <Container>
        <MoveBtn
          variants={Variants}
          initial="initial"
          animate="animate"
          whileHover="whileHover"
          onClick={onClick}
        >
          버디즈 보러가기
          <span>
            <img src={env.PUBLIC_URL + "/assets/icons/down.png"} alt="down" />
          </span>
        </MoveBtn>
        <SnsBox>
          <a target="blank_" href="https://ko-kr.facebook.com/mapoguoffice">
            <SnsSvg
              width="15"
              height="29"
              viewBox="0 0 15 29"
              fill="white"
              xmlns="http://www.w3.org/2000/svg"
            >
              <motion.path d="M14.017 16.3125L14.7949 11.0642L9.93144 11.0642V7.65838C9.93144 6.22254 10.6108 4.82295 12.789 4.82295H15V0.35457C15 0.35457 12.9936 0 11.0752 0C7.07005 0 4.45208 2.51371 4.45208 7.06422L4.45208 11.0642H0L0 16.3125H4.45208L4.45208 29H9.93144V16.3125H14.017Z" />
            </SnsSvg>
          </a>
          <a target="blank_" href="https://pf.kakao.com/_xfjqgj">
            <SnsSvg
              width="29"
              height="29"
              viewBox="0 0 29 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.6136 11.1469V15.7493C17.6136 15.8658 17.523 15.9565 17.4065 15.9565H16.6685C16.5973 15.9565 16.5326 15.9176 16.5002 15.8723L14.39 13.0241V15.7558C14.39 15.8723 14.2993 15.9629 14.1828 15.9629H13.4449C13.3283 15.9629 13.2377 15.8723 13.2377 15.7558V11.1534C13.2377 11.0368 13.3283 10.9462 13.4449 10.9462H14.1763C14.2411 10.9462 14.3123 10.9786 14.3446 11.0368L16.4549 13.885V11.1534C16.4549 11.0368 16.5455 10.9462 16.6621 10.9462H17.4C17.5165 10.9397 17.6136 11.0368 17.6136 11.1469ZM12.3056 10.9397H11.5676C11.4511 10.9397 11.3605 11.0304 11.3605 11.1469V15.7493C11.3605 15.8658 11.4511 15.9565 11.5676 15.9565H12.3056C12.4221 15.9565 12.5127 15.8658 12.5127 15.7493V11.1469C12.5127 11.0368 12.4221 10.9397 12.3056 10.9397ZM10.5255 14.7978H8.51228V11.1469C8.51228 11.0304 8.42166 10.9397 8.30514 10.9397H7.56719C7.45068 10.9397 7.36005 11.0304 7.36005 11.1469L7.36005 15.7493C7.36005 15.8076 7.37947 15.8529 7.41831 15.8917C7.45715 15.9241 7.50246 15.95 7.56072 15.95H10.519C10.6355 15.95 10.7261 15.8594 10.7261 15.7429V15.0049C10.7261 14.8949 10.6355 14.7978 10.5255 14.7978ZM21.4975 10.9397H18.5393C18.4292 10.9397 18.3321 11.0304 18.3321 11.1469V15.7493C18.3321 15.8594 18.4228 15.9565 18.5393 15.9565H21.4975C21.6141 15.9565 21.7047 15.8658 21.7047 15.7493V15.0114C21.7047 14.8949 21.6141 14.8042 21.4975 14.8042H19.4844V14.0275H21.4975C21.6141 14.0275 21.7047 13.9368 21.7047 13.8203V13.0759C21.7047 12.9594 21.6141 12.8688 21.4975 12.8688H19.4844V12.092H21.4975C21.6141 12.092 21.7047 12.0013 21.7047 11.8848V11.1469C21.6982 11.0368 21.6076 10.9397 21.4975 10.9397ZM29 5.28862L29 23.7567C28.9935 26.6567 26.6178 29.0065 23.7114 29L5.24331 29C2.34331 28.9935 -0.00645987 26.6114 1.33423e-05 23.7114L1.33423e-05 5.24331C0.00648655 2.34331 2.38863 -0.00645987 5.28862 1.33423e-05L23.7567 1.33423e-05C26.6567 0.00648655 29.0065 2.38215 29 5.28862ZM25.0125 13.2248C25.0125 8.49934 20.2741 4.65425 14.4547 4.65425C8.63527 4.65425 3.89688 8.49934 3.89688 13.2248C3.89688 17.4583 7.65135 21.0056 12.7263 21.6788C13.9627 21.9442 13.8203 22.3973 13.542 24.0609C13.4967 24.3263 13.3284 25.1031 14.4547 24.6306C15.581 24.158 20.533 21.0509 22.7533 18.5004C24.281 16.8174 25.0125 15.115 25.0125 13.2248Z"
                fill="white"
              />
            </SnsSvg>
          </a>
          <a
            target="blank_"
            href="https://www.instagram.com/accounts/login/?next=/mapogu_official/"
          >
            <SnsSvg
              width="29"
              height="29"
              viewBox="0 0 29 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.06477 14.4968C7.06477 18.6114 10.3844 21.9303 14.5 21.9303C18.6156 21.9303 21.9352 18.6114 21.9352 14.4968C21.9352 10.3821 18.6156 7.06319 14.5 7.06319C10.3844 7.06319 7.06477 10.3821 7.06477 14.4968ZM19.3339 14.4968C19.3339 17.1558 17.1661 19.3296 14.5 19.3296C11.8339 19.3296 9.66613 17.1622 9.66613 14.4968C9.66613 11.8313 11.8339 9.66397 14.5 9.66397C17.1661 9.66397 19.3339 11.8378 19.3339 14.4968ZM6.76063 5.02526C7.72481 5.02526 8.49487 5.80161 8.49487 6.75912C8.49487 7.72309 7.71834 8.49297 6.76063 8.49297C5.80291 8.49297 5.02639 7.71662 5.02639 6.75912C5.02639 5.80161 5.80291 5.02526 6.76063 5.02526ZM8.52075 0.101894C6.19765 0.211876 4.13985 0.742386 2.44444 2.44389C0.749024 4.13893 0.218398 6.19626 0.101919 8.51885C-0.0339728 10.9126 -0.0339729 18.0874 0.101919 20.4811C0.211927 22.7973 0.742553 24.8546 2.43797 26.5561C4.13338 28.2576 6.19117 28.7817 8.51428 28.8981C10.9086 29.034 18.085 29.034 20.4792 28.8981C22.8024 28.7881 24.8601 28.2576 26.5556 26.5561C28.251 24.8546 28.7816 22.8037 28.8981 20.4811C29.034 18.0874 29.034 10.9126 28.8981 8.51885C28.7881 6.19626 28.2574 4.13893 26.5556 2.44389C24.8601 0.748856 22.8024 0.218346 20.4792 0.101895C18.085 -0.0339678 10.915 -0.0339678 8.52075 0.101894ZM23.0483 3.19437C24.3166 3.699 25.2937 4.6759 25.8049 5.95041C26.562 7.85895 26.3873 12.3877 26.3873 14.4968C26.3873 16.6059 26.5556 21.141 25.8049 23.0431C25.3002 24.3112 24.323 25.2881 23.0483 25.7992C21.1393 26.5561 16.6096 26.3814 14.5 26.3814C12.3904 26.3814 7.85423 26.5496 5.95175 25.7992C4.68342 25.2945 3.70629 24.3176 3.19508 23.0431C2.43797 21.1346 2.61269 16.6059 2.61269 14.4968C2.61269 12.3877 2.44444 7.85248 3.19508 5.95041C3.69982 4.68237 4.67695 3.70546 5.95175 3.19437C7.86071 2.43742 12.3904 2.6121 14.5 2.6121C16.6096 2.6121 21.1458 2.43742 23.0483 3.19437Z"
                fill="white"
              />
            </SnsSvg>
          </a>
        </SnsBox>
      </Container>
    </Wrapper>
  );
};

export default FirstSection;
