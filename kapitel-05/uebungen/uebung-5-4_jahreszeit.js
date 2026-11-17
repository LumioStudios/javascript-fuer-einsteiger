// Übung 5.4 – Die Jahreszeit
// Mit monat = "7" (String) hilft switch (Number(monat)).

const monat = 7;

switch (monat) {
  case 12:
  case 1:
  case 2:
    console.log("Winter");
    break;
  case 3:
  case 4:
  case 5:
    console.log("Frühling");
    break;
  case 6:
  case 7:
  case 8:
    console.log("Sommer");
    break;
  case 9:
  case 10:
  case 11:
    console.log("Herbst");
    break;
  default:
    console.log("Ungültiger Monat");
}
