import { css, Global } from "@emotion/react";

export const globalStyles = (
    <Global
        styles={css`
            html,
            body {
                width: 100vw;
                height: 100vh;
                font-size: 16px;
            }
        `}
    />
);
