<?php
/**
 * Created by PhpStorm.
 * User: rhendel03
 * Date: 04/02/2018
 * Time: 5:15 PM
 */

class Sample
{
    private $e = 123;

    public function  __get($e) {
        if(isset($this->$e)) {
            return $this->$e;
        }
        return null;
    }
}