define([
		'backbone',
		 'jquery',
		 'underscore',
		 'text!/templates/generalInformation_template.html',
		 'collections/CustomerCollection',
		 'libs/pubSub'
		 ], function(
		 	Backbone,
		 	$,
		 	_,
		 	myTemplate,
		 	CustomerCollection,
		 	PubSub
		 	){
			var GeneralInformationView = Backbone.View.extend({
				el : '.Body',

				Collection : new CustomerCollection,

				initialize : function(){
					_.bindAll(this,"remove");
					PubSub.on('remove:generalInformationView',this.remove);
					this.Collection.fetch();	
					this.render();
				},
				template : _.template(myTemplate),
			
				render: function(){
					$(this.el).html(this.template());
				},

				remove: function() {
   					this.$el.empty();
    				this.undelegateEvents();
    				this.stopListening();
    				PubSub.off('remove:bodyView');
    				return this;
				}


			});
			return GeneralInformationView;
});
