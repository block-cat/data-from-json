<?php

namespace BlockCat\DataFromJson\Commands;

use Exception;
use Flarum\Foundation\Application;
use Psr\Http\Message\UploadedFileInterface;

use BlockCat\DataFromJson\Adapter\Manager;
use BlockCat\DataFromJson\Repositories\FileRepository;

class UploadHandler
{
    protected $app;
    protected $files;

    public function __construct(
        Application $app,
        FileRepository $files
    ) {
        $this->app = $app;
        $this->files = $files;
    }

    public function handle(Upload $command) {
        $savedFile = $command->file->map(function(UploadedFileInterface $file) use ($command) {
            try {
                $upload = $this->files->moveUploadedFileToTemp($file);

                $adapter = $this->getAdapter();

                $file = $this->files->createFileFromUpload($upload, $file->getClientMediaType());
                
                $response = $adapter->upload(
                    $file,
                    $upload,
                    $this->files->readUpload($upload, $adapter)
                );

                $this->files->removeFromTemp($upload);
            } catch (Exception $e) {
                if (isset($upload)) {
                    $this->files->removeFromTemp($upload);
                }

                throw $e;
            }
            return $response->path;
        });
        return $savedFile;
    }

    protected function getAdapter()
    {
        $manager = app(Manager::class);
        
        return $manager->instantiate();
    }
}