import styled from "styled-components";
import Goods_Item from "../components/Goods_Item";
import NavBar from "../components/NavBar";
import { dummy_data } from "../utils/dummy";

const env = process.env;
env.PUBLIC_URL = env.PUBLIC_URL || "";

const Wrapper = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  margin-top: 100px;
`;

const ShopContainer = styled.div`
  width: 70vw;
  margin-bottom: 100px;
  h1 {
    font-size: 25px;
    margin-bottom: 10px;
  }
`;

const ShopList = styled.div`
  display: grid;
  gap: 15px;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-template-rows: repeat(auto-fill, minmax(350px));
`;

const Goods = () => {
  return (
    <Wrapper>
      <NavBar />
      <ShopContainer>
        <h1>굿즈 카테고리 1</h1>
        <ShopList>
          {dummy_data.map((data, index) => (
            <Goods_Item
              key={index}
              img={data.img}
              name={data.name}
              description={data.description}
              category={data.category}
            ></Goods_Item>
          ))}
        </ShopList>
      </ShopContainer>
      <ShopContainer>
        <h1>굿즈 카테고리 2</h1>
        <ShopList>
          {dummy_data.map((data, index) => (
            <Goods_Item
              key={index}
              img={data.img}
              name={data.name}
              description={data.description}
              category={data.category}
            ></Goods_Item>
          ))}
        </ShopList>
      </ShopContainer>
    </Wrapper>
  );
};

export default Goods;
