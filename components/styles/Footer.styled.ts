import styled from "styled-components";

export const StyledFooterSection = styled.div`
    display: flex;
    background: black;
    color: white;
`
export const FlexColumnContainer = styled.div`
    display: flex;
    flex-direction: column;
    font-family: UberMoveText;
`
export const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    margin-top: 30px;

    @media screen and (max-width: 1300px) {
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 40px;
    }
`

export const GridItem = styled.div`
    h2 {
        font-size: 20px;
        margin-bottom: 20px;
    }
    ul {
        list-style: none;

        li {
            cursor: pointer;
            padding: 10px 0;
            font-size: 14px;

            &:hover {
                color: #a8a8a8;
            }
        }
    }
`

export const FlexItem = styled.div`
    padding: 20px 0;
    font-size: 14px;
    & > div {
        padding: 5px 0;
    }
`

export const RightFlexItem = styled(FlexItem)`
    align-self: flex-end;
`

export const LeftFlexItem = styled(FlexItem)`
    align-self: flex-start;

    & > div:first-child {
        font-family: UberMoveText;
        font-size: 24px;
    }
`

export const SocialMediaAndApps = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 50px 0 ;

    @media screen and (max-width: 1300px) {
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        gap: 40px;
    }
`

export const GreyButton = styled.div`
    cursor: pointer;
    padding: 10px;
    &:hover {
        background: #262626;
        transition: 0.3s ease;
    }
`

export const SocialMedia = styled.div`
    display: flex;
    gap: 20px;
`
export const Languages = styled.div`
    display: flex;
    flex-direction: row;
    font-size: 14px;
    flex: 1;
    padding-left: 40px;

    & > div {
        cursor: pointer;
        display: flex;
        align-items: center;
        padding: 10px;

        span {
            padding-left: 10px;
        }
        &:hover {
            background: #262626;
            transition: 0.3s ease;
        }
    }

    @media screen and (max-width: 1300px) {
       padding-left: 0px;
    }
`

export const Apps = styled.div`
    /* background: red; */
    img {
        width: 200px;
        height: 50px;
        padding-left: 10px;
    }

    @media screen and (max-width: 1300px) {
        transform: translateX(-10px);
    }
`