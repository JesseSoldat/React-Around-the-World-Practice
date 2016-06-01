import React from 'react';

export default React.createClass({
	editPic(id) {
		// console.log(id);
		this.props.EditSubmit(id);

	},

	render() {
		// console.log(this.props.id);
		return(
			<div>
				<h1>Edit the Picture</h1>
				<form>
					<div>
						<label>Picture Name: </label>
						<input className="editPicName" type="text" />
					</div>
					<br/><br/>
					<div>
						<label>User Name: </label>
						<input className="editUserName"type="text" />
					</div>
					<br/><br/>
					<div>
						<label>Picture Location: </label>
						<input className="editLocation"type="text" />
					</div>
					<br/><br/>
					<div>
						<label>Picture Url: </label>
						<input className="editUrl" type="text" />
					</div>
					<br/><br/>
					<div>
						<label>Description:</label>
						<textarea className="editDescription" type="text" />
					</div>
					<br/><br/>
					
				</form>
				<button onClick={() => this.editPic(this.props.id)}>Edit</button>
			</div>

			);
	}



});