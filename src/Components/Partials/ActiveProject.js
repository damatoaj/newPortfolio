import React from 'react'
import List from '../Partials/List'
import {
    Container,
    Row
} from 'react-bootstrap'


function ActiveProject({ project, index }) {
    return (
        <Container className="activeProject" key={index} id={project.title}>
            <Row>
                <h1>{project.title}</h1>
                <a href={project.link} target="_blank" rel="noreferrer"><img src={project.image} alt="" className="projImg"/></a>
            </Row>
            <Row>
                <p>{project.synopsis}</p>
            </Row>
            <Row>
                <List technologies={project.technologies}/>
            </Row>
        </Container> 
    )
}

export default ActiveProject
