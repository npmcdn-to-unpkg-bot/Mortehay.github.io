//links to external database



function buildings(){
  xmlhttp = new XMLHttpRequest();
  xmlhttp.open('GET', 'http://77.121.192.25/test_cherkassy_buildings.php', false);
  
  xmlhttp.send();
  if (xmlhttp.status != 200) {
        // обработать ошибку
        alert('Ошибка ' + xmlhttp.status + ': ' + xmlhttp.statusText);
      } else {
        // вывести результат
        return cherkassy_buildings = JSON.parse(xmlhttp.responseText);
      }
};
//lines(); 
//console.log('cherkassy_buildings()', cherkassy_buildings);
//optic list--------------------------------------------
function optic_cab_cc__list(){
  xmlhttp = new XMLHttpRequest();
  xmlhttp.open('GET', 'http://77.121.192.25/optic_cab_cc__list.php', false);
  
  xmlhttp.send();
  if (xmlhttp.status != 200) {
        // обработать ошибку
        alert('Ошибка ' + xmlhttp.status + ': ' + xmlhttp.statusText);
      } else {
        // вывести результат
        return optic_cab_cc__stat = JSON.parse(xmlhttp.responseText);
      }
};
optic_cab_cc__list(); 

for (var i = 0; i < optic_cab_cc__stat.features.length; i++) {
      optic_cab_cc__stat.features[i].link='http://77.121.192.25/test_cherkassy_cc_'+optic_cab_cc__stat.features[i].wires+'.php';
};
console.log('optic_cab_cc__list', optic_cab_cc__stat);
//--------------------------------------------
//coax list------------------------------------
function coax_cab_cc__list(){
  xmlhttp = new XMLHttpRequest();
  xmlhttp.open('GET', 'http://77.121.192.25/coax_cab_cc__list.php', false);
  
  xmlhttp.send();
  if (xmlhttp.status != 200) {
        // обработать ошибку
        alert('Ошибка ' + xmlhttp.status + ': ' + xmlhttp.statusText);
      } else {
        // вывести результат
        return coax_cab_cc__stat = JSON.parse(xmlhttp.responseText);
      }
};
coax_cab_cc__list(); 

for (var i = 0; i < coax_cab_cc__stat.features.length; i++) {
      coax_cab_cc__stat.features[i].link='http://77.121.192.25/test_cherkassy_cc_'+coax_cab_cc__stat.features[i].wires+'.php';
};
console.log('coax_cab_cc__list', coax_cab_cc__stat);
//--------------------------------------------------------
//multipair list -------------------------------------------
function multipair_cab_cc__list(){
  xmlhttp = new XMLHttpRequest();
  xmlhttp.open('GET', 'http://77.121.192.25/multipair_cab_cc__list.php', false);
  
  xmlhttp.send();
  if (xmlhttp.status != 200) {
        // обработать ошибку
        alert('Ошибка ' + xmlhttp.status + ': ' + xmlhttp.statusText);
      } else {
        // вывести результат
        return multipair_cab_cc__stat = JSON.parse(xmlhttp.responseText);
      }
};
multipair_cab_cc__list(); 

