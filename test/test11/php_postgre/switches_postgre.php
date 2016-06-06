<?php

ini_set('display_errors', 1);
   $host        = "host=127.0.0.1";
   $port        = "port=5432";
   $dbname      = "dbname=postgis";
   $credentials = "user=postgres password=antares29";

 $db = pg_connect( "$host $port $dbname $credentials"  );
   if(!$db){
      echo "Error : Unable to open database\n";
   } else {
      //echo "Opened database successfully\n";
   }
 $sql = "SELECT id, street, h, p, house_id, host_id, description, hostname, notes,  ST_AsGeoJSON(the_geom)   FROM public.chercassy";
 $ret = pg_query($db, $sql);
   if(!$ret){
      echo pg_last_error($db);
   } else {
      //echo "Records created successfully\n";
   }
   //$arr = pg_fetch_all($ret);
       $geojson = array( 'type' => 'FeatureCollection', 'features' => array());

    
        
         while ($row = pg_fetch_row($ret))  {

          
              $arr = array(
                  'type' => 'Feature',
                  'properties' => array(
                     'id' => (int)$row[0],
                     'street'=>$row[1],
                     'h'=>$row[2],
                     'p'=>$row[3],
                     'house_id'=>$row[4],
                     'host_id' =>$row[5],
                     'description'=>$row[6],
                     'hostname'=>$row[7],
                     'notes'=>$row[8],

                  ),
                  'geometry'=>json_decode($row[9]),
                
                
              );
            array_push($geojson['features'], $arr);
        }
   
   
   print json_encode($geojson);
   pg_close($db);
?>