const passwortFeld = document.querySelector("#passwort");
const zeigenKnopf = document.querySelector("#zeigen");
const regelListe = document.querySelector("#regeln");
const staerkeElement = document.querySelector("#staerke");

let sichtbar = false;

// --- Prüfungen für einzelne Zeichen ---

function enthaeltZiffer(text) {
  for (const zeichen of text) {
    if ("0123456789".includes(zeichen)) {
      return true;
    }
  }
  return false;
}

function enthaeltGross(text) {
  for (const zeichen of text) {
    if (zeichen !== zeichen.toLowerCase()) {
      return true;
    }
  }
  return false;
}

function enthaeltKlein(text) {
  for (const zeichen of text) {
    if (zeichen !== zeichen.toUpperCase()) {
      return true;
    }
  }
  return false;
}

// --- Die Regeln ---

const regeln = [
  {
    text: "mindestens 8 Zeichen",
    pruefe: (passwort) => passwort.length >= 8
  },
  {
    text: "mindestens eine Ziffer",
    pruefe: enthaeltZiffer
  },
  {
    text: "mindestens ein Großbuchstabe",
    pruefe: enthaeltGross
  },
  {
    text: "mindestens ein Kleinbuchstabe",
    pruefe: enthaeltKlein
  }
];

// --- Anzeige ---

function bewerte(anzahl) {
  if (anzahl === regeln.length) {
    return "stark";
  }
  if (anzahl === 3) {
    return "mittel";
  }
  return "schwach";
}

function zeigeRegeln() {
  const passwort = passwortFeld.value;
  let erfuellt = 0;

  regelListe.replaceChildren();

  for (const regel of regeln) {
    const ok = regel.pruefe(passwort);
    const li = document.createElement("li");

    li.textContent = `${ok ? "✓" : "–"} ${regel.text}`;
    li.classList.toggle("erfuellt", ok);
    regelListe.append(li);

    if (ok) {
      erfuellt++;
    }
  }

  staerkeElement.textContent =
    `Stärke: ${bewerte(erfuellt)}`;
}

// --- Events ---

passwortFeld.addEventListener("input", zeigeRegeln);

zeigenKnopf.addEventListener("click", () => {
  sichtbar = !sichtbar;
  passwortFeld.type = sichtbar ? "text" : "password";
  zeigenKnopf.textContent = sichtbar
    ? "Passwort verbergen"
    : "Passwort anzeigen";
});

zeigeRegeln();
