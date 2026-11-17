// --- Preise ---

const groessen = {
  klein: { name: "Kleine", preis: 8 },
  mittel: { name: "Mittlere", preis: 10 },
  gross: { name: "Große", preis: 13 }
};
const belagPreis = 1.5;
const lieferPreis = 2.5;
const maxBelaege = 4;

// --- Elemente ---

const formular = document.querySelector("#bestellung");
const preisElement = document.querySelector("#preis");
const zusammenfassung =
  document.querySelector("#zusammenfassung");

// --- Daten lesen und rechnen ---

function leseBestellung() {
  const groesse = document.querySelector(
    "input[name=groesse]:checked"
  ).value;

  const felder = document.querySelectorAll(
    "input[name=belag]:checked"
  );
  const belaege = [];
  for (const feld of felder) {
    belaege.push(feld.value);
  }

  const lieferung =
    document.querySelector("#lieferung").checked;

  return { groesse, belaege, lieferung };
}

function berechnePreis(bestellung) {
  let preis = groessen[bestellung.groesse].preis;
  preis += bestellung.belaege.length * belagPreis;

  if (bestellung.lieferung) {
    preis += lieferPreis;
  }
  return preis;
}

function euro(zahl) {
  return `${zahl.toFixed(2).replace(".", ",")} €`;
}

// --- Anzeige ---

function zeigePreis() {
  const preis = berechnePreis(leseBestellung());
  preisElement.textContent = `Preis: ${euro(preis)}`;
}

function beschreibe(bestellung) {
  const name = groessen[bestellung.groesse].name;
  let belagText = "ohne Belag";

  if (bestellung.belaege.length > 0) {
    belagText = `mit ${bestellung.belaege.join(", ")}`;
  }

  let text = `${name} Pizza ${belagText}`;
  if (bestellung.lieferung) {
    text += ", geliefert";
  }
  return text;
}

// --- Events ---

formular.addEventListener("input", zeigePreis);

formular.addEventListener("submit", (event) => {
  event.preventDefault();

  const bestellung = leseBestellung();

  if (bestellung.belaege.length > maxBelaege) {
    zusammenfassung.textContent =
      "Höchstens vier Beläge, bitte.";
    return;
  }

  const preis = euro(berechnePreis(bestellung));
  zusammenfassung.textContent =
    `${beschreibe(bestellung)}. Gesamt: ${preis}`;
});

zeigePreis();
