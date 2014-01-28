require.config({
		    baseUrl: "./Javascript",
		    paths: {
		        "jquery"     : "libs/jquery",
		        "backbone"   : "libs/backbone",
		        "underscore" : "libs/underscore",
		        "bootstrap"  : "libs/bootstrap",
		        "pubSub"	 : "libs/pubSub"	
 		    },
		    shim: {
		        'backbone': {
		            deps: ['underscore', 'jquery'],
		            exports: 'Backbone'
		        },
		        'underscore': {
		            exports: '_'
		     	},
		     	bootstrap:
		     	{
		     		deps: ['jquery'],
		     		exports : 'Bootstrap'
		     	}
		    }
		});


require(
	[
	'router/baseRouter',
	'views/header-view',
	'views/footer-view',
	'views/body-view',
	'bootstrap'
	],
	function(
		BaseRouter,
		HeaderView,
		FooterView,
		BodyView,
		Bootstrap
		){		
		"use strict";

			
		function application(){
			var baseRouter =  new BaseRouter();

			baseRouter.on('route:init', function(){
				var headerView = new HeaderView();
				var footerView = new FooterView();
				var bodyView   = new BodyView(); 
			});
			
			return baseRouter;
		}

		var app  = new application();
	
		Backbone.history.start({'root' : 'Code'});
		
		return app;
});