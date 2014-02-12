define(function(
			require
		){
	
			"use strict";

			function BaseApp (){
					
				var BaseRouter = require('router/baseRouter');
				var PubSub     = require('libs/pubSub');
				var self  =  this;
				this.baseRouter =  new BaseRouter();
				PubSub.listenTo(self.baseRouter, 'route:init', self.StateLogin);
				PubSub.listenTo(self.baseRouter, 'route:userLoggedIn', self.UserAuthorized);	
							
			};

			BaseApp.prototype.UserAuthorized= function(){
				var PubSub     = require('libs/pubSub');
				// Delete login page views 

				var CustomerInformation = require('views/CustomerInformation-view');
				var customerInformation = new CustomerInformation();
				
			};

			BaseApp.prototype.StateLogin =  function(msg){
				var PubSub     = require('libs/pubSub');

				var HeaderView   = require('views/header-view'); 		
				var headerView   = new HeaderView();

				var BodyView  = require('views/body-view');
				var bodyview =  new BodyView();

				var FooterView = require('views/footer-view');
				var footerView = new FooterView();

			
	

			};

			return BaseApp;
});