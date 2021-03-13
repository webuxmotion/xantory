<?php

namespace app\models\admin;

use core\base\Model;
use core\Tone;

class Menuitems extends Model {

  public $table = 'menuitems';

  public $attributes = [
    'link' => '',
    'parent' => '',
    'alias' => '',
    'position' => '',
  ];
  
  public $rules = [
    'required' => [
      ['link'],
      ['parent'],
      ['alias'],
    ],
  ];


  public function getMenuitem($alias) {
    $sql = "SELECT * FROM $this->table WHERE alias = ?";
      
    $menuitem = $this->db->query($sql, [$alias]);

    return $menuitem[0];
  }
}