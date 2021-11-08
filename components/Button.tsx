import React from 'react'
import styled from 'styled-components'

interface StyledButtonProps {
    secondary?: boolean;
    padding?: string;
}

const StyledButton = styled.button<StyledButtonProps>`
    cursor: pointer;
    background: ${({ secondary }) => secondary ? '#eaeaea' : 'black'};
    color: ${({ secondary }) => secondary ? 'black' : 'white'};;
    padding: ${({ padding }) => padding ? padding: '15px 20px'};
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
    padding?: string;
}

function Button({ label, secondary, padding }: ButtonProps) {
    return (
        <StyledButton secondary={secondary} padding={padding}>
            {label}
        </StyledButton>
    )
}

export default Button
