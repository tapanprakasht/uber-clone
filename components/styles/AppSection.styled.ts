import styled from "styled-components";

export const StyledAppSection = styled.section`
    display: flex;
    background: #f4f4f4;
    padding: 50px;
    margin-top: 40px;

    h1 {
        font-family: UberMoveText;
        font-size: 36px;
    }
`

export const GridItem = styled.div`
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: white;
    padding: 30px;
    width: 100%;
    font-family: UberMoveText;
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
`