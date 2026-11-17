# Kapitel 16: Abschlussprojekt – Eine To-do-Liste

Begleitcode zum Buch **„JavaScript für Einsteiger – Programmieren lernen Schritt für Schritt“** (Lumio Studios, 1. Auflage 2026).

In diesem Kapitel baust du eine vollständige To-do-Liste: Aufgaben hinzufügen, abhaken, löschen, dauerhaft speichern und filtern.

## Inhalt

| Ordner / Datei | Abschnitt | Inhalt |
|---|---|---|
| `todo.html`, `todo.css`, `todo.js` | 16.6 | die fertige To-do-Liste |
| `schritte/16-3-hinzufuegen/` | 16.3 | Aufgaben hinzufügen und zählen |
| `schritte/16-4-abhaken-und-loeschen/` | 16.4 | Aufgaben abhaken und löschen |
| `schritte/16-5-speichern/` | 16.5 | Aufgaben dauerhaft im `localStorage` speichern |
| `loesungen/` | Übungen | Lösungen zu den Übungen 16.1 bis 16.5 |

Jeder Ordner in `schritte/` enthält den Stand am Ende des jeweiligen Abschnitts. Kommst du beim Nachbauen nicht weiter, vergleiche deinen Code mit dieser Fassung.

> **Hinweis:** Die HTML-Datei ist in allen Schritten gleich. Die Filter-Buttons sind also von Anfang an zu sehen, funktionieren aber erst ab Abschnitt 16.6.

## Lösungen zu den Übungen

Jede Lösung ist eine vollständige, lauffähige Fassung der To-do-Liste mit der jeweiligen Erweiterung:

- `uebung-16-1/` – freundliche Hinweise bei leerer Ansicht und Gesamtzahl
- `uebung-16-2/` – Button *Erledigte löschen* mit Rückfrage
- `uebung-16-3/` – der gewählte Filter bleibt nach dem Neuladen erhalten
- `uebung-16-4/` – Aufgaben mit *Bearbeiten* ändern
- `uebung-16-5/` – Prioritäten und Filter *Wichtig*

Versuche die Übungen zuerst selbst zu lösen, bevor du in die Lösungen schaust.

## So führst du die To-do-Liste aus

1. Öffne `todo.html` per Doppelklick im Browser.
2. Drücke `F12` und wähle den Reiter *Konsole*, um Meldungen zu sehen.
3. Die gespeicherten Aufgaben findest du im Reiter *Anwendung* (englisch *Application*) unter *Lokaler Speicher*. In Firefox heißt der Reiter *Web-Speicher*.

> **Achtung:** Alle Fassungen ab Abschnitt 16.5 verwenden denselben Schlüssel `todoApp-aufgaben`. Öffnest du sie direkt von der Festplatte (`file://`), teilen sie sich je nach Browser die gespeicherten Aufgaben. Willst du neu anfangen, lösche den Eintrag im Reiter *Anwendung*.

## Voraussetzungen

- ein aktueller Browser (Chrome, Edge oder Firefox)
- ein Editor, zum Beispiel Visual Studio Code

Node.js brauchst du in diesem Kapitel nicht. Die To-do-Liste läuft nur im Browser.

## Über das Buch

© 2026 Lumio Studios – [lumio-studios.de](https://lumio-studios.de)
