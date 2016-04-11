define(
	'modelMod',
	['jquery'],
	function () {

		

		return {
			Model: function (){
				var self=this;
				self.data=[
			{name:'name-1111',
			 email:'111111@com',
			 phone:'+111111111',
			 adress:{
			 	street:'Somewher1 st.',
			 	city:'Nowhere1',
			 	state: 'State1',
			 	zip:'024682'
			 	}
			 },
			 {name:'name-2222',
			 email:'222222@com',
			 phone:'+222222222',
			 adress:{
			 	street:'Somewher2 st.',
			 	city:'Nowhere2',
			 	state: 'State2',
			 	zip:'999999'
			 	}
			 },
			 {name:'name-3333',
			 email:'3333333333@com',
			 phone:'+35333442455',
			 adress:{
			 	street:'Somewher2 st.',
			 	city:'Nowhere2',
			 	state: 'State2',
			 	zip:'999999'
			 	}
			}];
				self.addItem = function(item) {
					

					if ( (item.name.length !== 0) || (item.mail.length !== 0) || (item.phone.length !== 0) || (item.adress.street.length !== 0) || (item.adress.city.length !== 0) || (item.adress.state.length !== 0) || (item.adress.zip.length !== 0) ){ // в такому випадку не додає елемент, якщо поле пусте
						self.data.push({
							name:item.name,
							email:item.email,
							phone:item.phone,
							adress:{
								street:item.adress.street,
								city:item.adress.city,
								state:item.adress.state,
								zip:item.adress.zip
							}
						});

					} else { alert('you have missed some value')};

					return self.data;
				};
				console.log('self.data',self.data);
				self.removeItem = function(item) {
					/*console.log('item',item);
					console.log('self.data',self.data);
					var index =self.data.indexOf(item);
					console.log('index',index);
					if (index === -1) {
						return;
					};*/

					self.data.splice(item, 1);

					return self.data;
				};
			}/*,
			test:function(text){
				console.log('modelMod works=',text);
			}*/
		};
	}
);