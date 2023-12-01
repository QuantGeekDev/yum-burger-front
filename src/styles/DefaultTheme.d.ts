import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      tertiary: string;
      neutral: string;
      success: string;
      error: string;
    };

    fonts: {
      title: string;
      content: string;
      button: string;
    };
  }
}