for (var i = 0; i < multipair_cab_cc__stat.features.length; i++) {
      multipair_cab_cc__stat.features[i].link='http://77.121.192.25/test_cherkassy_cc_'+multipair_cab_cc__stat.features[i].wires+'.php';
};
console.log('multipair_cab_cc__list', multipair_cab_cc__stat);
//---------------------------------------------------
//center point and zoom level
var centerPoint=[
  {
    lon:32.081388,
    lat:49.432119,
    zoom:12
  }
];
//---------------------------------------------------

 // Create layers instances
            var osmLayer = new ol.layer.Tile({
                source: new ol.source.OSM({
                    layer: 'osm'
                }),
                name: 'OSM'
            });

            var _buildings;
            function   cherkassy_buildings(){
              // create a vector source that loads a GeoJSON file
                vectorSource =  new ol.source.Vector({
                      url: 'http://77.121.192.25/test_cherkassy_buildings.php',
                      projection: 'EPSG:3857',
                      format: new ol.format.GeoJSON()
                });

                // a vector layer to render the source
                _buildings = new ol.layer.Vector({
                  source: vectorSource,
                  name: 'buildings'
                });

                return _buildings;

            }
            cherkassy_buildings();

            //---geratin group of optic layers :)
            
            var optic_cab_cc_group=[]; // empty array
            // function for creating optic layer 
           

            function   optic_cab_cc(){
              // create a vector source that loads a GeoJSON file
                vectorSource =  new ol.source.Vector({
                      url: optic_cab_cc__stat.features[i].link,
                      projection: 'EPSG:3857',
                      format: new ol.format.GeoJSON()
                });

                // a vector layer to render the source
                optic_cab_cc_id = new ol.layer.Vector({
                  source: vectorSource,
                  name: 'cables_cc_'+optic_cab_cc__stat.features[i].wires
                });

                return optic_cab_cc_id;

            }
            //---------------------------------------
            // pushing separate layers to one array
            for (var i = 0; i < optic_cab_cc__stat.features.length; i++) { 
              
              optic_cab_cc_group.push(optic_cab_cc(i, optic_cab_cc__stat)); 
            }
            //--------------------------------------
            // making group optic layer
            var optic_cab_cc_group_layer = new ol.layer.Group({
                layers: optic_cab_cc_group.reverse(),
                name: 'optic cc group'
            });
            //-------------------------------------------

            //---geratin group of coax layers :)
            
            var coax_cab_cc_group=[]; // empty array
            // function for creating coax layer 
           

            function   coax_cab_cc(){
              // create a vector source that loads a GeoJSON file
                vectorSource =  new ol.source.Vector({
                      url: coax_cab_cc__stat.features[i].link,
                      projection: 'EPSG:3857',
                      format: new ol.format.GeoJSON()
                });

                // a vector layer to render the source
                coax_cab_cc_id = new ol.layer.Vector({
                  source: vectorSource,
                  name: 'cables_cc_'+coax_cab_cc__stat.features[i].wires
                });

                return coax_cab_cc_id;

            }
            //---------------------------------------
            // pushing separate layers to one array
            for (var i = 0; i < coax_cab_cc__stat.features.length; i++) { 
              
              coax_cab_cc_group.push(coax_cab_cc(i, coax_cab_cc__stat)); 
            }
            //--------------------------------------
            // making group coax layer
            var coax_cab_cc_group_layer = new ol.layer.Group({
                layers: coax_cab_cc_group/*.reverse()*/,
                name: 'coax cc group'
            });
            //-------------------------------------------

            //---geratin group of multipair layers :)
            
            var multipair_cab_cc_group=[]; // empty array
            // function for creating multipair layer 
           

            function   multipair_cab_cc(){
              // create a vector source that loads a GeoJSON file
                vectorSource =  new ol.source.Vector({
                      url: multipair_cab_cc__stat.features[i].link,
                      projection: 'EPSG:3857',
                      format: new ol.format.GeoJSON()
                });

                // a vector layer to render the source
                multipair_cab_cc_id = new ol.layer.Vector({
                  source: vectorSource,
                  name: 'cables_cc_'+multipair_cab_cc__stat.features[i].wires
                });

                return multipair_cab_cc_id;

            }
            //---------------------------------------
            // pushing separate layers to one array
            for (var i = 0; i < multipair_cab_cc__stat.features.length; i++) { 
              
              multipair_cab_cc_group.push(multipair_cab_cc(i, multipair_cab_cc__stat)); 
            }
            //--------------------------------------
            // making group multipair layers
            var multipair_cab_cc_group_layer = new ol.layer.Group({
                layers: multipair_cab_cc_group/*.reverse()*/,
                name: 'multipair cc group'
            });
            //-------------------------------------------

            // Create map
            var map = new ol.Map({
                target: 'map',  // The DOM element that will contains the map
                renderer: 'canvas', // Force the renderer to be used
                layers: [osmLayer, optic_cab_cc_group_layer, coax_cab_cc_group_layer, multipair_cab_cc_group_layer, _buildings],
                // Create a view centered on the specified location and zoom level
                view: new ol.View({
                    center: ol.proj.transform([centerPoint[0].lon, centerPoint[0].lat], 'EPSG:4326', 'EPSG:3857'),
                    zoom: centerPoint[0].zoom
                })
            });

            // Name the root layer group
            map.getLayerGroup().set('name', 'Root');

            /**
             * Build a tree layer from the map layers with visible and opacity 
             * options.
             * 
             * @param {type} layer
             * @returns {String}
             */
            function buildLayerTree(layer) {
                var elem;
                var name = layer.get('name') ? layer.get('name') : "Group";
                var div = "<li data-layerid='" + name + "'>" +
                        "<span><i class='glyphicon glyphicon-file'></i> " + layer.get('name') + "</span>" +
                        "<i class='glyphicon glyphicon-check'></i> ";
                if (layer.getLayers) {
                    var sublayersElem = ''; 
                    var layers = layer.getLayers().getArray(),
                            len = layers.length;
                    for (var i = len - 1; i >= 0; i--) {
                        sublayersElem += buildLayerTree(layers[i]);
                    }
                    elem = div + " <ul>" + sublayersElem + "</ul></li>";
                } else {
                    elem = div + " </li>";
                }
                return elem;
            }

            /**
             * Initialize the tree from the map layers
             * @returns {undefined}
             */
            function initializeTree() {

                var elem = buildLayerTree(map.getLayerGroup());
                $('#layertree').empty().append(elem);

                $('.tree li:has(ul)').addClass('parent_li').find(' > span').attr('title', 'Collapse this branch');
                $('.tree li.parent_li > span').on('click', function(e) {
                    var children = $(this).parent('li.parent_li').find(' > ul > li');
                    if (children.is(":visible")) {
                        children.hide('fast');
                        $(this).attr('title', 'Expand this branch').find(' > i').addClass('glyphicon-plus').removeClass('glyphicon-minus');
                    } else {
                        children.show('fast');
                        $(this).attr('title', 'Collapse this branch').find(' > i').addClass('glyphicon-minus').removeClass('glyphicon-plus');
                    }
                    e.stopPropagation();
                });
            }

            /**
             * Finds recursively the layer with the specified key and value.
             * @param {ol.layer.Base} layer
             * @param {String} key
             * @param {any} value
             * @returns {ol.layer.Base}
             */
            function findBy(layer, key, value) {

                if (layer.get(key) === value) {
                    return layer;
                }

                // Find recursively if it is a group
                if (layer.getLayers) {
                    var layers = layer.getLayers().getArray(),
                            len = layers.length, result;
                    for (var i = 0; i < len; i++) {
                        result = findBy(layers[i], key, value);
                        if (result) {
                            return result;
                        }
                    }
                }

                return null;
            }

