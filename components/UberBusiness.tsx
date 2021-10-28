import { StyledUberBusiness } from './styles/UberBusiness.styled';
import { Container } from './styles/Utils';

import Button from './Button';

function UberBusiness() {
    return (
        <StyledUberBusiness>
            <Container>
                <h1>Uber for Business</h1>
                <p>Transform the way your company moves and feeds its people.</p>
                <Button label="See how"/>
            </Container>
        </StyledUberBusiness>
    )
}

export default UberBusiness
