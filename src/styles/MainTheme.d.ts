import "styled-components";

declare module "styled-components" {
  export interface MainTheme {
    colors: {
      primary: string;
      secondary: string;
      tertiary: string;
      neutral: string;
      success: string;
      error: string;
    };

    font: {
      title: string;
      content: string;
      button: string;
    };
  }
}
