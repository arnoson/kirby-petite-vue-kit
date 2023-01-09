<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Kirby Petite Vue kit</title>
  <?= vite()->js('templates/default.js', ['defer' => true]) ?>
  <?= vite()->css('templates/default.js') ?>
</head>
<body>
  <h1><?= $page->title() ?></h1>
  <?php snippet('counter', slots: true) ?>
    <?php slot('label') ?>Counter is:<?php endslot() ?>
  <?php endsnippet() ?>
</body>
</html>
