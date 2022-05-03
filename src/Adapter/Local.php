<?php

namespace BlockCat\DataFromJson\Adapter;

use Flarum\Foundation\Paths;
use BlockCat\DataFromJson\Contracts\UploadAdapter;
use BlockCat\DataFromJson\File;

class Local extends Flysystem implements UploadAdapter
{
    protected function generateUrl(File $file) {
        
    }
}