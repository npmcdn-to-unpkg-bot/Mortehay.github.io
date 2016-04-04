//grlobal variebles-----------------------------------
var links={
	link1:'https://maps.googleapis.com/maps/api/staticmap?center=0,0&zoom=1&size=640x400&path=weight:3%7Ccolor:blue%7Cenc:aofcFz_bhVJ[n@ZpAp@t@b@uA`FuAzEoCdJiDpLs@VM@y@s@oBcBkAw@cCoAuBu@eEaAiAa@iAi@w@a@o@g@g@k@e@u@uAaCc@i@w@y@eAo@i@UaBc@kAGo@@]JyKA}EC{G?q@?IGKCeGA{CAyCAyEAwEBaFAkJ?yGEyAIiLAiB?{@BcBJ}@@aBGwBEo@A@j@BjBFTHjEl@fOD`C?|@RARAJERWPL@FE^S`AI`A&key=AIzaSyBr408DpWKxQskSBZyFLzdHVoKTcPYQxqU',
	link2:'https://maps.googleapis.com/maps/api/staticmap?maptype=satellite&center=0,0&zoom=1&size=640x400&key=AIzaSyBr408DpWKxQskSBZyFLzdHVoKTcPYQxqU'
}
//some-code-------------------------------------------

//--jquery main---------------------------------------
$( document ).ready(function(){
	$('#progectionType').val('option1');
	var canvas = document.getElementById("canvas"),
			    ctx = canvas.getContext("2d");

			canvas.width = 640;
			canvas.height = 640;

			console.log( ($('#progectionType').val()) );
			var background = new Image();
			background.src = links.link1;
			
			
		
		background.onload = function(){
	    ctx.drawImage(background,0,0);
	    };	
	$('#progectionType').on('change', function() {

		var canvas = document.getElementById("canvas"),
			    ctx = canvas.getContext("2d");

			canvas.width = 640;
			canvas.height = 640;

			console.log( ($('#progectionType').val()) );
			var background = new Image();
			if ( $('#progectionType').val()  =='option1')  {
				background.src = links.link1;
			};

			if ( $('#progectionType').val()  =='option2') {
				background.src = links.link2;
			};
		
		background.onload = function(){
	    ctx.drawImage(background,0,0);
	    };	

	});
});	
	
	
 
//----------------------------------------------------


//jquery plugins--------------------------------------
(function($){				


//-----------------------------------------------------	
	
})(jQuery);