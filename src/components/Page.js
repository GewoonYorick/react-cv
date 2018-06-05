import React, { Component} from 'react';
import Profile from './Profile';

class Page extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="pageContainer grid-container">
                <Profile />
            </div>
        );
    }
}

export default Page;