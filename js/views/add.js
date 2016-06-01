import Backbone from 'backbone';
import React from 'react';
import ReactDom from 'react-dom';
import $ from 'jquery';

import {
	HomeComponent,
	NavComponent

} from '../views';


import {
	PictureModel,
	PicturesCollection
}	from '../resources';

export default React.createClass({
	render(){
		return(
			<div className="addWrapper">
				
				<div className="formWrapper">
					<h1>Add a Picture</h1>
					<form>
						<label>Picture Name:</label>
						<input type="text" />
						<br/><br/>

						<label>User Name:</label>
						<input type="text" />
						<br/><br/>

						<label>Picture Location:</label>
						<input type="text" />
						<br/><br/>

						<label>Picture URL:</label>
						<input type="text" />
						<br/><br/>

						<label>Description</label>
						<textarea type="text" />
						<br/><br/>
						<button>Add New Picture</button>
					</form>
				</div>
			</div>)
	}
});