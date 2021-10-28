import { StyledHeader, Container, Title, RoundedButton, RoundedIconButton } from './styles/Header.styled';
import { FaGlobe, FaUserAlt, FaTh } from 'react-icons/fa';

function Header() {
    return (
        <StyledHeader>
            <Container>
                <ul>
                    <Title>Uber</Title>
                </ul>
                <ul>
                    <RoundedButton>Company</RoundedButton>
                    <RoundedButton>Safety</RoundedButton>
                    <RoundedButton>Help</RoundedButton>
                    <RoundedButton>COVID-19 resources</RoundedButton>
                </ul>
                <ul>
                    <RoundedIconButton><FaGlobe/><span>EN</span></RoundedIconButton>
                    <RoundedIconButton><FaTh/><span>Products</span></RoundedIconButton>
                    <RoundedIconButton><FaUserAlt/><span>Log in</span></RoundedIconButton>
                    <RoundedButton isInvert={true}>Sign up</RoundedButton>
                </ul>
            </Container>
        </StyledHeader>
    )
}

export default Header
