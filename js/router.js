import Backbone from 'backbone';
import React from 'react';
import ReactDom from 'react-dom';
import $ from 'jquery';

import {
	NavComponent,
	HomeComponent,
	AddComponent,
	DetailsComponent

} from './views';

import {
	PictureModel,
	PicturesCollection
} from './resources';

export default Backbone.Router.extend({
	routes: {
		'' : 'showHome',
		'add' : 'showAdd',
		'details/:id' : 'showDetails'
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
	showHome(){
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
		// console.log(imageClicked);

		if(imageClicked) {
		this.render(
			<div>
				<NavComponent
				onHome={() => this.goto('')}
				onAdd={() => this.goto('add')}/>

				<DetailsComponent 
				image={imageClicked.toJSON()}/>
			</div>
			);
		} 

		else {
			imageClicked = this.collection.add({objectId: id});
			imageClicked.fetch().then(() => {
				this.render(
				<DetailsComponent 
				image={imageClicked.toJSON()}/>
				);
			});
			
		}
		
	}

}); //end of export default