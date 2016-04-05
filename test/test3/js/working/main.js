//grlobal variebles-----------------------------------
var links={
	link1:'https://maps.googleapis.com/maps/api/staticmap?center=0,0&zoom=1&size=640x640&path=weight:3%7Ccolor:blue%7Cenc:aofcFz_bhVJ[n@ZpAp@t@b@uA`FuAzEoCdJiDpLs@VM@y@s@oBcBkAw@cCoAuBu@eEaAiAa@iAi@w@a@o@g@g@k@e@u@uAaCc@i@w@y@eAo@i@UaBc@kAGo@@]JyKA}EC{G?q@?IGKCeGA{CAyCAyEAwEBaFAkJ?yGEyAIiLAiB?{@BcBJ}@@aBGwBEo@A@j@BjBFTHjEl@fOD`C?|@RARAJERWPL@FE^S`AI`A&key=AIzaSyBr408DpWKxQskSBZyFLzdHVoKTcPYQxqU',
	link2:'https://maps.googleapis.com/maps/api/staticmap?maptype=satellite&center=0,0&zoom=1&size=640x640&key=AIzaSyBr408DpWKxQskSBZyFLzdHVoKTcPYQxqU'
}
var paramsCanvas=[
	{	name : "London",
		lat : 51.5085300,
		lon : -0.1257400
	},
	{	name : "New York",
		lat : 40.7142700,
		lon : -74.0059700
	},
	{	name: "Moskow",
		lat: 55.7522200,
		lon: 37.6155600
	},
	{	name: "Sydney",
		lat: -33.8678500,
		lon: +151.2073200
	},
	{	name: "Buenos Aires",
		lat: -34.6131500,
		lon: -58.3772300
	},
	{
		name: "Zero",
		lon:0,
		lat:0
	}
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
	

		 background.onload = function(){	
			ctx.drawImage(background,0,0);
		 };

 
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

		 background.onload = function(){
		    	ctx.drawImage(background,0,0);


		 };
		    	
	});
};
function pointCanvas() {
	var pointCanvas = document.getElementById('points');
	var point = pointCanvas.getContext('2d');

	pointCanvas.width = 640;
	pointCanvas.height = 640;
	point.fillStyle = "#ff0000";
	for (var i = 0; i < paramsCanvas.length; i++) {
		point.fillRect((320+(320*paramsCanvas[i].lon)/228 ),(320-(320*paramsCanvas[i].lat)/191 ),5,5);
		console.log('lon', 320+(320*paramsCanvas[i].lon)/90);
		console.log('lat', 320+(320*paramsCanvas[i].lat)/90);
	}
	var img= new Image();
	img.src=pointCanvas.toDataURL("image/png");
	point.drawImage(img,0,0);

};
//-----------------------------------------------------------

//--jquery main---------------------------------------
$( document ).ready(function(){
	
	
	
	mainloadCanvas();
	reloadCanvas();
	pointCanvas();
});	
	
	
 
//----------------------------------------------------


//jquery plugins--------------------------------------
(function($){				


//-----------------------------------------------------	
	
})(jQuery);