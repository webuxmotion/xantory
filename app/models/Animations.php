<?php

namespace app\models;

use core\base\Model;
use core\Tone;

class Animations extends Model {

  protected $langAlias = '';

  public function __construct() {
    parent::__construct();

    $lang = Tone::$app->getProperty('lang');
    $this->langAlias = $lang['alias'];
  }

  public function getAnimationsMenuItems() {

    $sql = "
      SELECT menuitems.*, menuitems_translate.value
      FROM menuitems
      LEFT JOIN menuitems_translate ON
        menuitems.alias = menuitems_translate.menuitem_alias AND
        menuitems_translate.lang_alias = '" . $this->langAlias . "'
        WHERE menuitems.parent = '4'
      ORDER BY position
    ";

    $items = $this->db->query($sql);

    return $items;
  }
}