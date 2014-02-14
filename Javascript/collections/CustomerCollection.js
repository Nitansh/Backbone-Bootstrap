define([
			'backbone',
			'jquery',
			'underscore',
			'model/CustomerModel'
		],
		function(
			Backbone,
			$,
			_,
			Customer
		){

		"use strict";

		var CustomerCollection = Backbone.Collection.extend({

		model : Customer,

		urlRoot : "/data/general-information",

		url : function(){
			return this.urlRoot + window.locale + '.json';
		}


		});


		return CustomerCollection;



	



});