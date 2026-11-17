# Kapitel 11: Das DOM – Webseiten verändern

Begleitmaterial zum Buch **„JavaScript für Einsteiger – Programmieren lernen Schritt für Schritt“** von Lumio Studios.

In diesem Ordner findest du alle Codebeispiele aus Kapitel 11, das Praxisbeispiel „dynamische Einkaufsliste“, die Beispiele aus „Typische Fehler“ und die Lösungen zu den Übungen.

> Alle Beispiele in diesem Kapitel laufen **nur im Browser**. Node.js kennt kein DOM.

## Inhalt

| Ordner / Datei | Inhalt |
|---|---|
| `cafe.html` | Die Beispielseite für die Abschnitte 11.1 bis 11.6 (mit dem `style`-Bereich aus 11.4) |
| `cafe.js` | Leere Datei für deine eigenen Versuche |
| `beispiele/` | Jedes Codebeispiel aus 11.1 bis 11.6 als eigene Datei |
| `einkaufsliste/` | Das Praxisbeispiel aus Abschnitt 11.7 |
| `typische-fehler/` | Die vier Fehler aus dem Abschnitt „Typische Fehler“ zum Nachvollziehen |
| `loesungen/` | Die Lösungen zu den Übungen 11.1 bis 11.5 (siehe auch Anhang A im Buch) |

## Die Beispiele ausprobieren

Jedes Beispiel in `beispiele/` gehört zur Seite `cafe.html`. Die Dateinamen beginnen mit der Abschnittsnummer, zum Beispiel `11-2-a_querySelector.js` für das erste Beispiel aus Abschnitt 11.2.

**Weg 1: über die Konsole**

1. Öffne `cafe.html` im Browser.
2. Drücke `F12` und wähle den Reiter *Konsole*.
3. Öffne die Beispieldatei im Editor, kopiere den Code und füge ihn in die Konsole ein.
4. Drücke `Enter`.

**Weg 2: über das Skript der Seite**

1. Öffne `cafe.html` im Editor.
2. Ändere die Zeile `<script src="cafe.js" defer></script>` so, dass sie auf das gewünschte Beispiel zeigt, zum Beispiel:
   `<script src="beispiele/11-2-a_querySelector.js" defer></script>`
3. Speichere die Datei und lade die Seite im Browser neu.
4. Sieh dir die Seite und die Konsole an.

Jedes Beispiel geht von der unveränderten Seite aus. Lade die Seite deshalb vor jedem neuen Beispiel mit `F5` neu.

## Die Einkaufsliste

1. Öffne `einkaufsliste/liste.html` im Browser.
2. Drücke `F12` und wähle den Reiter *Konsole*.
3. Tippe die Befehle aus `einkaufsliste/befehle-zum-ausprobieren.js` nacheinander ein, zum Beispiel `hinzufuegen("Kaffee", 1);`.

Verfügbare Befehle: `hinzufuegen(name, menge)`, `abhaken(nr)`, `entfernen(nr)`, `aufraeumen()`.

## Die typischen Fehler

Diese Dateien enthalten **absichtlich fehlerhaften Code**. So kannst du die Fehlermeldungen aus dem Buch selbst sehen.

| Datei | So probierst du es aus |
|---|---|
| `fehler-1_ohne-defer.html` | Direkt im Browser öffnen und in die Konsole sehen |
| `fehler-2_selektor-ohne-raute.js` | Mit `cafe.html` ausführen (Weg 1 oder 2) |
| `fehler-3_nodelist-als-element.js` | Mit `cafe.html` ausführen (Weg 1 oder 2) |
| `fehler-4_textContent-statt-innerHTML.js` | Mit `cafe.html` ausführen (Weg 1 oder 2) |

Bei Weg 2 lautet der Pfad dann zum Beispiel `typische-fehler/fehler-2_selektor-ohne-raute.js`.

## Die Lösungen

Versuche die Übungen zuerst selbst. Jeder Ordner in `loesungen/` enthält eine HTML-Datei und das passende Skript. Öffne die HTML-Datei im Browser, um das Ergebnis zu sehen. Die Erklärungen zu den Lösungen findest du in Anhang A des Buchs.

| Ordner | Übung |
|---|---|
| `uebung-11-1/` | Steckbrief |
| `uebung-11-2/` | Gerade Zahlen markieren |
| `uebung-11-3/` | Preistabelle |
| `uebung-11-4/` | Externe Links kennzeichnen |
| `uebung-11-5/` | Einkaufsliste erweitern |

---

Lumio Studios · lumio-studios.de
