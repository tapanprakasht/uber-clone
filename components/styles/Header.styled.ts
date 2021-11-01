import styled from "styled-components";

export const StyledHeader = styled.nav`
    background: black;
    color: white;
    height: 65px;
    display: flex;
    align-items: center;

    ul {
        display: flex;
        list-style: none;
    }
`

export const Container = styled.div`
    max-width: 1300px;
    margin: 0 auto;
    width: 100%;
    display: flex;
    align-items: center;

    & > ul:nth-child(2) {
        flex: 1;
    }

    @media screen and (max-width: 1300px) {
       justify-content: space-between;
       margin: 0 10px;
    }
`

export const TitleContainer = styled.ul`
    margin-left: 20px;
`
export const PrimaryMenuContainer = styled.ul`
    @media screen and (max-width: 1300px) {
        display: none !important;;
    }
`
export const SecondaryMenuContainer = styled.ul`
    @media screen and (max-width: 1300px) {
        & > li {
            display: none !important;
        }
        & > li:last-child {
            display: block !important;
        }
    }
`
export const Title = styled.h1`
    padding-right: 10px;
    font-family: UberMove;
    font-size: 24px;
    font-weight: 400;
`

interface RoundedButtonProps {
    isInvert?: boolean
}

export const RoundedButton = styled.li<RoundedButtonProps>`
    cursor: pointer;
    padding: 10px 15px;
    font-family: UberMoveText;
    font-size: 14px;
    font-weight: 600;
    border-radius: 500px;
    margin: 0 3px;
    color: ${({ isInvert, theme }) => isInvert ? theme.colors.invert_text_color: theme.colors.primary_text_color };
    background: ${({ isInvert, theme }) => isInvert ? theme.colors.invert_background_color : theme.colors.background_color };

    &:hover {
        color: ${({ isInvert, theme }) => isInvert ? theme.colors.invert_text_color: theme.colors.primary_text_color };
        background: ${({ isInvert, theme }) => isInvert ? theme.colors.invert_hover_background_color : theme.colors.hover_background_color };
        transition: 0.2s ease-in;
    }
`

export const RoundedIconButton = styled(RoundedButton)`
    display: flex;
    align-items: center;

    & > span {
        padding-left: 10px;
    }
`