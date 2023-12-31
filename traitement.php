<!DOCTYPE html>
<html lang="en">
<head>
    <title>Réponse</title>
    <meta charset="utf-8">
</head>
<body>
    <h1>Nous avons bien reçu votre message !</h1>
    <p>
      <?php
        // Vérifier si 'nom' est défini dans $_POST avant de l'afficher
        echo isset($_POST['nom']) ? 'Bonjour ' . htmlentities($_POST['nom']) . '!' : 'Nom non défini!';
      ?>
    </p>

    <p>
    <?php
      // Vérifier si 'email' est défini dans $_POST avant de l'afficher
      echo isset($_POST['email']) ? 'Votre adresse e-mail est ' . htmlentities($_POST['email']) . '.' : 'Email non défini!';
    ?>
    </p>

    <h1> Affichage du contenu du tableau associatif $_POST</h1>
    <?php
       // Afficher le contenu de $_POST
       var_dump($_POST);
    ?>
</body>
</html>
