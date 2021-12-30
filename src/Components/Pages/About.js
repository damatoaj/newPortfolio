import React from 'react';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import BigLogo from "../../assests/Authur-logo-big.png";


const About = (props) => {
    return(
        <Container id="about">
            <Row>
                <Image id="bigLogo" src={BigLogo} alt="signature" />
            </Row>
            <Row>
                <p id="aboutMe">
                    An experienced educator and coach,
                    <br/>
                    I bring collaborative leadership to my teams by facilitating direct communication, managing goals/expectations, and being process oriented.
                    <br/>
                    With my background in kinesiology and philosophy, I am equipped with critical thinking and problem solving skills, which deliver excellent outcomes for clients and teammates.
                    <br/>
                    Dedicated, resilient, creative; I am a valuable addition to any team environment.		
                </p>
            </Row>
            <Row>
                <a className="resume" href='../../ArthurDAmatoResume.pdf' download>Download My Resume</a>
            </Row>
        </Container>
    )
}

export default About;