//grlobal variebles-----------------------------------
var marker1= [{
		lon:30.63918,
		lat:50.45207
	}];
var markers = [
	{
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
	}
];
for (var i = 0; i < 10000; i++) {

	markers.push( 
		{
			lon:  30.63929+0.1*Math.random(),
			lat: 50.45283-0.1*Math.random()		
		}
	);
}
console.log('markers', markers);

//some-code-------------------------------------------
/*function init(arr) {




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
   	var marker = new OpenLayers.Feature.Vector(
			myLocation,
			{description: "marker number " + i} ,
			{externalGraphic: 'img/marker.png', graphicHeight: 25, graphicWidth: 21, graphicXOffset:-12, graphicYOffset:-25 }
		);
   	overlay.addFeatures([ new OpenLayers.Feature.Vector(myLocation, {tooltip: 'OpenLayers'})
    ]);
	for (var i = 0; i < arr.length; i++) {
		var lon = arr[i].lon;
		var lat = arr[i].lat;
		var myLocation = new OpenLayers.Geometry.Point(lon, lat).transform('EPSG:4326', 'EPSG:3857');
		
		var popup = new OpenLayers.Popup.FramedCloud("Popup", 
        myLocation.getBounds().getCenterLonLat(), null,
        '<a target="_blank" href="http://openlayers.org/">We</a> ' +
        'could be here.<br>Or elsewhere.', null,
        true // <-- true if we want a close (X) button, false otherwise
    );
		vectorLayer.addFeatures(marker);
	}
	map.addLayer(vectorLayer);
};


*/
/*function init() {
    
    // The overlay layer for our marker, with a simple diamond as symbol
    var overlay = new OpenLayers.Layer.Vector('Overlay', {
        styleMap: new OpenLayers.StyleMap({
            externalGraphic: 'img/marker.png',
            graphicWidth: 20, graphicHeight: 24, graphicYOffset: -24,
            title: '${tooltip}'
        })
    });

    // The location of our marker and popup. We usually think in geographic
    // coordinates ('EPSG:4326'), but the map is projected ('EPSG:3857').
    var myLocation = new OpenLayers.Geometry.Point(10.2, 48.9).transform('EPSG:4326', 'EPSG:3857');
    var centerLocation = new OpenLayers.Geometry.Point(10.2, 48.9).transform('EPSG:4326', 'EPSG:3857');
    // We add the marker with a tooltip text to the overlay
    overlay.addFeatures([
        new OpenLayers.Feature.Vector(myLocation, {tooltip: 'OpenLayers'})
    ]);

    // A popup with some information about our location
    var popup = new OpenLayers.Popup.FramedCloud("Popup", 
        myLocation.getBounds().getCenterLonLat(), null,
        '111'+'11', null,
        true // <-- true if we want a close (X) button, false otherwise
    );

     // Create a point feature to show the label offset options
            var labelOffsetPoint = new OpenLayers.Geometry.Point(10.2, 48.9);  
            var labelOffsetFeature = new OpenLayers.Feature.Vector(labelOffsetPoint);
            labelOffsetFeature.attributes = {
                name: "offset",
                age: 22,
                favColor: 'blue',
                align: "rt",
                // positive value moves the label to the right
                xOffset: 50,
                // negative value moves the label down
                yOffset: -15
            };

    // Finally we create the map
    map = new OpenLayers.Map({
        div: "map", projection: "EPSG:3857",
        layers: [new OpenLayers.Layer.OSM(), overlay],
        center: [centerLocation.getBounds().getCenterLonLat()], zoom: 14
    });
    // and add the popup to it.
    map.addPopup(popup, labelOffsetPoint);
}	
*/

var map;

