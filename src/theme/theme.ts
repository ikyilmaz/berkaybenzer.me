import { DefaultTheme } from "styled-components";

export const theme: DefaultTheme = {
  font: {
    families: {
      montserrat: '"Montserrat", sans-serif',
    },
    desktop: {
      paragraph: {
        weight: "",
        size: "1.7rem",
      },
      heading: {
        weight: "100",
        size: "calc(4rem + 2vmin)",
      },
      subHeading: {
        weight: "",
        size: "calc(3rem + 2vmin)",
      },
    },
    mobile: {
      paragraph: {
        weight: "",
        size: "1.7rem",
      },
      heading: {
        weight: "100",
        size: "calc(3rem + 2vmin)",
      },
      subHeading: {
        weight: "",
        size: "calc(2rem + 2vmin)",
      },
    },
  },
  palette: {
    primaryDark: "#B68013",
    primaryLight: "#E7D07C",
    primaryGradient:
      "linear-gradient(90deg, rgba(231, 208, 124, 1) 0%, rgba(182, 128, 19, 1) 40%, rgba(182, 128, 19, 1) 60%, rgba(231, 208, 124, 1) 100%)",

    black: "#0a0a0a",
    white: "#fafafa",
  },
  media: {
    navWidth: "4rem",
  },
};