//-----------------------------------------------------

//--jquery main---------------------------------------
$( document ).ready(function(){
  
  initializeTree();

      // Handle visibility control
      $('i').on('click', function() {
          var layername = $(this).closest('li').data('layerid');
          var layer = findBy(map.getLayerGroup(), 'name', layername);

          layer.setVisible(!layer.getVisible());

          if (layer.getVisible()) {
              $(this).removeClass('glyphicon-unchecked').addClass('glyphicon-check');
          } else {
              $(this).removeClass('glyphicon-check').addClass('glyphicon-unchecked');
          }
      });

      // show statistic
      /*$('#optic_cc_statistic').append('<table></table>');
      var table =$('#optic_cc_statistic').children();
      table.append('<thead><tr><td>cable_type</td><td>wires</td><td>quantity</td></tr></thead>');
      for (var i = 0; i < optic_cab_cc__stat.features.length; i++) {
         table.append('<tr><td>' + optic_cab_cc__stat.features[i].cable_type+'</td><td>'+optic_cab_cc__stat.features[i].wires+'</td><td>'+optic_cab_cc__stat.features[i].count+'</td></tr>');
       } ;*/
      $('#optic_cc_statistic').addsttistic(optic_cab_cc__stat);
      $('#coax_cc_statistic').addsttistic(coax_cab_cc__stat);
      $('#multipair_cc_statistic').addsttistic(multipair_cab_cc__stat);
      //--------------------------------------------------
  
   


});	
	
	
 
//----------------------------------------------------


//jquery plugins--------------------------------------
(function($){

$.fn.addsttistic = function(params) {
  this.append('<table></table>');
  var table =$(this).children();
  
  table.append('<thead><tr><td>cable_type</td><td>wires</td><td>quantity</td></tr></thead>');
  for (var i = 0; i < params.features.length; i++) {
     table.append('<tr><td>' + params.features[i].cable_type+'</td><td>'+params.features[i].wires+'</td><td>'+params.features[i].count+'</td></tr>');
   }; 
};
	
})(jQuery);