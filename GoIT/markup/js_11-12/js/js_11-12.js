


$(document).ready(function(){
	$(".carousel-arrow-left").carouselMove();
	$(".carousel-arrow-right").carouselMove();
	$('.templateTest').template();
});

/*
var leftUIEl = $('.carousel-arrow-left');
var rightUIEl = $('.carousel-arrow-right');*/


var pixelsOffset = 225;
var currentLeftValue = 0;
var visibleElement=3;


(function($){				
	
	$.fn.carouselMove = function(options){

		var elementsList = $('.carousel-list');
		var tempValue= $('.carousel-element').length-visibleElement;
		console.log("elementsList.length=",tempValue);
		this.on({
			mouseenter: function(){
				
			},
			mouseleave: function(){
				
			},
			click: function(){
	        	
	        	if ($(this).hasClass('carousel-arrow-left')) {

	        		if (currentLeftValue < 0) {
	        			currentLeftValue += pixelsOffset;
	       				elementsList.animate({ left : currentLeftValue + "px"}, 500);
		        		console.log("currentLeftValue+++=",currentLeftValue);
	        		};
	        	};
	        	if ($(this).hasClass('carousel-arrow-right')) {

	        		if (currentLeftValue > (-tempValue*pixelsOffset) ) {
	        			currentLeftValue -= pixelsOffset;
		        		elementsList.animate({ left : currentLeftValue + "px"}, 500);
		        		console.log("currentLeftValue---=",currentLeftValue);
	        		};
	        	};
	        }
		});
	};

	$.fn.template = function(options){
		var html = $("#templateTest").html();
		var info = [
		{
			title: 'Шпилевой Юрий Борисович',
			contentOne: '<img src="img/littleAngry.jpg">',
			contentTwo: 'Студент заборостроительного унивепрситета'
		},
		{
			title: 'Хочу учить фронтєнд, потому, что:',
			contentOne: 'Заборы строить не интересно',
			contentTwo: 'Платят мало',
			contentThree: 'Приходится работать по ночам'
		},
		{
			title: 'Мой контактный телефон',
			contentOne: '+38000000'
		},
		{
			title: 'Мой профиль в Вконтакте:',
			contentOne: '<a href="https://www.google.com.ua/">Вконтакте</a>'
		},
		{
			title: 'Мой фидбек:',
			contentOne: 'Если нужно, могу покрасить забор'
		}
		];
		var content = tmpl(html, {
			data: info
		});
		
		$(this).append(content);
	};
	
})(jQuery);

