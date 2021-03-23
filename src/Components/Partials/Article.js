import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { Link, useParams } from 'react-router-dom';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Article = (props) => {
    let {id} = useParams();
    id = parseInt(id);
    const length = props.BlogPosts.length

    const nextArticle = (id  === length ? 1 : id + 1);
    const prevArticle = (id === 1 ? length : id - 1);
    console.log(props)
    // let paragraphs = props.content.map((para) => {
    //     return <p>{para}</p>
    // })
    
        return(
            <Container>
                <IconContext.Provider value={ {className:'react-icons'} }>
                <Row>
                    <Col>
                        <Link to={`/Article/${prevArticle}`}><FaArrowAltCircleLeft id="leftArrow" /></Link>
                    </Col>
                    <Col>
                        <h1>{props.title}</h1>
                    </Col>
                    <Col>
                        <Link to={`/Article/${nextArticle}`} ><FaArrowAltCircleRight id="rightArrow" /></Link>
                    </Col>
                </Row>
                <Row>
                    <p>{props.content}</p>
                </Row>
                <Row>
                    <h3>{props.publication_date}</h3>
                </Row>
                </IconContext.Provider>
                <Row>
                    <Button variant="outline-dark" size="lg" block><Link to="/Blog">Back to the Blogs</Link></Button>
                </Row>
            </Container>
        )
}

export default Article;