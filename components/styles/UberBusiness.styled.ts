import styled from "styled-components";

export const StyledUberBusiness = styled.section`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    background: url('/images/business.png') no-repeat;
    background-size: cover;
    background-position: center center;
    height: 300px;

    h1 {
        font-family: UberMoveText;
        font-size: 36px;
        font-weight: 600;
    }

    p {
        margin: 30px 0;
    }
`