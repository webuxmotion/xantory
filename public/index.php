<?php

use core\Router;
use core\Tone;

$query = $_SERVER['QUERY_STRING'];
$query = rtrim($query, '/');

define('WWW', __DIR__);
define('ROOT', dirname(__DIR__));
define('CORE', ROOT . '/core');
define('APP', ROOT . '/app');
define('CACHE', ROOT . '/tmp/cache');
define('LAYOUT', 'default');

require '../vendor/autoload.php';

require '../core/functions.php';

$dotenv = Dotenv\Dotenv::createImmutable(__DIR__ . '/..');
$dotenv->load();

define("DEBUG", $_ENV['DEBUG']);

new Tone;

Router::add('^drawing$', ['controller' => 'Main', 'action' => 'drawing']);
Router::add('^animations/(?P<alias>[a-z-]+)$', ['controller' => 'Animations', 'action' => 'page']);

Router::add('^login$', ['controller' => 'User', 'action' => 'login']);
Router::add('^signup$', ['controller' => 'User', 'action' => 'signup']);
Router::add('^logout$', ['controller' => 'User', 'action' => 'logout']);

Router::add('^docs/(?P<alias>[a-z-]+)$', ['controller' => 'Docs']);

// default admin routes
Router::add('^admin$', ['prefix' => 'admin', 'controller' => 'Main', 'action' => 'index']);

Router::add('^admin/?(?P<controller>[a-z-]+)/?(?P<action>[a-z-]+)?/?(?P<alias>[0-9a-z-]+)?$', ['prefix' => 'admin']);

// default routes
Router::add('^$', ['controller' => 'Main', 'action' => 'index']);
Router::add('^(?P<controller>[a-z-]+)/?(?P<action>[a-z-]+)?$');

Router::dispatch($query);