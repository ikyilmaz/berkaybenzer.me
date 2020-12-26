import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    font: {
      families: {
        montserrat: string;
      }
      desktop: {
        paragraph: {
          weight: string;
          size: string;
        };

        heading: {
          weight: string;
          size: string;
        };

        subHeading: {
          weight: string;
          size: string;
        };
      };

      mobile: {
        paragraph: {
          weight: string;
          size: string;
        };

        heading: {
          weight: string;
          size: string;
        };

        subHeading: {
          weight: string;
          size: string;
        };
      };
    };

    palette: {
      primaryDark: string;
      primaryLight: string;
      primaryGradient: string;

      //   secondary: string;
      //   tertiary: string;

      black: string;
      white: string;
    };

    media: {
      navWidth: string;
    };
  }
}
