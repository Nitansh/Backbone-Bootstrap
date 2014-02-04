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

		url : "http://127.0.0.1:8001/snippets?format=json"


		});


		return CustomerCollection;



	



});