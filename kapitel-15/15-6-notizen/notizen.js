// Notizen-App mit localStorage

const speicherSchluessel = "notizApp-notizen";

function ladeNotizen() {
  const text = localStorage.getItem(speicherSchluessel);

  if (text === null) {
    return [];
  }

  try {
    return JSON.parse(text);
  } catch (fehler) {
    console.error("Notizen defekt:", fehler);
    return [];
  }
}

function speichereNotizen() {
  const text = JSON.stringify(notizen);
  localStorage.setItem(speicherSchluessel, text);
}

const formular = document.querySelector("#formular");
const eingabe = document.querySelector("#eingabe");
const meldung = document.querySelector("#meldung");
const anzahl = document.querySelector("#anzahl");
const liste = document.querySelector("#liste");
const alleButton = document.querySelector("#alleLoeschen");

const notizen = ladeNotizen();

function zeigeNotizen() {
  liste.replaceChildren();

  for (let i = 0; i < notizen.length; i++) {
    const notiz = notizen[i];
    const li = document.createElement("li");

    const knopf = document.createElement("button");
    knopf.type = "button";
    knopf.textContent = "Löschen";
    knopf.addEventListener("click", () => {
      loescheNotiz(i);
    });

    li.append(`${notiz.datum}: ${notiz.text} `, knopf);
    liste.append(li);
  }

  anzahl.textContent = `${notizen.length} Notiz(en)`;
}

function fuegeNotizHinzu(text) {
  const datum = new Date().toLocaleString("de-DE");

  notizen.push({ text, datum });
  speichereNotizen();
  zeigeNotizen();
}

function loescheNotiz(nummer) {
  notizen.splice(nummer, 1);
  speichereNotizen();
  zeigeNotizen();
}

formular.addEventListener("submit", (event) => {
  event.preventDefault();

  const text = eingabe.value.trim();

  if (text === "") {
    meldung.textContent = "Bitte gib einen Text ein.";
    return;
  }

  fuegeNotizHinzu(text);
  meldung.textContent = "Notiz gespeichert.";
  eingabe.value = "";
  eingabe.focus();
});

alleButton.addEventListener("click", () => {
  if (!confirm("Wirklich alle Notizen löschen?")) {
    return;
  }

  notizen.splice(0, notizen.length);
  localStorage.removeItem(speicherSchluessel);
  meldung.textContent = "Alle Notizen gelöscht.";
  zeigeNotizen();
});

// Beim Start die gespeicherten Notizen anzeigen
zeigeNotizen();
