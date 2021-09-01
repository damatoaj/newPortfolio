import React, { useState, useRef } from 'react';
import emailjs from 'emailjs-com';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

const Contact = (props) => {
    const [buttonText, setButtonText] = useState('Submit');
    let splitText = new Array;
    const spanClass = useRef('standard')
    console.log(spanClass)
    let char = 0;
    let str = 0;
    let words = ['Name:','Email:','Subject:','Message:'];
        words.forEach(word => splitText.push(word.split('')))

        for(let i = 0; i < splitText.length; i++) {
            for(let j = 0; j < splitText[i].length; j++) {
            }
        }

    // const animationSpan = useRef(null);
    const textAnimation = (e) => {
        splitText.forEach(word => {
            for (let i = 0; i < word.length; i++) {
                console.log(word[i])
                spanClass.current = 'fade';
                if (i === word.length) {
                    complete(); 
                    spanClass.current = 'standard';
                    console.log(spanClass.current)
                    return;
                }
            }
            
        })

    };
    
    let timer = setInterval(textAnimation, 50);
    const complete = () => {
        clearInterval(timer);
        timer = null;
    }
    // let onTick = () => {
        // console.log('tick')

    // }
  
    const changeButtonText = (e) => {
        setButtonText('Email Sent!')
        setTimeout(
            () => setButtonText('Submit'),
            3000
        );
    }

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
        changeButtonText(e);
        // textAnimation(e);
        sendEmail(e);
    };

    return( 
        <Container>
                <Form onSubmit={handleSubmit} id="contact">
                    <Form.Label className="contactLabel">Contact Me Below</Form.Label>
                    <Form.Group>
                        <Row>
                            <Form.Label htmlFor="name">
                                {splitText[0].map(letter => {
                                    return <span className={spanClass.current}>{letter}</span>
                                })}
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
                                {splitText[1].map(letter => {
                                    return <span >{letter}</span>
                                })}
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
                                {splitText[2].map(letter => {
                                    return <span>{letter}</span>
                                })}
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
                            {splitText[3].map(letter => {
                                return <span>{letter}</span>
                            })}
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
                        {buttonText}
                    </Button>
                </Form>
        </Container>
    )
}

export default Contact;