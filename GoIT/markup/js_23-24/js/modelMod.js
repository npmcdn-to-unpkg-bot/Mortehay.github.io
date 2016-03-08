define(
	'modelMod',
	['jquery'],
	function () {

		

		return {
			Model: function (){
				var self=this;
				self.data=['learn javascript', 'learn html', 'sleep'];
				self.addItem = function(item) {
					

					if (item.length !== 0) { // в такому випадку не додає елемент, якщо поле пусте
						self.data.push(item); 
					};

					return self.data;
				};
				self.removeItem = function(item) {
					var index =self.data.indexOf(item);

					if (index === -1) {
						return;
					};

					self.data.splice(index, 1);

					return self.data;
				};
			},
			test:function(text){
				console.log('modelMod works=',text);
			}
		};
	}
);