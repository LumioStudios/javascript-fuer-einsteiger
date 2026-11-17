// Kapitel 9, Abschnitt 9.6 – Alle durchlaufen
// Ausführen: node 09-06-02_alle-durchlaufen.js

const produkte = [
  { name: "Kaffee", preis: 6.49, vorraetig: true },
  { name: "Tee", preis: 3.99, vorraetig: false },
  { name: "Kakao", preis: 4.29, vorraetig: true }
];

for (const produkt of produkte) {
  const status = produkt.vorraetig ? "da" : "aus";
  console.log(produkt.name + ": " + produkt.preis +
    " Euro (" + status + ")");
}

// Ausgabe:
// Kaffee: 6.49 Euro (da)
// Tee: 3.99 Euro (aus)
// Kakao: 4.29 Euro (da)
