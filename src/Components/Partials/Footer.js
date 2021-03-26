import React from 'react';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import {Link} from 'react-router-dom';

const Footer = (props) => {
        return(
            <Container id="footer">
                    <Col>
                        <Row>
                            Arthur D'Amato
                        </Row>
                        <Row>
                            Seattle, Washington
                        </Row>
                        <Row>
                            Email: <Link href="mailto:mr.arthurdamato@gmail.com">mr.arthurdamato@gmail.com</Link>
                        </Row>
                    </Col>
                    <Col>
                        <a href="https://github.com/damatoaj" target="_blank">
                            <Image className="socialMedia" src="/images/GitHub-Logo.png" />
                        </a>
                        <a href="https://www.instagram.com/thundrousprophet/?hl=en" target="_blank">
                            <Image className="socialMedia" src="/images/instagram_icon.svg" />
                        </a>
                        <a href="https://www.linkedin.com/in/arthur-d-amato-45b6b169/" target="_blank">
                            <Image  className="socialMedia" src="/images/linked_in_logo.svg"  />
                        </a>
                        <a href="https://arthurdamato.wordpress.com/" target="_blank">
                            <Image className="socialMedia" src="/images/wordpress_logo.svg"  />
                        </a>
                    </Col>
            </Container>
        )  
}

export default Footer;