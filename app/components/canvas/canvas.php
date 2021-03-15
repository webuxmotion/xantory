<?php
  $title = $title ?? 'Default Title';
  $id = $id ?? 'default-id';
  $height = $height ?? 400;
  $width = $width ?? 400;
  $log = $log ?? null;
?>

<div class="canvas">
  <h2 class="canvas__title"><?=$title?></h2>
  <div class="canvas__body">
    <canvas id="<?=$id?>" width="<?=$width?>" height="<?=$height?>" tabindex="0"></canvas>
  </div>
  <?php if ($log): ?>
    <textarea id="<?=$id?>-log" class="canvas__log"></textarea>
  <?php endif; ?>
</div>