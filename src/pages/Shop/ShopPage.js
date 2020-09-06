import React, { Component } from 'react'
import  SHOPDATA from './SHOPDATA';
import CollectionPreview from '../../components/CollectionPreview/CollectionPreview';


class ShopPage extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
             collections: SHOPDATA
        }
    }
    
    render() {
        const {collections} = this.state;
        return (
            <div className="shop-page">
                {
                    collections.map(({id, ...otherCollectionProps}) => (
                        <CollectionPreview key={id} {...otherCollectionProps} />
                    ) 
                )}
            </div>
        )
    }
}

export default ShopPage;
