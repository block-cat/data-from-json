<?php

namespace BlockCat\DataFromJson\Commands;

use Flarum\User\User;
use Illuminate\Support\Collection;

class Upload
{
    /**
     * @var Collection
     */
    public $file;

    /**
     * @var User
     */
    public $actor;

    public function __construct(Collection $file, User $actor)
    {
        $this->file = $file;
        $this->actor = $actor;
    }
}
