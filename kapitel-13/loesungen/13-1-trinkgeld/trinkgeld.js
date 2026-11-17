const formular = document.querySelector("#rechner");
const betragFeld = document.querySelector("#betrag");
const satzFeld = document.querySelector("#satz");
const personenFeld = document.querySelector("#personen");
const ergebnis = document.querySelector("#ergebnis");

// Zahl als Euro-Betrag mit Komma
function euro(zahl) {
  return `${zahl.toFixed(2).replace(".", ",")} €`;
}

function pruefeEingaben(betragText, personenText) {
  const betrag = Number(betragText);
  const personen = Number(personenText);

  if (betragText === "" || Number.isNaN(betrag)) {
    return "Bitte gib den Rechnungsbetrag ein.";
  }
  if (betrag <= 0) {
    return "Der Betrag muss größer als 0 sein.";
  }
  if (!Number.isInteger(personen) || personen < 1) {
    return "Bitte gib eine ganze Zahl ab 1 an.";
  }
  return "";
}

formular.addEventListener("submit", (event) => {
  event.preventDefault();

  const betragText = betragFeld.value.trim();
  const personenText = personenFeld.value.trim();
  const fehler = pruefeEingaben(betragText, personenText);

  if (fehler !== "") {
    ergebnis.textContent = fehler;
    return;
  }

  const betrag = Number(betragText);
  const satz = Number(satzFeld.value);
  const personen = Number(personenText);

  const trinkgeld = betrag * satz / 100;
  const gesamt = betrag + trinkgeld;
  const proPerson = gesamt / personen;

  ergebnis.textContent =
    `Trinkgeld: ${euro(trinkgeld)} · ` +
    `Gesamt: ${euro(gesamt)} · ` +
    `Pro Person: ${euro(proPerson)}`;
});
