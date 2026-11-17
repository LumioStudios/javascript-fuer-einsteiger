// Kapitel 11.6 – Entfernt heißt nicht verloren
// Gehört zu: cafe.html

const karte = document.querySelector("#karte");
const tee = karte.querySelectorAll("li")[1];

tee.remove();
console.log(`Entfernt: ${tee.textContent}`);

karte.prepend(tee);
console.log(karte.children[0].textContent);
