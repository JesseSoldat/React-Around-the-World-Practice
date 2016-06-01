import React from 'react';



export default React.createClass({
	editPic(id){
		// console.log(id);
		this.props.onEdit('edit/' +id);
	},
	render() {
		return (
			<div>
				<div>
					<h1>Details</h1>
					<img src={this.props.image.URL} />
					<h3>Name: {this.props.image.Name}</h3>
					<h3>User: {this.props.image.User}</h3>
					<h3>@ {this.props.image.Location}</h3>
					<p>{this.props.image.Description}</p>
				</div>

				<button onClick={() => this.editPic(this.props.image.objectId)}>
				Edit Info </button>
			</div>
			);
	}
});

