// Lösung zu Kapitel 7, Übung 7.5 – Kelvin und Wiederholung (läuft im Browser)

// Temperatur-Umrechner mit Kelvin

// --- Umrechnen ---

function celsiusInFahrenheit(celsius) {
  return celsius * 9 / 5 + 32;
}

function fahrenheitInCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

const celsiusInKelvin = (celsius) => celsius + 273.15;
const kelvinInCelsius = (kelvin) => kelvin - 273.15;

const runde = (zahl) => Math.round(zahl * 10) / 10;

// --- Eingabe und Ausgabe ---

function liesZahl(frage) {
  while (true) {
    const eingabe = prompt(frage);

    if (eingabe === null) {
      return null; // Abbrechen geklickt
    }

    const zahl = Number(eingabe);

    if (eingabe !== "" && !Number.isNaN(zahl)) {
      return zahl; // gültige Zahl
    }

    alert("Bitte gib eine Zahl ein, z. B. 21.5");
  }
}

function zeigeErgebnis(wert, von, ergebnis, nach) {
  console.log(
    runde(wert) + " " + von + " = " +
    runde(ergebnis) + " " + nach
  );
}

// --- Ablauf ---

function starteUmrechner() {
  const auswahl = prompt(
    "1 = Celsius in Fahrenheit\n" +
    "2 = Fahrenheit in Celsius\n" +
    "3 = Celsius in Kelvin\n" +
    "4 = Kelvin in Celsius"
  );

  let einheit;

  if (auswahl === "1" || auswahl === "3") {
    einheit = "°C";
  } else if (auswahl === "2") {
    einheit = "°F";
  } else if (auswahl === "4") {
    einheit = "K";
  } else {
    console.log("Keine Umrechnung gewählt.");
    return;
  }

  const wert = liesZahl("Temperatur in " + einheit + ":");

  if (wert === null) {
    console.log("Abgebrochen.");
    return;
  }

  if (auswahl === "1") {
    const ergebnis = celsiusInFahrenheit(wert);
    zeigeErgebnis(wert, "°C", ergebnis, "°F");
  } else if (auswahl === "2") {
    const ergebnis = fahrenheitInCelsius(wert);
    zeigeErgebnis(wert, "°F", ergebnis, "°C");
  } else if (auswahl === "3") {
    const ergebnis = celsiusInKelvin(wert);
    zeigeErgebnis(wert, "°C", ergebnis, "K");
  } else if (wert < 0) {
    console.log("Kelvin kann nicht negativ sein.");
  } else {
    const ergebnis = kelvinInCelsius(wert);
    zeigeErgebnis(wert, "K", ergebnis, "°C");
  }
}

// --- Start mit Wiederholung ---

let nochmal = true;

while (nochmal) {
  starteUmrechner();
  nochmal = confirm("Noch eine Umrechnung?");
}

console.log("Auf Wiedersehen!");
