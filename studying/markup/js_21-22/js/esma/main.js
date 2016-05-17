/*let a=5;

let b=4;
let c=4;
let f=6;

console.log("a:",a);*/

let questionNumber = 3;
let answerNumber = 3;
let Results = [];
let yourResults = [];

$(document).ready(function(){
	
	$('.templateTest').template();
	$('#checkResults').checkboxcheck();
	$('#checkResults').showRirghtResults();
	$('#generateResults').generateResults();
});

(function($){				
	
	$.fn.generateResults = function(options){
		this.on({
			
			click: function(){
				$( ".rightResults" ).empty();
				Results = [];
				Results.length = 0;
				let innerUl= $(".rightResults").add("ul");
				for (let i = 0; i < questionNumber*answerNumber; i++) {
					if (Math.random() >= 0.5) {
						Results.push(true);
						innerUl.append("<li>"+Results[i]+" "+(1+i)+"</li>");
					} else{
						Results.push(false);
						innerUl.append("<li>"+Results[i]+" "+(1+i)+"</li>");
					};					
				};			
	        	
	        	console.log('Results', Results);
	        	console.log('Results.length', Results.length);
			}
		});
		return Results;
	};

	$.fn.checkboxcheck = function(options){
		
		
		this.on({
			
			click: function(){
				
				yourResults.length = 0;
				$("span").remove();
				$( ".yourResults" ).empty();
					        	
	        	$("[id*='answer']").each(function(){
	        		if ( $(this).prop('checked') ) {
	        			yourResults.push(true);
	        			
	        		} else{
	        			yourResults.push(false);	
	        		};
	        	});

				console.log('yourResults', yourResults);
				console.log('yourResults.length', yourResults.length);

				let innerUl= $(".yourResults").add("ul");
				for (let i = 0; i < questionNumber*answerNumber; i++) {
					innerUl.append("<li>"+(i+1)+" "+yourResults[(+i)]+"</li>");
					if ( (Results[i] == yourResults[i]) && (Results[i]==true) &&  ($("[id*='answer"+(1+i)+"']").prop('checked')) ) {
						$("[id*='answer"+(+i+1)+"']").after( $( "<span>"+"Правильно"+" "+(+i+1)+"</span>" ) );
					};
					if ( (Results[i] !== yourResults[i]) && (Results[i]==false) &&  ($("[id*='answer"+(1+i)+"']").prop('checked')) ) {
						$("[id*='answer"+(+i+1)+"']").after( $( "<span>"+"Непровильно"+" "+(+i+1)+"</span>" ) );
					};
				};
				
	        }
		});
	
	};

	$.fn.showRirghtResults = function(options){
		this.on({
			mouseenter: function(){
				
			},
			mouseleave: function(){
				
			},
			click: function(){
				
			}
		});
	};

	$.fn.template = function(options){
		let html = $("#templateTest").html();
		
		let info = [];
		

		info.push('Тест по программированию');
		for (let i = 0; i < questionNumber; i++) {
			
				info.push({
					question: 'Вопрос №'+(i+1),
					answerOne: 'Вариант ответа №'+1 + '<input type="checkbox" id="answer'+(i*questionNumber+1)+'">',
					answerTwo: 'Вариант ответа №'+2 + '<input type="checkbox" id="answer'+(i*questionNumber+2)+'">',
					answerThree: 'Вариант ответа №'+3 + '<input type="checkbox" id="answer'+(i*questionNumber+3)+'">'
				});
						
		};

		/*console.log('info', info);*/

		let content = tmpl(html, {
			data: info
		});
		
		$(this).append(content);
	};
	
})(jQuery);

