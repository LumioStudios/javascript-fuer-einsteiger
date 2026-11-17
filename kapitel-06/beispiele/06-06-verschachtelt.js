// Kapitel 6.6, Schritt 2 – Schleifen verschachteln
for (let reihe = 1; reihe <= 3; reihe++) {
  for (let i = 1; i <= 3; i++) {
    console.log(reihe, "x", i, "=", reihe * i);
  }

  console.log("---");
}
