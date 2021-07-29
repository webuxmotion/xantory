<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="author" content="TonePHP Framework">
  <?=$this::getMeta(); ?>
  <link rel="icon" type="image/png" href="/favicon.png" />
  
  <link href="/dist/styles.css" rel="stylesheet">

  <link href="https://fonts.googleapis.com/css2?family=Yantramanav:wght@100&display=swap" rel="stylesheet">
  
</head>
<body>
  <?=$this->component('header')?>
  <?=$content?>
  
  <script>
    var serverUrl = "<?=siteUrl()?>";
  </script>
  <script src="/dist/app.js"></script>
  <?=$scripts?>
</body>
</html>
