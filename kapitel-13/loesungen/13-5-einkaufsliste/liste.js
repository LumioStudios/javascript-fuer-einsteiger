// Einkaufsliste – mit Formular und Maus bedienbar

// --- Daten ---

const artikel = [
  { name: "Milch", menge: 2, erledigt: false },
  { name: "Brot", menge: 1, erledigt: true },
  { name: "Äpfel", menge: 6, erledigt: false }
];

// --- Elemente der Seite ---

const listeElement = document.querySelector("#liste");
const zaehlerElement = document.querySelector("#zaehler");
const leerElement = document.querySelector("#leer");
const aufraeumKnopf =
  document.querySelector("#aufraeumen");
const formular = document.querySelector("#neu");
const nameFeld = document.querySelector("#artikelName");
const mengeFeld = document.querySelector("#menge");

let abgeschickt = false;

// --- Anzeige ---

function erstelleEintrag(eintrag, nummer) {
  const li = document.createElement("li");
  li.setAttribute("data-nummer", nummer);

  const nummerElement = document.createElement("span");
  nummerElement.textContent = `${nummer}.`;
  nummerElement.classList.add("nummer");

  const loeschKnopf = document.createElement("button");
  loeschKnopf.setAttribute("type", "button");
  loeschKnopf.textContent = "✕";
  loeschKnopf.classList.add("loeschen");

  const text = `${eintrag.menge} × ${eintrag.name}`;
  li.append(nummerElement, text, loeschKnopf);

  li.classList.toggle("erledigt", eintrag.erledigt);

  return li;
}

function aktualisiereZaehler() {
  const gesamt = artikel.length;
  let fertig = 0;

  for (const eintrag of artikel) {
    if (eintrag.erledigt) {
      fertig++;
    }
  }

  zaehlerElement.textContent =
    `${gesamt} Artikel, davon ${fertig} erledigt`;
  leerElement.classList.toggle("versteckt", gesamt > 0);
  aufraeumKnopf.disabled = fertig === 0;
}

function zeigeListe() {
  listeElement.replaceChildren();

  for (let i = 0; i < artikel.length; i++) {
    const li = erstelleEintrag(artikel[i], i + 1);
    listeElement.append(li);
  }

  aktualisiereZaehler();
}

// --- Befehle ---

function istGueltig(nummer) {
  const ok = nummer >= 1 && nummer <= artikel.length;

  if (!ok) {
    console.log(`Es gibt keinen Artikel Nr. ${nummer}.`);
  }

  return ok;
}

function hinzufuegen(name, menge = 1) {
  const sauber = name.trim();

  if (sauber === "") {
    console.log("Bitte einen Namen angeben.");
    return;
  }

  // Neu: vorhandenen Artikel suchen
  const klein = sauber.toLowerCase();
  const vorhanden = artikel.find(
    (eintrag) => eintrag.name.toLowerCase() === klein
  );

  if (vorhanden) {
    vorhanden.menge += menge;
    vorhanden.erledigt = false;
  } else {
    artikel.push({ name: sauber, menge, erledigt: false });
  }

  zeigeListe();
}

function abhaken(nummer) {
  if (!istGueltig(nummer)) {
    return;
  }

  const eintrag = artikel[nummer - 1];
  eintrag.erledigt = !eintrag.erledigt;
  zeigeListe();
}

function entfernen(nummer) {
  if (!istGueltig(nummer)) {
    return;
  }

  artikel.splice(nummer - 1, 1);
  zeigeListe();
}

function aufraeumen() {
  for (let i = artikel.length - 1; i >= 0; i--) {
    if (artikel[i].erledigt) {
      artikel.splice(i, 1);
    }
  }

  zeigeListe();
}

// --- Formular (neu) ---

function pruefeArtikelName(name) {
  if (name === "") {
    return "Bitte gib einen Artikel ein.";
  }
  return "";
}

function pruefeMenge(text) {
  if (text === "") {
    return "Bitte gib eine Menge ein.";
  }

  const menge = Number(text);

  if (!Number.isInteger(menge)) {
    return "Bitte gib eine ganze Zahl ein.";
  }
  if (menge < 1 || menge > 99) {
    return "Die Menge muss zwischen 1 und 99 liegen.";
  }
  return "";
}

function leseFormular() {
  return {
    artikelName: nameFeld.value.trim(),
    menge: mengeFeld.value.trim()
  };
}

function pruefeFormular(daten) {
  return {
    artikelName: pruefeArtikelName(daten.artikelName),
    menge: pruefeMenge(daten.menge)
  };
}

function hatFehler(fehler) {
  for (const feldName in fehler) {
    if (fehler[feldName] !== "") {
      return true;
    }
  }
  return false;
}

function zeigeFehler(feldName, meldung) {
  const feld = document.querySelector(`#${feldName}`);
  const ziel = document.querySelector(
    `#${feldName}-fehler`
  );

  ziel.textContent = meldung;
  feld.classList.toggle("ungueltig", meldung !== "");
}

function zeigeAlleFehler(fehler) {
  for (const feldName in fehler) {
    zeigeFehler(feldName, fehler[feldName]);
  }
}

function fokussiereErstenFehler(fehler) {
  for (const feldName in fehler) {
    if (fehler[feldName] !== "") {
      document.querySelector(`#${feldName}`).focus();
      return;
    }
  }
}

// --- Events ---

listeElement.addEventListener("click", (event) => {
  const ziel = event.target;

  if (ziel === listeElement) {
    return;
  }

  let li = ziel;
  if (li.tagName !== "LI") {
    li = li.parentElement;
  }

  const nummer = Number(li.getAttribute("data-nummer"));

  if (ziel.classList.contains("loeschen")) {
    entfernen(nummer);
  } else {
    abhaken(nummer);
  }
});

aufraeumKnopf.addEventListener("click", aufraeumen);

formular.addEventListener("submit", (event) => {
  event.preventDefault();
  abgeschickt = true;

  const daten = leseFormular();
  const fehler = pruefeFormular(daten);
  zeigeAlleFehler(fehler);

  if (hatFehler(fehler)) {
    fokussiereErstenFehler(fehler);
    return;
  }

  hinzufuegen(daten.artikelName, Number(daten.menge));

  formular.reset();
  abgeschickt = false;
  nameFeld.focus();
});

formular.addEventListener("input", () => {
  if (abgeschickt) {
    zeigeAlleFehler(pruefeFormular(leseFormular()));
  }
});

// --- Start ---

zeigeListe();
