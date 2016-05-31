import Backbone from 'backbone';
import React from 'react';
import ReactDom from 'react-dom';

export default React.createClass({
	render() {
		return(
			<div>
			<h1>{this.props.getData[0].Name}</h1></div>


			);
	}
});