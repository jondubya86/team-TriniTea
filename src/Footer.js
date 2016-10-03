import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link, browserHistory,IndexRoute} from 'react-router';

var Footer = React.createClass({
  render: function() {
    return (
  		<div>
	    <footer className="footer">
      <div className="container">
        <p className="text-muted">Place sticky footer content here.</p>
      </div>
    </footer>
       	</div>
    )
  }
})

export default Footer