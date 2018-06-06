import React from 'react';

const Stack = ({data}) => {
    const stackList = data.map(stack => {
        return(
            <div className={stack.name}>
                <p className="text-left">{stack.name}</p>
                <div className="grid-x">
                    <div className="cell small-6">
                        <p className="text-left">Competency: {stack.competencyLevel}</p>                    
                    </div>
                    <div className="cell small-6">
                        <p className="text-right">Experience: {stack.yearsExperience} years</p>                    
                    </div>                    
                </div>
            </div>
        );
    });
    return(
        <div className="Stack">
            {stackList}
        </div>
    );
}

export default Stack;