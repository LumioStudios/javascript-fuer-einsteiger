// Einkaufsliste – mit der Maus bedienbar

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

// --- Anzeige ---

function erstelleEintrag(eintrag, nummer) {
  const li = document.createElement("li");
  li.setAttribute("data-nummer", nummer); // neu

  const nummerElement = document.createElement("span");
  nummerElement.textContent = `${nummer}.`;
  nummerElement.classList.add("nummer");

  // Neu: Button zum Entfernen
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
  aufraeumKnopf.disabled = fertig === 0; // neu
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

// --- Events (neu) ---

listeElement.addEventListener("click", (event) => {
  const ziel = event.target;

  // Klick neben die Einträge
  if (ziel === listeElement) {
    return;
  }

  // Bei Klick auf Nummer oder Button: das li dazu
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

// --- Start ---

zeigeListe();
