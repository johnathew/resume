import styled from "styled-components";
import instaIcon from "../assets/instagram.png";
import githubIcon from "../assets/GitHub.png";
import linkedinIcon from "../assets/LinkedIn.png";

const Nav = styled.nav`
  height: 2rem;
  padding: 1rem;
  background-color: #737573;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  border: 5px solid rgba(0, 0, 0, 0.2);
  font-size: 20px;
  border-radius: 12px;
`;

const MainNav = styled.ul`
  list-style-type: none;
  padding: 2px;
  @media (min-width: 768px) {
    display: flex !important;
    margin-right: 30px;
    flex-direction: row;
  }
`;
const NavLi = styled.li`
  text-align: center;
  padding: 4px;
`;

const IconImg = styled.img`
  width: 40px;
  height: 38px;
`;

const NavDiv = styled.div``;

const Navbar = () => {
  return (
    <Nav>
      John's Resume
      <MainNav>
        <NavLi>
          <a href="https://www.instagram.com/johnathew_k/">
            <IconImg src={instaIcon} alt="instagram_icon" />
          </a>
        </NavLi>
        <NavLi>
          <a href="https://github.com/johnathew">
            <IconImg src={githubIcon} alt="gitHub_icon" />
          </a>
        </NavLi>
        <NavLi>
          <IconImg src={linkedinIcon} alt="linkedIn_icon" />
        </NavLi>
      </MainNav>
    </Nav>
  );
};
export default Navbar;