function init(markers, marker1){
    map = new OpenLayers.Map('map');
    
    var layer = new OpenLayers.Layer.WMS( "OpenLayers WMS", 
            "http://vmap0.tiles.osgeo.org/wms/vmap0", {layers: 'basic'} );
    map.addLayer(layer);
    
    // allow testing of specific renderers via "?renderer=Canvas", etc
    var renderer = OpenLayers.Util.getParameters(window.location.href).renderer;
    renderer = (renderer) ? [renderer] : OpenLayers.Layer.Vector.prototype.renderers;
    
    var vectorLayer = new OpenLayers.Layer.Vector("Simple Geometry", {
        styleMap: new OpenLayers.StyleMap({'default':{
            strokeColor: "#00FF00",
            strokeOpacity: 1,
            strokeWidth: 3,
            fillColor: "#FF5500",
            fillOpacity: 0.5,
            pointRadius: 6,
            pointerEvents: "visiblePainted",
            // label with \n linebreaks
            label : "_ ${name}\n_ ${type}",
            
            fontColor: "${favColor}",
            fontSize: "10px",
            fontFamily: "Courier New, monospace",
            fontWeight: "bold",
            labelAlign: "${align}",
            labelXOffset: "${xOffset}",
            labelYOffset: "${yOffset}",
            labelOutlineColor: "white",
            labelOutlineWidth: 3
        }}),
        renderers: renderer
    });
    
 /*   // create a point feature
    var point = new OpenLayers.Geometry.Point(-111.04, 45.68);
    var pointFeature = new OpenLayers.Feature.Vector(point);
    pointFeature.attributes = {
        name: "toto",
        age: 20,
        favColor: 'red',
        align: "cm"
    };*/
    
    // create a polygon feature from a linear ring of points
    /*var pointList = [];
    for(var p=0; p<6; ++p) {
        var a = p * (2 * Math.PI) / 7;
        var r = Math.random(1) + 1;
        var newPoint = new OpenLayers.Geometry.Point(point.x + 5 + (r * Math.cos(a)),
                                                     point.y + 5 + (r * Math.sin(a)));
        pointList.push(newPoint);
    }
    pointList.push(pointList[0]);
    
    var linearRing = new OpenLayers.Geometry.LinearRing(pointList);
    var polygonFeature = new OpenLayers.Feature.Vector(
        new OpenLayers.Geometry.Polygon([linearRing]));
    polygonFeature.attributes = {
        name: "dude",
        age: 21,
        favColor: 'purple',
        align: 'lb'
    };
    
    multiFeature = new OpenLayers.Feature.Vector(
        new OpenLayers.Geometry.Collection([
            new OpenLayers.Geometry.LineString([
                new OpenLayers.Geometry.Point(-105,40),
                new OpenLayers.Geometry.Point(-95,45)
            ]),
            new OpenLayers.Geometry.Point(-105, 40)
        ]),
        {
            name: "ball-and-chain",
            age: 30,
            favColor: 'black',
            align: 'rt'
        });
*/
	for (var i = 0; i < markers.length; i++) {
		/*console.log('markers', markers[i].lon);*/
		// Create a point feature to show the label offset options
	    var labelOffsetPoint = new OpenLayers.Geometry.Point(markers[i].lon, markers[i].lat);
	    var labelOffsetFeature = new OpenLayers.Feature.Vector(labelOffsetPoint);
	    labelOffsetFeature.attributes = {
	        name: "offset",
	        type: 22,
	        favColor: 'blue',
	        align: "cm",
	        // positive value moves the label to the right
	        xOffset: 20,
	        // negative value moves the label down
	        yOffset: -15
	    };

	}
    


   /* var nullFeature = new OpenLayers.Feature.Vector(null);
    nullFeature.attributes = {
        name: "toto is some text about the world",
        age: 20,
        favColor: 'red',
        align: "cm"
    };
    */
    
    /*vectorLayer.drawFeature(multiFeature);*/
    map.setCenter(new OpenLayers.LonLat(marker1[0].lon, marker1[0].lat), 10);
    vectorLayer.addFeatures([/*pointFeature,*/ /*polygonFeature,*/ /*multiFeature,*/ labelOffsetFeature/*, nullFeature */]);
    map.addLayer(vectorLayer);
}


//-----------------------------------------------------------

//--jquery main---------------------------------------
$( document ).ready(function(){
	
	init(markers, marker1);
	
});	
	
	
 
//----------------------------------------------------


//jquery plugins--------------------------------------
(function($){
	
//-----------------------------------------------------
//-----------------------------------------------------	

	
})(jQuery);