# Kapitel 6: Schleifen

Begleitcode zu Kapitel 6 aus **„JavaScript für Einsteiger – Programmieren lernen Schritt für Schritt“** (Lumio Studios, 1. Auflage 2026).

## Inhalt

| Ordner | Was drin ist |
|---|---|
| `beispiele/` | alle Codebeispiele aus dem Kapitel, nach Abschnitten nummeriert |
| `praxis/` | das Praxisbeispiel Einmaleins-Tabelle (Abschnitt 6.6) |
| `loesungen/` | die Lösungen zu den Übungen 6.1 bis 6.5 |

Die Dateinamen beginnen mit der Abschnittsnummer. `06-03-sparschwein.js` gehört also zu Abschnitt 6.3. Die Dateien `fehler-…` zeigen die typischen Fehler vom Ende des Kapitels.

## Beispiele ausführen

**Mit Node.js** (die meisten Beispiele):

1. Öffne ein Terminal im Ordner `beispiele`.
2. Tippe zum Beispiel `node 06-02-summe.js` und drücke Enter.

**Im Browser** (alle Beispiele mit `prompt` oder `alert`):

1. Öffne die passende HTML-Datei im Browser, zum Beispiel `praxis/einmaleins.html`.
2. Drücke `F12` und wähle den Reiter *Konsole*.
3. Lade die Seite mit `F5` neu und folge den Eingabefenstern.

Diese Dateien laufen nur im Browser:

| Skript | HTML-Datei |
|---|---|
| `beispiele/06-03-ja-nein.js` | `beispiele/ja-nein.html` |
| `beispiele/06-04-zahlenraten.js` | `beispiele/zahlenraten.html` |
| `praxis/einmaleins.js` | `praxis/einmaleins.html` |
| `loesungen/loesung-6-4.js` | `loesungen/loesung-6-4.html` |

## Hinweise

- `06-02-zaehlvariable.js` endet absichtlich mit einem `ReferenceError`. Er zeigt, dass es die Zählvariable nach der Schleife nicht mehr gibt.
- In `06-05-endlosschleifen.js` sind die fehlerhaften Schleifen auskommentiert. Entfernst du die Kommentarzeichen, läuft die Schleife endlos. In Node.js beendest du sie mit `Strg + C`, im Browser schließt du den Tab.
- Versuche die Übungen zuerst selbst, bevor du in den Ordner `loesungen` schaust.
