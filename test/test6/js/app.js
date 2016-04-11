requirejs.config({
	paths:{
		'jquery':'https://code.jquery.com/jquery-1.7.1.min'
		
	},
	shim:{
		'jquery':{
			exports: 'jquery'
		}
	}
});

require(
	[
		'modelMod',
		'viewMod',
		'controllerMod',
		'jquery'
		

	],
	function(modelMod, viewMod, controllerMod, $){
		/*$(function (){*/
			var firstToDoList = [
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
			 {name:'name-21111',
			 email:'222222@com',
			 phone:'+222222222',
			 adress:{
			 	street:'Somewher2 st.',
			 	city:'Nowhere2',
			 	state: 'State2',
			 	zip:'999999'
			 	}
			 },
			 {name:'name-21111',
			 email:'3333333333@com',
			 phone:'+35333442455',
			 adress:{
			 	street:'Somewher2 st.',
			 	city:'Nowhere2',
			 	state: 'State2',
			 	zip:'999999'
			 	}
			}];
			/*debugger*/
			var model = new modelMod.Model(firstToDoList);
			console.log('model', model);
			var view =new viewMod.View(model);
			console.log('view', view);
			var controller = new controllerMod.Controller(model, view);
			console.log('controller',controller);
			/*modelMod.test('ok');*/
			/*console.log('$',$);*/
		/*});*/
	}

);