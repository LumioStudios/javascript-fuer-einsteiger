// Kapitel 5.5 – switch: Zahl in Wochentag umwandeln
// Vollständige Version mit allen sieben Tagen.

const tag = 3;

switch (tag) {
  case 1:
    console.log("Montag");
    break;
  case 2:
    console.log("Dienstag");
    break;
  case 3:
    console.log("Mittwoch");
    break;
  case 4:
    console.log("Donnerstag");
    break;
  case 5:
    console.log("Freitag");
    break;
  case 6:
    console.log("Samstag");
    break;
  case 7:
    console.log("Sonntag");
    break;
  default:
    console.log("Unbekannter Tag");
}
