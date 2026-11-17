// Kapitel 10.7: Praxisbeispiel: Würfelspiel
// Schritt 3: Den Namen aufräumen
// Ausführen im Ordner kapitel-10: node beispiele/10-7-03_schritt-3-den-namen-aufraeumen.js

function bereinigeName(eingabe) {
  if (eingabe === null || eingabe.trim() === "") {
    return "Spieler";
  }

  const name = eingabe.trim().toLowerCase();
  return name.slice(0, 1).toUpperCase() + name.slice(1);
}

console.log(bereinigeName("  aNNA "));
console.log(bereinigeName("   "));
console.log(bereinigeName(null));

// Ausgabe:
// Anna
// Spieler
// Spieler
