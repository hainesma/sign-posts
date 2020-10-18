import React from 'react';
import logo from './logo.svg';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Allproducts from './components/Allproducts.js';
import ProductPage from './components/ProductPage.js';
import Articles from './Articles.js';
import About from './About.js';
import './App.css';
import Navbar from './components/Navbar.js';
import Footer from './Footer.js';

function App() {
  return (
    <div>
    <Navbar/>

    <BrowserRouter>    
      <div className="App">

          <Route exact path="/" component={Allproducts} />
          <Route path="/articles" component={Articles} />
          <Route path="/about" component={About} />
          

        <div className="navigation">
          <div className="navigation-sub">
            <Link to="/productpage" className="item">Products</Link>
            <Link to="/articles" className="item">Articles</Link>
            <Link to="/about" className="item">About</Link>
          </div>  
        </div>
      </div>
    </BrowserRouter> 
    <Footer/>
    </div> 
  );
}

export default App;
