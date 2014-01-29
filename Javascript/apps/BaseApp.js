define([
		'router/baseRouter',
		'views/header-view',
		'views/footer-view',
		'views/body-view',
		'libs/pubSub'
		],
		function(
			BaseRouter,
			HeaderView,
			FooterView,
			BodyView,
			PubSub
		){
	
			function BaseApp (){
				var self  =  this;
				this.baseRouter =  new BaseRouter();
				PubSub.listenTo(self.baseRouter, 'route:init', self.StateLogin);
				
			};

			BaseApp.prototype.StateLogin =  function(msg){		
				var headerView = new HeaderView();
				var footerView = new FooterView();
				var bodyView   = new BodyView(); 

			};

			return BaseApp;
});