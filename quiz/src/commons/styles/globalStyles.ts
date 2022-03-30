import { css } from "@emotion/react";

export const globalStyles = css`
  * {
    margin: 0;
    box-sizing: border-box;
    font-size: 30px;
    font-family: "scifibit";
  }

  @font-face {
    font-family: "scifibit";
    src: url("/fonts/scifibit.ttf");
  }
`;
