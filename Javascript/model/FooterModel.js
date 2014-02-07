define([
		'backbone',
		'jquery',
		'underscore'],function(
		Backbone,
		$,
		_
		){
	
		FooterModel = Backbone.Model.extend({
 		
 		url : '/data/Footer.json'

		});

		return FooterModel;


});