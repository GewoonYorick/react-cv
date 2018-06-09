import React, { Component} from 'react';

// Import the data for the CV
import Content from '../Content';

import HeaderTag from './HeaderTag';
import Bio from './Bio';
import BioImage from './BioImage';
import Links from './Links';
import Stack from "./Stack";
import Skills from "./Skills";
import Education from "./Education";
import Experience from "./Experience";
import Interests from './Interests';


class Page extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="pageContainer grid-container grid-wrapper">
                <div className="sidebar">
                    <BioImage data={Content.profile.image} />
                    <Links data={Content.profile.contact} />
                    <div className="stackInterests">
                        <Stack data={Content.stack} />
                        <Interests data={Content.interests} />
                    </div>
                </div>
                <div className="main">
                    <HeaderTag data={Content.profile} />
                    <Bio bioContent={Content.profile.bio} />
                    <div className="main-content">
                        <Skills data={Content.skills} />
                        <Education data={Content.education} />
                        <Experience data={Content.experience} />                        
                    </div>
                </div>
            </div>
        );
    }
}

export default Page;