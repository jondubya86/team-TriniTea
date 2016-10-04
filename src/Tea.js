import React from 'react';
import ReactDOM from 'react-dom';

var Tea = React.createClass({
  render: function() {
    return (
      
     	
     	<div id="tea-grid" className="container-fluid">
     	
     		<div className="row">

			  <div id="black" className="col-md-4 col-xs-12 teaCol">


			  	<h2>Black Tea</h2>
		  	  </div>

			 <div id="green" className="col-md-4 col-xs-12 teaCol">
			  	<h2>GreenTea</h2>
			 </div>

			 <div id="herbal" className="col-md-4 col-xs-12 teaCol">
			 	<h2>Herbal Tea</h2>
			 </div>

			
		</div>

       </div>
    )
  }
})

export default Tea