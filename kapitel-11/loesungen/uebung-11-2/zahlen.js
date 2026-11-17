const punkte = document.querySelectorAll("#zahlen li");
const ergebnis = document.querySelector("#ergebnis");
const gesamt = punkte.length;
let anzahlGerade = 0;

for (const punkt of punkte) {
  const zahl = Number(punkt.textContent);

  if (zahl % 2 === 0) {
    punkt.classList.add("gerade");
    anzahlGerade++;
  }
}

ergebnis.textContent =
  `${anzahlGerade} von ${gesamt} Zahlen sind gerade.`;
