<li>
  <a href="<?=$this->linkRoot . '/' . $category['alias'];?>" class="w-menu__nav-link">
    <?=$tab . $category['value'];?>
  </a>
  <?php if (isset($category['childs'])) : ?>
    <ul>
      <?=$this->getMenuHtml($category['childs'], $tab . '-', false);?>
    </ul>
  <?php endif; ?>
</li>