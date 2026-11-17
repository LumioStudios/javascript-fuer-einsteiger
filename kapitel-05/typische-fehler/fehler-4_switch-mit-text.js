// Typischer Fehler 4: switch mit Text statt Zahl
// Werte aus prompt sind immer Strings.
// Mit switch (eingabe) läuft nur default.

const eingabe = "3";

// Falsch:
switch (eingabe) {
  case 3:
    console.log("Treffer");
    break;
  default:
    console.log("Kein Treffer");
}

// Richtig: vorher umwandeln
switch (Number(eingabe)) {
  case 3:
    console.log("Treffer");
    break;
  default:
    console.log("Kein Treffer");
}
