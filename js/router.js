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
				<AddComponent />
			</div>
			
			);
	},
	showDetails(id){
		let imageClicked = this.collection.get(id);
		console.log(imageClicked);

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
			this.render(
				<div>No Image</div>
				);
		}
		
	}

}); //end of export default