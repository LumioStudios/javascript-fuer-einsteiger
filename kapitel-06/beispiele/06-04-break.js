// Kapitel 6.4 – break: sofort aufhören
for (let zahl = 50; zahl <= 100; zahl++) {
  if (zahl % 7 === 0) {
    console.log("Gefunden:", zahl);
    break;
  }
}
