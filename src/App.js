import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link, browserHistory,IndexRoute} from 'react-router';
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "./navbar.js"

var App = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Hello World!</h1>
        <Navbar />
      </div>
    )
  }
})

ReactDOM.render(
 <Router history={browserHistory}>
 	<Route path="/" component={App} />
 </Router>,
  document.getElementById('root')
);
