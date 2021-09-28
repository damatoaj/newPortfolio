import { useParams } from 'react-router-dom';
import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

const Project = ({project}) => {
    let {id} = useParams();
    id = parseInt(id);

        return(
            <Container>
                <Row xs={12} style={{width:'90%'}}>
                    <Col>
                        <a href={project.link} target="_blank"><img src={project.image} alt={project.name}/></a>
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