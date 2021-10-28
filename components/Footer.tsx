import {
    StyledFooterSection,
    FlexColumnContainer,
    GridContainer,
    RightFlexItem,
    LeftFlexItem,
    GridItem,
    SocialMediaAndApps,
    GreyButton,
    SocialMedia,
    Languages,
    Apps
} from './styles/Footer.styled';
import { Container } from './styles/Utils';
import {
    FaFacebookSquare,
    FaTwitterSquare,
    FaYoutube,
    FaLinkedin,
    FaInstagram,
    FaMapMarker,
    FaGlobe
} from 'react-icons/fa';

function Footer() {
    return (
        <StyledFooterSection>
            <Container>
                <FlexColumnContainer>
                    <RightFlexItem>
                        <div>Do not sell my info(California)</div>
                        <div>Google Data Policy</div>
                    </RightFlexItem>
                    <LeftFlexItem>
                        <div>Uber</div>
                        <div>Visit Help Center</div>
                    </LeftFlexItem>
                    <GridContainer>
                        <GridItem>
                            <h2>Companay</h2>
                            <ul>
                                <li>About us</li>
                                <li>Out offering</li>
                                <li>Newsroom</li>
                                <li>Investors</li>
                                <li>Blog</li>
                                <li>Careers</li>
                                <li>AI</li>
                                <li>Gift Cards</li>
                            </ul>
                        </GridItem>
                        <GridItem>
                            <h2>Products</h2>
                            <ul>
                                <li>Ride</li>
                                <li>Drive</li>
                                <li>Deliver</li>
                                <li>Eat</li>
                                <li>Uber for Business</li>
                                <li>Uber Freight</li>
                            </ul>
                        </GridItem>
                        <GridItem>
                            <h2>Global citizenship</h2>
                            <ul>
                                <li>Safety</li>
                                <li>Diversity and Inclusion</li>
                            </ul>
                        </GridItem>
                        <GridItem>
                            <h2>Travel</h2>
                            <ul>
                                <li>Airports</li>
                                <li>Cities</li>
                            </ul>
                        </GridItem>
                    </GridContainer>
                    <SocialMediaAndApps>
                        <SocialMedia>
                            <GreyButton><FaFacebookSquare/></GreyButton>
                            <GreyButton><FaTwitterSquare/></GreyButton>
                            <GreyButton><FaYoutube/></GreyButton>
                            <GreyButton><FaLinkedin/></GreyButton>
                            <GreyButton><FaInstagram/></GreyButton>
                        </SocialMedia>
                        <Languages>
                            <div>
                                <FaGlobe/>
                                <span>English</span>
                            </div>
                            <div>
                                <FaMapMarker/>
                                <span>Wichita</span>
                            </div>
                        </Languages>
                        <Apps>
                            <img src="/images/google_play.svg" alt="" />
                            <img src="/images/appstore.svg" alt="" />
                        </Apps>
                    </SocialMediaAndApps>
                </FlexColumnContainer>
            </Container>
        </StyledFooterSection>
    )
}

export default Footer
