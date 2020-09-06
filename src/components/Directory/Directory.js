import React, { Component } from 'react';
import MenuItem from '../MenuItem/MenuItem';
import './Directory.scss';
import SECTIONS from './SECTIONS';

class Directory extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
             sections: SECTIONS
        }
    }
     
    render() {
        return (
            <div className="directory-menu">
                {
                    this.state.sections.map(({ id, ...otherSectionProps}) =>
                        <MenuItem key={id} {...otherSectionProps} />
                    )
                }
            </div>
        )
    }
}

export default Directory
