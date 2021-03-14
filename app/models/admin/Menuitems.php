<?php

namespace app\models\admin;

use core\base\Model;
use core\Tone;

class Menuitems extends Model {
  public $table = 'menuitems';

  public function getMenuitem($alias) {
    $sql = "SELECT * FROM $this->table WHERE alias = ?";
      
    $menuitem = $this->db->query($sql, [$alias]);

    return $menuitem[0];
  }

  public function getMenuitemTranslates($alias) {
    $sql = "SELECT * FROM menuitems_translate WHERE menuitem_alias = ?";
      
    $menuitemTranslates = $this->db->query($sql, [$alias]);

    return $menuitemTranslates;
  }

  public function update() {
    $alias = trim($_POST['alias']) ?? null;
    $link = trim($_POST['link']) ?? null;
    $parent = trim($_POST['parent']) ?? null;

    $translates = $this->getAssocArrayFromPost('translate');

    foreach ($translates as $id => $value) {
      $sql = "
        UPDATE menuitems_translate
        SET value = ?
        WHERE id = ?
      ";

      $this->db->execute($sql, array_values([$value, $id]));
    }

    $sql = "
      UPDATE $this->table 
      SET link = ?, parent = ?
      WHERE alias = ?
    ";

    if ($alias && $link) {
      $saved = $this->db->execute($sql, array_values([$link, $parent, $alias]));

      return true;
    }
    
    return false;
  }

  public function delete() {
    $alias = trim($_POST['alias']) ?? null;

    $sql = "
      DELETE FROM $this->table 
      WHERE alias = ?
    ";

    $this->db->execute($sql, array_values([$alias]));

    $sql = "
      DELETE FROM menuitems_translate
      WHERE menuitem_alias = ?
    ";
    
    $this->db->execute($sql, array_values([$alias]));
  }

  public function addNew() {
    $link = trim($_POST['link']) ?? null;
    $parent = trim($_POST['parent']) ?? null;
    $position = 999;

    $sql = "INSERT INTO $this->table (link, parent, alias, position) VALUES (?,?,?,?)";
    $computedAlias = str_replace("/", "-", $link) . $parent;
    $insertId = $this->db->execute($sql, array_values([$link, $parent, $computedAlias, $position]));
    
    $sql = "SELECT * FROM menuitems WHERE id = ?";
    $menuitem = $this->db->query($sql, [$insertId])[0];

    $alias = $menuitem['alias'];
    
    $translates = $this->getAssocArrayFromPost('translate');

    foreach ($translates as $lang => $value) {
      $sql = "INSERT INTO menuitems_translate (menuitem_alias, lang_alias, value) VALUES (?,?,?)";
      $insertId = $this->db->execute($sql, array_values([$alias, $lang, $value]));
    }
  }

  private function getAssocArrayFromPost($searchKey) {
    $res = [];

    foreach ($_POST as $key => $item) {
      if (strpos($key, $searchKey) === 0) {
        $id = explode(":", $key)[1];
        $value = $item;

        $res[$id] = $value;
      }
    }

    return $res;
  }
}