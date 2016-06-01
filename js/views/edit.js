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
						<input placeholder={this.props.info.Name} className="editPicName" type="text" />
						
						
					</div>
					<br/><br/>
					<div>
						<label>User Name: </label>
						<input placeholder={this.props.info.User}className="editUserName"type="text" />
					</div>
					<br/><br/>
					<div>
						<label>Picture Location: </label>
						<input placeholder={this.props.info.Location}className="editLocation"type="text" />
					</div>
					<br/><br/>
				
					<div>
						<label>Description:</label>
						<textarea placeholder={this.props.info.Description} className="editDescription" type="text" />
					</div>
					<br/><br/>
					
				</form>
				<button onClick={() => this.editPic(this.props.id)}>Edit</button>
			</div>

			);
	}



});