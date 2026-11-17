// Kapitel 7, Abschnitt 7.4: return beendet die Funktion

function bewerteTemperatur(grad) {
  if (grad < 0) {
    return "Frost";
  }

  if (grad < 20) {
    return "kühl";
  }

  return "warm";
}

console.log(bewerteTemperatur(-5));
console.log(bewerteTemperatur(12));
console.log(bewerteTemperatur(25));
