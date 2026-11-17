// Kapitel 11.6 – Ein Element entfernen
// Gehört zu: cafe.html

const kuchen = document.querySelector(".kuchen");

kuchen.remove();

const anzahl = document.querySelectorAll("li").length;
console.log(`Noch ${anzahl} Punkte auf der Karte.`);
