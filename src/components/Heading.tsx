import React from "react";
import {
  RiInstagramLine,
  RiSoundcloudLine,
  RiTwitterLine,
} from "react-icons/all";
import gsap, { Power3 } from "gsap";
import styled from "styled-components";

const Header = styled.header(
  ({ theme }) => `
    min-height: 100vh;
    background-color: ${theme.palette.black};
    color: ${theme.palette.white};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
);

const HeadingWrapper = styled.div`
  width: 80%;
`;

const HeadingText = styled.h1(
  ({ theme }) => `
    font-weight: ${theme.font.desktop.heading.weight};
    font-size: ${theme.font.desktop.heading.size};
    text-align: center;
    background: ${theme.palette.primaryDark};
    background: ${theme.palette.primaryGradient};
    color: ${theme.palette.white};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    @media screen and (max-width: 992px) {
        font-size: ${theme.font.mobile.heading};
    }
`
);

const HeadingUnderline = styled.div(
  ({ theme }) => `
    width: 100%;
    height: 1px;
    background: ${theme.palette.primaryDark};
    background: ${theme.palette.primaryGradient};
    margin-top: 0.7rem;
    margin-bottom: 1rem;
`
);

const SocialWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const SocialLink = styled.a.attrs(({ href }) => ({
  href,
  target: "_blank",
  rel: "noreferrer",
}))(
  ({ theme }) => `
  text-decoration: none;
  color: currentColor;
`
);

const SocialIconWrapper = styled.div(
  ({ theme }) => `
    padding-left: 1rem;
    padding-right: 1rem;
    font-size: 2rem;
`
);

export const Heading: React.FC = () => {
  const headingRef = React.useRef<HTMLHeadingElement>(null);
  const headingUnderlineRef = React.useRef<HTMLDivElement>(null);
  const instagramRef = React.useRef<HTMLAnchorElement>(null);
  const twitterRef = React.useRef<HTMLAnchorElement>(null);
  const soundCloudRef = React.useRef<HTMLAnchorElement>(null);

  const [tl] = React.useState(gsap.timeline({ delay: 0.5 }));

  React.useEffect(() => {
    tl.from([headingRef.current], {
      y: 30,
      opacity: 0,
      ease: Power3.easeInOut,
      duration: 1.5,
    })
      .from([headingUnderlineRef.current], {
        y: 30,
        scaleX: 0,
        opacity: 0,
        delay: -1.4,
        ease: Power3.easeInOut,
        duration: 1.5,
      })
      .from([instagramRef.current, twitterRef.current, soundCloudRef.current], {
        y: 30,
        opacity: 0,
        ease: Power3.easeInOut,
        stagger: 0.2,
        delay: -1.2,
        duration: 1,
      });
  }, [tl]);

  return (
    <Header>
      <HeadingWrapper>
        <HeadingText ref={headingRef}>Berkay Benzer</HeadingText>
        <HeadingUnderline ref={headingUnderlineRef} />
      </HeadingWrapper>
      <SocialWrapper>
        <SocialLink
          ref={instagramRef}
          href={"https://instagram.com/berkayybenzer"}
        >
          <SocialIconWrapper>
            <RiInstagramLine />
          </SocialIconWrapper>
        </SocialLink>
        <SocialLink
          ref={twitterRef}
          href={"https://twitter.com/BerkayBenzer262"}
        >
          <SocialIconWrapper>
            <RiTwitterLine />
          </SocialIconWrapper>
        </SocialLink>
        <SocialLink
          ref={soundCloudRef}
          href={"https://soundcloud.com/berkay-benzer-172219444"}
        >
          <SocialIconWrapper>
            <RiSoundcloudLine />
          </SocialIconWrapper>
        </SocialLink>
      </SocialWrapper>
    </Header>
  );
};
