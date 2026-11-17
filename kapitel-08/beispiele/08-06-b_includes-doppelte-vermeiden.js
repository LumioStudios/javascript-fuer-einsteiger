// Kapitel 8.6 – Suchen: includes, indexOf, find

const einkaufsliste = ["Milch", "Brot", "Eier"];
const neuerArtikel = "Brot";

if (einkaufsliste.includes(neuerArtikel)) {
  console.log(neuerArtikel + " steht schon drauf.");
} else {
  einkaufsliste.push(neuerArtikel);
}
