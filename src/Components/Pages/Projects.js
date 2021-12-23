import React from 'react';
import ActiveProject from '../Partials/ActiveProject';

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

export default Projects;