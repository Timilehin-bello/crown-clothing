import React, { Component } from 'react';
import MenuItem from '../MenuItem/MenuItem';
import { sections } from './sections';
import './Directory.scss';

class Directory extends Component {
    constructor() {
        super();
    
        this.state = {
             sections: sections
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
