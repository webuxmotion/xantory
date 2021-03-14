<form method="POST" action="/admin/menu/update">
  <div>
    <label for="link">Link</label>
    <input name="link" id="link" value="<?=$menuitem['link']?>">
  </div>
  
  <div>
    <?php new \app\widgets\menu\Menu([
      'template' => APP . '/widgets/menu/templates/select/select.php',
      'cacheKey' => 'select',
      'containerTag' => 'select',
      'cache' => 0,
      'containerAttributes' => 'name="parent"',
      'vars' => compact('currentParent', 'itselfId'),
      'upendElement' => '
        <option 
          value="0"
        >
          No parent
        </option>
      '
    ]); ?>
  </div>

  <?php foreach ($translates as $translate): ?>
    <div>
      <label><?=$translate['lang_alias']?></label>
      <input 
        value="<?=$translate['value']?>"
        name="translate:<?=$translate['id']?>"
      >
    </div>
  <?php endforeach; ?>

  <button>Save</button>

  <input type="hidden" name="alias" value="<?=$menuitem['alias']?>">
</form>

<form method="POST" action="/admin/menu/delete" style="margin-top: 50px;">

  <button>Delete</button>

  <input type="hidden" name="alias" value="<?=$menuitem['alias']?>">
</form>