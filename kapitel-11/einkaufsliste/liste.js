// Dynamische Einkaufsliste

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

// --- Anzeige ---

function erstelleEintrag(eintrag, nummer) {
  const li = document.createElement("li");

  const nummerElement = document.createElement("span");
  nummerElement.textContent = `${nummer}.`;
  nummerElement.classList.add("nummer");

  const text = `${eintrag.menge} × ${eintrag.name}`;
  li.append(nummerElement, text);

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

  artikel.push({ name: sauber, menge, erledigt: false });
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

// --- Start ---

zeigeListe();
console.log("Befehle: hinzufuegen(name, menge),");
console.log("abhaken(nr), entfernen(nr), aufraeumen()");
