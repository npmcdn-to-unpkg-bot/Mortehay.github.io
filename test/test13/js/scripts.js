

//center point of map
var centerPoint=[
  {
    lon:33.299560546875,
    lat:48.545705491847464,
    zoom:6
  }
];
//test points
//https://api.myjson.com/bins/20na7

var defaultPointStyle = new ol.style.Style({
    image: new ol.style.Circle({
      radius: 5,
      fill: new ol.style.Fill({color: 'white'}),
      stroke: new ol.style.Stroke({
          color: [101, 95, 90, 1],
          width: 1
        })  
    })
  })
var newPointStyle= new ol.style.Style({
    image: new ol.style.Circle({
      radius: 5,
      fill: new ol.style.Fill({color: 'red'}),
      stroke: new ol.style.Stroke({
          color: [181, 25, 90, 1],
          width: 1
        })  
    })
  })

// Create layers instances
var osmLayer = new ol.layer.Tile({
    source: new ol.source.OSM({
        layer: 'osm'
    }),
    name: 'OSM'
});
// a vector layer to render the source
var testPoints = new ol.layer.Vector({
  source: new ol.source.Vector({
    url: 'https://api.myjson.com/bins/403w3',
    extractStyles: false,
    projection: 'EPSG:3857',
    format: new ol.format.GeoJSON()
   

  }),
  id:'srm',
  name: 'testPoints',
  style: defaultPointStyle/**/
});

var selectInteraction = new ol.interaction.Select({
        condition: ol.events.condition.singleClick,
        toggleCondition: ol.events.condition.shiftKeyOnly,
        layers: function (layer) {
          return layer.get('id') == 'srm';
        },
        style: newPointStyle
      });
// Create map
var map = new ol.Map({
    target: 'map',  // The DOM element that will contains the map
    renderer: 'canvas', // Force the renderer to be used
    layers: [osmLayer, testPoints],
    // Create a view centered on the specified location and zoom level
    view: new ol.View({
        center: ol.proj.transform([centerPoint[0].lon, centerPoint[0].lat], 'EPSG:4326', 'EPSG:3857'),
        zoom: centerPoint[0].zoom
    })
});

map.getInteractions().extend([selectInteraction]);

//layer style
function styleFunction(feature, resolution) {
        var style;
        var geom = feature.getGeometry();
        if (geom.getType() == 'Point') {
          var text = feature.get('name');
          baseTextStyle.text = text;
          // this is inefficient as it could create new style objects for the
          // same text.
          // A good exercise to see if you understand would be to add caching
          // of this text style
          
          style = defaultPointStyle;
        } else {
          style = newPointStyle;
        }

        return [style];
      }

      var featureOverlay = new ol.FeatureOverlay({
        map: map,
        style: styleFunction
      });

      // when the mouse moves over the map, we get an event that we can use
      // to create a new feature overlay from
      map.on('pointermove', function(browserEvent) {
        // first clear any existing features in the overlay
        featureOverlay.getFeatures().clear();
        var coordinate = browserEvent.coordinate;
        var pixel = browserEvent.pixel;
        // then for each feature at the mouse position ...
        map.forEachFeatureAtPixel(pixel, function(feature, layer) {
          // check the layer property, if it is not set then it means we
          // are over an OverlayFeature and we can ignore this feature
          if (!layer) {
            return;
          }
          // test the feature's geometry type and compute a reasonable point
          // at which to display the text.
          var geometry = feature.getGeometry();
          var point;
          switch (geometry.getType()) {
          case 'MultiPolygon':
            var poly = geometry.getPolygons().reduce(function(left, right) {
              return left.getArea() > right.getArea() ? left : right;
            });
            point = poly.getInteriorPoint().getCoordinates();
            break;
          case 'Polygon':
            point = geometry.getInteriorPoint().getCoordinates();
            break;
          default:
            point = geometry.getClosestPoint(coordinate);
          }
          // create a new feature to display the text
          textFeature = new ol.Feature({
            geometry: new ol.geom.Point(point),
            text: feature.get('name'),
    
          });
          // and add it to the featureOverlay.  Also add the feature itself
          // so the country gets outlined
          featureOverlay.addFeature(textFeature);
          featureOverlay.addFeature(feature);
        });
      });




$( document ).ready(function(){


 
});	
	
	
 
//----------------------------------------------------


//jquery plugins--------------------------------------
(function($){
//checker-----------------------------------------------

          





//----------------------------------------------------- 
	
})(jQuery);