import styled, { css } from "styled-components";
import { GridItem, SignupGridContainer } from './SignupSection.styled';

export const StyledHeader = styled.nav`
    background: ${({ theme}) => theme.colors.background_color };
    color: ${({ theme}) => theme.colors.primary_text_color };;
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

const sharedButtonStyle = css`
    border-radius: 50%;
    padding: 13px;
`
export const SecondaryMenuContainer = styled.ul`
    & > li:last-child {
        display: none;
    }
    @media screen and (max-width: 1300px) {
        & > li {
            display: none !important;
        }
        & > li:nth-child(4), li:last-child {
            display: flex !important;
            align-items: center;
        }
        & > li:last-child {
            ${sharedButtonStyle}
        }
        & > li:nth-child(3) {
            border-radius: 50%;
            display: flex !important;
            align-items: center;
            ${sharedButtonStyle}

            & > span {
                display: none;
            }
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
    isInvert?: boolean;
    isSelected?: boolean;
}

const backgroundColorRoundedButton = (isInvert: boolean | undefined, isSelected: boolean | undefined, theme: any) => {
    if (isInvert) {
        if(isSelected) {
            return theme.colors.invert_hover_background_color;
        } else {
            return theme.colors.invert_background_color;
        }
    } else {
        if(isSelected) {
            return theme.colors.selected_background_color;
        } else {
            return theme.colors.background_color;
        }
    }
}

const hoverBackgroundColorRoundedButton = (isInvert: boolean | undefined, isSelected: boolean | undefined, theme: any) => {
    if (isInvert) {
        if(isSelected) {
            return theme.colors.invert_hover_background_color;
        } else {
            return theme.colors.invert_hover_background_color;
        }
    } else {
        if(isSelected) {
            return theme.colors.selected_background_color;
        } else {
            return theme.colors.hover_background_color;
        }
    }
}

export const RoundedButton = styled.li<RoundedButtonProps>`
    cursor: pointer;
    padding: 10px 15px;
    font-size: 14px;
    font-weight: 600;
    border-radius: 500px;
    margin: 0 3px;
    color: ${({ isInvert, theme }) => isInvert ? theme.colors.invert_text_color: theme.colors.primary_text_color };
    /* background: ${({ isInvert, theme }) => isInvert ? theme.colors.invert_background_color : theme.colors.background_color }; */
    background: ${({ isInvert, isSelected, theme }) => backgroundColorRoundedButton(isInvert, isSelected, theme) };

    &:hover {
        color: ${({ isInvert, theme }) => isInvert ? theme.colors.invert_text_color: theme.colors.primary_text_color };
        background: ${({ isInvert, isSelected, theme }) => hoverBackgroundColorRoundedButton(isInvert, isSelected, theme) };
        transition: 0.2s ease-in;
    }

    &:focus {
        background: #424242;
    }
`

export const RoundedIconButton = styled(RoundedButton)`
    display: flex;
    align-items: center;

    & > span {
        padding-left: 10px;
    }
`

///// Language Menu

export const StyledLanguageMenu = styled.div`
    display: flex;
    flex-direction: column;

    h1 {
        font-size: 36px;
    }

    @media screen and (max-width: 1300px) {
        margin-top: 30px;
        h1 {
            font-size: 28px;
        }
    }
`
/// Login and Signup Menu
export const MenuGridContainer = styled(SignupGridContainer)`
    grid-gap: 20px;
`
export const MenuGridItem = styled(GridItem)`
    font-size: 20px;
    @media screen and (max-width: 1300px) {
        h1 {
            font-size: 28px;
        }
    }
`


export const LanguageOptions = styled.div`
    display: flex;
    margin: 40px 0;
    gap: 50px;

    @media screen and (max-width: 1300px) {
        flex-direction: column;
    }
`

/// Main Menu items

export const StyledMainMenu = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
`

export const StyleMenuItem = styled.div`
    cursor: pointer;
    padding: 10px 0;
    h1 {
        font-size: 32px;
        &:hover {
            color: grey;
        }
    }
`