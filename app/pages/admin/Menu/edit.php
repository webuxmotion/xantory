<form method="POST" action="/admin/menu/update">
  <label for="link">Link</label>
  <input name="link" id="link" value="<?=$menuitem['link']?>">

  <input type="hidden" name="alias" value="<?=$menuitem['alias']?>">


  <button>Save</button>
</form>