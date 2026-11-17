// Kapitel 11.4 – Attribute lesen und setzen
// Gehört zu: cafe.html

const link = document.querySelector("a");

console.log(link.getAttribute("href"));

link.setAttribute("href", "impressum.html");
link.setAttribute("target", "_blank");
console.log(link.hasAttribute("target"));

link.removeAttribute("target");
console.log(link.hasAttribute("target"));
