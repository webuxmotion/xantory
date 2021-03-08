<?php

namespace app\controllers;

use core\base\View;
use app\models\Animations;

class AnimationsController extends AppController {
    
    public function indexAction() {

        $model = new Animations();
        $items = $model->getAnimationsMenuItems();
    
       View::setMeta(
           "Animations",
           'Xantory Games Development Company based in Ukraine for the world and people',
           'Xantory, Xantory Games, Javascript Games'
       );

       $this->set(compact('items'));
    }

    public function pageAction() {
        $alias = $this->route['alias'];
        $this->view = "pages/$alias/$alias";
        $this->addScript('<script src="/dist/a-lines.js"></script>');
    
        View::setMeta(
            "Animations | " . $this->route['alias'],
            'Xantory Games Development Company based in Ukraine for the world and people',
            'Xantory, Xantory Games, Javascript Games'
        );
    }
}