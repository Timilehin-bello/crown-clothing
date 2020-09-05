import React, { Component } from 'react';
import MenuItem from '../MenuItem/MenuItem';
import { sections } from './sections';
import './Directory.scss';

class Directory extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
             sections: sections
        }
    }
    
    render() {
        return (
            <div className="directory-menu">
                {
                    this.state.sections.map(({title, imageUrl, id, size}) =>
                        <MenuItem key={id} title={title} imageUrl={imageUrl} size={size}/>
                    )
                }
            </div>
        )
    }
}

export default Directory
