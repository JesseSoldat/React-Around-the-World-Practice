import React from 'react';

export default React.createClass({
	picDetails(id) {
		// console.log(id);
		this.props.onDetails(id);
	},
	
	formatData(data) {
		return(
			<div key={data.objectId}
			onClick={() => this.picDetails(data.objectId)}>

			<img src={data.URL} width="40%"/>
			</div>)
	},
	render() {
		return(
			<div>
			  	<div className="banner">
        		<img src="http://mywanderfulworld.com/wp-content/uploads/2015/04/GLOBE.jpg" width="100%"/>
      		 	</div>
				<div>{this.props.getData.map(this.formatData)}
				</div>
			</div>


			);
	}
});