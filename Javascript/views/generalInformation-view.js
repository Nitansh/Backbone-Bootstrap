define([
		'backbone',
		 'jquery',
		 'underscore',
		 'text!/templates/generalInformation_template.html'
		 ], function(
		 	Backbone,
		 	$,
		 	_,
		 	myTemplate
		 	){
			var GeneralInformationView = Backbone.View.extend({
				el : '.Body',

				initialize : function(){
					this.render();
				},
				template : _.template(myTemplate),
			
				render: function(){
					$(this.el).html(this.template());
				}

			});
			return GeneralInformationView;
});
