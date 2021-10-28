import Image from 'next/image'
import { useState } from 'react';
import { StyledMainContent, UberProducts, NavBar, NavBarItem, DriveContent, EatContent, RideContent } from './styles/MainContent.styled'
import { UInput } from './Reservartion.styled';
import Button from './Button';
import { StyledLink } from './styles/Utils';

function MainContent() {
    const [selectedIndex, setSelectedIndex] = useState<number>(1);
    const options = [
        {
            id: 1,
            banner:'/images/banner1.jpeg',
            icon: "/images/deliver.svg",
            text: 'Drive or Deliver'
        },
        {
            id: 2,
            banner:'/images/banner2.jpeg',
            icon: "/images/eat.svg",
            text: 'Eat'
        },
        {
            id: 3,
            banner:'/images/banner3.jpeg',
            icon: "/images/ride.svg",
            text: 'Ride'
        },
    ]

    const handleOnClickNavItem = (id: number) => {
        setSelectedIndex(id);
    }
    const bannerImage = options[selectedIndex - 1].banner;
    const getContent = (): JSX.Element => {
        switch(selectedIndex) {
            case 1: return (
                <DriveContent>
                    <h1>Get in the driver's seat and get paid</h1>
                    <p>Drive on the platform with the largest network of active riders.</p>
                    <Button label="Sign up to drive"/><br />
                    <StyledLink>Learn more about driving and delivering</StyledLink>
                </DriveContent>
            );
            case 2: return (
                <EatContent>
                    <h1>Discover delicious eats</h1>
                    <p>Order delivery from restaurants you love.</p>
                    <Button label="Order now"/>
                    <a href="">Own a restaurant? Partner with Uber Eats</a>
                </EatContent>
            )
            default: return (
                <RideContent>
                    <h1>Request a ride now</h1>
                    <UInput placeholder="Enter pickup location"/>
                    <UInput placeholder="Enter destionation"/>
                    <div>
                        <Button label="Request Now"/>
                        <Button label="Schedule for later" secondary={true}/>
                    </div>
                </RideContent>
            )
        }
    }
    return (
        <StyledMainContent>
            <img src={bannerImage} alt='banner'/>
            <UberProducts>
                <NavBar>
                    {
                        options.map(option => {
                            const isSelected = selectedIndex == option.id ? true : false;
                            return (
                                <NavBarItem
                                    key={option.id}
                                    isSelected={isSelected}
                                    onClick={() => handleOnClickNavItem(option.id)}>
                                    <img src={option.icon} alt="" />
                                    <span>{option.text}</span>
                                </NavBarItem>
                            )
                        })
                    }
                </NavBar>
                {getContent()}
            </UberProducts>
        </StyledMainContent>
    )
}

export default MainContent
