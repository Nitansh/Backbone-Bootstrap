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
		},

		init : function(){
			PubSub.trigger('State:login','LoginState');
		}		
	});

	return BaseRouter;
});