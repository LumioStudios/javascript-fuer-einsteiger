const noten = [2, 3, 1, 4];
const button = document.querySelector("#rechnen");
const ausgabe = document.querySelector("#ausgabe");

function berechneDurchschnitt(liste) {
  let summe = 0;

  for (let i = 0; i <= liste.length; i++) {
    summe += liste[i];
  }

  return summe / liste.length;
}

button.addEventListener("click", () => {
  const schnitt = berechneDurchschnitt(noten);
  ausgabe.textContent = `Durchschnitt: ${schnitt}`;
});

// Kapitel 14.4 – Diese Datei enthält ABSICHTLICH den
// Fehler aus Abschnitt 14.3 (<= statt <).
// Die Kommentare stehen am Ende, damit die
// Zeilennummern zum Buch passen: Der Haltepunkt kommt
// in Zeile 9 (summe += liste[i];).
