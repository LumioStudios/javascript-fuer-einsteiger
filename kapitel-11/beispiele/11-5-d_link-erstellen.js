// Kapitel 11.5 – Ein Element mit Attributen erstellen
// Gehört zu: cafe.html

const link = document.createElement("a");

link.textContent = "Speisekarte als PDF";
link.setAttribute("href", "speisekarte.pdf");

document.body.append(link);
