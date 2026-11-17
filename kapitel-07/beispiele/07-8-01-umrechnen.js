// Kapitel 7, Abschnitt 7.8: Schritt 1: Die Umrechnung

function celsiusInFahrenheit(celsius) {
  return celsius * 9 / 5 + 32;
}

function fahrenheitInCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

console.log(celsiusInFahrenheit(100));
console.log(fahrenheitInCelsius(50));
console.log(fahrenheitInCelsius(100));
