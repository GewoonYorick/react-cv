import React from 'react';

const Education = ({data}) => {
    const educationList = data.map(item => {
        return (
            <div className={item.name}>
                <h3>{item.name}</h3>
                <div className="grid-x">
                    <div className="cell small-6">
                        <h4 className="text-left">{item.credit}</h4>
                    </div>
                    <div className="cell small-6">
                        <p className="text-right">{item.level}</p>
                        <p className="text-right">Years attended: {item.years}</p>
                    </div>
                </div>
            </div>
        );
    });
    return(
        <div className="Education">
            <h2>Education</h2>
            {educationList}
        </div>
    );
}

export default Education;