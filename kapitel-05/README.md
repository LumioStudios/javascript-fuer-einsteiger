# Kapitel 5: Entscheidungen treffen

Begleitcode zum Buch **„JavaScript für Einsteiger – Programmieren lernen Schritt für Schritt“** (Lumio Studios, 1. Auflage 2026).

## Inhalt

| Datei / Ordner | Abschnitt | Thema |
|---|---|---|
| `5-1-01_temperatur.js` | 5.1 | erstes `if` |
| `5-1-02_kontostand.js` | 5.1 | Block mit mehreren Zeilen |
| `5-1-03_waehlen.js` | 5.1 | `if` und `else` |
| `5-1-04_warenkorb.js` | 5.1 | Rabatt nur ab 20 Euro |
| `5-1-05_kino.js` | 5.1 | Bedingung mit `&&` |
| `5-1-06_vorname.js` | 5.1 | truthy und falsy |
| `5-1-07_ohne-klammern.js` | 5.1 | `if` ohne geschweifte Klammern |
| `5-1-08_block-variable.js` | 5.1 | Variablen im Block (erzeugt einen Fehler) |
| `5-2-01_begruessung.js` | 5.2 | `else if` |
| `5-2-02_falsche-reihenfolge.js` | 5.2 | Reihenfolge – falsch |
| `5-2-03_richtige-reihenfolge.js` | 5.2 | Reihenfolge – richtig |
| `5-2-04_eingabe-pruefen.js` | 5.2 | Eingaben mit `Number.isNaN` prüfen |
| `5-3-01_anmeldung-verschachtelt.js` | 5.3 | verschachtelte Bedingungen |
| `5-3-02_freibad-verschachtelt.js` | 5.3 | unnötige Verschachtelung |
| `5-3-03_freibad-und.js` | 5.3 | dasselbe mit `&&` |
| `5-3-04_anmeldung-flach.js` | 5.3 | Fehlerfälle zuerst aussortieren |
| `5-4-01_status-if-else.js` | 5.4 | Auswahl mit `if` / `else` |
| `5-4-02_status-ternaer.js` | 5.4 | dieselbe Auswahl ternär |
| `5-4-03_dateien.js` | 5.4 | Einzahl oder Mehrzahl |
| `5-4-04_rabatt-ternaer.js` | 5.4 | Rabatt mit ternärem Operator |
| `5-4-05_ternaer-verschachtelt.js` | 5.4 | verschachtelt – schwer lesbar |
| `5-5-01_wochentag.js` | 5.5 | `switch` mit allen Wochentagen |
| `5-5-02_strikter-vergleich.js` | 5.5 | `switch` vergleicht mit `===` |
| `5-5-03_ohne-break.js` | 5.5 | Durchfallen ohne `break` |
| `5-5-04_wochenende.js` | 5.5 | Fälle zusammenfassen |
| `5-6-notenrechner/` | 5.6 | Praxisbeispiel Notenrechner |
| `typische-fehler/` | – | Beispiele aus „Typische Fehler“ |
| `uebungen/` | – | Lösungen zu den Übungen 5.1–5.5 |

## So führst du die Beispiele aus

**Mit Node.js** (alle `.js`-Dateien außer denen mit `prompt`):

1. Öffne den Ordner `kapitel-05` in VS Code.
2. Öffne das Terminal über *Terminal* › *Neues Terminal*.
3. Gib zum Beispiel ein:

```text
node 5-1-01_temperatur.js
```

**Im Browser** (Notenrechner und Übung 5.5):

1. Öffne die `.html`-Datei per Doppelklick im Browser.
2. Klicke im Eingabefenster auf *Abbrechen*.
3. Öffne mit `F12` die Konsole.
4. Lade die Seite mit `F5` neu und gib deine Werte ein.

## Hinweise

- `5-1-08_block-variable.js` und `5-5-02_strikter-vergleich.js` zeigen bewusst Fehler oder Fallen. Die Fehlermeldung beim Ausführen ist gewollt.
- Ändere die Werte in den Beispielen und beobachte, wie sich die Ausgabe verändert. So lernst du am meisten.
