import styled from "styled-components";

const Para = styled.p`
  color: white;
  text-align: left;
  font-size: 18px;
  border-radius: 2px;
`;

const AboutMeDiv = styled.div`
color:white;
`


const H1Main = styled.h1`
  font-size: 35px;
  text-align: left;
  color: white;
  margin-left: 5px;
  padding: 0.2rem;
`;

const Body = () => {
  return (
    <>

    <AboutMeDiv><h2>About Me</h2><p>My name is John Kornegay. I am a self taught Web Developer interested in a job opportunity. Some of the projects I've made can be found below, as well as other job's held.
    </p></AboutMeDiv>
    <H1Main>Experience</H1Main>
    <Para>
      Sample text goes here. I really dont know where im going with any of this.
      An outline would be helpful, but i'm just trying to generate the components for now,
      just to do something. I'll figure it out as I go. I'm still learning so
      this is all very new to me.
    </Para>
    <Para>
      Sample text goes here. I really dont know where im going with any of this.
      An outline would be helpful, but i'm just trying to generate the components for now,
      just to do something. I'll figure it out as I go. I'm still learning so
      this is all very new to me.
    </Para>
    <Para>
      Sample text goes here. I really dont know where im going with any of this.
      An outline would be helpful, but i'm just trying to generate the components for now,
      just to do something. I'll figure it out as I go. I'm still learning so
      this is all very new to me.
    </Para>
    <Para>
      Sample text goes here. I really dont know where im going with any of this.
      An outline would be helpful, but i'm just trying to generate the components for now,
      just to do something. I'll figure it out as I go. I'm still learning so
      this is all very new to me.
    </Para>
    </>
    
  );
};

export default Body;
