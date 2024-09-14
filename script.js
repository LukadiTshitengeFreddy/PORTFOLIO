let index = 0;
const textes = document.querySelectorAll('.texte');
const totalTextes = textes.length;
const interval = 3000; // Temps en millisecondes pour changer le texte (ici 3 secondes)

function changerTexte() {
    // Masquer le texte actuel
    textes[index].classList.remove('visible');

    // Passer au texte suivant
    index = (index + 1) % totalTextes;

    // Afficher le texte suivant
    textes[index].classList.add('visible');
}

// Afficher le premier texte au chargement
document.addEventListener('DOMContentLoaded', () => {
    textes[index].classList.add('visible');

    // Changer le texte automatiquement à intervalles réguliers
    setInterval(changerTexte, interval);
});