<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Récupérer les données du formulaire
    $nom = $_POST['nom'];
    $prenom = $_POST['prenom'];
    $email = $_POST['email'];
    $motif = $_POST['motif'];
    $message = $_POST['message'];

    $to = 'gimbert.bastien@gmail.com';

    $subject = 'Formulaire de contact de ' . $nom . ' ' . $prenom;

    $body = "Nouveau message ! .\n\n";
    $body .= "Nom: " . $nom . "\n";
    $body .= "Prenom: " . $prenom . "\n";
    $body .= "Email: " . $email . "\n";
    $body .= "Motif: " . $motif . "\n";
    $body .= "Message:\n" . $message . "\n";

    $headers = "De: " . $email;
}
?>




<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="stylesheet" href="src/css/main.css">
    <link rel="stylesheet" href="src/css/navbar.css">
    <link rel="stylesheet" href="src/css/reponses.css">
    <link rel="icon" type="image/png" href="icons/favicon.png">
    <title>Réponse</title>
    <meta charset="utf-8">
</head>
<body>
    <header>
            <button type="button" class="burger"><img src="icons/burger.svg" alt="menu burger"></button>
            <div class="nav-menu">
                <nav class="menu">
                    <ul>
                        <li><a href="Accueil.html">Accueil</a></li>
                        <li><a href="Valeurs.html">Nos Valeurs</a></li>
                        <li><a href="Rejoindre.html">Nous Rejoindre</a></li>
                    </ul>
                    <ul>
                        <li><a class="block p-0" href="https://www.instagram.com/atosfr/?hl=fr" target="_blank"><img class="icon-social p-0" src="icons/icons8-instagram.svg" alt="instagram"></a></li>
                        <li><a class="block p-0" href="https://www.facebook.com/AtosFR/?locale=fr_FR" target="_blank"><img class="icon-social p-0" src="icons/icons8-facebook.svg" alt="facebook"></a></li>
                        <li><a class="block p-0" href="https://twitter.com/i/flow/login?redirect_after_login=%2FAtosFR" target="_blank"><img class="icon-social p-0" src="icons/icons8-twitterx.svg" alt="twitter"></a></li>
                        <li><a class="block p-0" href="https://fr.linkedin.com/company/atos" target="_blank"><img class="icon-social p-0" src="icons/icons8-linkedin.svg" alt="linkedin"></a></li>
                        <li><a class="block p-0" href="https://www.youtube.com/@AtosFrance/videos" target="_blank"><img class="icon-social p-0" src="icons/icons8-youtube.svg" alt="youtube"></a></li> 
                    </ul>
                </nav>
            </div>
    </header>
    <main>
      <div class="reponse">
        <h1>Nous avons bien reçu votre message !</h1>
        <h2>Nous vous répondrons par mail dans les plus brefs délais.</h2>
        <a href="/Accueil.html">Retourner à la page d'accueil</a>
      </div>
      
    </main>
    <script src="src/js/navbar.js"></script>
</body>
</html>


