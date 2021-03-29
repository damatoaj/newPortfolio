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

        emailjs.sendForm('service_hdvtw0d', 'template_m329e48', e.Target,  
            'user_SrWZljC6NSLBG1dPd91JE')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            })
            e.target.reset()
    }

    return(
        <Container>
            <Form>
                <Form.Label>Interested in working together? Contact Me Below</Form.Label>
                <Form.Group>
                    <Form.Control 
                        name="name"
                        type="text"
                        size="md"
                        placeholder="Name"
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Control 
                        name="email"
                        type="email"
                        size="md"
                        placeholder="Email" 
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Control 
                        name="subject"
                        type="text"
                        size="lg"
                        placeholder="Subject" 
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Control 
                        name="message"
                        as="textarea"
                        rows={4}
                        placeholder="Message" 
                    />
                </Form.Group>
                <Button 
                    varient="primary"
                    type="submit"
                    onClick={sendEmail}
                >
                    Submit
                </Button>
            </Form>
        </Container>
    )
}

export default Contact;