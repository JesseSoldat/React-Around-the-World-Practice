import Backbone from 'backbone';
import React from 'react';
import ReactDom from 'react-dom';
import $ from 'jquery';

import {
	HomeComponent
} from '../views'

export default React.createClass({
	returnHome() {
		this.props.onHome();
		
	},
	addPic() {
		this.props.onAdd();
	},
	render()	{
		return(
			<div>
				<ul>
					 <li onClick={() => this.returnHome()}><h2>Hello World</h2></li>

					<li onClick={() => this.addPic()}><h2>New Image</h2></li>

					<li><h2>
					<a href="http://jessesoldatfirstsite.bitballoon.com" target="_blank">My World
					</a>
					</h2></li>
				</ul>

			</div>)
	}
});