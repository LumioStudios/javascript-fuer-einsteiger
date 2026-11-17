// Kapitel 11.2 – Alle Elemente finden
// Gehört zu: cafe.html

const punkte = document.querySelectorAll("#karte li");

console.log(punkte.length);

for (const punkt of punkte) {
  console.log(punkt.textContent);
}
