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

    $sql = "SELECT COUNT(*) AS `Рядки`, `category_id`, `category_description` FROM `tmp2` GROUP BY `category_description` ORDER BY `Рядки` ASC"; 
    $result = $conn->query($sql);

     $json = array();

    if ($result->num_rows > 0) {
         // output data of each row

         while($row = $result->fetch_assoc()) {

          
              $arr = array(
                  'number' => $row['Рядки'],
                  'category_id'=>$row['category_id'],
                  'category_description'=>$row['category_description']
                
                
              );/*echo mb_detect_encoding($row['category_description']);*/
            array_push($json, $arr);
        }

    
    } else {
         echo "0 results";
    }
    print json_encode($json);
    $conn->close();

    ?>