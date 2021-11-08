import styled from "styled-components";

export const StyledMenuOverlay = styled.div`
    position: absolute;
    background: white;
    top: 65px;
    bottom: 900px;
    left: 0;
    right:0;
    z-index: 5;
    animation: slidedown 0.2s ease-in forwards;


    @keyframes slidedown {
        0% {
            bottom: 500px;
            opacity: 0.4;
        }
        100% {
            bottom: 0;
            opacity: 1.0;
        }
    }
`

export const CloseButtonContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    padding: 40px;

    @media screen and (max-width: 1300px) {
        display: none;
    }
`

export const CloseButton = styled.div`
    cursor: pointer;
    display: flex;
    padding: 10px;
    border-radius: 50%;
    font-size: 32px;
    &:hover {
        background: #f4f4f4;
    }
`