# Kapitel 15: Daten speichern

Begleitcode zum Buch **„JavaScript für Einsteiger – Programmieren lernen Schritt für Schritt“** (Lumio Studios, 1. Auflage 2026).

In diesem Kapitel lernst du JSON kennen und speicherst Daten mit `localStorage` dauerhaft im Browser.

## Inhalt

| Ordner | Abschnitt | Inhalt |
|---|---|---|
| `15-2-json/` | 15.2 | `JSON.stringify` und `JSON.parse` |
| `15-3-localstorage/` | 15.3 | Erste Schritte mit `localStorage` |
| `15-4-laden-aendern-loeschen/` | 15.4 | Besuchszähler, Lade- und Speicherfunktionen |
| `15-5-grenzen/` | 15.5 | Volle Speicher und `sessionStorage` |
| `15-6-notizen/` | 15.6 | Praxisbeispiel: Notizen-App |
| `loesungen/` | Übungen | Lösungen zu den Übungen 15.1 bis 15.5 |

## Dateien im Einzelnen

**15-2-json** – Diese Beispiele laufen mit Node.js:

- `01-stringify.js` – Objekte und Arrays in JSON-Text umwandeln
- `02-eingerueckt.js` – JSON eingerückt ausgeben
- `03-parse.js` – JSON-Text in ein Objekt zurückwandeln
- `04-hin-und-zurueck.js` – `stringify` und `parse` als Gegenstücke
- `05-was-verloren-geht.js` – `undefined`, Methoden, `NaN` und `Date` in JSON
- `06-ungueltiges-json.js` – ungültiges JSON mit `try` und `catch` abfangen

**15-3-localstorage** – `speicher.html` führt alle Beispiele aus Abschnitt 15.3 aus. Die Ergebnisse stehen in der Konsole.

**15-4-laden-aendern-loeschen**

- `besuche.html` – ein Besuchszähler, der bei jedem Neuladen weiterzählt
- `daten.html` – stellt `ladeListe`, `speichereListe`, `ladeEinstellungen`, `speichereEinstellungen` und `zeigeAlleEintraege` in der Konsole bereit. Damit kannst du die Befehle aus dem Buch direkt ausprobieren.

**15-5-grenzen**

- `speicher-voll.html` – versucht, zu viele Daten zu speichern, und fängt den `QuotaExceededError` ab
- `session.html` – zählt Aufrufe mit `sessionStorage`, nur für den aktuellen Tab

**15-6-notizen** – die vollständige Notizen-App aus Abschnitt 15.6

**loesungen**

- `uebung-15-1/` – gültiges und ungültiges JSON prüfen (Node.js)
- `uebung-15-2/` – ein Buch-Objekt hin und zurück wandeln (Node.js)
- `uebung-15-3/` – Begrüßung mit Gedächtnis
- `uebung-15-4/` – Klickzähler mit Bestwert
- `uebung-15-5/` – erweiterte Notizen-App mit wichtigen Notizen

Versuche die Übungen zuerst selbst zu lösen, bevor du in die Lösungen schaust.

## So führst du die Beispiele aus

**Mit Node.js** (Ordner `15-2-json` und Lösungen 15.1 und 15.2):

```text
cd kapitel-15/15-2-json
node 01-stringify.js
```

**Im Browser** (alle `.html`-Dateien):

1. Öffne die `.html`-Datei per Doppelklick im Browser.
2. Drücke `F12` und wähle den Reiter *Konsole*.
3. Den Inhalt des Speichers siehst du im Reiter *Anwendung* (englisch *Application*) unter *Lokaler Speicher*. In Firefox heißt der Reiter *Web-Speicher*.

> **Hinweis:** `localStorage` gibt es nur im Browser. Die Beispiele ab Abschnitt 15.3 laufen deshalb nicht mit Node.js.

> **Achtung:** Seiten, die du direkt von der Festplatte öffnest (`file://`), teilen sich je nach Browser einen gemeinsamen Speicher. Alle Beispiele verwenden deshalb eigene Schlüssel. Willst du den Speicher zurücksetzen, lösche einzelne Einträge im Reiter *Anwendung* oder gib in der Konsole `localStorage.clear()` ein. Das löscht dann aber alle gespeicherten Einträge.

## Voraussetzungen

- ein aktueller Browser (Chrome, Edge oder Firefox)
- Node.js für die Beispiele in `15-2-json`
- ein Editor, zum Beispiel Visual Studio Code

## Über das Buch

© 2026 Lumio Studios – [lumio-studios.de](https://lumio-studios.de)
