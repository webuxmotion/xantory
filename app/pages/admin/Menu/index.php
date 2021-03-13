<?php new \app\widgets\menu\Menu([
  'template' => APP . '/widgets/menu/templates/edit-menu-tree/edit-menu-tree.php',
  'className' => 'a-menu-tree',
  'linkRoot' => '/admin/menu/edit',
  'cacheKey' => $cashKey,
  'cache' => 0
]); ?>