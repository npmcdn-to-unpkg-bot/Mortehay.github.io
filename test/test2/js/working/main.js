//grlobal variebles-----------------------------------
var info=[];
var starArr=[];
var imgArr=['img/img_1.png',
'img/img_2.png',
'img/img_3.png'];
var titleArr=['NEW ZELAND TIMELAPS', 'NEW ZELAND TIMELAPS', 'NEW ZELAND TIMELAPS'];

var textArr=['	Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate mollitia praesentium possimus incidunt ea optio sapiente, ratione adipisci non! Ex beatae ',
'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis obcaecati veritatis ad repellat quas nam ratione aut deserunt, possimus magni deleniti eum, dolore qua',
'Lorem ipsum dolor sit amet, consectetur adipisicing elit. In reprehenderit totam sequi iusto atque fugiat culpa sint soluta, quos quod, ipsam officia natus',
];

//--jquery main---------------------------------------
$( document ).ready(function(){

	$('.template').template({id:'#template', arr:info});
});
//----------------------------------------------------

//some code-------------------------------------------
for (var i = 0; i < imgArr.length; i++) {
	starNumber=Math.round( (10*Math.random())/2);
	var stars='';
	console.log('starNumber', starNumber);
	for (var j = 1; j < 6; j++) {
		if (j<=starNumber) {
			stars+='<span class="blackStar">&#9733</span>';
		};
		if (j>starNumber) {
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