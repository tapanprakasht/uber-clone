import { StyledAppSection, GridItem } from './styles/AppSection.styled';
import { GridContainer } from './styles/SafetySection.styled';
import { Container } from './styles/Utils';
import { FaArrowRight } from 'react-icons/fa';

function AppSection() {
    return (
        <StyledAppSection>
            <Container>
                <h1>There’s more to love in the apps</h1>
                <GridContainer>
                    <GridItem>
                        <img src="/images/driver_app_logo.png" alt="" />
                        <span>Download the Drivers app</span>
                        <FaArrowRight/>
                    </GridItem>
                    <GridItem>
                        <img src="/images/rider_app_logo.png" alt="" />
                        <span>Download the Uber app</span>
                        <FaArrowRight/>
                    </GridItem>
                </GridContainer>
            </Container>
        </StyledAppSection>
    )
}

export default AppSection
