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
				PubSub.on('State:login', this.StateLogin);
				var baseRouter =  new BaseRouter();
			};

			BaseApp.prototype.StateLogin =  function(msg){
				alert(msg);
				var headerView = new HeaderView();
				var footerView = new FooterView();
				var bodyView   = new BodyView(); 

			};

			return BaseApp;
});