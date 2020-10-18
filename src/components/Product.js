import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

const Product = (props) => {
  console.log(props)
  return (
      <div className="col-sm-4">
          <div className="card">
            <img src={props.items.image.url} className="card-img-top" alt="shirt"/>
            <div className="card-body">
              <h5 className="card-title">{props.items.name}</h5>
              <p className="card-title">{props.items.description}</p>
              <form action={props.items.link} >
                <input type="submit" value="Buy at Amazon" />
              </form>
            </div>
          </div>
      </div>
  );
}

export default Product;