// Kapitel 11.4 – Umschalten mit toggle
// Gehört zu: cafe.html

const titel = document.querySelector("#titel");

titel.classList.toggle("hervorgehoben");
console.log(titel.classList.contains("hervorgehoben"));

titel.classList.toggle("hervorgehoben");
console.log(titel.classList.contains("hervorgehoben"));
