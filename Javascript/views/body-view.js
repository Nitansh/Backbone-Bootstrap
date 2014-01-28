define([
		'backbone',
		 'jquery',
		 'underscore',
		 'text!/templates/body_template.html'
		 ], function(
		 	Backbone,
		 	$,
		 	_,
		 	myTemplate
		 	){

			var BodyView = Backbone.View.extend({
				el : '.Body',

				template : _.template(myTemplate),
				
				initialize : function(){
					this.render();
				},

				render: function(){
					$(this.el).html(this.template());
				}

			});
			return BodyView;
});