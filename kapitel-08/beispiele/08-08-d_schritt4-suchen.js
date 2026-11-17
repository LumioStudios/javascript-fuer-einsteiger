// Kapitel 8.8 – Praxisbeispiel: Einkaufsliste (Einzelschritte)

function sucheArtikel(liste, artikel) {
  const position = liste.indexOf(artikel);

  if (position === -1) {
    console.log(artikel + " steht nicht drauf.");
    return;
  }

  const platz = position + 1;
  console.log(artikel + " steht auf Platz " + platz + ".");
}

const einkaufsliste = ["Milch", "Brot", "Eier"];
sucheArtikel(einkaufsliste, "Eier");
sucheArtikel(einkaufsliste, "Käse");
