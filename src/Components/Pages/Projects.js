import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ActiveProject from '../Partials/ActiveProject';

const Projects = ({myProjects}) => {
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