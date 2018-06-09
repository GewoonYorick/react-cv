import React from 'react';
import SkillBar from './SkillBar';

const Stack = ({data}) => {
    const stackList = data.map(stack => {
        return(
            <div className={stack.name}>
                <p className="text-left">{stack.name}</p>
                <div className="competencyBar">
                    <SkillBar width={stack.competencyLevel}/>                  
                </div>                    
            </div>
        );
    });
    return(
        <div className="Stack">
            <h2 className="text-center">Tech Stack</h2>
            <div className="stackItems">
                {stackList}                
            </div>
        </div>
    );
}

export default Stack;