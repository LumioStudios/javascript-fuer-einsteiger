// Kapitel 13.3 – Checkboxen, Radiobuttons, Auswahllisten
// Ändere die Auswahl und beobachte die Konsole.
// Beim Absenden erscheint eine Übersicht aller Angaben.

const formular = document.querySelector("#formular");
const newsFeld = document.querySelector("#newsletter");
const landFeld = document.querySelector("#land");
const ausgabe = document.querySelector("#ausgabe");

// Checkbox: checked statt value
newsFeld.addEventListener("change", () => {
  if (newsFeld.checked) {
    console.log("Newsletter: ja");
  } else {
    console.log("Newsletter: nein");
  }
});

// Auswahlliste: value der gewählten Option
landFeld.addEventListener("change", () => {
  console.log(`Gewählt: "${landFeld.value}"`);
});

// Gewählter Radiobutton oder "", wenn keiner gewählt ist
function leseQuelle() {
  const gewaehlt = document.querySelector(
    "input[name=quelle]:checked"
  );

  if (gewaehlt === null) {
    return "";
  }
  return gewaehlt.value;
}

// Alle angehakten Interessen als Array
function leseThemen() {
  const felder = document.querySelectorAll(
    "input[name=thema]:checked"
  );
  const themen = [];

  for (const feld of felder) {
    themen.push(feld.value);
  }
  return themen;
}

// Sichtbarer Text der gewählten Option
function landName() {
  const option = landFeld.options[landFeld.selectedIndex];
  return option.textContent;
}

formular.addEventListener("submit", (event) => {
  event.preventDefault();

  const news = newsFeld.checked ? "ja" : "nein";
  const themen = leseThemen();

  ausgabe.textContent =
    `Newsletter: ${news} · Quelle: ${leseQuelle()} · ` +
    `Land: ${landName()} · ` +
    `Interessen: ${themen.join(", ") || "keine"}`;
});
