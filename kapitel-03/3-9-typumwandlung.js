// Kapitel 3.9 – Typumwandlung

// Warum Umwandeln wichtig ist
const eingabe = "5";

console.log(eingabe + 3);
console.log(Number(eingabe) + 3);

console.log();

// Number(): in eine Zahl umwandeln
console.log(Number("42"));
console.log(Number("3.5"));
console.log(Number("  12  "));
console.log(Number(""));

console.log(Number("Hallo"));
console.log(Number("12 Euro"));
console.log(Number("3,5"));

console.log(Number(true));
console.log(Number(false));
console.log(Number(null));
console.log(Number(undefined));

// parseFloat liest die Zahl am Textanfang
console.log(parseFloat("12.5 kg"));

console.log();

// String(): in einen Text umwandeln
const zahlAlsText = String(42);
const wahrAlsText = String(true);

console.log(zahlAlsText, typeof zahlAlsText);
console.log(wahrAlsText, typeof wahrAlsText);
console.log(String(null));
console.log(String(undefined));

console.log();

// Boolean(): diese Werte ergeben false
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(NaN));

console.log();

// Boolean(): diese Werte ergeben true
console.log(Boolean(42));
console.log(Boolean(-1));
console.log(Boolean("Hallo"));
console.log(Boolean("0"));
console.log(Boolean(" "));
