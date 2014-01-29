define([
		'backbone',
		 'jquery',
		 'underscore',
		 'text!/templates/customer_template.html'
		 ], function(
		 	Backbone,
		 	$,
		 	_,
		 	myTemplate
		 	){
			var CustomerView = Backbone.View.extend({
				el : '.Body',

				initialize : function(){
					this.render();
				},
				template : _.template(myTemplate),
			
				render: function(){
					alert('called');
					$(this.el).html(this.template());
				}

			});
			return CustomerView;
});
