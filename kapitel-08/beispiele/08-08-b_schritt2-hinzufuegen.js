// Kapitel 8.8 – Praxisbeispiel: Einkaufsliste (Einzelschritte)

function fuegeHinzu(liste, artikel) {
  if (liste.includes(artikel)) {
    console.log(artikel + " steht schon drauf.");
    return;
  }

  liste.push(artikel);
  console.log(artikel + " hinzugefügt.");
}

const einkaufsliste = [];
fuegeHinzu(einkaufsliste, "Milch");
fuegeHinzu(einkaufsliste, "Milch");
console.log(einkaufsliste);
