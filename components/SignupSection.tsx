import { GridItem, StyledSignupSection, SignupGridContainer } from './styles/SignupSection.styled'
import { Container } from './styles/Utils'
import { FaArrowRight } from 'react-icons/fa';

export default function SignupSection() {
    return (
        <StyledSignupSection>
            <Container>
                <SignupGridContainer>
                    <GridItem>
                        <h1>Sign up to drive</h1>
                        <FaArrowRight/>
                    </GridItem>
                    <GridItem>
                        <h1>Sign up to ride</h1>
                        <FaArrowRight/>
                    </GridItem>
                </SignupGridContainer>
            </Container>
        </StyledSignupSection>
    )
}
