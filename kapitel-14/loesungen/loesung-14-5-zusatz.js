// Lösung zu Übung 14.5 – Zusatzaufgabe mit Formular
// Öffne loesung-14-5-zusatz.html im Browser.

function rechneInEuro(betragText, kurs) {
  const text = betragText.trim();

  if (text === "") {
    throw new Error("Bitte gib einen Betrag ein.");
  }

  const betrag = Number(text);

  if (Number.isNaN(betrag)) {
    throw new Error(`„${betragText}“ ist keine Zahl.`);
  }
  if (betrag < 0) {
    throw new Error("Der Betrag darf nicht negativ sein.");
  }
  if (!(kurs > 0)) {
    throw new Error("Der Kurs muss größer als 0 sein.");
  }

  return Math.round(betrag / kurs * 100) / 100;
}

const formular = document.querySelector("#rechner");
const betragFeld = document.querySelector("#betrag");
const kursFeld = document.querySelector("#kurs");
const ergebnis = document.querySelector("#ergebnis");

formular.addEventListener("submit", (event) => {
  event.preventDefault();

  const kurs = Number(kursFeld.value.trim());

  try {
    const euro = rechneInEuro(betragFeld.value, kurs);
    ergebnis.textContent = `Ergebnis: ${euro} €`;
    ergebnis.classList.remove("fehler");
  } catch (fehler) {
    ergebnis.textContent = fehler.message;
    ergebnis.classList.add("fehler");
  }
});
