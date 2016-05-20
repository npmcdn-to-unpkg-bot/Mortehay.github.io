<?php

function getGISDatatypes($upper_case = false)
    {
        $gis_data_types = array(
            'geometry',
            'point',
            'linestring',
            'polygon',
            'multipoint',
            'multilinestring',
            'multipolygon',
            'geometrycollection'
        );
        if ($upper_case) {
            for ($i = 0, $nb = count($gis_data_types); $i < $nb; $i++) {
                $gis_data_types[$i]
                    = /*overload*/mb_strtoupper($gis_data_types[$i]);
            }
        }
        return $gis_data_types;
    } 
//------------------------------------------
function createGISData($gis_string)
    {
        $gis_string = trim($gis_string);
        $geom_types = '(POINT|MULTIPOINT|LINESTRING|MULTILINESTRING|'
            . 'POLYGON|MULTIPOLYGON|GEOMETRYCOLLECTION)';
        if (preg_match("/^'" . $geom_types . "\(.*\)',[0-9]*$/i", $gis_string)) {
            return 'GeomFromText(' . $gis_string . ')';
        } elseif (preg_match("/^" . $geom_types . "\(.*\)$/i", $gis_string)) {
            return "GeomFromText('" . $gis_string . "')";
        } else {
            return $gis_string;//'error';//$gis_string;
        }
    }

//------------------------------------------
$servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "testdb";

    // Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);
    
    // Check connection
    if ($conn->connect_error) {
         die("Connection failed: " . $conn->connect_error);
    } 

    $sql = "SELECT id, descript, gis_line, line_descr, line_type FROM linesdb "; 
    $result = $conn->query($sql);
    
     $json = array();

    if ($result->num_rows > 0) {
         // output data of each row
        
         while($row = $result->fetch_assoc()) {

          
              $arr = array(
                  'id' => (int)$row['id'],
                  'descript'=>$row['descript'],
                  'gis_line'=>createGISData($row['gis_line']),
                  'line_descr'=>$row['line_descr'],
                  'line_type' =>(int)$row[ 'line_type']
                
                
              );
            array_push($json, $arr);
        }

    
    } else {
         echo "0 results";
    }
    print json_encode($json);
    $conn->close();

    ?>