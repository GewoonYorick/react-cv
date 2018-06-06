import React, { Component} from 'react';
import Profile from './Profile';
import Content from '../Content';


class Page extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="pageContainer grid-container">
                <Profile data={Content.profile}/>
            </div>
        );
    }
}

export default Page;