         
//links to external database
var urlPoints =/* "https://api.myjson.com/bins/4373y"*/"http://127.0.0.1:5984/cherkassy/ed057e7778cefc674caa5241bb000a06";
var urlLines = /*"https://api.myjson.com/bins/1w3vy"*/"http://127.0.0.1:5984/points/53cd2af0e5f105d8085ec5ba69002710";
var urlPoligons = /*"https://api.myjson.com/bins/3549a"*/"http://127.0.0.1:5984/points/53cd2af0e5f105d8085ec5ba69002710";
var myDom;
//---------------------------------------------------
var centerPoint=[
	{
		lon:32.076877594,
		lat:49.4384155273,
		zoom:14
	}
];
//main parameters-------------------------------------

/*function myDom() {
	
};*/
//---------------------------------------------------------------


//---------------------------------------------------------------

 

//text taransform -----------------------------------------------
function getText(feature, resolution, dom) {
  var type = dom.text;

  var maxResolution = dom.maxreso;
  var text = /*feature.get('street')+' ' +feature.get('h')+' '+feature.get('p')+' '+*/feature.get('description')+ ' ';

  if (resolution > maxResolution) {
    text = '';
  } else if (type == 'hide') {
    text = '';
  } else if (type == 'shorten') {
    text = text.trunc(50);
  } else if (type == 'wrap') {
    text = stringDivider(text, 16, '\n');
  }

  return text;
}



function createTextStyle(feature, resolution, dom) {
  var align = dom.align;
  var baseline = dom.baseline;
  var size = dom.size;
  var offsetX = parseInt(dom.offsetX, 10);
  var offsetY = parseInt(dom.offsetY, 10);
  var weight = dom.weight;
  var rotation = parseFloat(dom.rotation);
  var font = weight + ' ' + size + ' ' + dom.font;
  var fillColor = dom.color;
  var outlineColor = dom.outline;
  var outlineWidth = parseInt(dom.outlineWidth, 10);

  return new ol.style.Text({
    textAlign: align,
    textBaseline: baseline,
    font: font,
    text: getText(feature, resolution, dom),
    fill: new ol.style.Fill({color: fillColor}),
    stroke: new ol.style.Stroke({color: outlineColor, width: outlineWidth}),
    offsetX: offsetX,
    offsetY: offsetY,
    rotation: rotation
  });
}
//----------------------------------------------------

// Polygons-------------------------------------------
function polygonStyleFunction(feature, resolution) {
  return new ol.style.Style({
    stroke: new ol.style.Stroke({
      color: 'blue',
      width: 1
    }),
    fill: new ol.style.Fill({
      color: 'rgba(0, 0, 255, 0.1)'
    }),
    text: createTextStyle(feature, resolution, myDom.polygons)
  });
}




// Lines---------------------------------------------
function lineStyleFunction(feature, resolution) {
  return new ol.style.Style({
    stroke: new ol.style.Stroke({
      color: 'green',
      width: 2
    }),
    text: createTextStyle(feature, resolution, myDom.lines)
  });
}




// Points------------------------------------------
function pointStyleFunction(feature, resolution) {
  return new ol.style.Style({
    image: new ol.style.Circle({
      radius: 10,
      fill: new ol.style.Fill({color: 'rgba(255, 0, 0, 0.1)'}),
      stroke: new ol.style.Stroke({color: 'red', width: 1})
    }),
    text: createTextStyle(feature, resolution, myDom.points),
/*    res:console.log('currentRes', resolution)*/

  });
}


// main map -----------------------------------------
function init(vectorPolygons, vectorLines, vectorPoints, centerPoint) {
	var map = new ol.Map({
	  layers: [
	    new ol.layer.Tile({
	      source: new ol.source.MapQuest({layer: 'osm'})
	    }),
	    vectorPolygons,
	    vectorLines,
	    vectorPoints
	  ],
	  target: 'map',
	  view: new ol.View({
	    center: ol.proj.fromLonLat([centerPoint[0].lon, centerPoint[0].lat]),
	    zoom: centerPoint[0].zoom

	  })
	  
	});

}


//text transform
/**
 * @param {number} n The max number of characters to keep.
 * @return {string} Truncated string.
 */
String.prototype.trunc = String.prototype.trunc ||
    function(n) {
      return this.length > n ? this.substr(0, n - 1) + '...' : this.substr(0);
    };


