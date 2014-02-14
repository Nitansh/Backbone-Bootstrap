define([
		'backbone',
		 'jquery',
		 'underscore',
		 'text!/templates/body_template.html',
		 'libs/pubSub'
		 ], function(
		 	Backbone,
		 	$,
		 	_,
		 	myTemplate,
		 	PubSub
		 	){

			var BodyView = Backbone.View.extend({
				el : '.myView',

				tagName : 'div',

				template : _.template(myTemplate),
				
				initialize : function(){
					_.bindAll(this,"navigateToLogin","remove");
					PubSub.on('remove:bodyView',this.remove);
					this.render();
					
					
				},
				events:{
                	'click button#login':'validate'
           		},

            	validate:function(){
                	if($('#UserName').val()==null || $('#UserName').val()=="" ) {
                		 $("#alert").append("<div class='alert alert-warning'>Please enter User Name<span class='close' data-dismiss='alert'>&times;</span></div>");
                		
                	}else if($('#Password').val()==null || $('#Password').val()=="" ) {
                		$("#alert1").append("<div class='alert alert-warning'>Please enter Password<span class='close' data-dismiss='alert'>&times;</span></div>");
                	}else if(this.navigateToLogin()){
                		//route will be changed here
                		PubSub.trigger("userAuthorized","UserAuthorized");
                	}else {
                		alert('user name or password is not valid')
                	}
           		},
				
				//user login validation called
    			navigateToLogin: function(){
        			return true; 
    			},

           		resetField:function(){
           			$('#UserName').val(null);
           			$('#Password').val(null);
           		},
				render: function(){
					$(this.el).html(this.template());
					return this;
				},

				remove: function() {
    				this.undelegateEvents();
    				this.stopListening();
    				PubSub.off('remove:bodyView');
    				return this;
				}

			});
			return BodyView;
});
