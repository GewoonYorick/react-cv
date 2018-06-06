import React from 'react';

const Detail = ({data}) => {
    console.log(data);
    const contactDetails = data.contact.map(contact => {
        return (
            <p>{contact.value}</p>
            );
        });

    return(
        <div className="detail text-right">
            <h1>{data.name}</h1>
            <p>{data.tag}</p>
            <p>{data.bio}</p>
            {contactDetails}
        </div>
    );
}

export default Detail;