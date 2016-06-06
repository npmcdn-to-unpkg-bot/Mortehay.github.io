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
 $sql = "SELECT  cable_type, wires, COUNT(wires) FROM public.cherkassy_cc GROUP BY wires, cable_type ORDER BY wires;";
 $ret = pg_query($db, $sql);
   if(!$ret){
      echo pg_last_error($db);
   } else {
      //echo "Records created successfully\n";
   }
        $json = array('features' => array());
        
         while ($row = pg_fetch_row($ret))  {

          if ($row[0]=='optic') {
              $arr = array(
                     'cable_type' => $row[0], 
                     'wires' => (int)$row[1],
                     'count'=>(int)$row[2]
                    );
            array_push($json['features'], $arr);
        }
      }  
   
   print json_encode($json);
   pg_close($db);
?>