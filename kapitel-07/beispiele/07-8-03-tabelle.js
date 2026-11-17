// Kapitel 7, Abschnitt 7.8: Schritt 3: Eine Umrechnungstabelle
// Hilfsfunktion aus dem vorherigen Beispiel:

function celsiusInFahrenheit(celsius) {
  return celsius * 9 / 5 + 32;
}

for (let celsius = -20; celsius <= 40; celsius += 10) {
  const fahrenheit = celsiusInFahrenheit(celsius);
  console.log(celsius + " °C = " + fahrenheit + " °F");
}
