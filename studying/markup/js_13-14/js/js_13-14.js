var questionNumber = 3;
var answerNumber = 3;
var Results = [];
var yourResults = [];

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
				var innerUl= $(".rightResults").add("ul");
				for (var i = 0; i < questionNumber*answerNumber; i++) {
					if (Math.random() >= 0.5) {
						Results.push(true);
						innerUl.append("<li>"+Results[i]+" "+(1+i)+"</li>");
					} else{
						Results.push(false);
						innerUl.append("<li>"+Results[i]+" "+(1+i)+"</li>");
					};					
				};			
	        	/*$(".rightResults").html("right answers:" + Results);*/
	        	console.log('Results', Results);
	        	console.log('Results.length', Results.length);
			}
		});
		return Results;
	};

	$.fn.checkboxcheck = function(options){
		/*var Results = [];
		var yourResults = [];*/
		
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

				var innerUl= $(".yourResults").add("ul");
				for (var i = 0; i < questionNumber*answerNumber; i++) {
					innerUl.append("<li>"+(i+1)+" "+yourResults[(+i)]+"</li>");
					if ( (Results[i] == yourResults[i]) && (Results[i]==true) &&  ($("[id*='answer"+(1+i)+"']").prop('checked')) ) {
						$("[id*='answer"+(+i+1)+"']").after( $( "<span>"+"Правильно"+" "+(+i+1)+"</span>" ) );
					};
					if ( (Results[i] !== yourResults[i]) && (Results[i]==false) &&  ($("[id*='answer"+(1+i)+"']").prop('checked')) ) {
						$("[id*='answer"+(+i+1)+"']").after( $( "<span>"+"Непровильно"+" "+(+i+1)+"</span>" ) );
					};
				};
				/*for (var i = 0; i < questionNumber; i++) {*/

					
					/*for (var j = 0; j < answerNumber; j++) {*/


						//result check
						/*innerUl.append("<li>"+yourResults[(+i+j)]+" "+i+"."+j+"</li>");*/
						//adding @span@
						/*if ( (Results[(+i+j)] == yourResults[(+i+j)]) && (Results[(+i+j)]==true) &&  ($("[id*='answer"+(1+i)+"."+(1+j)+"']").prop('checked')) ) {
						$("[id*='answer"+(+i+1)+"."+(+j+1)+"']").after( $( "<span>"+"Правильно"+" "+(+i+1)+"."+(+j+1)+"</span>" ) );
						};*/
						/*if ((Results[i+j] !== yourResults[i+j]) && (Results[i+j]==false) ) {
						$("[id*='answer"+(i+1)+"."+(j+1)+"']").after( $( "<span>"+"Непровильно"+"</span>" ) );	
						};
						if ((Results[i+j] !== yourResults[i+j]) && (Results[i+j]==true) ) {
							$("[id*='answer"+(i+1)+"."+(j+1)+"']").after( $( "<span>"+"Непровильно"+"</span>" ) );	
						};	*/
											
				/*	};
					
				};*/

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
				/*$(".rightResults").html("right answers:" + Results);*/
			}
		});
	};



	$.fn.template = function(options){
		var html = $("#templateTest").html();
		
		var info = [];
		/*var colection={};*/

		info.push('Тест по программированию');
		for (var i = 0; i < questionNumber; i++) {
			/*colection["question"+(i+1)]='Вопрос №'+(i+1);*/
			/*for (var j = 0; j < answerNumber; j++) {*/
				/*colection["answer"+(i+1)+"."+(j+1)]='Вариант ответа №'+(j+1)+'<input type="checkbox" id="answer'+(i+1)+'.'+(j+1)+'">';*/
				info.push({
					question: 'Вопрос №'+(i+1),
					answerOne: 'Вариант ответа №'+1 + '<input type="checkbox" id="answer'+(i*questionNumber+1)+'">',
					answerTwo: 'Вариант ответа №'+2 + '<input type="checkbox" id="answer'+(i*questionNumber+2)+'">',
					answerThree: 'Вариант ответа №'+3 + '<input type="checkbox" id="answer'+(i*questionNumber+3)+'">'
				});
			/*info.push(colection);*/
			/*};*/
			
		};

		console.log('info', info);

		var content = tmpl(html, {
			data: info
		});
		
		$(this).append(content);
	};
	
})(jQuery);

