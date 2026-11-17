// Lösung zu Übung 8.3 – Gästeliste

function ladeEin(gaeste, name) {
  if (gaeste.includes(name)) {
    return false;
  }

  gaeste.push(name);
  return true;
}

function begruesseAlle(gaeste) {
  gaeste.forEach((gast) => {
    console.log("Schön, dass du da bist, " + gast + "!");
  });
}

const partyGaeste = [];

console.log(ladeEin(partyGaeste, "Anna"));
console.log(ladeEin(partyGaeste, "Ben"));
console.log(ladeEin(partyGaeste, "Anna"));
console.log(ladeEin(partyGaeste, "Clara"));

begruesseAlle(partyGaeste);

// Rückgabewert von ladeEin auswerten
if (!ladeEin(partyGaeste, "Ben")) {
  console.log("Ben ist schon eingeladen.");
}
