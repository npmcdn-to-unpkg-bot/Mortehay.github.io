
$(document).ready(function(){
	$(".carousel-1__arrow-left").carousel_1_Move();
	$(".carousel-1__arrow-right").carousel_1_Move();
	$(".carousel-2__arrow-left").carousel_2_Move();
	$(".carousel-2__arrow-right").carousel_2_Move();
	$(".carousel-3__arrow-left").carousel_3_Move();
	$(".carousel-3__arrow-right").carousel_3_Move();
	$('.grid').masonry({
	  itemSelector: '.grid-item',
	  columnWidth: '.grid-sizer',
	  isFitWidth: true
	});

    
});

var pixelsOffset = 280;
var currentLeftValue_1 = 0;
var currentLeftValue_2 = 0;
var currentLeftValue_3 = 0;
var visibleElement=1;
var pictxtnumber = 1;
var fadeintime = 500;

(function($){				
	
	$.fn.carousel_1_Move = function(options){

		var elementsList = $('.carousel-1__list');
		var tempValue= $('.carousel-1__element').length-visibleElement;
		console.log("elementsList.length=",tempValue);
		this.on({
			mouseenter: function(){
				
			},
			mouseleave: function(){
				
			},
			click: function(){
	        	
	        	if ($(this).hasClass('carousel-1__arrow-left')) {

	        		if (currentLeftValue_1 < 0) {
	        			currentLeftValue_1 += pixelsOffset;
	       				elementsList.animate({ left : currentLeftValue_1 + "px"}, 1000);
		        		console.log("currentLeftValue+++=",currentLeftValue_1);
	        		};
	        	};
	        	if ($(this).hasClass('carousel-1__arrow-right')) {

	        		if (currentLeftValue_1 > (-tempValue*pixelsOffset) ) {
	        			currentLeftValue_1 -= pixelsOffset;
		        		elementsList.animate({ left : currentLeftValue_1 + "px"}, 1000);
		        		console.log("currentLeftValue---=",currentLeftValue_1);
	        		};
	        	};
	        }
		});
	};

	$.fn.carousel_2_Move = function(options){

		var elementsList = $('.carousel-2__list');
		var tempValue= $('.carousel-2__element').length-visibleElement;
		console.log("elementsList.length=",tempValue);
		this.on({
			mouseenter: function(){
				
			},
			mouseleave: function(){
				
			},
			click: function(){
	        	
	        	if ($(this).hasClass('carousel-2__arrow-left')) {

	        		if (currentLeftValue_2 < 0) {
	        			currentLeftValue_2 += pixelsOffset;
	       				elementsList.animate({ left : currentLeftValue_2 + "px"}, 1000);
		        		console.log("currentLeftValue+++=",currentLeftValue_2);
	        		};
	        	};
	        	if ($(this).hasClass('carousel-2__arrow-right')) {

	        		if (currentLeftValue_2 > (-tempValue*pixelsOffset) ) {
	        			currentLeftValue_2 -= pixelsOffset;
		        		elementsList.animate({ left : currentLeftValue_2 + "px"}, 1000);
		        		console.log("currentLeftValue---=",currentLeftValue_2);
	        		};
	        	};
	        }
		});
	};

	$.fn.carousel_3_Move = function(options){

		var elementsList = $('.carousel-3__list');
		var tempValue= $('.carousel-3__element').length-visibleElement;
		console.log("elementsList.length=",tempValue);
		this.on({
			mouseenter: function(){
				
			},
			mouseleave: function(){
				
			},
			click: function(){
	        	
	        	if ($(this).hasClass('carousel-3__arrow-left')) {

	        		if (currentLeftValue_3 < 0) {
	        			currentLeftValue_3 += pixelsOffset;
	       				elementsList.animate({ left : currentLeftValue_3 + "px"}, 1000);
		        		console.log("currentLeftValue+++=",currentLeftValue_3);
	        		};
	        	};
	        	if ($(this).hasClass('carousel-3__arrow-right')) {

	        		if (currentLeftValue_3 > (-tempValue*pixelsOffset) ) {
	        			currentLeftValue_3 -= pixelsOffset;
		        		elementsList.animate({ left : currentLeftValue_3 + "px"}, 1000);
		        		console.log("currentLeftValue---=",currentLeftValue_3);
	        		};
	        	};
	        }
		});
	};

	
})(jQuery);


/*$(document).ready(function(){
	$(".carousel-1__arrow-left").carousel_1_Move();
	$(".carousel-1__arrow-right").carousel_1_Move();
	$(".carousel-2__arrow-left").carousel_2_Move();
	$(".carousel-2__arrow-right").carousel_2_Move();
	$(".carousel-3__arrow-left").carousel_3_Move();
	$(".carousel-3__arrow-right").carousel_3_Move();
	$('.grid').masonry({
	  itemSelector: '.grid-item',
	  columnWidth: '.grid-sizer',
	  isFitWidth: true
	});
	var pixelOffset={
		val1: $(".carousel-1__hider").width(),
		val2: $(".carousel-2__hider").width(),
		val3: $(".carousel-3__hider").width()
	};
	console.log('pixelOffset',pixelOffset);
    $( window ).resize(function() {
	  	pixelOffset.val1 = $(".carousel-1__hider").width();
		pixelOffset.val2 = $(".carousel-2__hider").width();
		pixelOffset.val3 = $(".carousel-3__hider").width();
		console.log('pixelOffset',pixelOffset);
		return pixelOffset;	
	});
    
});


/*console.log('pixelOffset',pixelOffset);*/



/*$( window ).resize(function() {
	  	var pixelOffset.val1 = $(".carousel-1__hider").width();
		console.log('pixelOffset.val1=',pixelOffset.val1);
		var pixelOffset.val2 = $(".carousel-2__hider").width();
		var pixelsOffset_3 = $(".carousel-3__hider").width();
		
});

console.log('pixelOffset.val1=',pixelOffset.val1);*/
/*var pixelOffset={
		val1: $(".carousel-1__hider").width(),
		val2: $(".carousel-2__hider").width(),
		val3: $(".carousel-3__hider").width()
	};*/
