import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    max-width: 1190px;
    margin: 0 auto;
`

export const StyledLink = styled.a`
    cursor: pointer;
    position: relative;
    display: inline-block;
    margin: 30px 0;
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
`