<?php

namespace BlockCat\DataFromJson\Controllers;

use Psr\Http\Server\RequestHandlerInterface;
use Psr\Http\Message\ServerRequestInterface;
use Psr\Http\Message\ResponseInterface;
use Illuminate\Support\Arr;
use Flarum\Foundation\ValidationException;
use Flarum\Discussion\Discussion;
use Flarum\Post\CommentPost;
use Laminas\Diactoros\Response\EmptyResponse;

use Flarum\Discussion\Event\Saving;

use Illuminate\Support\Collection;
use Illuminate\Contracts\Bus\Dispatcher;
use Psr\Http\Message\UploadedFileInterface;
use BlockCat\DataFromJson\Commands\Upload;
use Flarum\Foundation\Paths;

class DataJsonController implements RequestHandlerInterface {

    protected $bus;
    protected $path;

    public function __construct(Dispatcher $bus, Paths $paths)
    {
        $this->bus = $bus;
        $this->path = $paths->public;
    }

    public function handle(ServerRequestInterface $request): ResponseInterface
    {
        $request->getAttribute('actor')->assertAdmin();
        $author = $request->getAttribute('actor');

        $file = collect(Arr::get($request->getUploadedFiles(), 'file', []));
        
        $jsonFileName = $this->bus->dispatch(
            new Upload($file, $author)
        );

        $attributes = $request->getParsedBody();

        $primary_ids = Arr::get($attributes, 'tags_primary_ids');
        $secondary_ids = Arr::get($attributes, 'tags_secondary_ids');

        $primary_ids_arr = [];
        $secondary_ids_arr = [];
        (strlen($primary_ids) > 0) ? $primary_ids_arr = explode(',', $primary_ids) : '';
        (strlen($secondary_ids) > 0) ? $secondary_ids_arr = explode(',', $secondary_ids) : '';

        $data = array("relationships" => array(
            "tags" => array(
                "data" => array()
            )
        ));

        if (count($primary_ids_arr) > 0) {
            for ($i = 0; $i < count($primary_ids_arr); $i++) {
                array_push($data["relationships"]["tags"]["data"], array("type" => "tags", "id" => $primary_ids_arr[$i]));
            }
        }
        if (count($secondary_ids_arr) > 0) {
            for ($i = 0; $i < count($secondary_ids_arr); $i++) {
                array_push($data["relationships"]["tags"]["data"], array("type" => "tags", "id" => $secondary_ids_arr[$i]));
            }
        }

        $jsonData = file_get_contents($this->path . "/assets/json/" . $jsonFileName[0]);

        unlink($this->path . "/assets/json/" . $jsonFileName[0]);
        $arrayData = json_decode($jsonData, true);

        for ($i = 0; $i < count($arrayData); $i++) {
            $discussion_title = $arrayData[$i]['title'];
            $discussion_content =
                "**Domeniu:** " . trim(strtoupper($arrayData[$i]['category'])) . "\n" .
                "**Compania:** " . trim($arrayData[$i]['company']) . "\n" .
                "**Orașul:** " . trim($arrayData[$i]['city']) . "\n" .
                "**Studii:** " . trim($arrayData[$i]['education']) . "\n" .
                "**Experiența de muncă:** " . trim($arrayData[$i]['experience']) . "\n" .
                "**Salariu:** " . trim($arrayData[$i]['salary']) . "\n" .
                "**Grafic de muncă:** " . trim($arrayData[$i]['schedule']) . "\n" .
                "**Telefon:** " . trim($arrayData[$i]['phone']) . "\n" .
                "**Email:** " . trim($arrayData[$i]['email']) . "\n" .
                "**Web:** " . trim($arrayData[$i]['web_site']) . "\n" .
                "**Creat la:** " . trim($arrayData[$i]['data']) . "\n\n" .
                trim($arrayData[$i]['text']);
            
            $discussion = Discussion::start($discussion_title, $author);
            
            (count($data["relationships"]["tags"]["data"]) > 0) ? event(new Saving($discussion, $author, $data)) : '';
            $discussion->save();

            $post = CommentPost::reply($discussion->id, $discussion_content, $author->id, null);
            $post->save();

            $discussion->setFirstPost($post);
            $discussion->refreshLastPost();
            $discussion->refreshCommentCount();
            $discussion->refreshParticipantCount();
            $discussion->save(); 
        }

        return new EmptyResponse(204);
    }
}