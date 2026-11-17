// Kapitel 11.3 – Eine Liste mit innerHTML erzeugen
// Gehört zu: cafe.html

const karte = document.querySelector("#karte");
const sorten = ["Espresso", "Cappuccino", "Latte"];
let html = "";

for (const sorte of sorten) {
  html += `<li>${sorte}</li>`;
}

karte.innerHTML = html;
