// Kapitel 8.8 – Praxisbeispiel: Einkaufsliste (Einzelschritte)

function entferneLetzten(liste) {
  const artikel = liste.pop();

  if (artikel === undefined) {
    console.log("Es gibt nichts zu entfernen.");
  } else {
    console.log(artikel + " entfernt.");
  }
}

const einkaufsliste = ["Milch"];
entferneLetzten(einkaufsliste);
entferneLetzten(einkaufsliste);
