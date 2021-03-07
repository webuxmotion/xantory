<?php

namespace app\controllers;

use core\base\View;
use core\Tone;

class MainController extends AppController {
    
    public function indexAction() {
    
       View::setMeta(
           __('page_title'),
           'Xantory Games Development Company based in Ukraine for the world and people',
           'Xantory, Xantory Games, Javascript Games'
       );
       
       $lang = Tone::$app->getProperty('lang');
    }
}