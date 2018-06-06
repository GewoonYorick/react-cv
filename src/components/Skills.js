import React from 'react';

const Skills = ({data}) => {
    const skillsList = data.map(skill => {
        return(
            <li>{skill}</li>
        );
    });

    return(
        <div className="Skills">
            <h2>Skills</h2>
            <ul>
                {skillsList}
            </ul>
        </div>
    );
}

export default Skills;