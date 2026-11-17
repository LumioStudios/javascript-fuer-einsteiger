// Kapitel 11.5 – Ein neues Element erstellen
// Gehört zu: cafe.html

const karte = document.querySelector("#karte");
const neu = document.createElement("li");

neu.textContent = "Käsekuchen";
neu.classList.add("kuchen");

karte.append(neu);
