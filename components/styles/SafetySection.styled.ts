import styled from "styled-components";

export const StyledSafetySection = styled.section`
    display: flex;

    h1 {
        font-size: 36px;
        font-weight: 600;
    }
`

export const GridContainer = styled.div`
    display: grid;
    grid-column-gap: 40px;
    grid-template-columns: repeat(2, 1fr);
    margin-top: 30px;

    @media screen and (max-width: 480px) {
        grid-template-columns: repeat(1, 1fr);;
    }
`

export const GridItem = styled.div`
    img {
        width: 100%;
    }

    h2 {
        font-size: 18px;
        font-weight: 600;
        padding: 20px 0;
    }

    p {
        font-size: 16px;
        line-height: 24px;
        font-weight: 400;
        padding: 10px 0 10px;
    }

    & > div {
        display: flex;
        gap: 20px;
    }
`