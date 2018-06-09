import React from 'react';

const Interests = props => {
    const interestList = props.data.map(interest => {
        return (
            <span>{interest}, </span>
        );
    });
    return(
        <div className="interests">
            <h2 className="text-center">Interests</h2>
            <p>{interestList}</p>
        </div>
    );
}

export default Interests;