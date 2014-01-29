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
		
		initialize : function() {
			_.bindAll(this,"routeChange");
			PubSub.on('userAuthorized', this.routeChange);
		},

		routes : {
			''		      : "init",
			'login'       : "userLoggedIn"
		},

		routeChange : function(){
			this.navigate("login", {trigger: true});
		}

	});

	return BaseRouter;
});