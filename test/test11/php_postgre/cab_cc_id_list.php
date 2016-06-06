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
 $sql = "SELECT  wires, COUNT(wires) FROM public.chercassy_cables_cc GROUP BY wires ORDER BY wires;";
 $ret = pg_query($db, $sql);
   if(!$ret){
      echo pg_last_error($db);
   } else {
      //echo "Records created successfully\n";
   }
        $json = array('features' => array());
        
         while ($row = pg_fetch_row($ret))  {

          if ((int)$row[1]!==0) {
              $arr = array(
                  
                     'wires' => (int)$row[0],
                     'count'=>(int)$row[1]
                    );
            array_push($json['features'], $arr);
        }
      }  
   
   print json_encode($json);
   pg_close($db);
?>