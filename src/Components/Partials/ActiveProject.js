import React from 'react'
import {
    Container,
    Row,
    Col
} from 'react-bootstrap'


function ActiveProject({ project, index }) {
    return (
        <Container className="activeProject" key={index}>
            <h1>{project.title}</h1>
                <a href={project.link} target="_blank"><img src={project.image} className="projImg"/></a>
                <p>{project.synopsis}</p>
                <p>{project.technologies}</p>

        </Container> 
    )
}

export default ActiveProject
