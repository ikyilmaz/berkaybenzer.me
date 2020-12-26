import React from "react";
import { useTranslation } from "react-i18next";
import gsap, { Expo } from "gsap";
import styled from "styled-components";
import { Link } from "react-scroll";

const Nav = styled.nav(
  ({ theme }) => `
    position: fixed;
    height: 100vh;
    width: ${theme.media.navWidth};
    background: ${theme.palette.black};
    flex: 5;
    top: 0;
    right: 0;

    @media screen and (max-width: 992px) {
        border-left: 1px solid ${theme.palette.primaryDark};
    }
`
);

const NavList = styled.ul`
  height: 100%;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const NavListItem = styled.li`
  display: block;
  padding: 0.2rem 0.4rem;
  transform-origin: center;
  transform: rotate(90deg);
`;

const NavLinkWrapper = styled.div(
  ({ theme }) => `
    & > a {
      text-decoration: none;
      font-size: ${theme.font.desktop.paragraph.size};
      background: ${theme.palette.primaryDark};
      background: ${theme.palette.primaryGradient};
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
`
);

export const NavBar: React.FC = () => {
  const navRef = React.useRef<HTMLElement>(null);
  const [t] = useTranslation();
  const [tl] = React.useState(gsap.timeline());

  const scrollDuration = 1000;

  React.useEffect(() => {
    tl.from([navRef.current], {
      x: 200,
      ease: Expo.easeInOut,
      opacity: 0,
      duration: 1.5,
      delay: 1,
    });
  }, [tl]);

  return (
    <Nav ref={navRef}>
      <NavList>
        <NavListItem>
          <NavLinkWrapper>
            <Link to="musics" spy={true} smooth duration={scrollDuration}>
              {t("navigation.music")}
            </Link>
          </NavLinkWrapper>
        </NavListItem>

        <NavListItem>
          <NavLinkWrapper>
            <Link to="about-me" spy={true} smooth duration={scrollDuration}>
              {t("navigation.aboutMe")}
            </Link>
          </NavLinkWrapper>
        </NavListItem>

        <NavListItem>
          <NavLinkWrapper>
            <Link to="contact" spy={true} smooth duration={scrollDuration}>
              {t("navigation.contact")}
            </Link>
          </NavLinkWrapper>
        </NavListItem>
      </NavList>
    </Nav>
  );
};
