// Kapitel 10.2: Wichtige String-Methoden
// Strings lassen sich nicht verändern
// Ausführen im Ordner kapitel-10: node beispiele/10-2-02_strings-lassen-sich-nicht-veraendern.js

const gruss = "hallo";

gruss[0] = "H"; // wird still ignoriert
console.log(gruss);

const laut = gruss.toUpperCase();
console.log(laut);
console.log(gruss);

// Ausgabe:
// hallo
// HALLO
// hallo
