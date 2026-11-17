// Kapitel 8.3 – Elemente hinzufügen und entfernen

const warteschlange = ["Ben", "Clara"];

warteschlange.unshift("Anna");
console.log(warteschlange);

const naechster = warteschlange.shift();
console.log(naechster + " ist dran.");
console.log(warteschlange);
