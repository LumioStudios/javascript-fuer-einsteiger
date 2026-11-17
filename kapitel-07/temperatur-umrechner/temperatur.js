// Temperatur-Umrechner

// --- Umrechnen ---

function celsiusInFahrenheit(celsius) {
  return celsius * 9 / 5 + 32;
}

function fahrenheitInCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

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
    "2 = Fahrenheit in Celsius"
  );

  if (auswahl !== "1" && auswahl !== "2") {
    console.log("Keine Umrechnung gewählt.");
    return;
  }

  const einheit = auswahl === "1" ? "°C" : "°F";
  const wert = liesZahl("Temperatur in " + einheit + ":");

  if (wert === null) {
    console.log("Abgebrochen.");
    return;
  }

  if (auswahl === "1") {
    const ergebnis = celsiusInFahrenheit(wert);
    zeigeErgebnis(wert, "°C", ergebnis, "°F");
  } else {
    const ergebnis = fahrenheitInCelsius(wert);
    zeigeErgebnis(wert, "°F", ergebnis, "°C");
  }
}

starteUmrechner();
