//--------task111111111

$(document).ready(function(){
	$(".carousel-arrow-left").carouselMove();
	$(".carousel-arrow-right").carouselMove();
	$(".carousel-element>img").imgWrap();
	$(".endlesscarousel").endlessCarousel();
	




	function close_accordion_section() {
        $('.accordion .accordion-section-title').removeClass('active');
        $('.accordion .accordion-section-content').slideUp(300).removeClass('open');
    }
 
    $('.accordion-section-title').click(function(e) {
        // Grab current anchor value
        var currentAttrValue = $(this).attr('href');
 
        if($(e.target).is('.active')) {
            close_accordion_section();
        }else {
            close_accordion_section();
 
            // Add active class to section title
            $(this).addClass('active');
            // Open up the hidden content panel
            $('.accordion ' + currentAttrValue).slideDown(300).addClass('open'); 
        }
 
        e.preventDefault();
    });

    
});

var pixelsOffset = 280;
var currentLeftValue = 0;
var visibleElement=4;
var pictxtnumber = 1;
var fadeintime = 500;

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
	       				elementsList.animate({ left : currentLeftValue + "px"}, 1000);
		        		console.log("currentLeftValue+++=",currentLeftValue);
	        		};
	        	};
	        	if ($(this).hasClass('carousel-arrow-right')) {

	        		if (currentLeftValue > (-tempValue*pixelsOffset) ) {
	        			currentLeftValue -= pixelsOffset;
		        		elementsList.animate({ left : currentLeftValue + "px"}, 1000);
		        		console.log("currentLeftValue---=",currentLeftValue);
	        		};
	        	};
	        }
		});
	};

	$.fn.imgWrap = function(options){
		$(this).wrap('<div class="carousel-element-overlay overlay-color"></div>');
	};

	$.fn.endlessCarousel = function(options){
		$('.endlesscarousel').html('<img src="img/endlesscarousel/endlesscarousel-1.png">');
		function loadpictxt(num) {
		    $('.endlesscarousel').html('');
		    $(".hidden-endlesscarousel img:nth-child(" + num + ") ").clone().appendTo('.endlesscarousel');
		    $('.endlesscarousel img').css('margin-left', '1160px');
		    $('.endlesscarousel img').animate({marginLeft: "0"}, 1000);  
		}
		var pictxtnumber = 0;
    	var interval = setInterval(function() { 
	        pictxtnumber = pictxtnumber + 1;
	        if(pictxtnumber > 3)
	         {
	          pictxtnumber = 1;
	          }
	        loadpictxt(pictxtnumber);
	        }, 5000);
    	
	};



	//----------task22222222222
	
	var obj = JSON.parse(text);
	console.log("JSON.parse=",obj);
	var skills=_.map(obj, 'skills');
	console.log("_.map=",skills);
	skills=_.flatten(skills);
	console.log("_.flatten=length",skills.length)
	console.log("_.flatten=",skills);

	skills=_.uniq(skills);
	console.log("_.uniq=length",skills.length)
	console.log("_.uniq=",skills);

	skills.sort();
	console.log(skills);

	/*var names=_.map(obj, 'name');
	console.log("_.map=",names);*/
	var names=_.map(obj, _.partial(_.ary(_.pick, 2), _, ['name', 'friends']));
	console.log("_.map=",names);
	
	var names=_.sortBy(names, 'name', function(o){
		return _.size(o.friends);
	});
	console.log('_.sortBy',names);

	var friends=_.map(obj, 'friends');
	friends=_.flatten(friends);
	friends=_.uniq(friends);
	console.log("friends",names);
	
  



})(jQuery);

