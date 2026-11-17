# Kapitel 9: Objekte

Begleitcode zum Buch **„JavaScript für Einsteiger – Programmieren lernen Schritt für Schritt“** von Lumio Studios.

In diesem Kapitel lernst du, wie du mehrere Angaben zu einer Sache in einem Objekt bündelst. Du liest und änderst Eigenschaften, schreibst Methoden mit `this`, durchläufst Objekte mit `for…in` und `Object.keys` und arbeitest mit Arrays von Objekten. Zum Abschluss baust du ein kleines Adressbuch.

## Inhalt

| Ordner | Was du darin findest |
|---|---|
| `beispiele/` | alle Codebeispiele aus dem Kapitel, ein Beispiel pro Datei |
| `typische-fehler/` | die Fehlerbeispiele aus dem Abschnitt „Typische Fehler“ |
| `adressbuch/` | das Praxisbeispiel aus Abschnitt 9.7 |
| `loesungen/` | Lösungen zu den Übungen 9.1 bis 9.5 |

Die Dateien in `beispiele/` sind nach Abschnitten nummeriert. `09-03-02_schluessel-in-variable.js` ist zum Beispiel das zweite Beispiel aus Abschnitt 9.3.

Am Ende jeder Datei steht als Kommentar die Ausgabe, die du erwarten kannst. So kannst du dein Ergebnis direkt vergleichen.

## Beispiele ausführen

Die Beispiele laufen mit Node.js, ab Version 18:

1. Öffne ein Terminal im Ordner `beispiele`.
2. Gib `node` und den Dateinamen ein, zum Beispiel:

```text
node 09-04-03_this.js
```

Du kannst den Code auch in die Browser-Konsole kopieren. Die Darstellung von Objekten sieht dort etwas anders aus. Im Buch zeigen wir die Ausgabe von Node.js.

> **Achtung:** Wenn du mehrere Beispiele nacheinander in dieselbe Browser-Konsole kopierst, meldet der Browser einen Fehler. Viele Beispiele legen eine Konstante mit demselben Namen an, etwa `person`. Lade die Seite vor jedem Beispiel neu.

Die Dateien in `typische-fehler/` erzeugen absichtlich einen Fehler. Das ist so gewollt.

## Das Adressbuch starten

Das Adressbuch arbeitet mit `prompt` und läuft deshalb im Browser, nicht mit Node.js:

1. Öffne `adressbuch/adressbuch.html` im Browser.
2. Öffne mit `F12` die Konsole, damit du die Ausgaben siehst.
3. Wähle im Eingabefenster einen Menüpunkt und folge den Fragen.

Die erweiterte Fassung aus Übung 9.5 startest du genauso über `loesungen/adressbuch-erweitert/adressbuch.html`.

## Lösungen

Versuch die Übungen zuerst selbst. Die Lösungen mit ausführlichen Erklärungen findest du auch im Buch in Anhang A.

---

© 2026 Lumio Studios
