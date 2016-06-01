import Backbone from 'backbone';
import React from 'react';
import ReactDom from 'react-dom';
import $ from 'jquery';

import {
	NavComponent,
	HomeComponent,
	AddComponent

} from './views';

import {
	PictureModel,
	PicturesCollection
} from './resources';

export default Backbone.Router.extend({
	routes: {
		'' : 'showHome',
		'add' : 'showAdd'
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
					getData={data}/>
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
	}

}); //end of export default