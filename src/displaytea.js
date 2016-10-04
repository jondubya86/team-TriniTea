import React from 'react';
import ReactDOM from 'react-dom';
import data from "./data.js"
import TeaItem from "./teaitem.js"


var DisplayTea = React.createClass({
  	getInitialState: function(){
  	return({menuList:{}})
  },
    componentWillMount:function(){
  	var info = data.getMenu()
    	console.log(info)
  	this.setState({menuList:info})
  },
  render: function() {
  {	
  	var arr = []
  	if(this.prop.params.name === 'black')
  			{ 
  				arr.push(this.state.menuList.black.map(
  				a => <DisplayTea name={a.name} price={a.price} description={a.description} ingredients={a.ingredients} />
  			))}
  	else if(this.prop.params.name === 'green')
  			{ 
  				arr.push(this.state.menuList.green.map(
  				a => <DisplayTea name={a.name} price={a.price} description={a.description} ingredients={a.ingredients} />
  			))}
  	else if(this.prop.params.name === 'herbal')
  			{ 
  				arr.push(this.state.menuList.herbal.map(
  				a => <DisplayTea name={a.name} price={a.price} description={a.description} ingredients={a.ingredients} />
  			))}
  	else if(this.prop.params.name === 'teaware')
  			{ 
  				arr.push(this.state.menuList.teaware.map(
  				a => <DisplayTea name={a.name} price={a.price} description={a.description} ingredients={a.ingredients} />
  			))}
}
    return (
      <div >
  				<ul>	
  					{arr}
  				</ul>

       </div>
    )
  }
})