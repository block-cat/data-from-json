<?php

namespace BlockCat\DataFromJson\Repositories;

use Flarum\Foundation\Paths;
use Psr\Http\Message\UploadedFileInterface;
use Symfony\Component\HttpFoundation\File\UploadedFile as Upload;
use League\Flysystem\Adapter\Local;
use League\Flysystem\Filesystem;
use BlockCat\DataFromJson\File;
use BlockCat\DataFromJson\Contracts\UploadAdapter;

class FileRepository
{
    protected $path;

    public function __construct(Paths $paths)
    {
        $this->path = $paths->storage;
    }

    public function moveUploadedFileToTemp(UploadedFileInterface $upload)
    {
        // Move the file to a temporary location first.
        $tempFile = tempnam($this->path.'/tmp', 'blockcat.json.');
        $upload->moveTo($tempFile);

        $file = new Upload(
            $tempFile,
            $upload->getClientFilename(),
            $upload->getClientMediaType(),
            $upload->getSize(),
            $upload->getError(),
            true
        );

        return $file;
    }

    public function createFileFromUpload(Upload $file, string $mime)
    {
        return (new File())->forceFill([
            'base_name' => $file->getClientOriginalName(),
            'size'      => $file->getSize(),
            'type'      => $mime,
        ]);
    }

    protected function getTempFilesystem($path)
    {
        return new Filesystem(new Local($path));
    }

    public function readUpload(Upload $upload, UploadAdapter $adapter)
    {
        $filesystem = $this->getTempFilesystem($upload->getPath());
        
        return $adapter->supportsStreams()
            ? $filesystem->readStream($upload->getBasename())
            : $filesystem->read($upload->getBasename());
    }

    public function removeFromTemp(Upload $file)
    {
        return $this->getTempFilesystem($file->getPath())->delete($file->getBasename());
    }
}
