import React from 'react';

var LooseTea = React.createClass({
	render:function(){
		return(
			<li>
				<div>
					<p>Name:{this.props.name} </p>
					<p>Price:{this.props.price}</p>
					<p>Description:{this.props.description}</p>
					<p>Ingredients:{this.props.ingredients}</p>
				</div>
			</li>
			)
	}
})

export default LooseTea