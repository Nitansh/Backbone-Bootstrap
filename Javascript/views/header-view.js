define([
		'backbone',
		 'jquery',
		 'underscore',
		 'text!/Code/templates/header_template.html'
		 ], function(
		 	Backbone,
		 	$,
		 	_,
		 	myTemplate
		 	){

			var HeaderView = Backbone.View.extend({
				el : '.Header',

				template : _.template(myTemplate),
				
				initialize : function(){
					this.render();
				},

				render: function(){
					$(this.el).html(this.template());
				}

			});
			return HeaderView;
});