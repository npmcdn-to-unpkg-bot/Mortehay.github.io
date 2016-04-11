define(
	'viewMod',
	['jquery'],
	function () {

		

		return {
			View: function (model){
				var self=this;
				
				function init () {
					var wrapper = tmpl($('#wrapper-template').html());
					$("body").append(wrapper);

					self.elements = {
						input: /*$('.item-value')*/{
							name: $('.item-value-name'),
							email: $('.item-value-email'),
							phone: $('.item-value-phone'),
							adress:{
								street: $('.item-value-adress-street'),
								city: $('.item-value-adress-city'),
								state: $('.item-value-adress-state'),
								zip: $('.item-value-adress-zip')
							}
						},
						addBtn: $('.item-add'),
						listContainer: $('.item-list')
					};

					self.renderList(model.data);
			 	};
				self.renderList = function (data) {
					//debugger
					var list = tmpl($('#list-template').html(), {data: data});
					self.elements.listContainer.html(list);
				};

				init();
			}
		};
	}
);