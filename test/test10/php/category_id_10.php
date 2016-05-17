<?php
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

    $sql = "SELECT id, date_, lat, lng, category_id, category_description  FROM tmp2 "; // you can add LIMIT 50000
    $result = $conn->query($sql);

     $geojson = array( 'type' => 'FeatureCollection', 'features' => array());

    if ($result->num_rows > 0) {
         // output data of each row
          
           while($row = $result->fetch_assoc()) {

           if ($row["category_id"]=='10') {


                $marker = array(
                  'type' => 'Feature',
                  'properties' => array(
                    'id' => $row['id'],
                    'date_'=>$row["date_"],
                    'category_id'=>$row["category_id"],
                    'category_description'=>$row["category_description"],
                    'marker-color' => '#f00',
                    'marker-size' => 'small'
                  ),
                  'geometry' => array(
                    'type' => 'Point',
                    'coordinates' => array( 
                      (float)$row['lng'],
                      (float)$row['lat']
                    )
                  )
                );
            array_push($geojson['features'], $marker);
          }
        } 
    
    } else {
         echo "0 results";
    }
    print json_encode($geojson);
    $conn->close();

    ?>