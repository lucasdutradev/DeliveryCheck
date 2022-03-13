import { createGlobalStyle } from "styled-components";

export const GlobalStylesDefault = createGlobalStyle`

    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    h1,h2,h3,h4,h5,h6{
        font-family: 'Sansita Swashed', cursive;
    }
    p, span, button{
        font-family: 'Roboto', sans-serif;
    }
    
    body,html{
        width: 100vw;
        height: 100vh;
    }
    
    :root{
        --primary-purple: #40376E;
        --primary-green: #D4E4BC;
        --white: #fff;
        --white-1: #F9F9F9;
        --blue-1: #55C2FF;
        --gray: #C4C4C4;
        --text-input-color: rgba(0, 0, 0, 0.6);
    }

`;
