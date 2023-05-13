<?php

function recur($value){

    if($value>5){
        return;
    }
    
    echo $value.PHP_EOL;
    recur($value+1);

};

recur(1);