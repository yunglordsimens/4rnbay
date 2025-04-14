<?php
header('Content-Type: text/html; charset=UTF-8');
?>
<!DOCTYPE html>
<html lang="uk">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>abeceda</title>
    <link rel="stylesheet" href="style.css">
    <style>
        .full-image {
            width: 100%;
            height: auto;
            display: block;
            margin-bottom: 20px;
        }

        .gallery-wrapper {
            max-width: 100%;
            padding: 0;
            margin: 0;
        }
    </style>
</head>
<body>
    <div class="gallery-wrapper">
        <?php
        $directory = 'publications_img/abceda_2024';
        $images = glob($directory . "*.{jpg,jpeg,png,gif}", GLOB_BRACE);

        foreach ($images as $image) {
            echo "<img src='" . htmlspecialchars($image) . "' alt='Фото книги' class='full-image'>";
        }
        ?>
    </div>
</body>
</html>
