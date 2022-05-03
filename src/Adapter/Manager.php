<?php

namespace BlockCat\DataFromJson\Adapter;

use Flarum\Foundation\Paths;
use BlockCat\DataFromJson\Adapter;
use League\Flysystem\Adapter as FlyAdapters;

class Manager
{
    protected $paths;

    public function __construct(Paths $paths)
    {
        $this->paths = $paths;
    }

    public function instantiate()
    {
        return $this->local();
    }

    protected function local()
    {
        return new Adapter\Local(
            new FlyAdapters\Local($this->paths->public.'/assets/json')
        );
    }
}