import React from 'react';
import data from './data.js';

var About = React.createClass({
  getInitialState: function(){
  	return({storeProps:{}})
  },
  componentWillMount:function(){
  	var info = data.getAbout()
  	this.setState({storeProps:info})
  },
  render: function() {
    return (
      <div id = "about-page" className ="text-center">
        <p>About<br/>
        {this.state.storeProps.trinitea_name}<br/>
        {this.state.storeProps.trinitea_slogan}
        </p>
        <p>Contact<br/>
     	 {this.state.storeProps.trinitea_address}<br/>
      	 {this.state.storeProps.trinitea_email}
     	 {this.state.storeProps.trinitea_phone}</p>
      </div>
    )
  }
});

export default About