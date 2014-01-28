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
				events:{
                	'click button#login':'validate',
               		'click button#reset':'resetField'
           		},

            	validate:function(event){
                	if($('#UserName').val()==null || $('#UserName').val()=="" )
                	{
                		alert("user name is empty");
                		event.cancel();
                	}
                	if($('#Password').val()==null || $('#Password').val()=="" )
                	{
                		alert("Password is empty");
                	}

           		},

           		resetField:function(){
           			$('#UserName').val(null);
           			$('#Password').val(null);
           		},
				render: function(){
					$(this.el).html(this.template());
				}

			});
			return BodyView;
});
