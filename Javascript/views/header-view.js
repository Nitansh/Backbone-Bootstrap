define([
		'backbone',
		 'jquery',
		 'underscore',
		 'text!/templates/header_template.html',
		 'libs/pubSub'
		 ], function(
		 	Backbone,
		 	$,
		 	_,
		 	myTemplate,
		 	PubSub
		 	){

			var HeaderView = Backbone.View.extend({
				el : '.myView',

				tagName : 'div',

				template : _.template(myTemplate),
				
				initialize : function(){
					this.render();
					_.bindAll(this,"remove");
								PubSub.on('remove:headerView',this.remove);
				},

				render: function(){
					$(this.el).append(this.template());
				},

				remove: function() {
    				this.undelegateEvents();
    				this.stopListening();
    				PubSub.off('remove:bodyView');
    				return this;
				}


			});
			return HeaderView;
});