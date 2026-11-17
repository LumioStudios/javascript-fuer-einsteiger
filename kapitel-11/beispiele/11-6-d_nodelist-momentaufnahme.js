// Kapitel 11.6 – Die NodeList ändert sich nicht mit
// Gehört zu: cafe.html

const punkte = document.querySelectorAll("#karte li");

punkte[0].remove();

console.log(punkte.length);
console.log(document.querySelectorAll("#karte li").length);
