define([
		'backbone',
		 'jquery',
		 'underscore',
		 'text!/templates/header_template_userAuthorized.html'
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