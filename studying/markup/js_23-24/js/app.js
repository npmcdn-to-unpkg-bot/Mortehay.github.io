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
			var firstToDoList = ['learn javascript', 'learn html', 'sleep'];
			/*debugger*/
			var model = new modelMod.Model(firstToDoList);
			var view =new viewMod.View(model);
			var controller = new controllerMod.Controller(model, view);
			modelMod.test('ok');
			console.log('$',$);
		/*});*/
	}

);