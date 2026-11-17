// Kapitel 5.5 – Fälle bewusst zusammenfassen
// Teste mit tag = 2, 6 und 9.

const tag = 6;

switch (tag) {
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
    console.log("Arbeitstag");
    break;
  case 6:
  case 7:
    console.log("Wochenende!");
    break;
  default:
    console.log("Ungültiger Tag");
}
