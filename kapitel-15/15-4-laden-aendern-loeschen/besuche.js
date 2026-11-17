// 15.4 Laden mit Startwert: ein Besuchszähler

let besuche = 0;
const gespeichert = localStorage.getItem("besuche");

if (gespeichert !== null) {
  besuche = Number(gespeichert);
}

besuche++;
localStorage.setItem("besuche", besuche);

const text = `Das ist dein Besuch Nr. ${besuche}.`;
console.log(text);
document.querySelector("#ausgabe").textContent = text;

// Zum Zurücksetzen in der Konsole eintippen:
// localStorage.removeItem("besuche");
