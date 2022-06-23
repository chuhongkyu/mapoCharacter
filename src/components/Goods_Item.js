import styled from "styled-components";

const env = process.env;
env.PUBLIC_URL = env.PUBLIC_URL || "";

const Container = styled.div`
  grid-column: span 1;
  background-color: white;
  padding: 10px;
  img {
    width: 300px;
    height: 200px;
    border: 1px solid black;
  }
  h3 {
    margin-top: 5px;
  }
  p {
    margin-top: 10px;
    margin-bottom: 10px;
  }
  span {
    padding: 4px 20px;
    background-color: RGB(217, 217, 217);
    border-radius: 25px;
    margin-right: 5px;
  }
`;

const Goods_Item = ({ img, name, description, category }) => {
  return (
    <Container>
      <img src={env.PUBLIC_URL + img} alt={name} />
      <h3>{name}</h3>
      <p>{description}</p>
      {category.map((p, index) => (
        <span key={index}>#{p}</span>
      ))}
    </Container>
  );
};

export default Goods_Item;
