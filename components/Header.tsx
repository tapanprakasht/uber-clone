import {
    StyledHeader,
    Container,
    Title,
    RoundedButton,
    RoundedIconButton,
    TitleContainer,
    PrimaryMenuContainer,
    SecondaryMenuContainer,
    StyledLanguageMenu,
    LanguageOptions,
    StyledMainMenu,
    StyleMenuItem,
    MenuGridItem,
    MenuGridContainer
} from './styles/Header.styled';
import Button from './Button';
import { FaGlobe, FaUserAlt, FaTh, FaArrowRight } from 'react-icons/fa';
import { MdOutlineClose } from 'react-icons/md';
import { GiHamburgerMenu } from 'react-icons/gi';
import { overlayManager } from './MenuOverlayManager';
import { useState, useEffect } from 'react';

enum MenuType {
    LANGUAGE,
    LOGIN,
    SIGNUP
}

const mainMenuItems = [
    { id: 1, label: 'Company'},
    { id: 2, label: 'Safety'},
    { id: 3, label: 'Help'},
    { id: 4, label: 'COVID-19 resources'}
]

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const [selectedMenu, setSelectedMenu] = useState<MenuType | null>(null);

    const deselectMenu = () => {
        setSelectedMenu(null);
    }

    const handleOverlayMenuClick = (type: MenuType) => {
        setIsMenuOpen(true);
        switch(type) {
            case MenuType.LANGUAGE: setSelectedMenu(MenuType.LANGUAGE);
                                    overlayManager.show(getLanguagesComponent(), setIsMenuOpen, deselectMenu);
                                    break;
            case MenuType.LOGIN: setSelectedMenu(MenuType.LOGIN);
                                 overlayManager.show(getLoginComponent(), setIsMenuOpen, deselectMenu);
                                 break;
            case MenuType.SIGNUP: setSelectedMenu(MenuType.SIGNUP);
                                  overlayManager.show(getSingupComponent(), setIsMenuOpen, deselectMenu);
                                  break;
        }
    }

    const handleOnClickMenuIcon = () => {
        if (isMenuOpen) {
            overlayManager.closeOverlay();
        } else {
            setIsMenuOpen(true);
            overlayManager.show(getMainMenuComponent(), setIsMenuOpen);
        }
    }

    return (
        <StyledHeader>
            <Container>
                <TitleContainer>
                    <Title>Uber</Title>
                </TitleContainer>
                <PrimaryMenuContainer>
                    { mainMenuItems.map(menuItem => <RoundedButton key={menuItem.id}>{menuItem.label}</RoundedButton>)}
                </PrimaryMenuContainer>
                <SecondaryMenuContainer>
                    <RoundedIconButton isSelected={selectedMenu === MenuType.LANGUAGE ? true : false} onClick={() => handleOverlayMenuClick(MenuType.LANGUAGE)}><FaGlobe/><span>EN</span></RoundedIconButton>
                    <RoundedIconButton><FaTh/><span>Products</span></RoundedIconButton>
                    <RoundedIconButton isSelected={selectedMenu === MenuType.LOGIN ? true : false} onClick={() => handleOverlayMenuClick(MenuType.LOGIN)}><FaUserAlt/><span>Log in</span></RoundedIconButton>

                    <RoundedButton isSelected={selectedMenu === MenuType.SIGNUP ? true : false}  onClick={() => handleOverlayMenuClick(MenuType.SIGNUP)} isInvert={true}>Sign up</RoundedButton>
                    <RoundedButton onClick={handleOnClickMenuIcon} isSelected={isMenuOpen ? true: false}>
                        { isMenuOpen ? <MdOutlineClose/> :  <GiHamburgerMenu/>}
                    </RoundedButton>
                </SecondaryMenuContainer>
            </Container>
        </StyledHeader>
    )
}

const getLanguagesComponent = () => {
    const padding = '15px 100px';
    return (
        <StyledLanguageMenu>
            <h1>Select your preferred language</h1>
            <LanguageOptions>
                <Button label="English" secondary={true} padding={padding}/>
                <Button label="Chinese" secondary={true} padding={padding}/>
                <Button label="Spanish" secondary={true} padding={padding}/>
            </LanguageOptions>
        </StyledLanguageMenu>
    )
}

const getLoginComponent = () => {
    return (
        <MenuGridContainer>
            <MenuGridItem>
                <h1>Sign in to drive &amp; deliver</h1>
                <FaArrowRight/>
            </MenuGridItem>
            <MenuGridItem>
                <h1>Sign in to ride</h1>
                <FaArrowRight/>
            </MenuGridItem>
            <MenuGridItem>
                <h1>Sign in to order delivery with Uber Eats</h1>
                <FaArrowRight/>
            </MenuGridItem>
        </MenuGridContainer>
    )
}

const getSingupComponent = () => {
    return (
        <MenuGridContainer>
            <MenuGridItem>
                <h1>Sign up to drive &amp; deliver</h1>
                <FaArrowRight/>
            </MenuGridItem>
            <MenuGridItem>
                <h1>Create a rider account</h1>
                <FaArrowRight/>
            </MenuGridItem>
            <MenuGridItem>
                <h1>Order delivery with Uber Eats</h1>
                <FaArrowRight/>
            </MenuGridItem>
        </MenuGridContainer>
    )
}

const getMainMenuComponent = () => {
    return (
        <StyledMainMenu>
             { mainMenuItems.map(menuItem => <StyleMenuItem key={menuItem.id}><h1>{menuItem.label}</h1></StyleMenuItem>)}
        </StyledMainMenu>
    )
}
export default Header
