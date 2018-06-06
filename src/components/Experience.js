import React from 'react';

const Experience = ({data}) => {
    const experienceList = data.map(item => {
        return(
            <div className="experienceItem">
                <h3>{item.company}</h3>
                <div className="grid-x">
                    <div className="cell small-6">
                        <h4 className="text-left">{item.position}</h4>
                    </div>
                    <div className="cell small-6">
                        <p className="text-right">{item.level}</p>
                        <p className="text-right">{item.years}</p>
                    </div>
                </div>
                <p>{item.description}</p>
            </div>
        );
    });
    return(
        <div className="Experience">
            {experienceList}
        </div>
    );
}

export default Experience;