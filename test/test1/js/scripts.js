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
var yourInfo=[];
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
var yourImgArr=['img/yourimg/yourimg_1.png'];
var yourHeaderArr=['Something about you'];
var yourAboutArr=['	Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, nobis, deleniti libero aliquid et dolorum! Id doloribus ipsam laboriosam ut eveniet enim aspernatur suscipit, consectetur libero, nostrum, itaque rerum delectus.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis commodi pariatur, vero distinctio earum autem? Quasi eum, minus enim dolor fugit alias doloribus officiis modi numquam nemo voluptas laudantium laborum!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores eveniet, magnam itaque beatae sint consequatur impedit a inventore et, natus voluptatem qui, laborum dignissimos! Deleniti veritatis, labore esse sunt doloremque! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, illum! Eius accusantium vero molestiae unde alias. Dolor facere sint eligendi totam quos laudantium alias excepturi, omnis, provident consectetur earum voluptatibus.'];
var yourtImgText=['Your photo'];
//--jquery main---------------------------------------
$( document ).ready(function(){
	
	$('.jcarousel-list').template({id:'#template', arr: info});
	$('.jcarousel-pagination').jcarouselPagination('reloadCarouselItems');
	$('.jcarousel').jcarousel({
		list:'.jcarousel-list',
		items: '.jcarousel-item'
	});
	$('.article').template({id:'#article', arr:yourInfo});
});
//----------------------------------------------------

//some code-------------------------------------------
for (var i = 0; i < yourImgArr.length; i++) {
	yourInfo.push({
		imgAbout: yourAboutArr[i],
		imgHeader: yourHeaderArr[i],
		imgText: yourtImgText[i],
		imgLink: yourImgArr[i],
	});
};
for (var i = 0; i<imgArr.length; i++) {
		info.push({
			imgLink: imgArr[i],
			imgText: textArr[i]
		});
};
/*$.getJSON('../../data/data.json&callback=?', function(data) {         
    alert(data);
});*/
/* var request = new XMLHttpRequest();
   request.open("GET", "../../data/file.json", false);
   request.send(null)
   var my_JSON_object = JSON.parse(request.responseText);
   alert (my_JSON_object.result);*/
/*var xmlhttp = new XMLHttpRequest();
var url = "data/data.json";
xmlhttp.open("GET", url, true);
xmlhttp.send();

xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        var myArr = JSON.parse(xmlhttp.responseText);
        console.log(myArr);
    }
};*/



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