<?php

namespace BlockCat\DataFromJson;

use Flarum\Database\AbstractModel;
/**
 * @property int                                                 $id
 * @property string                                              $base_name
 * @property string                                              $path
 * @property string                                              $url
 * @property string                                              $type
 * @property int                                                 $size
 * @property string                                              $uuid
 * @property string                                              $humanSize
 * @property string                                              $upload_method
 * @property string                                              $remote_id
 * @property string                                              $tag
 * @property int                                                 $post_id
 * @property Post                                                $post
 * @property int                                                 $discussion_id
 * @property Discussion                                          $discussion
 * @property int                                                 $actor_id
 * @property User                                                $actor
 * @property \Illuminate\Database\Eloquent\Collection|Download[] $downloads
 * @property Carbon                                              $created_at
 */
class File extends AbstractModel
{}
