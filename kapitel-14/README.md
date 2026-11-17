# Kapitel 14: Fehler finden und beheben

Begleitcode zum Buch **„JavaScript für Einsteiger – Programmieren lernen Schritt für Schritt“** von Lumio Studios.

> **Achtung:** Viele Dateien in diesem Kapitel enthalten **absichtlich Fehler**. Darum geht es ja: Du sollst sehen, wie Fehlermeldungen aussehen, und lernen, sie zu lesen. Jede dieser Dateien hat einen Kommentar, der den Fehler beschreibt, und meist auch die Lösung.

## Ordner

| Ordner | Inhalt |
|---|---|
| `beispiele/` | alle Beispiele aus dem Kapitel, nach Abschnitten sortiert |
| `uebungen/` | Vorlagen zu den Übungen, mit den Fehlern aus der Aufgabe |
| `loesungen/` | die Lösungen zu den Übungen (siehe auch Anhang A im Buch) |

## So startest du die Beispiele

**Dateien mit `.js` allein** laufen mit Node.js:

```text
node beispiele/14.3-konsole/noten.js
```

**Dateien mit einer passenden `.html`-Datei** brauchen den Browser:

1. Öffne die `.html`-Datei per Doppelklick im Browser.
2. Drücke `F12` und wähle den Reiter *Konsole*.

## Übersicht

### 14.1 Fehlerarten

| Datei | Inhalt | Start |
|---|---|---|
| `syntax.js` | Syntaxfehler: fehlende Klammer | Node.js |
| `laufzeit.js` | Laufzeitfehler: unbekannte Funktion | Node.js |
| `logik.js` | Logikfehler: Punkt vor Strich | Node.js |

### 14.2 Fehlermeldungen lesen

| Datei | Inhalt | Start |
|---|---|---|
| `fehler.html`, `fehler.js` | Tippfehler im Selektor, Fehlermeldung lesen | Browser |
| `kein-function.js` | „is not a function“ bei `toFixed` | Node.js |

### 14.3 Debuggen mit der Konsole

| Datei | Inhalt | Start |
|---|---|---|
| `noten.js` | Notendurchschnitt mit Fehler und `console.log` | Node.js |
| `noten-korrigiert.js` | die korrigierte Fassung | Node.js |
| `konsolen-methoden.js` | `console.table`, `console.warn`, `console.error` | Node.js oder Browser |
| `zeige-text.html`, `zeige-text.js` | eigene Meldungen mit `console.error` | Browser |

### 14.4 Der Debugger im Browser

| Datei | Inhalt | Start |
|---|---|---|
| `debugger.html`, `debugger.js` | Notendurchschnitt zum Ausprobieren von Haltepunkten | Browser |

Der Haltepunkt kommt in Zeile 9 von `debugger.js` (`summe += liste[i];`). Die Kommentare stehen am Ende der Datei, damit die Zeilennummern zum Buch passen.

### 14.5 `try` und `catch`

| Datei | Inhalt | Start |
|---|---|---|
| `try-catch.html`, `try-catch.js` | ein erstes Beispiel mit `try` und `catch` | Browser |
| `throw.js` | Fehler selbst auslösen mit `throw` | Node.js |
| `lese-menge.js` | Praxisbeispiel: Mengen einlesen | Node.js |

### 14.6 Die zehn häufigsten Anfängerfehler

| Datei | Fehler | Start |
|---|---|---|
| `01-tippfehler.js` | Tippfehler und Groß-/Kleinschreibung | Node.js |
| `02-klammer-fehlt.js` | Klammer nicht geschlossen | Node.js |
| `03-zuweisung-statt-vergleich.js` | `=` statt `===` | Node.js |
| `04-rechnen-mit-strings.js` | Rechnen mit Strings | Node.js |
| `05-element-nicht-gefunden.html` / `.js` | Element nicht gefunden | Browser |
| `06-off-by-one.js` | eins zu viel oder zu wenig | Node.js |
| `07-return-vergessen.js` | `return` vergessen | Node.js |
| `08-funktion-aufgerufen.html` / `.js` | Funktion aufgerufen statt übergeben | Browser |
| `09-const-neu-zuweisen.js` | `const` neu zuweisen | Node.js |
| `10-gueltigkeitsbereich.js` | Variable außerhalb ihres Blocks | Node.js |
| `10-gueltigkeitsbereich-korrigiert.js` | die korrigierte Fassung | Node.js |

### Übungen und Lösungen

| Übung | Vorlage | Lösung |
|---|---|---|
| 14.1 Fehlerarten bestimmen | `uebung-14-1.js` | `loesung-14-1.js` |
| 14.2 Fehlermeldungen übersetzen | – | `loesung-14-2.js` |
| 14.3 Detektivarbeit mit `console.log` | `uebung-14-3.js` | `loesung-14-3.js` |
| 14.4 Mit dem Debugger durch eine Schleife | `uebung-14-4.html` / `.js` | `loesung-14-4.html` / `.js` |
| 14.5 Sicherer Umrechner | – | `loesung-14-5.js` |
| 14.5 Zusatzaufgabe mit Formular | – | `loesung-14-5-zusatz.html` / `.js` |

> **Tipp:** Schau dir die Lösungen erst an, wenn du die Übung selbst versucht hast. Gerade bei der Fehlersuche lernst du am meisten, wenn du den Fehler selbst findest.

## Hinweis zu den Fehlermeldungen

Die Fehlermeldungen im Buch stammen aus Chrome und Node.js. Firefox und Safari formulieren manche Meldungen etwas anders. Die Fehlerart, etwa `TypeError` oder `ReferenceError`, ist aber überall dieselbe.

---

© 2026 Lumio Studios · [lumio-studios.de](https://lumio-studios.de)
