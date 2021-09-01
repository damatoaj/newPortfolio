import { useParams } from 'react-router-dom';
import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';


const Project = ({project}) => {
    let {id} = useParams();
    id = parseInt(id);
    // const length = MyProjects.length;
    
    // const nextProject = ( id === length ? 1 : id + 1);
    // const prevProject = (id === 1 ? length : id - 1);

        return(
            <Container>
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

export default Project;