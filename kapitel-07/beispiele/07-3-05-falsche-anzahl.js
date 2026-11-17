// Kapitel 7, Abschnitt 7.3: Zu wenige oder zu viele Argumente
// Hilfsfunktion aus dem vorherigen Beispiel:

function zeigeProdukt(produkt, preis) {
  console.log(produkt + " kostet " + preis + " Euro.");
}

zeigeProdukt("Tee");
zeigeProdukt("Saft", 2.2, "groß");
