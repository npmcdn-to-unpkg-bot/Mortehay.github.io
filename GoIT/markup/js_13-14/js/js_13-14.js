var questionNumber = 3;
var answerNumber = 3;

$(document).ready(function(){
	
	$('.templateTest').template();
	$('#checkResults').checkboxcheck();

});

(function($){				
	
	$.fn.checkboxcheck = function(options){
		var Results = [];
		var yourResults = [];
		
		this.on({
			mouseenter: function(){
				
			},
			mouseleave: function(){
				
			},
			click: function(){
				Results = [];
				Results.length = 0;
				yourResults.length = 0;
				$("span").remove();
				for (var i = 0; i < questionNumber*answerNumber; i++) {
					
					if (Math.random() >= 0.5) {
						Results.push(true); 
					} else{
						Results.push(false);
					};					
				};			
	        	
	        	console.log('Results', Results);
	        	console.log('Results.length', Results.length);
	        	
	        	$("[id*='answer']").each(function(){
	        		if ( $(this).prop('checked') ) {
	        			yourResults.push(true);
	        		} else{
	        			yourResults.push(false);
	        		};
	        	});
				console.log('yourResults', yourResults);
				console.log('yourResults.length', yourResults.length);
				for (var i = 0; i < questionNumber*answerNumber; i++) {
					if ( (Results[i] == yourResults[i]) && (Results[i]==true) && ($("[id*='answer"+i+"']").prop('checked'))) {
						$("[id*='answer"+i+"']").after( $( "<span>"+"Правильно"+"</span>" ) );	
					};
					if ((Results[i] !== yourResults[i]) && (Results[i]==false) && ($("[id*='answer"+i+"']").prop('checked'))) {
						$("[id*='answer"+i+"']").after( $( "<span>"+"Непровильно"+"</span>" ) );	
					};
				};

	        }
		});
	};

	$.fn.template = function(options){
		var html = $("#templateTest").html();
		
		var info = [];
		
		info.push('Тест по программированию');
		for (var i = 0; i < questionNumber; i++) {
			info.push({
				question: 'Вопрос №'+(i+1),
				answerOne: 'Вариант ответа №'+1 + '<input type="checkbox" id="answer'+(i)+'">',
				answerTwo: 'Вариант ответа №'+2 + '<input type="checkbox" id="answer'+(i+1)+'">',
				answerThree: 'Вариант ответа №'+3 + '<input type="checkbox" id="answer'+(i+2)+'">'
			});
		};

		console.log(info);	

		var content = tmpl(html, {
			data: info
		});
		
		$(this).append(content);
	};
	
})(jQuery);

