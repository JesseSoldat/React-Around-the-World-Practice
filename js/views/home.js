import React from 'react';

export default React.createClass({
	picDetails(id) {
		// console.log(id);
		this.props.onDetails(id);
	},
	
	formatData(data) {
		return(
			<div className="imgContainer" key={data.objectId}
			onClick={() => this.picDetails(data.objectId)}>

				<img src={data.URL} className="parseImg" />
			</div>)
	},
	render() {
		return(
			<div width="100%">
			  	<div className="banner">
        		<img src="http://mywanderfulworld.com/wp-content/uploads/2015/04/GLOBE.jpg" width="100%"/>
      		 	</div>
				<div className="homeImgContainer">{this.props.getData.map(this.formatData)}
				</div>
			</div>


			);
	}
});