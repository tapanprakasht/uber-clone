import { FlexItem, FlexRowContainer, StyledAboutSection } from './styles/AboutSection.styled';
import { Container, StyledLink } from './styles/Utils';

function AboutSection() {
    return (
        <StyledAboutSection>
            <FlexRowContainer>
                <FlexItem>
                    <img src="/images/about.png" alt="" />
                    <h3>About us</h3>
                    <p>Find out how we started, what drives us, and how we’re igniting opportunity.</p>
                    <StyledLink>Learn more</StyledLink>
                </FlexItem>
                <FlexItem>
                    <img src="/images/news.png" alt="" />
                    <h3>Newsroom</h3>
                    <p>See announcements about our latest releases, initiatives, and partnerships.</p>
                    <StyledLink>Learn more</StyledLink>
                </FlexItem>
                <FlexItem>
                    <img src="/images/global.png" alt="" />
                    <h3>Global citizenship</h3>
                    <p>Read about our commitment to making a positive impact in the cities we serve.</p>
                    <StyledLink>Learn more</StyledLink>
                </FlexItem>
            </FlexRowContainer>
        </StyledAboutSection>
    )
}

export default AboutSection
