const produkte = [
  { name: "Espresso", preis: 2.2 },
  { name: "Cappuccino", preis: 3.4 },
  { name: "Apfelkuchen", preis: 3.9 }
];

function alsEuro(betrag) {
  return betrag.toLocaleString("de-DE", {
    style: "currency",
    currency: "EUR"
  });
}

function erstelleZelle(typ, text) {
  const zelle = document.createElement(typ);
  zelle.textContent = text;
  return zelle;
}

const tabelle = document.querySelector("#preise");

// Kopfzeile
const kopf = document.createElement("tr");
kopf.append(
  erstelleZelle("th", "Produkt"),
  erstelleZelle("th", "Preis")
);
tabelle.append(kopf);

// Eine Zeile pro Produkt
for (const produkt of produkte) {
  const zeile = document.createElement("tr");
  zeile.append(
    erstelleZelle("td", produkt.name),
    erstelleZelle("td", alsEuro(produkt.preis))
  );
  tabelle.append(zeile);
}

console.log(tabelle.querySelectorAll("tr").length);
