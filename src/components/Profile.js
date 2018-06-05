import React, { Component} from 'react';
import BioImage from './profile/bio-image';
import Detail from './profile/detail';

class Profile extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="profile grid-x">
                <div className="cell small-4">
                    <BioImage />
                </div>
                <div className="cell small-8">
                    <Detail />
                </div>
            </div>
        );
    }
}

export default Profile;