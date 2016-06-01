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
	submitPic() {
		this.props.onSub();
	},
	render(){
		return(
			<div className="addWrapper">
				
				<div className="formWrapper">
					<h1>Add a Picture</h1>
					<form>
						<label>Picture Name:</label>
						<input className="inputName" type="text" />
						<br/><br/>

						<label>User Name:</label>
						<input className="inputUser" type="text" />
						<br/><br/>

						<label>Picture Location:</label>
						<input className="inputLocation" type="text" />
						<br/><br/>

						<label>Picture URL:</label>
						<input className="inputUrl" type="text" />
						<br/><br/>

						<label>Description</label>
						<textarea className="inputDescription" type="text" />
						<br/><br/>
						<button onClick={() => this.submitPic()}>Add New Picture</button>
					</form>
				</div>
			</div>)
	}
});