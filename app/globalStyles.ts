import { Theme } from "@/constants/Theme";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body {
    padding: 0;
    margin: 0;
    background: ${Theme.colors.black};
    color: ${Theme.colors.white};
}
`;

export default GlobalStyle;
