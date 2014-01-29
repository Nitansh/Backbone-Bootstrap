define(
	[
		'backbone',
		'libs/pubSub'
	],
	function
	(
		Backbone,
		PubSub
	){

	"use strict"; 

	var BaseRouter = Backbone.Router.extend({
		
		routes : {
			''		      : "init"
		}		
	});

	return BaseRouter;
});