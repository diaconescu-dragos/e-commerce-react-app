import React from "react";
import { connect } from "react-redux";
import CollectionItem from "../../components/collection-item/collection-item.component";
import { selectCollection } from "../../redux/shop/shop.selectors";

import './collection.styles.scss';


function locationProps() { 
    let params=window.location.pathname.split("/");
    return params[params.length-1];
}

const CollectionPage = ({collection}) =>{ 
    const {title, items} = collection;
    return (
    <div className="collection-page">
        <h2 className='title'>{title}</h2>
        <div className="items">
            {
                items.map(item => <CollectionItem key={item.id} item={item}/>)
            }
        </div>
    </div>
);}

const mapStateToProps = (state,ownProps) =>({
    collection: selectCollection(locationProps())(state)
   });


export default connect(mapStateToProps)(CollectionPage);

