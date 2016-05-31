import Backbone from 'backbone';
import React from 'react';
import ReactDom from 'react-dom';
import $ from 'jquery';

import {
	HomeComponent
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
				<HomeComponent
				getData={data}
				onHome={() => this.goto('')}
				onAdd={() => this.goto('add')}/>
				);
		});
		
	},
	showAdd(){
		console.log('showAdd');
	}

}); //end of export default