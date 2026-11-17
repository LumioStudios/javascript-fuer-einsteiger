// Kapitel 8.8 – Praxisbeispiel: Einkaufsliste (Einzelschritte)

const einkaufsliste = ["Milch", "Brot"];

function zeigeListe(liste) {
  if (liste.length === 0) {
    console.log("Die Liste ist leer.");
    return;
  }

  console.log("Einkaufsliste:");
  for (let i = 0; i < liste.length; i++) {
    console.log((i + 1) + ". " + liste[i]);
  }
}

zeigeListe(einkaufsliste);
zeigeListe([]);
