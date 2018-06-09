import React from 'react';

const Links = (props) => {
    const linksList = props.data.map(link => {
        return (
            <p>{link.value}</p>
        );
    });

    return(
        <div className="links">
            {linksList}
        </div>
    );
}

export default Links;