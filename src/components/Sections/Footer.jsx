import styled from "styled-components";

const FooterMain = styled.footer`
    color: white;
    margin-top: 50px;
`

const Footer = () => {
    return( <FooterMain>
        This is the bottom of the page, thank you for perusing my website <br />
        -John Kornegay
    </FooterMain>)
}

export default Footer;