//links to external database


function links(){
  xmlhttp = new XMLHttpRequest();
  xmlhttp.open("GET", "http://localhost/test10/php/category_id_list.php", false);
  
  xmlhttp.send();
  if (xmlhttp.status != 200) {
        // обработать ошибку
        alert('Ошибка ' + xmlhttp.status + ': ' + xmlhttp.statusText);
      } else {
        // вывести результат
        return mainLinks = JSON.parse(xmlhttp.responseText);
      }
};
links();

for (var i = 0; i < mainLinks.length; i++) {
  mainLinks[i].link = 'http://localhost/test10/php/category_id_'+mainLinks[i].category_id+'.php'
}
console.log(mainLinks);
//test lines 

function lines(){
  xmlhttp = new XMLHttpRequest();
  xmlhttp.open("GET", "http://localhost/test10/php_postgre/test_postgre.php", false);
  
  xmlhttp.send();
  if (xmlhttp.status != 200) {
        // обработать ошибку
        alert('Ошибка ' + xmlhttp.status + ': ' + xmlhttp.statusText);
      } else {
        // вывести результат
        return mainLines = JSON.parse(xmlhttp.responseText);
      }
};
lines(); //you have to add database to mariaDB
console.log('lines()', mainLines);

//---------------------------------------------------
//center point and zoom level
var centerPoint=[
  {
    lon:24.018425,
    lat:49.833631,
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
            //---geratin group of heat layers :)
            //var heatmap_category_group=[]; // empty array
            var heatmap_category_group_cluster=[]; // empty array
            // function for creating heat layer 
            /*function heatmap_categoryId(){ 

                 heatmap_category_id = new ol.layer.Heatmap({
                  source: new ol.source.Vector({
                    url: mainLinks[i].link,
                    projection: 'EPSG:3857',
                    format: new ol.format.GeoJSON()
                  }),
                  radius: 3,
                  visible: true,      
                  name: mainLinks[i].category_description
                });

                return heatmap_category_id;
            };*/


            function heatmap_categoryId_cluster(){ 
                //original source
                originalSource =  new ol.source.Vector({
                    url: mainLinks[i].link,
                    projection: 'EPSG:3857',
                    format: new ol.format.GeoJSON()
              
                });
                //console.log('originalSource', originalSource);
                clasterSource = new ol.source.Cluster({
                  distance: 20,
                  source: originalSource   
                })
                //console.log('clasterSource',clasterSource);
                heatmap_category_id_cluster = new ol.layer.Heatmap({
                  source: clasterSource,
                  radius: 3,
                  visible: true,
                  gradient: ['#00f', '#0ff', '#0f0', '#ff0', '#f00'],      
                  name: mainLinks[i].category_description
                });
                return heatmap_category_id_cluster;
            };

            // end of the function
            // pushing separate layers to one array
            for (var i = 0; i < mainLinks.length; i++) { 
              //heatmap_category_group.push(heatmap_categoryId(i, mainLinks)); 
              heatmap_category_group_cluster.push(heatmap_categoryId_cluster(i, mainLinks)); 
            }
            
            //console.log('heatmap_category_group', heatmap_category_group); //testing result
            //console.log('heatmap_category_group_cluster', heatmap_category_group_cluster); //testing result
           //------------------

            var layerHeatmap = new ol.layer.Group({
                layers: heatmap_category_group_cluster/*.reverse()*/,
                name: 'Heatmap Group'
            });

            // Create map
            var map = new ol.Map({
                target: 'map',  // The DOM element that will contains the map
                renderer: 'canvas', // Force the renderer to be used
                layers: [osmLayer,layerHeatmap],
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
      $('#statistic').append('<table></table>');
      var table =$('#statistic').children();
      for (var i = 0; i < mainLinks.length; i++) {
         table.append('<tr><td>'+mainLinks[i].category_id+'</td><td>'+mainLinks[i].category_description+'</td><td>'+mainLinks[i].number+'</td></tr>');
       } ;
      //--------------------------------------------------
  
   


});	
	
	
 
//----------------------------------------------------


//jquery plugins--------------------------------------
(function($){


	
})(jQuery);