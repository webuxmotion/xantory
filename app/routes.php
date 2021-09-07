<?php

use core\Router;

Router::add('^poetry$', ['controller' => 'Main', 'action' => 'poetry']);

Router::add('^drawing$', ['controller' => 'Main', 'action' => 'drawing']);
Router::add('^animations/(?P<alias>[a-z-]+)$', ['controller' => 'Animations', 'action' => 'page']);

Router::add('^login$', ['controller' => 'User', 'action' => 'login']);
Router::add('^signup$', ['controller' => 'User', 'action' => 'signup']);
Router::add('^logout$', ['controller' => 'User', 'action' => 'logout']);

Router::add('^docs/(?P<alias>[a-z-]+)$', ['controller' => 'Docs']);

// default admin routes
Router::add('^admin$', ['prefix' => 'admin', 'controller' => 'Main', 'action' => 'index']);

Router::add('^admin/?(?P<controller>[a-z-]+)/?(?P<action>[a-z-]+)?/?(?P<alias>[0-9a-z-]+)?$', ['prefix' => 'admin']);