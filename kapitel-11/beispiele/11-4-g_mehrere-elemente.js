// Kapitel 11.4 – Mehrere Elemente auf einmal
// Gehört zu: cafe.html

const getraenke = document.querySelectorAll(".getraenk");

for (const getraenk of getraenke) {
  getraenk.classList.add("hervorgehoben");
}

console.log(`${getraenke.length} Getränke markiert.`);
