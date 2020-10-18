import React, { Component } from 'react';
import { Query } from 'react-apollo';
import PRODUCTS_QUERY from './all-products/index';
import Product from './Product';
import Navbar from './Navbar';
import Thumbnail from '../Thumbnail.js';

function Allproducts(props) {
    return (
            <Query query={PRODUCTS_QUERY}>
             {({ loading, error, data }) => {
      
                if (loading) return <div>Fetching products.....</div>
                if (error)   return <div>Error fetching products</div>
      
                const items = data.itemses;
                return (
                  <div>
                    <div className="container mt-4">
                      <div className="row">
                         {items.map(items => <Product items={items} />)}
                      </div>
                    </div>
                  </div>
                )
              }}
            </Query>
          );

    
}

export default Allproducts;