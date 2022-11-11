import styled from "styled-components";

const HeaderDivMain = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: -5px;
  color: white;
`;

const HeaderDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;

const Header = () => {
  return (
    <>
      <HeaderDivMain>
        <HeaderDiv>
          <p>icon</p>
          <p>Home</p>
        </HeaderDiv>
        <HeaderDiv>
          <p>icon</p>
          <p>Projects</p>
        </HeaderDiv>
      </HeaderDivMain>
    </>
  );
};

export default Header;
