// Kapitel 8.6 – Suchen: includes, indexOf, find

const einkaufsliste = ["Milch", "Brot", "Eier"];
const position = einkaufsliste.indexOf("Brot");

if (position !== -1) {
  einkaufsliste[position] = "Brötchen";
}

console.log(einkaufsliste);
