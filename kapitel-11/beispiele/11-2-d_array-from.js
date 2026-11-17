// Kapitel 11.2 – NodeList in ein Array umwandeln
// Gehört zu: cafe.html

const punkte = document.querySelectorAll("li");
const alsArray = Array.from(punkte);

const texte = [];
for (const punkt of alsArray) {
  texte.push(punkt.textContent);
}

console.log(texte.join(", "));
