import Backbone from 'backbone';
import Picture from './picture';
import {APP_URL} from '../parse_data';

export default Backbone.Collection.extend({
	url: APP_URL,
	model: Picture,
	parse(data) {
		return data.results;
	}
});