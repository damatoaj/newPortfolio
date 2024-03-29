import React from 'react';
import emailjs from 'emailjs-com';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

const Contact = () => {
    let sendEmail = (e) => {
        emailjs.sendForm('service_hdvtw0d', 'template_m329e48', e.target, 'user_SrWZljC6NSLBG1dPd91JE')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        })
        e.target.reset()
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        sendEmail(e);
    };

    return( 
        <Container id="contact-me">
                <Form onSubmit={handleSubmit} id="contact">
                    <Form.Label className="contactLabel">Contact Me Below</Form.Label>
                    <Form.Group>
                        <Row>
                            <Form.Label htmlFor="name">
                                Name
                            </Form.Label>
                        </Row>
                        <Row>
                            <Form.Control 
                                style={{width:'100%'}}
                                name="name"
                                type="text"
                                size="md"
                                id="name"
                            />
                        </Row>
                    </Form.Group>
                    <Form.Group>
                        <Row>
                            <Form.Label htmlFor="email">
                                Email
                            </Form.Label>
                        </Row>
                        <Row>
                            <Form.Control 
                                style={{width:'100%'}}
                                name="email"
                                type="email"
                                size="md"
                                id="email"
                            />
                        </Row>
                    </Form.Group>
                    <Form.Group>
                        <Row>
                            <Form.Label htmlFor="subject">
                                Subject
                            </Form.Label>
                        </Row>
                        <Row>
                            <Form.Control 
                                style={{width:'100%'}}
                                name="subject"
                                type="text"
                                size="lg"
                                id="subject"
                            />
                        </Row>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label htmlFor="message">
                            Message
                        </Form.Label>
                        <Form.Control 
                            style={{width:'100%'}}
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
};

export default Contact;