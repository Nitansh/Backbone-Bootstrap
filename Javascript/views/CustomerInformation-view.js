define([
		'backbone',
		 'jquery',
		 'underscore',
		 'text!/templates/CustomerInformation_template.html',
		 'libs/pubSub',
		 "model/CustomerInformationModel"
		 ], function(
		 	Backbone,
		 	$,
		 	_,
		 	myTemplate,
		 	PubSub,
		 	CustomerInformationModel
		 	){
			var CustomerInformationView = Backbone.View.extend({
				el : '.myView',

				tagName : 'div',

				model : new CustomerInformationModel,

				template : _.template(myTemplate),
			
				initialize : function(){
					_.bindAll(this,"remove","render","success","failure");
					var _this = this;
					this.model.fetch({success : _this.success, error : _this.failure});
					PubSub.on('remove:customerView',this.remove);
				},
				
				success : function(model, response, options){
					this.render();
					console.log('rating plan model fetched successfully');
				},

				failure : function(model, response, options){
					console.log('error in fectching rating plan model');
		
				},	
				render: function(){
					var _this = this ;
					var _data = {data : _this.model.toJSON() };
					$(this.el).append(this.template(_data));
					return this;
				},

				remove: function() {
    				this.undelegateEvents();
    				this.stopListening();
    				PubSub.off('remove:bodyView');
    				return this;
				}


			});
			return CustomerInformationView;
});
