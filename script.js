// Charge le fichier data.json
fetch("data.json")

  // Transforme la réponse brute en JSON exploitable en JS
  .then(response => response.json())

  // "projets" contient le tableau récupéré depuis data.json
  .then(projets => {

    // Appelle la fonction qui génère les cartes HTML
    genererCartesProjet(projets)

  })


// Fonction qui reçoit le tableau de projets
function genererCartesProjet(tableauProjets){

    // Parcourt chaque objet du tableau
    tableauProjets.forEach(projet => {

        /* Ajoute une carte projet dans le conteneur HTML sur l'index
        document.querySelector("#container-projet-cards").innerHTML += 
        `
        <!-- lien vers la page détail du projet -->
        <!-- on passe l'id dans l'URL -->
        <a href="pageProjet.html?id=${projet.id}" class="w30 flex column">

            <!-- titre du projet -->
            <h2>${projet.titre}</h2>

            <!-- description -->
            <p>${projet.desc}</p>

            <!-- date -->
            <p>${projet.date}</p>

        </a>
        `*/
        
    });
}