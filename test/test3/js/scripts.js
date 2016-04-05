//grlobal variebles-----------------------------------
var links={
	link1:'https://maps.googleapis.com/maps/api/staticmap?center=0,0&zoom=1&size=640x400&path=weight:3%7Ccolor:blue%7Cenc:aofcFz_bhVJ[n@ZpAp@t@b@uA`FuAzEoCdJiDpLs@VM@y@s@oBcBkAw@cCoAuBu@eEaAiAa@iAi@w@a@o@g@g@k@e@u@uAaCc@i@w@y@eAo@i@UaBc@kAGo@@]JyKA}EC{G?q@?IGKCeGA{CAyCAyEAwEBaFAkJ?yGEyAIiLAiB?{@BcBJ}@@aBGwBEo@A@j@BjBFTHjEl@fOD`C?|@RARAJERWPL@FE^S`AI`A&key=AIzaSyBr408DpWKxQskSBZyFLzdHVoKTcPYQxqU',
	link2:'https://maps.googleapis.com/maps/api/staticmap?maptype=satellite&center=0,0&zoom=1&size=640x400&key=AIzaSyBr408DpWKxQskSBZyFLzdHVoKTcPYQxqU'
}
var paramsCanvas=[
	{	name : "London",
		lon : 51.5085300,
		lat : -0.1257400
	},
	{	name : "New York",
		lon : 40.7142700,
		lat : -74.0059700
	},
	{	name: "Moskow",
		lon: 55.7522200,
		lat: 37.6155600
	},
	{	name: "Sydney",
		lon: -33.8678500,
		lat: +151.2073200
	},
	{	name: "Buenos Aires",
		lon: -34.6131500,
		lat: -58.3772300
	},
];
//some-code-------------------------------------------

//main-load-canvas----------------------------------
function mainloadCanvas() {
	$('#progectionType').val('option1');
		var canvas = document.getElementById("canvas");
			ctx = canvas.getContext("2d");

		canvas.width = 640;
		canvas.height = 640;

		console.log( ($('#progectionType').val()) );
		var background = new Image();
		background.src = links.link1;
	
		/*background.onload = function(){*/
		    	ctx.drawImage(background,0,0);
		 /*};*/
		var can2 = document.getElementById('canvas');
		var ctx2 = can2.getContext('2d');

		ctx2.beginPath();
		  ctx2.fillStyle = "pink";
		  ctx2.arc(50, 50, 50, 0, Math.PI * 2, 1);
		  ctx2.fill();
		  ctx2.beginPath();
		  ctx2.clearRect(20, 40, 60, 20);
		  
		    	ctx.drawImage(can2,0,0);
		 
};
//---------------------------------------------------------------
//reload-canvas-------------------------------------------
function reloadCanvas() {
	$('#progectionType').on('change', function() {

		var canvas = document.getElementById("canvas");
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
		
		/*background.onload = function(){*/
		    ctx.drawImage(background,0,0);
		 /*};*/	
		var can2 = document.getElementById('canvas');
		var ctx2 = can2.getContext('2d');

		ctx2.beginPath();
		  ctx2.fillStyle = "pink";
		  ctx2.arc(50, 50, 50, 0, Math.PI * 2, 1);
		  ctx2.fill();
		  ctx2.beginPath();
		  ctx2.clearRect(20, 40, 60, 20);
		  
		    	ctx.drawImage(can2,0,0);
	});
};
function pointCanvas() {


};
//-----------------------------------------------------------

//--jquery main---------------------------------------
$( document ).ready(function(){
	
	mainloadCanvas();
	reloadCanvas();
	
});	
	
	
 
//----------------------------------------------------


//jquery plugins--------------------------------------
(function($){				


//-----------------------------------------------------	
	
})(jQuery);