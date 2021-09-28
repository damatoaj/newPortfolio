import React from 'react';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import BigLogo from "../../assests/Authur-logo-big.png";
import DropdownButton from 'react-bootstrap/DropdownButton'


const About = (props) => {
    return(
        <Container>
            <Row>
                <Image id="bigLogo" src={BigLogo} alt="signature" />
            </Row>
            <Row  className="justify-content-md-center">
               
                <Col>
                    <Image id="headshot" src="/images/headshot.jpg" alt="headshot" rounded/>
                </Col>
              
            </Row>
            <Row style={{width:'100%'}}>
                    <DropdownButton id="dropdown-item-button" title="About Me">                                
                        <p id="aboutMe">
                            An experienced educator and coach, 
                            I bring collaborative leadership to my teams by facilitating direct communication, managing goals/expectations, and being process oriented. 
                            With my background in kinesiology and philosophy, I am equipped with critical thinking and problem solving skills, which deliver excellent outcomes for clients and teammates.
                            Dedicated, resilient, creative; I am a valuable addition to any team environment.		
                        </p>
                    </DropdownButton>
            </Row>
            <Row>
                <a className="resume" href='../../ArthurDAmatoResume.pdf' download>Download My Resume</a>
            </Row>
        </Container>
    )
}

export default About;