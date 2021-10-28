import { GridItem, StyledSafetySection, GridContainer } from './styles/SafetySection.styled';
import { Container, StyledLink } from './styles/Utils';

function SafetySection() {
    return (
        <StyledSafetySection>
            <Container>
                <h1>Focused on safety, wherever you go</h1>
                <GridContainer>
                    <GridItem>
                        <img src="/images/safety.jpeg" alt="" />
                        <h2>Our commitment to your safety</h2>
                        <p>With every safety feature and every standard in our Community Guidelines, we're committed to helping to create a safe environment for our users.</p>
                        <div>
                            <StyledLink href="">Read about our Community Guidelines</StyledLink>
                            <StyledLink href="">See all safety features</StyledLink>
                        </div>
                    </GridItem>
                    <GridItem>
                        <img src="/images/city.jpeg" alt="" />
                        <h2>Setting 10,000+ cities in motion</h2>
                        <p>The app is available in thousands of cities worldwide, so you can request a ride even when you’re far from home.</p>
                        <StyledLink href="">View all cities</StyledLink>
                    </GridItem>
                </GridContainer>
            </Container>
        </StyledSafetySection>
    )
}

export default SafetySection
