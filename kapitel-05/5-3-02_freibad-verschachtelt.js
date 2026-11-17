// Kapitel 5.3 – Unnötig verschachtelt
// Vergleiche mit 5-3-03_freibad-und.js.

const istWochenende = true;
const scheintSonne = true;

if (istWochenende) {
  if (scheintSonne) {
    console.log("Ab ins Freibad!");
  }
}
