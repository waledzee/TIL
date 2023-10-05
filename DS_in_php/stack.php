<?php 

class stack
{
    private $stack;

    public function __construct()
    {
        $this->stack=[];
    }

    public function push($item)  {

        return array_push($this->stack,$item);
        
    }

    public function pop()  {

        return array_pop($this->stack);
        
    }
    public function peek()
    {
        if ($this->isEmpty()) {
            return null; // or throw an exception
        }
        return end($this->stack);
    }

    public function isEmpty()
    {
        return empty($this->stack);
    }

    public function size()
    {
        return count($this->stack);
    }

}


$stack = new stack();

$stack->pop();

print_r($stack);



?>