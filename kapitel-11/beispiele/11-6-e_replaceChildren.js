// Kapitel 11.6 – Alle Kinder entfernen
// Gehört zu: cafe.html

const karte = document.querySelector("#karte");

karte.replaceChildren();
console.log(karte.children.length);
