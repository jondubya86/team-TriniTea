import React from 'react';
import ReactDOM from 'react-dom';
import data from "./data.js"
import TeaItems from "./teaitem.js"


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
  	if(this.props.params.name === 'black')
  			{ 
  				arr.push(this.state.menuList.black.map(
  				a => <TeaItems name={a.name} price={a.price} description={a.description} ingredients={a.ingredients} />
  			))}
  	else if(this.props.params.name === 'green')
  			{ 
  				arr.push(this.state.menuList.green.map(
  				a => <TeaItems name={a.name} price={a.price} description={a.description} ingredients={a.ingredients} />
  			))}
  	else if(this.props.params.name === 'herbal')
  			{ 
  				arr.push(this.state.menuList.herbal.map(
  				a => <TeaItems name={a.name} price={a.price} description={a.description} ingredients={a.ingredients} />
  			))}
  	else if(this.props.params.name === 'teaware')
  			{ 
  				arr.push(this.state.menuList.teaware.map(
  				a => <TeaItems name={a.name} price={a.price} description={a.description} ingredients={a.ingredients} />
  			))}
}
    return (
      <div >
  				<ul className="arrUl">	
  					{arr}
  				</ul>

       </div>
    )
  }
})


export default DisplayTea;