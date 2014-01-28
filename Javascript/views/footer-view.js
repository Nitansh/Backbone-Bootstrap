define([
		'backbone',
		 'jquery',
		 'underscore',
		 'text!/Code/templates/footer_template.html'
		 ], function(
		 	Backbone,
		 	$,
		 	_,
		 	myTemplate
		 	){

			var FooterView = Backbone.View.extend({
				el : '.Footer',
				template : _.template(myTemplate),
				
				initialize : function(){
					this.render();
				},
				
				render: function(){
					$(this.el).html(this.template());
				}	
			});
			return FooterView;
});