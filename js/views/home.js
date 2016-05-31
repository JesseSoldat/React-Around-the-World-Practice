import Backbone from 'backbone';
import React from 'react';
import ReactDom from 'react-dom';

export default React.createClass({
	returnHome() {
		console.log('go home');
		this.props.onHome();
	},
	addPic() {
		this.props.onAdd();
	},
	formatData(data) {
		return(
			<div key={data.objectId}>

			<img src={data.URL} width="40%"/>
			</div>)
	},
	render() {
		return(
			<div>
				<div className='nav'>
					<ul>
						<li onClick={this.returnHome}><h2>Hello World</h2></li>
						<li onClick={this.addPic}><h2>New Image</h2></li>
						<li><h2><a href="http://jessesoldatfirstsite.bitballoon.com/" target="_blank">My World</a></h2></li>
					</ul>

					<div>
						<img src="http://mywanderfulworld.com/wp-content/uploads/2015/04/GLOBE.jpg" width="100%"/>
					</div>

					<div>{this.props.getData.map(this.formatData)}
					</div>

				</div>
			</div>


			);
	}
});