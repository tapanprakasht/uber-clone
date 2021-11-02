import styled from "styled-components";

interface StyledMainContentProps {
    height: string;
}

export const StyledMainContent = styled.section<StyledMainContentProps>`
    display: flex;
    position: relative;
    height: ${({ height }) => height};

    & > img {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        object-fit: cover;
        width: 100%;
        height: 100%;
    }

    @media screen and (max-width: 1300px) {
        display: flex;
        flex-direction: column;
        height: initial;

        & > img {
            position: static;
        }
    }
`

export const UberProducts = styled.div`
    position: absolute;
    top: 50px;
    left: 250px;
    width: 550px;
    background: ${({ theme}) => theme.colors.invert_background_color };
    z-index: 1;

    @media screen and (max-width: 1300px) {
        /* top: 0;
        left: 0;
        right: 0;
        width: 100%; */
        position: static;
    }
`

export const NavBar = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: ${({ theme}) => theme.colors.invert_background_color };
    height: 120px;
    padding: 0 80px;
    border-bottom: 1px solid #eaeaea;

    @media screen and (max-width: 1300px) {
        justify-content: flex-start;
        padding: 0 10px;
    }
`
interface NavBarItemProps {
    isSelected?: boolean;
}

export const NavBarItem = styled.div<NavBarItemProps>`
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #fefefe;
    height: 100%;
    width: 60px;
    border-bottom: 5px solid ${({ isSelected }) => isSelected ? 'black': 'white'};
    font-size: 14px;
    font-weight: 500;
    text-align: center;

    img {
        margin-bottom: 10px;
    }

    @media screen and (max-width: 1300px) {
        margin: 0 20px;
    }
`
export const DriveContent = styled.div`
    padding: 20px 50px;

    h1 {
        margin: 30px 0;
        font-family: UberMove;
        font-size: 52px;
        font-weight: 600;

        @media screen and (max-width: 1300px) {
            font-size: 36px;
        }
    }
    p {
        margin: 30px 0;
    }
`

export const EatContent = styled.div`
    padding: 20px 50px 50px;

    h1 {
        margin: 30px 0;
        font-family: UberMove;
        font-size: 52px;
        font-weight: 600;
    }
    p {
        margin: 20px 0;
    }
    a {
        display: inline-block;
        position: relative;
        margin: 0px 10px;
        padding: 5px 0;
        border-bottom: 1px solid #eaeaea;

        &:after {
            position: absolute;
            content: '';
            height: 1px;
            margin: 5px 0;
            width: 0%;
            background: ${({ theme}) => theme.colors.background_color };
            display: block;
            transition: all ease-in-out 0.1s;
        }
        &:hover:after {
            width: 100%;
            background: ${({ theme}) => theme.colors.background_color };
        }
    }
`

export const RideContent = styled.div`
    padding: 20px 50px 50px;

    h1 {
        margin: 30px 0;
        font-family: UberMove;
        font-size: 52px;
        font-weight: 600;
    }
    p {
        margin: 20px 0;
    }
    & > div {
        margin-top: 20px;
        display: flex;
        gap: 20px;
    }
`
