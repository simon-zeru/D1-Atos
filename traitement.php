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

    // Envoyer l'email
    if (mail($to, $subject, $body, $headers)) {
        echo "Message envoyé avec succès.";
    } else {
        echo "Échec de l'envoi du message.";
    }
}
?>




<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="stylesheet" href="src/css/main.css">
    <link rel="stylesheet" href="src/css/navbar.css">
    <link rel="stylesheet" href="src/css/footer.css">
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
      <div>
        <h1>Nous avons bien reçu votre message !</h1>
        <h2>Nous vous répondrons par mail dans les plus brefs délais.</h2>
        <a href="/Accueil.html">Retourner à la page d'accueil</a>
      </div>
      
    </main>
    <footer>
      <div class="flex-col center">
          <div class="flex w-100 small-gap center">
              <h2 id="title">Nous Contacter</h2>
              <img class="footer-chev" src="icons/chevron-down.svg">
          </div>
          <div class="box-contact show.active">
              <div class="gauche">
                  <div class="footerBlock">
                  <h2>Par Message</h2>
                  <form action="traitement.php" method="post">
                      <label for="nom">Nom</label>
                      <input id="nom" name="nom" type="text" required>
                      <label for="prenom">Prenom</label>
                      <input id="prenom" name="prenom" type="text" required>
                      <label for="email">Email</label>
                      <input id="email" name="email" type="email" required>
                      <label for="motif">Motif</label>
                      <select id="motif" name="motif">
                          <option value="">Choisir une option</option>
                          <option value="motif1">Motif 1</option>
                          <option value="motif2">Motif 2</option>
                          <option value="motif3">Motif 3</option>
                          <option value="motif4">Motif 4</option>
                          <option value="motif5">Motif 5</option>
                      </select>
                      <label for="message">Description</label>
                      <textarea name="message" id="message" cols="30" rows="10"></textarea>
                      <button type="submit">Envoyer</button>
                  </form>
                  <br>
                  </div>
              </div>
      
              <div class="droite">
                  <div class="footerBlock">
                  <h2>Par Courrier</h2>
                  <h3>Adresse:</h3>
                  <p>River Ouest, 80 quai Voltaire</p>
                  <p>Bezons</p>
                  <p>Atos</p>
                  <p>France</p>
                  <h3>Code Postal</h3>
                  <p>95877</p>
                  <h3>Téléphone</h3>
                  <p>+33 1 73 26 00 00 appels non-surtaxés</p>
                  <h3>Mail</h3>
                  <p>info@atos.com</p>
                  <img src="images/img-contactus.png" alt="Contact Us">
                  </div>
              </div>
          </div>
    </footer>
    <script src="src/js/navbar.js"></script>
    <script src="src/js/footer.js"></script>
</body>
</html>


