<form method="POST" action="/admin/menu/add">
  <div>
    <label for="link">Link</label>
    <input name="link" id="link" required>
  </div>
  
  <div>
    <?php new \app\widgets\menu\Menu([
      'template' => APP . '/widgets/menu/templates/select/select.php',
      'cacheKey' => 'select',
      'containerTag' => 'select',
      'cache' => 0,
      'containerAttributes' => 'name="parent"',
      'upendElement' => '
        <option
          value="0"
        >
          No parent
        </option>
      '
    ]); ?>
  </div>

  <?php foreach ($langs as $translate): ?>
    <div>
      <label><?=$translate['title']?></label>
      <input
        name="translate:<?=$translate['alias']?>"
        required
      >
    </div>
  <?php endforeach; ?>

  <button>Save</button>
</form>