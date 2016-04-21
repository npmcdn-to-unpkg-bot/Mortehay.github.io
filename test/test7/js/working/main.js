//grlobal variebles-----------------------------------


//some-code-------------------------------------------
function init() {
   var map = new OpenLayers.Map("basicMap");
    var mapnik = new OpenLayers.Layer.OSM();
    map.addLayer(mapnik);
    map.setCenter(new OpenLayers.LonLat(43.998779,56.316537) // Центр карты
      .transform(
        new OpenLayers.Projection("EPSG:4326"), // преобразование из WGS 1984
        new OpenLayers.Projection("EPSG:900913") // в Spherical Mercator Projection
      ), 12 // Уровень масштаба
    );
}	


	

//-----------------------------------------------------------

//--jquery main---------------------------------------
$( document ).ready(function(){
	
	init();
	
});	
	
	
 
//----------------------------------------------------


//jquery plugins--------------------------------------
(function($){
	
//-----------------------------------------------------
//-----------------------------------------------------	

	
})(jQuery);