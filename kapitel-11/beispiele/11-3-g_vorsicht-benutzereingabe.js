// Kapitel 11.3 – Vorsicht bei Benutzereingaben
// Gehört zu: cafe.html

const hinweis = document.querySelector(".hinweis");
const name = prompt("Wie heißt du?");

hinweis.innerHTML = `Willkommen, ${name}!`;
