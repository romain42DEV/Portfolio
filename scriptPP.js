// Charge le fichier JSON contenant tous les projets
fetch("data.json")

    // Transforme la réponse en objet JavaScript (tableau de projets)
    .then(response => response.json())

    // Une fois les données chargées, on appelle la fonction d'affichage
    .then(projets => {
        genererContenuPage(projets)
    })


// Fonction qui affiche le bon projet selon l'ID dans l'URL
function genererContenuPage(tableauDeProjets) {

    // Récupère l'ID présent dans l'URL
    // Exemple : pageProjet.html?id=2
    let id = location.href.split("id=")[1]

    // Parcourt tous les projets du JSON
    tableauDeProjets.forEach(projet => {

        // Vérifie si l'ID de l'URL correspond à l'ID du projet
        if (id === projet.id) {

            // Injecte le contenu du projet dans la page HTML
            document.querySelector("#containerInfosProjet").innerHTML += `
        
            <div>

                <!-- Titre du projet -->
                <h1>${projet.titre}</h1>

                <!-- Description -->
                <p>${projet.desc}</p>

                <!-- Date -->
                <p>${projet.date}</p>

            </div>
            `
        }

    });
}