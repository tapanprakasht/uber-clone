import styled from "styled-components";

export const StyledMainContent = styled.section`
    display: flex;
    position: relative;

    & > img {
        width: 100%;
        height: auto;
    }
`

export const UberProducts = styled.div`
    position: absolute;
    top: 50px;
    left: 250px;
    width: 550px;
    /* height: 550px; */
    background: ${({ theme}) => theme.colors.invert_background_color };
`

export const NavBar = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: white;
    height: 120px;
    padding: 0 80px;
    border-bottom: 1px solid #eaeaea;
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
    font-family: UberMoveText;
    font-size: 14px;
    font-weight: 500;
    text-align: center;

    img {
        margin-bottom: 10px;
    }
`
export const DriveContent = styled.div`
    padding: 20px 50px;

    h1 {
        margin: 30px 0;
        font-family: UberMove;
        font-size: 52px;
        font-weight: 600;
    }
    p {
        margin: 30px 0;
    }
`

export const EatContent = styled.div`
    padding: 20px 50px;

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
        position: relative;
        display: inline-block;
        margin: 30px 20px;
        padding: 5px 0;
        border-bottom: 1px solid #eaeaea;

        &:after {
            position: absolute;
            content: '';
            height: 1px;
            margin: 5px 0;
            width: 0%;
            background: black;
            display: block;
            transition: all ease-in-out 0.1s;
        }
        &:hover:after {
            width: 100%;
            background: black;
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
