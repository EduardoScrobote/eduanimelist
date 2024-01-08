import { Theme } from "@/constants/Theme";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body {
    background-repeat: no-repeat;
    background: rgb(0,0,9);
background: linear-gradient(46deg, rgba(0,0,9,1) 26%, rgba(0,18,38,0.9416141456582633) 42%, rgba(0,0,0,1) 75%);
}
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
`;

export default GlobalStyle;
