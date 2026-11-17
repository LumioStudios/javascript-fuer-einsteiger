// 15.5 Der kleine Bruder: sessionStorage
// Gleiche Methoden wie localStorage, aber die Daten
// gelten nur für diesen Tab.

let aufrufe = 0;
const gespeichert = sessionStorage.getItem("aufrufe");

if (gespeichert !== null) {
  aufrufe = Number(gespeichert);
}

aufrufe++;
sessionStorage.setItem("aufrufe", aufrufe);

const text = `Aufrufe in diesem Tab: ${aufrufe}`;
document.querySelector("#ausgabe").textContent = text;
