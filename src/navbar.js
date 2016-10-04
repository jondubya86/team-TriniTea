import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link, browserHistory,IndexRoute} from 'react-router';

var Navbar = React.createClass({
  render: function() {
    return (
      <div >
        <nav className="navbar navbar-default navbar-fixed-top">
          <div className="container">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar">a1</span>
                <span className="icon-bar">a2</span>
                <span className="icon-bar">a3</span>
              </button>
              <Link to ="/Home" className="navbar-brand"><img src="./logo-vector.jpg" alt = "TriniTea logo"></img>TriniTea</Link>
            </div>
            <div id="navbar" className="navbar-collapse collapse">
              <ul className="nav navbar-nav navbar-right">
                <li>
                  <Link to='/Home'>Home</Link>
                  </li>
                <li>
                    <Link to='/Tea'>Tea</Link>
                </li>
                <li>
                  <Link to='/Teaware'>Teaware</Link>
                </li>
                <li>
                  <Link to='/About'>About</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

       </div>
    )
  }
})

export default Navbar