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
                    <Row>
                        <Link to={`/Project/${prevProject}`}><FaArrowAltCircleLeft/></Link>
                        <h1>{props.title}</h1>
                        <Link to={`/Project/${nextProject}`}><FaArrowAltCircleRight/></Link>
                    </Row>
                    <Row>
                        <a href={props.link} target="_blank"><img src={props.image} className="projImg"/></a>
                    </Row>
                    <Row>
                        <p>{props.synopsis}</p>
                    </Row>
                    <Row>
                        <p>{props.technologies}</p>
                    </Row>  
                </IconContext.Provider>
                <Row>
                    <Button>
                        <Link to="/Projects">Back to the Projects</Link>
                    </Button>
                </Row>
            </Container>
        )
}

export default Project;