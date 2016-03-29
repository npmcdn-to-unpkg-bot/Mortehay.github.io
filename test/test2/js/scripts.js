//grlobal variebles-----------------------------------
var info=[];
var starArr=[];
var imgArr=[];
var titleArr=[];
var textArr=[];
var starNumber=[];

//--jquery main---------------------------------------
$( document ).ready(function(){
	var json = $.getJSON('https://api.myjson.com/bins/1bxbk', function(json) { 
	    
	    for (var i = 0; i < json.length; i++) {
	    	starNumber.push(json[i].stars);
	    	imgArr.push(json[i].image);
	    	titleArr.push(json[i].title);
	    	textArr.push(json[i].paragraph);
	    };
	    for (var i = 0; i < imgArr.length; i++) {
			var stars='';
			console.log('starNumber', starNumber);
			for (var j = 1; j < 6; j++) {
				if (j<=starNumber[i]) {
					stars+='<span class="blackStar">&#9733</span>';
				};
				if (j>starNumber[i]) {
					stars+='<span class="whiteStar">&#9734;</span>';
				};
				
			};
			starArr.push(stars);
			console.log('starArr', starArr);
		};
		for (var i = 0; i<imgArr.length; i++) {
				info.push({
					imgLink: imgArr[i],
					stars: starArr[i],
					imgTitle: titleArr[i],
					imgText: textArr[i]
				});
		};
	 $('.template').template({id:'#template', arr:info});	
	});
	


 });
//----------------------------------------------------


//jquery plugins--------------------------------------
(function($){				

//template plugin-------------------------------------
	$.fn.template = function(options){
		var html=$(options.id).html();
		
	
		console.log('arr', options.arr);

		var content = tmpl(html, {
			data: options.arr
		});
		$(this).append(content);

	};
//-----------------------------------------------------	
	
})(jQuery);