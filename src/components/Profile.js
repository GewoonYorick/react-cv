import React, { Component} from 'react';
import BioImage from './profile/bio-image';
import Detail from './profile/detail';

const Profile = ({data}) => {
    return(
        <div className="profile grid-x">
            <div className="cell small-4">
                <BioImage data={data.image}/>
            </div>
            <div className="cell small-8">
                <Detail data={data}/>
            </div>
        </div>
    );
}

export default Profile;