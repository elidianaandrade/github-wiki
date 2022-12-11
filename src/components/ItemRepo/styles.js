import styled from "styled-components";

export const ItemContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: .825rem;
    width: 90%;
    margin: 3rem 0;

    h3 {
        font-size: 1.65rem;
    }

    p {
        font-size: 1rem;
        color: #CCC;
    }

    span {
        display: flex;
        flex-flow: row wrap;
        gap: 1rem; 
    }

    a {
        font-size: 1rem;
        color: #FAFAFA60;
    }

    a.remover {
        color: #FF0000;
    }

    hr {
        font-size: 1rem;
    }
`