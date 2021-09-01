import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Project from '../Partials/Project'
import ActiveProject from '../Partials/ActiveProject';
import InactiveProject from '../Partials/InactiveProject';

const Projects = ({myProjects}) => {
    const [active, setActive] = useState(0);

    const activateProject = async (index) => {
        await index;
        setActive(index)
    };

    const showProject = (active, index, project) => {
        if(active === index) {
            return <Project project={project} />
        } else {
            return 'Click For Details'
        }
    }
    console.log(myProjects)
        let projectList = myProjects.map((project, index) => {
 {
                return <ActiveProject 
                    project={project} 
                    index={index} 
                    />
            }
        })
        return(
            <Row>
                <Col id="projectCol">
                    {projectList}
                </Col>
            </Row>
        )
}

export default Projects;