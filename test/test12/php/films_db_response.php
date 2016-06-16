

<?php
//header("Access-Control-Allow-Origin: *");
$servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "filmdb";

    // Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);
    // Check connection
    if ($conn->connect_error) {
         die("Connection failed: " . $conn->connect_error);
    } 

    $sql = "SELECT id, film_name,link, format, genre, production_year, episods_num, producer, scenario, production_designer, camera_director, composer , producers, premiere, in_roles, description  FROM films "; // you can add LIMIT 50000
    $result = $conn->query($sql);

     $json_films = array( 'films' => array());
     $simple_arr_films = array();
 
    if ($result->num_rows > 0) {
         // output data of each row
          
           while($row = $result->fetch_assoc()) {

           


                $film_description = array(
                    'id' => (int)$row['id'],
                    'film_name' => $row['film_name'],
                    'link'=> $row['link'],
                    'format'=>$row['format'],
                    'genre'=>$row['genre'],
                    'production_year' => (int)$row['production_year'],
                    'episods_num' => (int)$row['episods_num'],
                    'producer' => $row['producer'],
                    'scenario' => $row['scenario'],
                    'production_designer' => $row['production_designer'],
                    'camera_director' => $row['camera_director'],
                    'composer' => $row['composer'],
                    'producers' => $row['producers'],
                    'premiere' => $row['premiere'],
                    'in_roles' => $row['in_roles'],
                    'description' => $row['description']

                 
                    
                  
                );
            array_push($json_films['films'], $film_description);
            array_push($simple_arr_films, $film_description);
        } 
    
    } else {
         echo "0 results";
    }
    //print json_encode($json_films);
    //echo "next is simple array";
    //print_r ($simple_arr_films);
    $conn->close();


    // get the q parameter from URL
    $q = $_REQUEST["q"];

    $hint = "";

    // lookup all hints from array if $q is different from "" 
    if ($q !== "") {
        $q = mb_strtolower($q, 'UTF-8');
        $len=strlen($q);
        
        foreach( $simple_arr_films as $film => $obj)
        {
            //echo $film;
            //echo mb_strtolower($obj['film_name'], 'UTF-8');
            if (stristr($q, substr(mb_strtolower($obj['film_name'], 'UTF-8'), 0, $len))) {
                if ($hint === "") {
                    $hint = $obj/*['film_name']*/;
                } else {
                    $hint .= ", $film";
                }
            }

        }

    }

    // Output "no suggestion" if no hint was found or output correct values 
    echo json_encode($hint === "" ? "no suggestion" : $hint);

    ?>
