import React from 'react'
import {
    Container,
    Row,
    Col
} from 'react-bootstrap'

const rotateAnimation = (project) => {
    if (project) {
        return <h1 style={{animationiteration:'1'}}>{project.title}</h1>
    };
};

function ActiveProject({ project, index }) {
    return (
        <Container className="activeProject" key={index}>
            <Row xs={12} style={{width:'90%'}}>
                {rotateAnimation(project)}
            </Row>
            <Row xs={12} style={{width:'90%'}}>
                <Col>
                    <a href={project.link} target="_blank"><img src={project.image} className="projImg"/></a>
                </Col>
            </Row>
            <Row xs={12} style={{width:'90%'}}>
                <Col>
                    <p>{project.synopsis}</p>
                </Col>
            </Row>
            <Row xs={12} style={{width:'90%'}}>
                <Col>
                    <p>{project.technologies}</p>
                </Col>
            </Row>  
        </Container> 
    )
}

export default ActiveProject
