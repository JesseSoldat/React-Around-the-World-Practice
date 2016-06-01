import Backbone from 'backbone';
import React from 'react';
import ReactDom from 'react-dom';
import $ from 'jquery';

import {
	NavComponent,
	HomeComponent,
	AddComponent,
	DetailsComponent,
	SpinnerComponent,
	EditComponent

} from './views';

import {
	PictureModel,
	PicturesCollection
} from './resources';

export default Backbone.Router.extend({
	routes: {
		'' 				: 'showHome',
		'add' 			: 'showAdd',
		'details/:id' 	: 'showDetails',
		'edit/:id'      : 'showEdit'
	},

	initialize(appElement) {
		this.el = appElement;

		this.collection = new PicturesCollection();
		
	},
	render(component){
		ReactDom.render(component, this.el);
	},
	goto(route) {
		this.navigate(route, {
			trigger: true
		});
	},

	start() {
		Backbone.history.start();
		return this;
	},
	showSpinner() {
		this.render(
			<SpinnerComponent />
			);
	},
	showHome() {
		this.showSpinner();
	

		this.collection.fetch().then(()=>{
			let data = this.collection.toJSON();
			// console.log(data);

			this.render(
				<div>
					<NavComponent
					onHome={() => this.goto('')}
					onAdd={() => this.goto('add')}/>

					<HomeComponent
					getData={data}
					onDetails={(id) => this.goto('details/' +id)}/>
				</div>
				);
		});
		
	},
	showAdd(){
		this.render(
			<div>
				<NavComponent
				onHome={() => this.goto('')}
				onAdd={() => this.goto('add')}/>

				<AddComponent 
				onSub={() => {
					let picName = document.querySelector('.inputName').value;
					let userName = document.querySelector('.inputUser').value;
					let location = document.querySelector('.inputLocation').value;
					let url = document.querySelector('.inputUrl').value;
					let description = document.querySelector('.inputDescription').value;

					// console.log(picName,userName,location,url,description);
					let uploadParse = new PictureModel({
						Name: picName,
						User: userName,
						Location: location,
						URL: url,
						Description: description
					});
					uploadParse.save();
					this.goto('');
				}
				}/>

			</div>
			
			);
	},
	showDetails(id){
		let imageClicked = this.collection.get(id);
		

		if(imageClicked) {
		this.render(
			<div>
				<NavComponent
				onHome={() => this.goto('')}
				onAdd={() => this.goto('add')}/>

				<DetailsComponent 
				image={imageClicked.toJSON()}
				onEdit={() => this.goto('edit/' + id)}/>
			</div>
			);
		} 

		else {
			imageClicked = this.collection.add({objectId: id});
			imageClicked.fetch().then(() => {
				this.render(
				<div>
					<NavComponent
					onHome={() => this.goto('')}
					onAdd={() => this.goto('add')}/>

					<DetailsComponent 
					image={imageClicked.toJSON()}
					onEdit={() => this.goto('edit/' + id)}/>
				</div>
				);
			});
			
		}
		
	},
	showEdit(id) {

		
		let imageClicked = this.collection;

		let imageId = id;

		this.collection.fetch().then(()=>{
			let data = this.collection.toJSON();
			// console.log(data);

			let singleObj = data.filter(function(d){
				if(d.objectId === imageId) {
					// console.log(d);
					return d;
				}

			});
			
			let single = singleObj[0];
			console.log(single);
			
		this.render(
			<div>
				<NavComponent
				onHome={() => this.goto('')}
				onAdd={() => this.goto('add')}/>

				<EditComponent 
				image={imageClicked.toJSON()}
				id={imageId}
				info={single}
				EditSubmit={() => {
					let picName = document.querySelector('.editPicName').value;
					let userName = document.querySelector('.editUserName').value;
					let location = document.querySelector('.editLocation').value;
					let description = document.querySelector('.editDescription').value;

					let editParse = new PictureModel ({
						objectId: id,
						Name: picName,
						User: userName,
						Location: location,
						Description: description
					});

					// console.log(editParse.toJSON());
					editParse.save();
					this.goto('');

					}

				}/>
			</div>
			);
		});
	}


}); //end of export default