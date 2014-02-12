define([
		'backbone',
		'jquery',
		'underscore'],function(
		Backbone,
		$,
		_
		){
	
		CustomerInformationModel = Backbone.Model.extend({
 		
 		url : '/data/Footer.json'

		});

		return CustomerInformationModel;


});