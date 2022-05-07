<?php

namespace app\controllers;

use core\base\View;
use app\models\Animations;

class ExperimentsController extends AppController {
    
    public function indexAction() {

    }

    public function pageAction() {
        $alias = $this->route['alias'];
        $this->view = "pages/$alias/$alias";
        $this->addScript('<script src="/dist/exp-' . $alias . '.js"></script>');
    
        View::setMeta(
            "Animations | " . $this->route['alias'],
            'Xantory Games Development Company based in Ukraine for the world and people',
            'Xantory, Xantory Games, Javascript Games'
        );
    }
}