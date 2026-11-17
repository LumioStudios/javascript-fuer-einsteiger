// Lösung zu Übung 3.3 – Umwandlungen vorhersagen

console.log(Number("99"));          // 99
console.log(Number("9,99"));        // NaN (Komma)
console.log(Number(" 7 "));         // 7
console.log(Number(true));          // 1
console.log(Boolean("nein"));       // true (nicht leer)
console.log(Boolean(0));            // false
console.log(Boolean("0"));          // true (nicht leer)
console.log(String(12) + String(3)); // 123 (Text)
