import React from "react";
import styled from "styled-components";
import aboutMeBackground from "./../assets/img/music-bg.jpeg";

const Container = styled.section`
  height: 100vh;
  background: url("${aboutMeBackground}");
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  filter: grayscale(100%);
`;

const Heading = styled.h2(
  ({ theme }) => `
    background: ${theme.palette.primaryDark};
    background: ${theme.palette.primaryGradient};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    text-align: center;
    padding-top: 2rem;

    font-size: ${theme.font.desktop.heading.size};
    font-weight: ${theme.font.desktop.heading.weight};
`
);

export const AboutMe: React.FC = () => {
  return (
    <Container>
      <Heading id="about-me">Hakkımda</Heading>
    </Container>
  );
};
