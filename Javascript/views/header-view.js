define([
		'backbone',
		 'jquery',
		 'underscore',
		 'text!/templates/header_template.html',
		 'model/HeaderModel',
		 'libs/pubSub'
		 ], function(
		 	Backbone,
		 	$,
		 	_,
		 	myTemplate,
		 	HeaderModel,
		 	PubSub
		 	){

			var HeaderView = Backbone.View.extend({
				el : '.headerView',

				tagName : 'div',

				template : _.template(myTemplate),

				model :  new HeaderModel,
				
				initialize : function(){
					this.render();
					_.bindAll(this,"remove","success", "error");
					var _this = this;
					this.model.fetch({success : _this.success , error: _this.error});
					PubSub.on('remove:headerView',this.remove);
				},
				events:{
                	'click button#English':'english_css',
                	'click button#French':'french_css'
           		},

           		english_css:function(){

           			$('link[rel=stylesheet]').attr({href : "./css/bootstrap.min.css"});
           		},
           		french_css:function(){

           			$('link[rel=stylesheet]').attr({href : "./css/bootstrap.rtl.min.css"});
           		},
				render: function(){
					var _this = this;
					var _data = {data : _this.model.toJSON()} 
					$(this.el).html(this.template(_data));
				},

				success : function(model, response, options){
					console.log("data mdoel fetcehd for headerView");
					this.render();
				},

				error : function (model, response, options){
					console.log("error in fecthing model");
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