import React from "react";
import styled from "styled-components";

const Container = styled.section(
  ({ theme }) => `
    height: 100vh;
    background: ${theme.palette.black};
    background-size: cover;
    background-attachment: fixed;
    background-position: center;
    filter: grayscale(100%);
`
);

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

export const Contact: React.FC = () => {
  return (
    <Container id="contact">
      <Heading>İletişim</Heading>
    </Container>
  );
};
