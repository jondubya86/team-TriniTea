import React from 'react'
import ReactDOM from 'react-dom'
// import {Router, Route, Link, browserHistory,IndexRoute} from 'react-router';
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "./navbar.js"

var Home = React.createClass({
	render: function(){
	// var divStyle = {
 //  	color: 'white',
 // 	 backgroundImage: 'url(' + "http://4.bp.blogspot.com/-diw0x3XcHGs/UyMGmg4ucvI/AAAAAAAAD2M/YqF_KaqQnj8/s1600/DSC_6690.JPG" + ')',
 // 	 flex: 1,
 //    resizeMode: 'cover'
// };
		return (
			<div id="landing-main">
			<h1 id ="landing-h1">Welcome to TriniTea</h1><br/>
			<h2 id ="landing-h2">Fuel your mind, body, and soul</h2>
			</div>
			)
	}
})

export default Home;