//grlobal variebles-----------------------------------
params = {
	width:320,
	height:320,
	strokeStyle:'red',

};

//some-code-------------------------------------------

function eyeDraving(params) {
	var eyeDrawing = document.getElementById('canvas');
	var drawingLines = eyeDrawing.getContext('2d');
	eyeDrawing.width = params.width;
	eyeDrawing.height = params.height;

	// complete custom shape
	drawingLines.lineWidth = 2;
	drawingLines.strokeStyle = params.strokeStyle;
	drawingLines.closePath();
	drawingLines.fillStyle = '#8ED6FF';
    drawingLines.fill();	

	//outer eye------
	drawingLines.beginPath();
    drawingLines.moveTo(params.width/2-104, params.height/2);
    drawingLines.lineTo(params.width/2-83, params.height/2 -10);
    drawingLines.lineTo(params.width/2-89, params.height/2 -22);
    drawingLines.lineTo(params.width/2-71, params.height/2 -16);
    drawingLines.lineTo(params.width/2-63, params.height/2 -63);
    drawingLines.lineTo(params.width/2-51, params.height/2 -30);
    drawingLines.lineTo(params.width/2, params.height/2 -44);
    drawingLines.lineTo(params.width/2+51, params.height/2 -30);
    drawingLines.lineTo(params.width/2+63, params.height/2 -63);
    drawingLines.lineTo(params.width/2+71, params.height/2 -16);
    drawingLines.lineTo(params.width/2+89, params.height/2 -22);
    drawingLines.lineTo(params.width/2+83, params.height/2 -10);
    drawingLines.lineTo(params.width/2+104, params.height/2);
    drawingLines.lineTo(params.width/2+68, params.height/2+20);
    drawingLines.lineTo(params.width/2+59, params.height/2+43);
    drawingLines.lineTo(params.width/2+43, params.height/2+30);
    drawingLines.lineTo(params.width/2+37, params.height/2+38);
    drawingLines.lineTo(params.width/2+29, params.height/2+30);
    drawingLines.lineTo(params.width/2+8, params.height/2+35);
    drawingLines.lineTo(params.width/2, params.height/2+43);
    drawingLines.lineTo(params.width/2-8, params.height/2+35);
    drawingLines.lineTo(params.width/2-29, params.height/2+30);
    drawingLines.lineTo(params.width/2-37, params.height/2+38);
    drawingLines.lineTo(params.width/2-43, params.height/2+30);
    drawingLines.lineTo(params.width/2-59, params.height/2+43);
    drawingLines.lineTo(params.width/2-68, params.height/2+20);
    drawingLines.lineTo(params.width/2-104, params.height/2);
    drawingLines.lineJoin = 'outerEye';
    drawingLines.stroke();

	//-----------
	//tears drops------
	drawingLines.beginPath();
	drawingLines.moveTo(params.width/2, params.height/2+48);
	drawingLines.quadraticCurveTo(params.width/2+10, params.height/2+103, params.width/2, params.height/2+110);
	drawingLines.quadraticCurveTo(params.width/2-10, params.height/2+103, params.width/2, params.height/2+48);
	drawingLines.lineJoin = 'middleTear'
	drawingLines.stroke();
    
    drawingLines.beginPath();
	drawingLines.moveTo(params.width/2-34, params.height/2+41);
	drawingLines.quadraticCurveTo(params.width/2+8-34, params.height/2+79, params.width/2-34, params.height/2+84);
	drawingLines.quadraticCurveTo(params.width/2-8-34, params.height/2+79, params.width/2-34, params.height/2+41);
	drawingLines.lineJoin = 'leftTear'
	drawingLines.stroke();
    
    drawingLines.beginPath();
	drawingLines.moveTo(params.width/2+34, params.height/2+41);
	drawingLines.quadraticCurveTo(params.width/2+8+34, params.height/2+79, params.width/2+34, params.height/2+84);
	drawingLines.quadraticCurveTo(params.width/2-8+34, params.height/2+79, params.width/2+34, params.height/2+41);
	drawingLines.lineJoin = 'rightTear'
	drawingLines.stroke();
    

	//-----------
	
	

    //--tear drops--- 
    
	};

//-----------------------------------------------------------

//--jquery main---------------------------------------
$( document ).ready(function(){
	
eyeDraving(params);	
	
});	
	
	
 
//----------------------------------------------------


//jquery plugins--------------------------------------
(function($){
	
//-----------------------------------------------------
//-----------------------------------------------------	

	
})(jQuery);