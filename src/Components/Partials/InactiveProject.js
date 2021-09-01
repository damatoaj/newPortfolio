import React from 'react';
import {
    ListGroup,
    Button,
    Card
} from 'react-bootstrap';

function InactiveProject({ project, index, showProject, active, activateProject }) {
    return (
        <ListGroup key={index}>
            <ListGroup.Item>
                <Card id={active === index? 'projectCard active': 'projectCard'} style={{ width:'15rem' }} >
                    <Card.Title>
                        {project.title}
                    </Card.Title>
                    <Card.Text>

                    </Card.Text>
                    <Button 
                        variant="primary" 
                        className="projectButton"
                        onClick={(e) => activateProject(index)}>
                            {showProject(active, index, project)}
                    </Button>
                </Card>
            </ListGroup.Item>
        </ListGroup>
    )
}

export default InactiveProject
