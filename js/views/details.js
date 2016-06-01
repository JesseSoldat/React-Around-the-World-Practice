import React from 'react';
import ReactDom from 'react-dom';


export default React.createClass({
	render() {
		return (
			<div>
				<h1>Details</h1>
				<img src={this.props.image.URL} />
				<h3>Name: {this.props.image.Name}</h3>
				<h3>User: {this.props.image.User}</h3>
				<h3>@ {this.props.image.Location}</h3>
				<p>{this.props.image.Description}</p>
			</div>
			);
	}
});

