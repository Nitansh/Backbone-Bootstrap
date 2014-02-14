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
	'apps/BaseApp',
	'bootstrap'
	],
	function(
		BaseApp,
		Bootstrap
		){		
		"use strict";

		

		window.locale="";
		if(navigator.language==="en-US"){
			window.locale = '_en';
		}
		else if(navigator.language==="de"){
			window.locale= '_de';
		}
			
		var baseApp = new BaseApp();	
		Backbone.history.start();
		
		return baseApp;
});