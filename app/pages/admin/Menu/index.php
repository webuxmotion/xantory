<?php new \app\widgets\menu\Menu([
  'template' => APP . '/widgets/menu/templates/edit-menu-tree/edit-menu-tree.php',
  'className' => 'a-menu-tree',
  'linkRoot' => '/admin/menu/edit',
  'cacheKey' => $cacheKey,
  'cache' => 0
]); ?>
<hr>
<div>
  <a href="/admin/menu/add">+ Add new</a>
</div>