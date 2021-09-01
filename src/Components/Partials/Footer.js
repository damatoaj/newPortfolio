import React from 'react';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

const Footer = () => {
        return(
            <Container id="footer">
                    <Row>
                        <a href="https://github.com/damatoaj" target="_blank">
                            <Image className="socialMedia" src="/images/github.svg" />
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
                    </Row>    
            </Container>
        )  
}

export default Footer;