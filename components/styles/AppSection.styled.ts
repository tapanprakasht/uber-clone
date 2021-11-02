import styled from "styled-components";
import { GridContainer } from './SafetySection.styled';

export const StyledAppSection = styled.section`
    display: flex;
    background: ${({ theme}) => theme.colors.grey_background_color };;
    padding: 50px;
    margin-top: 40px;

    h1 {
        font-size: 36px;
    }

    @media screen and (max-width: 1300px) {
        padding: 50px 0px;
        h1 {
            font-size: 25px;
        }
    }
`
export const AppGridContainer = styled(GridContainer)`
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
    background: ${({ theme}) => theme.colors.invert_background_color };
    padding: 30px;
    width: 100%;
    font-size: 24px;
    font-weight: 600;
    border: 1px solid #d9d9d9;

    img {
        width: 150px
    }

    &:hover {
        & > svg {
            transform: translateX(10px);
            transition: transform 0.3s ease;
        }
    }

    @media screen and (max-width: 1300px) {
        img {
            width: 80px
        }
    }
`