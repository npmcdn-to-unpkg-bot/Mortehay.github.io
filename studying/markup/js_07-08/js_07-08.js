


$(document).ready(function(){
	$(".tabs").lightTabs();
	$(":input").myInput();
	
});
(function($){				
	$.fn.lightTabs = function(options){

		var createTabs = function(){
			tabs = this;
			i = 0;
			
			showPage = function(i){
				$(tabs).children("div").children("div").hide();
				$(tabs).children("div").children("div").eq(i).show();
				$(tabs).children("ul").children("li").removeClass("active");
				$(tabs).children("ul").children("li").eq(i).addClass("active");
			}
								
			showPage(0);				
			
			$(tabs).children("ul").children("li").each(function(index, element){
				$(element).attr("data-page", i);
				i++;                        
			});
			
			$(tabs).children("ul").children("li").click(function(){
				showPage(parseInt($(this).attr("data-page")));
			});				
		};		
		return this.each(createTabs);
	};

	$.fn.myInput = function(options){
		this.on({
		mouseenter: function(){
			$(this).css("background-color", "lightgray");
			$(this).after( $( "<span>"+$(this).attr("title")+"</span>" ) );
			$("span").addClass("myTitle");
		},
		mouseleave: function(){
			$(this).css("background-color", "#ffffff");
			$("span").remove();
		},
		click: function(){
        	$(this).css("background-color", "yellow");
        	$("span").remove();
        }
	});
	};


	
})(jQuery);