// http://stackoverflow.com/questions/14484787/wrap-text-in-javascript
function stringDivider(str, width, spaceReplacer) {
  if (str.length > width) {
    var p = width;
    while (p > 0 && (str[p] != ' ' && str[p] != '-')) {
      p--;
    }
    if (p > 0) {
      var left;
      if (str.substring(p, p + 1) == '-') {
        left = str.substring(0, p + 1);
      } else {
        left = str.substring(0, p);
      }
      var right = str.substring(p + 1);
      return left + spaceReplacer + stringDivider(right, width, spaceReplacer);
    }
  }
  return str;
}

//--jquery main---------------------------------------
$( document ).ready(function(){

	/*myDom();*/
	

	var vectorPolygons = new ol.layer.Vector({
	  source: new ol.source.Vector({
	    url: urlPoligons,
	    format: new ol.format.GeoJSON()
	  }),
	  style: polygonStyleFunction
	});

	var vectorLines = new ol.layer.Vector({
	  source: new ol.source.Vector({
	    url: urlLines,
	    format: new ol.format.GeoJSON()
	  }),
	  style: lineStyleFunction
	});

	var vectorPoints = new ol.layer.Vector({
	  source: new ol.source.Vector({
	    url: urlPoints,
	    format: new ol.format.GeoJSON()
	  }),
	  style: pointStyleFunction
	});

	init(vectorPolygons, vectorLines, vectorPoints, centerPoint);

	$('#refresh-points').refresh();
	$('#refresh-lines').refresh();
	$('#refresh-polygons').refresh();
      	$('select').myDom();	
	console.log('myDom', myDom);	
//-----------------------------------
 




});	
	
	
 
//----------------------------------------------------


//jquery plugins--------------------------------------
(function($){


// refresh params----------------------------------
	$.fn.refresh = function() {
		this.on('click', function() {
			/*console.log('click');*/
			if ( $(this).is($('#refresh-points') ) ) {
				/*console.log('click1');*/
				vectorPoints.setStyle(pointStyleFunction);
			}
			if ( $(this).is($('#refresh-lines') ) ) {
				/*console.log('click2');*/
				vectorLines.setStyle(lineStyleFunction);

			}
			if ( $(this).is($('#refresh-polygons') ) ) {
				/*console.log('click3');*/
				vectorPolygons.setStyle(polygonStyleFunction);
			}
		});
	};
//-----------------------------------------------------
//myDom------------------------------------------
$.fn.myDom = function(){
  return myDom = {
    points: {
      text: $('#points-text').val() ,
      align: $('#points-align').val(),
      baseline: $('#points-baseline').val(),
      rotation: $('#points-rotation').val(),
      font: $('#points-font').val(),
      weight: $('#points-weight').val(),
      size: $('#points-size').val(),
      offsetX: $('#points-offset-x').val(),
      offsetY: $('#points-offset-y').val(),
      color: $('#points-color').val(),
      outline: $('#points-outline').val(),
      outlineWidth: $('#points-outline-width').val(),
      maxreso: $('#points-maxreso').onchange()
    },
    lines: {
      text: $('#lines-text').val(),
      align: $('#lines-align').val(),
      baseline: $('#lines-baseline').val(),
      rotation: $('#lines-rotation').val(),
      font: $('#lines-font').val(),
      weight: $('#lines-weight').val(),
      size: $('#lines-size').val(),
      offsetX: $('#lines-offset-x').val(),
      offsetY: $('#lines-offset-y').val(),
      color: $('#lines-color').val(),
      outline: $('#lines-outline').val(),
      outlineWidth: $('#lines-outline-width').val(),
      maxreso: $('#lines-maxreso').val()
    },
    polygons: {
      text: $('#polygons-text').val(),
      align: $('#polygons-align').val(),
      baseline: $('#polygons-baseline').val(),
      rotation: $('#polygons-rotation').val(),
      font: $('#polygons-font').val(),
      weight: $('#polygons-weight').val(),
      size: $('#polygons-size').val(),
      offsetX: $('#polygons-offset-x').val(),
      offsetY: $('#polygons-offset-y').val(),
      color: $('#polygons-color').val(),
      outline: $('#polygons-outline').val(),
      outlineWidth: $('#polygons-outline-width').val(),
      maxreso: $('#polygons-maxreso').val()
    }
  };
};
//-----------------------------------------------------	

$.fn.onchange = function() {

	newvalue = this.change(function(){
		value = $(this).val();
		console.log('$(this).val() inner',value);
		return value;
	}).change().val()
	
	console.log('$(this).val() outer',newvalue);
	return newvalue;
	
};
	
})(jQuery);