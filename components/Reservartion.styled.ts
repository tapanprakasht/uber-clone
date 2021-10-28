import styled from "styled-components";

export const StyledReservation = styled.section`
    display: flex;
`

export const Container = styled.div`
    width: 100%;
    max-width: 1300px;
    margin: 0 auto;
    padding: 80px 0;
`

export const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    justify-items: center;
`

export const ReservationItem = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 70px;

    h1 {
        font-family: UberMoveText;
        font-size: 36px;
        font-weight: 600;
        margin-bottom: 10px;
    }

    h3 {
        font-family: UberMoveText;
        font-size: 18px;
        font-weight: 600;
    }

    p {
        font-family: UberMoveText;
        line-height: 24px;
        margin: 20px 0;
        color: #262626;
    }

    a {
        margin-bottom: 20px;
        span {
            border-bottom: 1px solid grey;
        }
    }

    & > div {
        display: flex;
        gap: 10px;
    }
    & > span {
        font-family: UberMoveText;
        font-size: 14px;
        margin: 10px 0;
        color: #585858;
    }
`

export const UInput = styled.input`
    border: none;
    background: #f4f4f4;
    height: 50px;
    width: 100%;
    font-family: UberMoveText;
    font-size: 16px;
    padding-left: 30px;
    margin: 5px 0;
    &:focus {
        outline: none;
    }
`