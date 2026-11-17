// Kapitel 4.5 – Truthy und falsy
// Ausführen: node 4-5_truthy-falsy.js
// Das prompt-Beispiel findest du im Ordner browser.

// --- Truthy und falsy mit ! ---
console.log(!"Hallo");
console.log(!"");
console.log(!0);

// Doppeltes ! ergibt den reinen Wahrheitswert
console.log(!!"Hallo");
console.log(!!0);

// --- || gibt den ersten truthy-Wert zurück ---
console.log("Lena" || "Gast");
console.log("" || "Gast");
console.log(null || "Gast");

// Standardwert mit ||
const eingabe = "";
const benutzerName = eingabe || "Gast";

console.log("Hallo,", benutzerName);

// --- && gibt den ersten falsy-Wert zurück ---
console.log("Lena" && "Tom");
console.log("" && "Tom");

// --- Der Haken bei || ---
const anzahl = 0;
const ergebnis = anzahl || 10;

console.log(ergebnis);

// --- Der Operator ?? ---
console.log(0 ?? 10);
console.log("" ?? "Gast");
console.log(null ?? 10);
console.log(undefined ?? 10);
