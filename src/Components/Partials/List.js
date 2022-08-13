import React from 'react';
import PropTypes from 'prop-types';

const List = ({technologies}) => {
    let techList = technologies.map((tech,index) => {
        return <li key={index}>{'|'}{tech}</li>
    })

    return(
        <div id="list">
            <h2>Technologies Used:</h2>
            <ul>
                {techList}
            </ul>
        </div>
    )
};

List.propTypes = {
    technologies: PropTypes.array.isRequired
};

export default List;
