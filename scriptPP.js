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
        
            <section class="hero container">
                <a href="index.html" class="decoration-none mb-10 flex gap-12 align-center retour-btn">
                    <i class="ph-fill ph-arrow-circle-left arrow"></i> Retour
                </a>
                <h2>Site web : ${projet.titre}</h2>
            </section>

            <section class="project-content container flex">

                <!-- gauche -->
                <section class="colonne-gauche large-4 small-12">

                    <p> <span class="bold">Commanditaires :</span> Projet de formation</p>

                    <p class="mt-30">
                        <span class="bold">Mission :</span> ${projet.desc}</p>

                        <br>
                    <p class="bold">${projet.date}</p>

                    <a href="${projet.site}" class="decoration-none bold mt-50"
                        target="_blank">Visiter le site ↗
                    </a>

                </section>

                <!-- droite -->
                <section class="large-8  flex-column align-center image-container small-12 ">
                    <img src="asset/mockup-monochrome.png" alt="" class="large-8 mb-30 image-projet small-10">
                    <img src="asset/mockup-monochrome-page2.png" alt="" class="large-8 mb-30 image-projet small-10">
                </section>

                <div id="lightbox" class="lightbox">
                    <span class="close">&times;</span>
                    <img class="lightbox-img" id="lightboxImg">
                </div>

            </section>
            `
        }

    });
}