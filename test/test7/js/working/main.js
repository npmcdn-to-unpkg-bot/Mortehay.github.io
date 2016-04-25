//grlobal variebles-----------------------------------
/*var markers= [[30.63918, 50.45207], 
[30.64052, 50.45246], [30.63976, 50.45468]];*/
var markers = [
	/*{
		lon:30.63918,
		lat:50.45207
	},
	{
		lon:30.64052,
		lat:50.45246
	},
	{
		lon:30.63976,
		lat: 50.45468
	}*/
];
for (var i = 0; i < 10000; i++) {

	markers.push( 
		{
			lon:  30.63929+0.1*Math.random(),
			lat: 50.45283-0.1*Math.random()		
		}
	);
}


//some-code-------------------------------------------
function init(arr) {




   var map = new OpenLayers.Map("basicMap");

    var mapnik = new OpenLayers.Layer.OSM();
    map.addLayer(mapnik);
    map.setCenter(new OpenLayers.LonLat(30.63929, 50.45283) // Центр карты
      .transform(
        new OpenLayers.Projection("EPSG:4326"), // преобразование из WGS 1984
        new OpenLayers.Projection("EPSG:900913") // в Spherical Mercator Projection
      ), 17 // Уровень масштаба
    );
    drawMarkers(markers, map);
   
}	
function drawMarkers(arr,map){

   	var vectorLayer = new OpenLayers.Layer.Vector("Overlay");
	for (var i = 0; i < arr.length; i++) {
		var lon = arr[i].lon;
		var lat = arr[i].lat;
		var  feature = new OpenLayers.Feature.Vector(
			new OpenLayers.Geometry.Point(lon, lat).transform("EPSG:4326", "EPSG:900913"),
			{description: "marker number " + i} ,
			{externalGraphic: 'img/marker.png', graphicHeight: 25, graphicWidth: 20, graphicXOffset:-12, graphicYOffset:-25, } 
				
			);
		feature.attributes= {
			/*name: "img#"+i,
			align:"cm",*/
			/*favColor:"red",
			description: "marker number " + i,*/
			/*externalGraphic: 'img/marker.png', 
			graphicHeight: 25, 
			graphicWidth: 20, 
			graphicXOffset:-12, 
			graphicYOffset:-25*/
		};
		vectorLayer.addFeatures(feature);
	}
	map.addLayer(vectorLayer);
};

	

//-----------------------------------------------------------

//--jquery main---------------------------------------
$( document ).ready(function(){
	
	init(markers);
	
});	
	
	
 
//----------------------------------------------------


//jquery plugins--------------------------------------
(function($){
	
//-----------------------------------------------------
//-----------------------------------------------------	

	
})(jQuery);