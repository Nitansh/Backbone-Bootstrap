define([
		'backbone',
		'jquery',
		'underscore'],function(
		Backbone,
		$,
		_
		){
	
		LoginHeaderModel = Backbone.Model.extend({
 		
 		url : '/data/login-header.json'

		});

		return LoginHeaderModel;


});