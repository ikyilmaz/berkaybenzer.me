import React from "react";
import gsap, { Expo } from "gsap";
import { Heading } from "./components/Heading";
import { AboutMe } from "./components/AboutMe";
import { NavBar } from "./components/NavBar";
import styled, { ThemeProvider } from "styled-components";
import { theme } from "./theme/theme";
import { Musics } from "./components/Musics";
import { Contact } from "./components/Contact";

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

const AnimationSlide = styled.div<{ color: string }>(
  ({ color }) => `
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  transform-origin: top;
  z-index: 1;
  background: ${color};
`
);

const ContentWrapper = styled.div(({ theme }) => `width: 100%;`);

const NavWrapper = styled.div(
  ({ theme }) => `
    width: ${theme.media.navWidth};
    background: ${theme.palette.black};
`
);

function App() {
  const firstSlideRef = React.useRef<HTMLDivElement>(null);
  const secondSlideRef = React.useRef<HTMLDivElement>(null);
  const [tl] = React.useState(gsap.timeline());

  React.useEffect(() => {
    tl.to([firstSlideRef.current], {
      scaleY: 0,
      ease: Expo.easeInOut,
      duration: 1.5,
    }).to(
      [secondSlideRef.current],
      { scaleY: 0, ease: Expo.easeInOut, duration: 1.5 },
      "-=1.4"
    );
  }, [tl]);

  return (

      <Container>
        <ContentWrapper>
          {/*Right Side Navigation*/}
          <NavBar />
          {/*Right Side Navigation*/}

          {/*Animation*/}
          <AnimationSlide
            color={theme.palette.primaryGradient}
            ref={secondSlideRef}
          />
          <AnimationSlide color={theme.palette.black} ref={firstSlideRef} />
          {/*Animation*/}

          {/*Heading*/}
          <Heading />
          {/*Heading*/}

          {/*Musics*/}
          <Musics />
          {/*Musics*/}

          {/*About Me*/}
          <AboutMe />
          {/*About Me*/}

          {/*Contact*/}
          <Contact />
          {/*Contact*/}
        </ContentWrapper>
        <NavWrapper>
          <NavBar />
        </NavWrapper>
      </Container>
  );
}

export default App;
