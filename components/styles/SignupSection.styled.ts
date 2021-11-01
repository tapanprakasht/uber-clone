import styled from "styled-components";
import { GridContainer } from './SafetySection.styled';

export const StyledSignupSection = styled.section`
    display: flex;
`

export const SignupGridContainer = styled(GridContainer)`
    margin-top: 0;
    padding: 50px 0;

    @media screen and (max-width: 1300px) {
       grid-template-columns: 1fr;
       grid-gap: 40px;
    }
`

export const GridItem = styled.div`
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 30px 0;
    border-bottom: 1px solid black;
    font-family: UberMoveText;
    font-size: 23px;

    &:hover {
        & > svg {
            /* transform: translateX(30px); */
        }
    }
`