<?php

namespace app\controllers\admin;

use app\models\admin\Menuitems;
use core\Tone;

class MenuController extends AdminController {

  public $cacheKey = 'menu-tree';
  
  public function indexAction() {
    $cacheKey = $this->cacheKey;
    
    $this->set(compact('cacheKey'));
  }

  public function editAction() {
    $alias = $this->route['alias'];
    $model = new Menuitems();
    $menuitem = $model->getMenuitem($alias);
    $currentParent = $menuitem['parent'];
    $itselfId = $menuitem['id'];
    $translates = $model->getMenuitemTranslates($alias);

    $this->set(compact('menuitem', 'currentParent', 'itselfId', 'translates'));
  }

  public function addAction() {
    $langs = Tone::$app->getProperty('langs');

    if (!empty($_POST)) {
      $model = new Menuitems();
      $model->addNew();

      $this->clearCache();

      redirect('/admin/menu');
    }

    $this->set(compact('langs'));
  }

  public function deleteAction() {
    $model = new Menuitems();
    $model->delete();

    $this->clearCache();

    $_SESSION['success'] = "Пункт меню удален!";

    redirect('/admin/menu');
  }

  public function updateAction() {
    
    $model = new Menuitems();

    if ($model->update()) {
      $_SESSION['success'] = "Данные обновлены!";
    
      $this->clearCache();
    }

    redirect();
  }

  private function clearCache() {
    $langs = Tone::$app->getProperty('langs');
    $cache = Tone::$app->cache;

    foreach($langs as $key => $value) {
      $cache->delete($this->cacheKey . $key);
      $cache->delete('menu' . $key);
    }
  }
}