import { StyledMenuOverlay, CloseButtonContainer, CloseButton } from './styles/MenuOverlay.styled';
import { Container } from './styles/Utils';
import { GrClose } from 'react-icons/gr';

interface MenuOverlayProps {
    child: JSX.Element;
    closeOverlay: () => void;
}

function MenuOverlay(props: MenuOverlayProps) {
    return (
        <StyledMenuOverlay>
            <Container>
                <CloseButtonContainer>
                    <CloseButton onClick={props.closeOverlay}>
                        <GrClose/>
                    </CloseButton>
                </CloseButtonContainer>
                { props.child }
            </Container>
        </StyledMenuOverlay>
    )
}

export function MenuOverlayRoot() {
    return <div id="overlayRoot"></div>
}

export default MenuOverlay

