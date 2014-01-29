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
					_.bindAll(this,"authorize")
				},
				events:{
                	'click button#login':'validate',
               		'click button#reset':'resetField'
           		},

            	validate:function(){
                	if($('#UserName').val()==null || $('#UserName').val()=="" ) {
                		alert("user name is empty");
                	}else if($('#Password').val()==null || $('#Password').val()=="" ) {
                		alert("Password is empty");
                	}else if(this.authorize()){
                		//route will be changed here
                		alert('route changed');
                	}else {
                		alert('user name or password is not valid')
                	}
           		},
				
				//user login validation called
           		authorize:function(){
           			return true;
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
