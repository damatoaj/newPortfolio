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
                        <Image href="https://github.com/damatoaj" className="socialMedia" target="_blank" src="/images/GitHub-Logo.png" />
                        <Image href="https://www.instagram.com/thundrousprophet/?hl=en"  className="socialMedia" target="_blank" src="/images/instagram_icon.svg" />

                        <Image href="https://www.linkedin.com/in/arthur-d-amato-45b6b169/" className="socialMedia" target="_blank"  src="/images/linked_in_logo.svg"  />
                        <Image href="https://arthurdamato.wordpress.com/" className="socialMedia" target="_blank" src="/images/wordpress_logo.svg"  />
                    </Col>
            </Container>
        )  
}

export default Footer;