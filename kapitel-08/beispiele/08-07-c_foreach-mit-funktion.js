// Kapitel 8.7 – forEach – ein erster Blick

function zeigeArtikel(artikel) {
  console.log("- " + artikel);
}

const einkaufsliste = ["Milch", "Brot", "Eier"];

einkaufsliste.forEach(zeigeArtikel);
