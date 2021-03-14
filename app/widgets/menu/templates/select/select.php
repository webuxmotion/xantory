<option 
  value="<?=$id?>"

  <?=isset($this->vars) && 
    isset($this->vars['currentParent']) && 
    $id == $this->vars['currentParent'] ? 'selected' : ''?>

  <?=isset($this->vars) && 
  isset($this->vars['itselfId']) && 
  $id == $this->vars['itselfId'] ? 'disabled' : ''?>
>
  <?=$tab . $category['value'];?>
</option>
<?php if (isset($category['childs'])) : ?>
  <?=$this->getMenuHtml($category['childs'], $tab . '|--', false);?>
<?php endif; ?>