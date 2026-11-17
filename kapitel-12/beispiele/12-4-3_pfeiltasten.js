// Kapitel 12.4 – Markierung mit Pfeiltasten
// Öffne 12-4-3_pfeiltasten.html im Browser.

const punkte = document.querySelectorAll("#farben li");
let position = 0;

function markiere() {
  for (const punkt of punkte) {
    punkt.classList.remove("an");
  }
  punkte[position].classList.add("an");
}

document.addEventListener("keydown", (event) => {
  switch (event.key) {
    case "ArrowDown":
      position = Math.min(position + 1, punkte.length - 1);
      break;
    case "ArrowUp":
      position = Math.max(position - 1, 0);
      break;
  }
  markiere();
});

markiere();
