<?php
    function createRandomNumber(){
        return rand(1,30);
    }


    function checkNumber($number){

        if ($number % 3 == 0 && $number % 5 == 0):
            return "Fizz Buzz";
        elseif ($number % 3 == 0):
            return "Fizz";
        elseif ($number % 5 == 0) :
            return "Buzz";
        else: 
            return $number;
        endif;
    }


    function getNumber(){
        return checkNumber(createRandomNumber());
    }


    function getList($length){
        $result = false;
        $numbers = array();

        for ($i=0; $i < $length; $i++) { 
            array_push($numbers, getNumber());
        }
        
        $result = implode(",", $numbers);

        return $result;
    }

    if(isset($_GET['function'])):
        if($_GET['function'] === 'list'):
            echo(getList($_GET['length']));
        endif;

        if($_GET['function'] === 'item'):
        echo(getNumber());
        endif;

    endif;