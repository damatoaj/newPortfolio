import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Projects = (props) => {
        let projectList = props.myProjects.map((project) => {
            return ( 
                <ListGroup key={project.id} >
                    <ListGroup.Item>
                        <Card id="projectCard" style={{ width:'15rem' }} >
                            <Card.Title style={{ letterSpacing:'1rem' }}>
                                {project.title}
                            </Card.Title>
                            <Card.Text>

                            </Card.Text>
                            <Button variant="primary" className="projectButton">
                                <Link 
                                    to={`/Project/${project.id}`}
                                    className="projectLink"
                                >
                                    More Details
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
                    <Col>
                        <h1>These are my projects from my General Assembly software immersive bootcamp</h1>
                    </Col>
                </Row>
                <Row>
                    <Col sm={1} md={2} lg={3}>
                        {projectList}
                    </Col>
                </Row>
            </Container>
        )
}

export default Projects;