import React from 'react'
import {
    Container,
    Row,
    Col
} from 'react-bootstrap'

function ActiveProject({ project, index }) {
    return (
        <Container className="activeProject">
            <Row xs={12} style={{width:'90%'}}>
                <h1>{project.title}</h1>
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
