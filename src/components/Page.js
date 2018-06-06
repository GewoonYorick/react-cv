import React, { Component} from 'react';

// Import the data for the CV
import Content from '../Content';

import Profile from './Profile';
import Stack from "./Stack";
import Skills from "./Skills";
import Education from "./Education";
import Experience from "./Experience";


class Page extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="pageContainer grid-container">
                <Profile data={Content.profile}/>
                <hr />
                <div className="skillsStack grid-x">
                    <div className="stackCell cell small-6 padding-med">
                        <Stack data={Content.stack} />
                    </div>
                    <div className="skillsCell cell small-6 padding-med">
                        <Skills data={Content.skills} />
                    </div>
                </div>
                <hr />
                <Education data={Content.education} />
                <hr />
                <Experience data={Content.experience} />
            </div>
        );
    }
}

export default Page;