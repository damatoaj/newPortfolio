import React from 'react';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

const Footer = () => {
        return(
            <div id="footer">
                    <Row>
                        <a href="https://github.com/damatoaj" target="_blank">
                            <Image className="socialMedia" src="/images/github.svg" alt="GitHub"/>
                        </a>
                        <a href="https://www.instagram.com/thundrousprophet/?hl=en" target="_blank">
                            <Image className="socialMedia" src="/images/instagram_icon.svg" alt="Instagram" />
                        </a>
                        <a href="https://www.linkedin.com/in/arthur-d-amato-45b6b169/" target="_blank">
                            <Image  className="socialMedia" src="/images/linked_in_logo.svg" alt="LinkedIn" />
                        </a>
                        <a href="https://arthurdamato.wordpress.com/" target="_blank">
                            <Image className="socialMedia" src="/images/wordpress_logo.svg" alt="WordPress" />
                        </a>
                    </Row>    
            </div>
        )  
}

export default Footer;