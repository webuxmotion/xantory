<ul>

  <?php foreach ($items as $item): ?>
    <li>
      <a href="<?=$item['link']?>"><?=$item['value']?></a>
    </li>
  <?php endforeach; ?>

</ul>