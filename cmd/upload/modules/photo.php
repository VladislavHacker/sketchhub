<?php
if (! empty($_FILES['photo']['name'])){
  if($_FILES['photo']['error'] == 0){
    if(substr($_FILES['photo']['type'],0,5)=='image'){
      $image = new image_worker($_FILES['photo']['tmp_name']);
      $image->load();
      $image->resizeToWidth(800);
      $path = 'content/userdata/'.$_SESSION[$host]['id'].'/photo/';
      $filenew = 'photo_'.generate_hash(15);
      $filenew_full = $image->save($path.'full_'.$filenew);
      $image->crop(800,800);
      $filenew = $image->save($path.$filenew);
      $query = 'INSERT INTO `photos` (`id`,`owner`,`posted`,`url`,`full`,`type`,`comments`,`likes`) VALUES (NULL, "'.$_SESSION[$host]['id'].'","'.date('Y-m-d H-i-s').'","'.$filenew.'","'.$filenew_full.'","0","0","0")';
      $mysqli->query($query);
    }
  }
}

 ?>
