// Kapitel 12.3 – mouseenter und mouseleave
// Öffne 12-3-4_maus.html im Browser.

const punkte = document.querySelectorAll("#farben li");

for (const punkt of punkte) {
  punkt.addEventListener("mouseenter", () => {
    punkt.classList.add("an");
  });

  punkt.addEventListener("mouseleave", () => {
    punkt.classList.remove("an");
  });
}
