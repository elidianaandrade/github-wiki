import  { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    :root {
        --gray-600: #22272e;
        --white: #FFFFFF;
    }

    *, body{
        margin: 0;
        padding: 0;
    }

    body {
        background-color: var(--gray-600);
        color: var(--white);
        font-family: 'Arial';
    }

    a {
        text-decoration: none;
    }
`