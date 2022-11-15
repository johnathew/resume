import styled from "styled-components";

const CardDiv = styled.div`
  border-radius: 10px;
  background-color: #182118;
  max-width: 60rem;
  margin: auto;
  display: flex;
  flex-direction: column;
  border: 2px solid black;
  box-shadow: 0 5px 8px rgba(0, 0, 0, 0.25);
`;


const Card = (props) => {
  return (
      <CardDiv>{props.children}</CardDiv>
  );
};

export default Card;
