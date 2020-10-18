import React from 'react';
import {Link} from 'react-router-dom';
import './App.css';

function Thumbnail(props) {
    return (
        <div className="product">
            <Link to={props.link}>
                <div className="product-image">
                    <img src={props.image} alt=""/>
                </div>
                <div className="product-title">{props.title}</div>
                <div className="product-category">{props.category}</div>
            </Link>
        </div>
    )
}

export default Thumbnail;