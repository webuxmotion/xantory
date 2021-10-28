<?=$this->loadView('pages/Animations/pages/other/logo-animation/logo-animation')?>

<?=$this->component('canvas', [
  'width' => 800,
  'id' => 'motorcycle',
  'title' => 'Motorcycle Game'
])?>

<?=$this->component('canvas', [
  'width' => 800,
  'height' => 800,
  'id' => 'capture-touch',
  'title' => 'Capture Touch',
  'log' => true
])?>

<?=$this->component('canvas', [
  'width' => 800,
  'id' => 'perspective',
  'title' => 'Perspective'
])?>


<div style="padding-top: 400px;">
<?=$this->component('canvas', [
  'width' => 800,
  'id' => 'pixel-move',
  'title' => 'Pixel Move'
])?>
</div>