// Typischer Fehler 3: break im switch vergessen
// Bei note = 1 erscheinen drei Meldungen statt einer.

const note = 1;

switch (note) {
  case 1:
    console.log("sehr gut");
  case 2:
    console.log("gut");
  case 3:
    console.log("befriedigend");
    break;
  default:
    console.log("andere Note");
}
