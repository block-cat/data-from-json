<?php

namespace BlockCat\DataFromJson\Adapter;

use Carbon\Carbon;
use BlockCat\DataFromJson\Contracts\UploadAdapter;
use BlockCat\DataFromJson\File;
use League\Flysystem\AdapterInterface;
use League\Flysystem\Config;
use Symfony\Component\HttpFoundation\File\UploadedFile;

abstract class Flysystem implements UploadAdapter
{
    /**
     * @var AdapterInterface
     */
    protected $adapter;

    /**
     * @var array|false
     */
    protected $meta;

    public function __construct(AdapterInterface $adapter)
    {
        $this->adapter = $adapter;
    }

    /**
     * Define adapter-specific configuration.
     *
     * @return Config
     */
    protected function getConfig()
    {
        return new Config();
    }

    /**
     * @param File         $file
     * @param UploadedFile $upload
     * @param string       $contents
     *
     * @return File
     */
    public function upload(File $file, UploadedFile $upload, $contents)
    {
        $this->generateFilename($file);

        $method = 'write';

        if (is_resource($contents) && get_resource_type($contents) == 'stream') {
            $method = 'writeStream';
        }

        $meta = $this->adapter->{$method}($file->path, $contents, $this->getConfig());

        if (!$meta) {
            return false;
        }

        $this->meta = $meta;

        $this->generateUrl($file);

        return $file;
    }

    protected function generateFilename(File $file)
    {
        $today = (new Carbon());

        $file->path = sprintf(
            '%s',
            $today->timestamp.''.substr($file->base_name, -5)
        );
    }

    abstract protected function generateUrl(File $file);

    /**
     * In case deletion is not possible, return false.
     *
     * @param File $file
     *
     * @return File|bool
     */
    public function delete(File $file)
    {
        if ($this->adapter->delete($file->path)) {
            return $file;
        }

        return false;
    }

    /**
     * Whether the upload adapter works on a specific mime type.
     *
     * @param string $mime
     *
     * @return bool
     */
    public function forMime($mime)
    {
        // We allow all, no checking.
        return true;
    }

    /**
     * @return bool
     */
    public function supportsStreams()
    {
        return true;
    }
}