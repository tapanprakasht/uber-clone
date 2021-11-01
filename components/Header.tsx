import {
    StyledHeader,
    Container,
    Title,
    RoundedButton,
    RoundedIconButton,
    TitleContainer,
    PrimaryMenuContainer,
    SecondaryMenuContainer
} from './styles/Header.styled';
import { FaGlobe, FaUserAlt, FaTh } from 'react-icons/fa';

function Header() {
    return (
        <StyledHeader>
            <Container>
                <TitleContainer>
                    <Title>Uber</Title>
                </TitleContainer>
                <PrimaryMenuContainer>
                    <RoundedButton>Company</RoundedButton>
                    <RoundedButton>Safety</RoundedButton>
                    <RoundedButton>Help</RoundedButton>
                    <RoundedButton>COVID-19 resources</RoundedButton>
                </PrimaryMenuContainer>
                <SecondaryMenuContainer>
                    <RoundedIconButton><FaGlobe/><span>EN</span></RoundedIconButton>
                    <RoundedIconButton><FaTh/><span>Products</span></RoundedIconButton>
                    <RoundedIconButton><FaUserAlt/><span>Log in</span></RoundedIconButton>
                    <RoundedButton isInvert={true}>Sign up</RoundedButton>
                </SecondaryMenuContainer>
            </Container>
        </StyledHeader>
    )
}

export default Header
