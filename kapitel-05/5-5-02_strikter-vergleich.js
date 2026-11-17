// Kapitel 5.5 – switch vergleicht strikt mit ===
// Der String "3" passt nicht zu case 3.
// Lösung: switch (Number(eingabe))

const eingabe = "3";

switch (eingabe) {
  case 3:
    console.log("Mittwoch");
    break;
  default:
    console.log("Kein Treffer");
}
