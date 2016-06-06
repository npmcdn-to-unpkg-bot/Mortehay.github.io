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
 $sql = "SELECT id, start_address, start_well, end_address, end_well, chanel_length, total_length, type, cable_type, wires, cable_description, diameter, tu_number, progect_number, acceptance_act, cable_number, start_wiring, end_wiring, geo_id, notes, ST_AsGeoJSON(geom_cables_cc)   FROM public.cherkassy_cc";
 $ret = pg_query($db, $sql);
   if(!$ret){
      echo pg_last_error($db);
   } else {
      //echo "Records created successfully\n";
   }
   //$arr = pg_fetch_all($ret);

       $geojson = array( 'type' => 'FeatureCollection', 'features' => array());

    
       
         while ($row = pg_fetch_row($ret))  {

          if($row[7]=='cc' && $row[8]=='optic' && $row[9]=='0') {
              $arr = array(
                  'type' => 'Feature',
                  'properties' => array(
                    'id' => (int)$row[0],
                    'start_address'=>$row[1],
                    'start_well'=>$row[2],
                    'end_well'=>$row[3],
                    'end_address'=>$row[4],
                    'chanel_length'=>$row[5],
                    'total_length'=>$row[6],
                    'type'=>$row[7],
                    'cable_type'=>$row[8],
                    'wires'=>$row[9],
                    'cable_description'=>$row[10],
                    'diameter'=>$row[11],
                    'tu_number'=>$row[12],
                    'progect_number'=>$row[13],
                    'acceptance_act'=>$row[14],
                    'cable_number'=>$row[15],
                    'start_wiring'=>$row[16],
                    'end_wiring'=>$row[17],
                    'geo_id'=>$row[18],
                    'notes'=>$row[19],

                  ),
                  'geometry'=>json_decode($row[20]),
                
              );
            array_push($geojson['features'], $arr);

          };
              
        }
   
   
   print json_encode($geojson);
   pg_close($db);
?>