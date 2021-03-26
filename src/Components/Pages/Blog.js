import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Blog = (props) => {
        let blogList = props.blogPosts.map((blog) => {
            return(
                <ListGroup key={blog.id}>
                    <ListGroup.Item>
                        <Card id="blogCard" style={{ width:"15rem"}}>
                            <Card.Title>
                                {blog.title}
                            </Card.Title>
                            <Card.Text>
                                
                            </Card.Text>
                            <Button variant="primary" className="projectButton">
                                <Link 
                                    to={`/Article/${blog.id}`}
                                    id="blogLink"
                                > 
                                    See Full Text 
                                </Link>
                            </Button>
                        </Card>
                    </ListGroup.Item>
                </ListGroup>
            )
        })
        return(
            <Container>
                <Row>
                    <h1>Writing has always been a passion of mine, hopefully you'll enjoy my musings on philosophy and recreation</h1>    
                </Row>
                <Row>
                    <Col sm={1} md={2} lg={3}>
                        {blogList}   
                    </Col>
                </Row>
            </Container>
        )
}

export default Blog;