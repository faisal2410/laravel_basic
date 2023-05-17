<?php

function recur($value){

    if($value>5){
        return;
    }
    
    
    recur($value+1);
    echo $value.PHP_EOL;

};

recur(1);