// Kapitel 7, Abschnitt 7.3: Entscheidungen in Funktionen

function pruefeAlter(alter) {
  if (alter >= 18) {
    console.log("Zutritt erlaubt.");
  } else {
    console.log("Leider erst ab 18.");
  }
}

pruefeAlter(25);
pruefeAlter(16);
