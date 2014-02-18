define([
		'backbone',
		'jquery',
		'underscore'],function(
		Backbone,
		$,
		_
		){
	
		CustomerInformationModel = Backbone.Model.extend({
 		
 		url : '/data/Customer_information.json'

		});

		return CustomerInformationModel;


});