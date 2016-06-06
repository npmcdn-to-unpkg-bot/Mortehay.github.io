<?php
header("Access-Control-Allow-Origin: *");
ini_set('display_errors', 1);
   $host        = "host=127.0.0.1";
   $port        = "port=5432";
   $dbname      = "dbname=postgres";
   $credentials = "user=postgres password=postgres";

 $db = pg_connect( "$host $port $dbname $credentials"  );
   if(!$db){
      echo "Error : Unable to open database\n";
   } else {
      //echo "Opened database successfully\n";
   }
 $sql = "SELECT id, id_rel, doggy_id_rel, addr_housenumber, addr_street, amenity, architect, building, building_levels, heritage, heritage_name, name, house_id, description, notes,  ST_AsGeoJSON(geom)   FROM public.cherkassy_buildings";
 $ret = pg_query($db, $sql);
   if(!$ret){
      echo pg_last_error($db);
   } else {
      //echo "Records created successfully\n";
   }
   //$arr = pg_fetch_all($ret);

       $geojson = array( 'type' => 'FeatureCollection', 'features' => array());

    
       
         while ($row = pg_fetch_row($ret))  {

          //if($row[8]=='optic' && $row[9]=='0') {
              $arr = array(
                  'type' => 'Feature',
                  'properties' => array(
                    'id' => (int)$row[0],
                    'id_rel'=>$row[1],
                    'doggy_id_rel'=>$row[2],
                    'addr_housenumber'=>$row[3],
                    'addr_street'=>$row[4],
                    'amenity'=>$row[5],
                    'architect'=>$row[6],
                    'building'=>$row[7],
                    'building_levels'=>$row[8],
                    'heritage'=>$row[9],
                    'heritage_name'=>$row[10],
                    'name'=>$row[11],
                    'house_id'=>$row[12],
                    'description'=>$row[13],
                    'notes'=>$row[14],
                  ),
                  'geometry'=>json_decode($row[15]),
                
              );
            array_push($geojson['features'], $arr);

          //};
              
        }
   
   
   print json_encode($geojson);
   pg_close($db);
?>