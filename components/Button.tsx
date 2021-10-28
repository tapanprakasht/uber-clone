import React from 'react'
import styled from 'styled-components'

interface StyledButtonProps {
    secondary?: boolean;
}

const StyledButton = styled.button<StyledButtonProps>`
    cursor: pointer;
    background: ${({ secondary }) => secondary ? '#eaeaea' : 'black'};
    color: ${({ secondary }) => secondary ? 'black' : 'white'};;
    padding: 15px 20px;
    font-family: UberMoveText;
    font-size: 16px;
    font-weight: 500;
    border: none;
    transition: 0.2s ease;

    &:hover {
        opacity: 0.8;
    }
`
interface ButtonProps {
    label: string,
    secondary?: boolean;
}

function Button({ label, secondary }: ButtonProps) {
    return (
        <StyledButton secondary={secondary}>
            {label}
        </StyledButton>
    )
}

export default Button
