(function($) {
    $(function() {
        var jcarousel = $('.jcarousel');

        jcarousel
            .on('jcarousel:reload jcarousel:create', function () {
                var jcarousel = $(this);
                    width = jcarousel.innerWidth();

                jcarousel.jcarousel('items').css('width', Math.ceil(width) + 'px');
            })
            .jcarousel({
                wrap: 'circular'
            });

        $('.jcarousel-control-prev')
            .jcarouselControl({
                target: '-=1'
            });

        $('.jcarousel-control-next')
            .jcarouselControl({
                target: '+=1'
            });

        $('.jcarousel-pagination')
            .on('jcarouselpagination:active', 'a', function() {
                $(this).addClass('active');
            })
            .on('jcarouselpagination:inactive', 'a', function() {
                $(this).removeClass('active');
            })
            .on('click', function(e) {
                e.preventDefault();
            })
            .jcarouselPagination({
                perPage: 1,
                item: function(page) {
                    return '<a href="#' + page + '">' + page + '</a>';
                }
            });
    });
})(jQuery);;//grlobal variebles-----------------------------------
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