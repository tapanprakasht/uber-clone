import { StyledReservation, Container, GridContainer, ReservationItem, UInput } from "./Reservartion.styled"
import Button from "./Button"

function Reservation() {
    return (
        <StyledReservation>
            <Container>
                <GridContainer>
                    <img src="/images/reservation.png" height='700px' alt="" />
                    <ReservationItem>
                        <h1>Reserve a ride in advance</h1>
                        <p>Complete your plans today by reserving a ride. Request a ride up to 30 days in advance, at any time and on any day of the year.</p>
                        <a href=""><span>Learn about Uber Reserve</span></a>
                        <h3>Destination</h3>
                        <UInput placeholder='Where from?'/>
                        <UInput placeholder='Where to?'/>
                        <br/>
                        <h3>Choose date and time</h3>
                        <div>
                            <UInput placeholder='2021/10/26'/>
                            <UInput placeholder='10:14 PM'/>
                        </div>
                        <br/>
                        <Button label="Reserve a ride"/>
                        <span>Reserve may not be available for your pickup location</span>
                    </ReservationItem>
                </GridContainer>
            </Container>
        </StyledReservation>
    )
}

export default Reservation
