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
 $sql = "SELECT id, start_address, end_address, type, wires, length, notes, ST_AsGeoJSON(the_geom)   FROM public.chercassy_line";
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
                     'start_address'=>$row[1],
                     'end_address'=>$row[2],
                     'type'=>$row[3],
                     'wires'=>(int)$row[4],
                     'length' =>(int)$row[ 5],
                     'notes'=>$row[6],
                  ),
                  'geometry'=>json_decode($row[7]),
                
                
              );
            array_push($geojson['features'], $arr);
        }
   
   
   print json_encode($geojson);
   pg_close($db);
?>