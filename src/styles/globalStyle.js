import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizign: border-box;
    }

    ul, ol, li {
        list-style-type: none;
    }

    button { 
        cursor: pointer;
    }

   

`;
