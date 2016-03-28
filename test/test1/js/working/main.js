//grlobal variebles-----------------------------------
var info=[];
var imgArr=['img/carousel/carousel_1.png',
'img/carousel/carousel_2.png',
'img/carousel/carousel_3.png',
'img/carousel/carousel_4.png',
'img/carousel/carousel_5.png'];
var textArr=['Monetise your skills 1111',
'Monetize your skills 2222',
'Monetize your skills 3333',
'Monetize your skills 4444',
'Monetize your skills 5555'];
//--jquery main---------------------------------------
$( document ).ready(function(){
	
	$('.jcarousel-list').template({id:'#template', arr: info});
	$('.jcarousel-pagination').jcarouselPagination('reloadCarouselItems');
	$('.jcarousel').jcarousel({
		list:'.jcarousel-list',
		items: '.jcarousel-item'
	});
});
//----------------------------------------------------

//some code-------------------------------------------

for (var i = 0; i < 5; i++) {
		info.push({
			imgLink: imgArr[i],
			imgText: textArr[i]
		});
};

var xmlhttp = new XMLHttpRequest();
var url = "data/data.json";
xmlhttp.open("GET", url, true);
xmlhttp.send();

xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        var myArr = JSON.parse(xmlhttp.responseText);
        console.log(myArr);
    }
};



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