import styled from "styled-components";

const Para = styled.p`
  color: white;
  text-align: left;
  font-size: 18px;
  border-radius: 2px;
  padding: 0.1rem;
`;

const AboutMeh2 = styled.h2`
  color: white;
  &:hover {
    color: yellow;
  }
  font-size: 35px;
  text-align: left;
  padding-left: 2px;
`;

const H1Main = styled.h1`
  font-size: 35px;
  text-align: left;
  color: white;
  margin-left: 5px;
  padding: 0.2rem;
  &:hover {
    color: yellow;
  }
`;

const Body = () => {
  return (
    <>
      <AboutMeh2>About Me</AboutMeh2>
      <Para>
        My name is John Kornegay. I am a self taught Web Developer interested in
        a job opportunity. Some of the projects I've made can be found below, as
        well as other job's held.
      </Para>
      <H1Main>Experience</H1Main>
      <Para>
        Sample text goes here. I really dont know where im going with any of
        this. An outline would be helpful, but i'm just trying to generate the
        components for now, just to do something. I'll figure it out as I go.
        I'm still learning so this is all very new to me.
      </Para>
      <Para>
        Sample text goes here. I really dont know where im going with any of
        this. An outline would be helpful, but i'm just trying to generate the
        components for now, just to do something. I'll figure it out as I go.
        I'm still learning so this is all very new to me.
      </Para>
      <Para>
        Sample text goes here. I really dont know where im going with any of
        this. An outline would be helpful, but i'm just trying to generate the
        components for now, just to do something. I'll figure it out as I go.
        I'm still learning so this is all very new to me.
      </Para>
      <Para>
        Sample text goes here. I really dont know where im going with any of
        this. An outline would be helpful, but i'm just trying to generate the
        components for now, just to do something. I'll figure it out as I go.
        I'm still learning so this is all very new to me.
      </Para>
    </>
  );
};

export default Body;
