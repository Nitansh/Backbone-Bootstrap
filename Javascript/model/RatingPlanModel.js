define([
		'backbone',
		'jquery',
		'underscore'],function(
		Backbone,
		$,
		_
		){
	
		RatingPlanModel = Backbone.Model.extend({
 		
 		urlRoot : '/data/Rating_Plan',

 		url : function(){
 			return this.urlRoot + window.locale + '.json';
 		}

		});

		return RatingPlanModel;


});