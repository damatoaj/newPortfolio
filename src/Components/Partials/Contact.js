import React from 'react';
import emailjs from 'emailjs-com';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

const Contact = (props) => {

    let sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_hdvtw0d', 'template_m329e48', e.target, 'user_SrWZljC6NSLBG1dPd91JE')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        })
        e.target.reset()
    }

    return( 
        <Container>

            <Form onSubmit={sendEmail} id="contact">
                <Form.Label>Interested in working together? Contact Me Below</Form.Label>
                <Form.Group>
                    <Form.Label htmlFor="name">Name: </Form.Label>
                    <Form.Control 
                        style={{width:'70%'}}
                        name="name"
                        type="text"
                        size="md"
                        id="name"
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label htmlFor="email">Email: </Form.Label>
                    <Form.Control 
                        style={{width:'70%'}}
                        name="email"
                        type="email"
                        size="md"
                        id="email"
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label htmlFor="subject">Subject: </Form.Label>
                    <Form.Control 
                        style={{width:'70%'}}
                        name="subject"
                        type="text"
                        size="lg"
                        id="subject"
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label htmlFor="message">Message: </Form.Label>
                    <Form.Control 
                        style={{width:'70%'}}
                        name="message"
                        as="textarea"
                        rows={4}
                        id="message"
                    />
                </Form.Group>
                <Button 
                    className="projectButton"
                    variant="primary"
                    type="submit"
                    active
                >
                    Submit
                </Button>
            </Form>
        </Container>
    )
}

export default Contact;