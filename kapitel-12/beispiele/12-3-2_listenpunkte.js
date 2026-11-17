// Kapitel 12.3 – Klicks auf Listenpunkte
// Öffne 12-3-2_listenpunkte.html im Browser.

const punkte = document.querySelectorAll("#farben li");

for (const punkt of punkte) {
  punkt.addEventListener("click", () => {
    punkt.classList.toggle("an");
  });
}
