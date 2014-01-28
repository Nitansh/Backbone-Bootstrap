define(
	[
		'backbone'
	],
	function
	(
		Backbone
	){

	"use strict"; 

	var BaseRouter = Backbone.Router.extend({
		routes : {
			''		      : "init",
		}
			
	});

	return BaseRouter;
});