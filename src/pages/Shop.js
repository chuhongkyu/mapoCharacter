import styled from "styled-components";
import { mapoCharacterData } from "../utils/mapoCharacterData";

const ShopContainer = styled.div`
  width: 90%;
  height: 90%;
  background-color: rgba(255, 255, 255, 0.5);
  padding: 10px;
  position: absolute;
  z-index: 10;
  border-radius: 5%;
`;

function Shop() {
  return (
    <ShopContainer>
      <div>
        <h1>Shop</h1>
      </div>
    </ShopContainer>
  );
}

export default Shop;
