define(
	'controllerMod',
	['jquery'],
	function () {

		

		return {
			Controller: function (model, view){
				/*debugger*/
				var self=this;

				view.elements.addBtn.on('click', addItem);
				view.elements.listContainer.on('click', '.item-delete',removeItem);

				function addItem() {
					var newItem = {name:view.elements.input.name.val(),
									mail:view.elements.input.email.val(),
									phone:view.elements.input.phone.val(),
									adress:{
										street:view.elements.input.adress.street.val(),
										city:view.elements.input.adress.city.val(),
										state:view.elements.input.adress.state.val(),
										zip:view.elements.input.adress.zip.val()
									}}
					model.addItem(newItem);
					view.renderList(model.data);
					view.elements.input.name.val('');
					view.elements.input.email.val('');
					view.elements.input.phone.val('');
					view.elements.input.adress.street.val('');
					view.elements.input.adress.city.val('');
					view.elements.input.adress.state.val('');
					view.elements.input.adress.zip.val('');

				};

				function removeItem () {
					var item = $(this).attr('data-value');
					console.log("$(this).attr('data-value')", $(this).attr('data-value'));
					model.removeItem(item);
					view.renderList(model.data);
				};
			}
		};
	}
);