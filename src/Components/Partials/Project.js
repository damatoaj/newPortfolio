import { FaArrowAltCircleLeft, FaArrowAltCircleRight} from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { Link, useParams } from 'react-router-dom';
import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

const Project = (props) => {
    console.log(props)
    let {id} = useParams();
    id = parseInt(id);
    const length = props.MyProjects.length;
    
    const nextProject = ( id === length ? 1 : id + 1);
    const prevProject = (id === 1 ? length : id - 1);

        return(
            <Container>
                <IconContext.Provider value={ {className:'react-icons'} }>
                    <Row xs={1} md={1} lg={1} style={{width:'90%'}}>
                        <Col>
                            <Link to={`/Project/${prevProject}`}><FaArrowAltCircleLeft/></Link>
                        </Col>
                        <Col>
                            <h1 style={{ letterSpacing:'.3rem'}}>{props.title}</h1>
                        </Col>
                        <Col>
                            <Link to={`/Project/${nextProject}`}><FaArrowAltCircleRight/></Link>
                        </Col>
                    </Row>
                    <Row xs={12} style={{width:'90%'}}>
                        <Col>
                            <a href={props.link} target="_blank"><img src={props.image} className="projImg"/></a>
                        </Col>
                    </Row>
                    <Row xs={12} style={{width:'90%'}}>
                        <Col>
                            <p>{props.synopsis}</p>
                        </Col>
                    </Row>
                    <Row xs={12} style={{width:'90%'}}>
                        <Col>
                            <p>{props.technologies}</p>
                        </Col>
                    </Row>  
                </IconContext.Provider>
                <Row style={{width:'90%'}}>
                    <Col>
                        <Button className="projectButton">
                            <Link to="/Projects" className="projectLink">Back to the Projects</Link>
                        </Button>
                    </Col>
                </Row>
            </Container>
        )
}

export default Project;