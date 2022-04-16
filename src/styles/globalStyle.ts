import { createGlobalStyle } from "styled-components";

interface Props {
  theme: {
    color: string;
  };
}

export const GlobalStylesDefault = createGlobalStyle<Props>`

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
    
    body{
        width: 100vw;
        height: 100vh;
        background-color: ${(props) => props.theme.color}
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
