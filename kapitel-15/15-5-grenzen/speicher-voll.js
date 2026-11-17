// 15.5 Grenzen von localStorage: begrenzter Platz
// Das Skript versucht, etwa 10 Millionen Zeichen
// zu speichern. Das ist mehr, als die meisten
// Browser erlauben.

const sehrLangerText = "x".repeat(10000000);

try {
  localStorage.setItem("daten", sehrLangerText);
  console.log("Gespeichert, dein Browser hat viel Platz.");
  localStorage.removeItem("daten");
} catch (fehler) {
  console.error("Speichern fehlgeschlagen:", fehler.name);
}
