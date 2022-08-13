import React from 'react';
import ActiveProject from '../Partials/ActiveProject';
import PropTypes from 'prop-types';

const Projects = ({myProjects}) => {
        let projectList = myProjects.map((project, index) => {
            return <ActiveProject 
                project={project} 
                index={index} 
                />
        })
        return(
            <>
                {projectList}
            </>
        )
}

Projects.propTypes = {
    myProjects: PropTypes.array
};

Projects.defaultProps = {
    myProjects: []
};

export default Projects;