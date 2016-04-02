//grlobal variebles-----------------------------------

var starArr=[];
var imgArr=[];
var titleArr=[];
var textArr=[];
var starNumber=[];
var photosInLine=3;

//--jquery main---------------------------------------
$( document ).ready(function(){
	var json = $.getJSON(/*'https://api.myjson.com/bins/1bxbk'*/'https://api.myjson.com/bins/2tqig', function(json) { 
	    
	    for (var i = 0; i < (photosInLine); i++) {
	    	starNumber.push(json[i].stars);
	    	imgArr.push(json[i].image);
	    	titleArr.push(json[i].title);
	    	textArr.push(json[i].paragraph);
	    };
	    
		// dravin starter images---------------------------------	
		 $('.template').template({id:'#template', imgLink:imgArr, stars:starArr, imgTitle:titleArr, imgText:textArr});	
	
	});
 				
	// button for new images-----------------------------------
	$('#morePhotos').on('click', function(){
		/*var photosInLine=3;*/
		var json = $.getJSON(/*'https://api.myjson.com/bins/1bxbk'*/'https://api.myjson.com/bins/2tqig', function(json) { 
	    	starArr=[];
			imgArr=[];
			titleArr=[];
			textArr=[];
			starNumber=[];

	    	console.log('photosInLine=',photosInLine);
	    	if (photosInLine<json.length) {
	    		for (var i = (photosInLine); i < (photosInLine+3); i++) {
			    	starNumber.push(json[i].stars);
			    	imgArr.push(json[i].image);
			    	titleArr.push(json[i].title);
			    	textArr.push(json[i].paragraph);
			    }; 
				$('.template').closest('.template').last().template({id:'#template', imgLink:imgArr, stars:starArr, imgTitle:titleArr, imgText:textArr});	
				photosInLine+=3;
	    	};
		
		    
		});
		
	});

 });
//----------------------------------------------------


//jquery plugins--------------------------------------
(function($){				

//template plugin-------------------------------------
	$.fn.template = function(options){
		var info=[];
		var html=$(options.id).html();
		//----stars------------------------------
		for (var i = 0; i < imgArr.length; i++) {
			var stars='';
			/*console.log('starNumber', starNumber);*/
			for (var j = 1; j < 6; j++) {
				if (j<=starNumber[i]) {
					stars+='<span class="blackStar">&#9733</span>';
				};
				if (j>starNumber[i]) {
					stars+='<span class="whiteStar">&#9734;</span>';
				};
				
			};
			starArr.push(stars);
			/*console.log('starArr', starArr);*/
		};
		//-------tamplate array---------------
		for (var i = 0; i<imgArr.length; i++) {
				info.push({
					imgLink: imgArr[i],
					stars: starArr[i],
					imgTitle: titleArr[i],
					imgText: textArr[i]
				});
		};
		//------------------------------------
		/*console.log('arr', options.arr);*/

		var content = tmpl(html, {
			data: info
		});
		$(this).append(content);

	};
//-----------------------------------------------------	
	
})(jQuery);