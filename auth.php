<?php
  if (isset($_POST['searchterm'])) {
    echo $_POST['searchterm'];
  }
?>
<form
      action=""
      method="post"
      <input type="text" name="searchterm">
      <input type="submit" value"Search">
</form>
