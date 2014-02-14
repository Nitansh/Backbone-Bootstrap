define([
		'backbone',
		'jquery',
		'underscore'],function(
		Backbone,
		$,
		_
		){
	
		HeaderModel = Backbone.Model.extend({
 		
		urlRoot : '/data/Header', 	

 		url : function(){
 			return this.urlRoot + window.locale + '.json';
 		}

		});

		return HeaderModel;


});