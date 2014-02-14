define([
		'backbone',
		'jquery',
		'underscore'],function(
		Backbone,
		$,
		_
		){
	
		FooterModel = Backbone.Model.extend({
 		
		urlRoot : '/data/Footer', 

 		url : function(){
 			return this.urlRoot + window.locale + '.json';
 		}

		});

		return FooterModel;


});