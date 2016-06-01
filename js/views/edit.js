import React from 'react';

export default React.createClass({


	render() {
		return(
			<div>
				<h1>Edit the Picture</h1>
				<form>
					<div>
						<label>Picture Name: </label>
						<input type="text" />
					</div>
					<br/><br/>
					<div>
						<label>User Name: </label>
						<input type="text" />
					</div>
					<br/><br/>
					<div>
						<label>Picture Location: </label>
						<input type="text" />
					</div>
					<br/><br/>
					<div>
						<label>Picture Url: </label>
						<input type="text" />
					</div>
					<br/><br/>
					<div>
						<label>Description:</label>
						<textarea type="text" />
					</div>
					<br/><br/>
				</form>
			</div>

			);
	}



});