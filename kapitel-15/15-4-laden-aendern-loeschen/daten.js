// 15.4 Daten laden, ändern, löschen
// Die Funktionen stehen nach dem Laden der Seite
// in der Konsole bereit. Beispiele:
//
//   const einkauf = ladeListe("einkauf");
//   einkauf.push("Milch");
//   speichereListe("einkauf", einkauf);
//
//   zeigeAlleEintraege();

function ladeListe(schluessel) {
  const text = localStorage.getItem(schluessel);

  // Noch nichts gespeichert
  if (text === null) {
    return [];
  }

  try {
    return JSON.parse(text);
  } catch (fehler) {
    console.error("Gespeicherte Daten defekt:", fehler);
    return [];
  }
}

function speichereListe(schluessel, liste) {
  const text = JSON.stringify(liste);
  localStorage.setItem(schluessel, text);
}

function ladeEinstellungen() {
  const text = localStorage.getItem("einstellungen");
  const standard = { thema: "hell", schrift: 16 };

  if (text === null) {
    return standard;
  }

  try {
    return JSON.parse(text);
  } catch (fehler) {
    console.error("Einstellungen defekt:", fehler);
    return standard;
  }
}

function speichereEinstellungen(einstellungen) {
  const text = JSON.stringify(einstellungen);
  localStorage.setItem("einstellungen", text);
}

function zeigeAlleEintraege() {
  for (let i = 0; i < localStorage.length; i++) {
    const schluessel = localStorage.key(i);
    const wert = localStorage.getItem(schluessel);
    console.log(`${schluessel}: ${wert}`);
  }
}

console.log("Bereit: ladeListe, speichereListe,");
console.log("ladeEinstellungen, speichereEinstellungen,");
console.log("zeigeAlleEintraege");
