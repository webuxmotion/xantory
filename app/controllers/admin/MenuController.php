<?php

namespace app\controllers\admin;

use app\models\admin\Menuitems;

class MenuController extends AdminController {

  public $cashKey = 'menu-tree';
  
  public function indexAction() {
    $cashKey = $this->cashKey;
    
    $this->set(compact('cashKey'));
  }

  public function editAction() {
    $alias = $this->route['alias'];
    $model = new Menuitems();
    $menuitem = $model->getMenuitem($alias);

    $this->set(compact('menuitem'));
  }

  public function updateAction() {
    
    debug($_POST);
  }
}