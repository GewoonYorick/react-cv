import React from 'react';

const Education = ({data}) => {
    const educationList = data.map(item => {
        return (
            <div className="educationItem">
                {/* <h3><span className="educationInfo">{item.level}</span>  {item.name}</h3> */}
                <h3>{item.name}</h3>
                <p className="text-right">{item.years}</p>
                <p className="text-left">{item.credit}</p>
            </div>
        );
    });

    return(
        <div className="Education">
            <h2 className="blockHeader">Education</h2>
            {educationList}
        </div>
    );
}

export default Education;