// Kapitel 11.6 – Gezielt entfernen
// Gehört zu: cafe.html

const punkte = document.querySelectorAll("#karte li");

for (const punkt of punkte) {
  if (punkt.classList.contains("getraenk")) {
    punkt.remove();
  }
}
