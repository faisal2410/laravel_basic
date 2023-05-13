<?php

// class Sample{
//     public  function sayHello(){
//         echo "Hello";

//     }
// };

// Sample::sayHello();

// (new Sample())->sayHello();

if($_SERVER['REQUEST_URI']==="/about"){
    require("./about.php");
}else if($_SERVER['REQUEST_URI']==="/contact"){
    require("./contact.php");
}else{

    echo "Hello";
}
