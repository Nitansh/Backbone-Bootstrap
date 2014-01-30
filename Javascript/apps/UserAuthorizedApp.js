define(function(
			require
		){

		"use strict";

		function userAuthorizedApp(){
			var UserAuthorizedRouter = require('router/UserAuthorizedRouter');
			var PubSub               = require('libs/pubSub');
			var self  =  this;
			this.userAuthorizedRouter =  new UserAuthorizedRouter();
			PubSub.listenTo(self.userAuthorizedRouter, 'route:generalinfo', self.stateGeneralInfo);
		}

		userAuthorizedApp.prototype.stateGeneralInfo =  function(){
			var GeneralInformationView = require('views/generalInformation-view');	
            var generalInformationView = new GeneralInformationView();
		}


		return userAuthorizedApp;

});