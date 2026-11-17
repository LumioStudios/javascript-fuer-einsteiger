# Kapitel 8: Arrays

Begleitcode zu Kapitel 8 aus dem Buch **„JavaScript für Einsteiger – Programmieren lernen Schritt für Schritt“** (Lumio Studios, 1. Auflage 2026).

## Inhalt

| Ordner | Inhalt |
|---|---|
| `beispiele/` | alle Codebeispiele aus dem Kapitel, ein Beispiel pro Datei |
| `einkaufsliste/` | das Praxisbeispiel aus Abschnitt 8.8 |
| `loesungen/` | Lösungen zu den Übungen 8.1 bis 8.5 |

## So führst du die Beispiele aus

Die Dateien in `beispiele/` und die Lösungen zu den Übungen 8.1 bis 8.4 laufen mit Node.js:

1. Öffne den Ordner `kapitel-08` in VS Code.
2. Öffne über *Terminal › Neues Terminal* das Terminal.
3. Wechsle in den Ordner mit den Beispielen: `cd beispiele`
4. Starte ein Beispiel, zum Beispiel: `node 08-01-b_erstes-array.js`

Du kannst den Code auch kopieren und in die Browser-Konsole einfügen. Lade die Seite zwischen zwei Beispielen neu (`F5`), sonst meldet die Konsole, dass eine Variable schon existiert.

Die **Einkaufsliste** und die Lösung zu **Übung 8.5** benutzen `prompt` und laufen deshalb nur im Browser:

1. Öffne `einkaufsliste/einkaufsliste.html` im Browser (oder mit *Live Server* in VS Code).
2. Öffne mit `F12` den Reiter *Konsole*, damit du die Meldungen siehst.

## Beispiele

Die Dateinamen beginnen mit der Abschnittsnummer. Der Buchstabe gibt die Reihenfolge innerhalb des Abschnitts an.


### 8.1 Was ist ein Array?

- `08-01-a_einzelne-variablen.js`
- `08-01-b_erstes-array.js`
- `08-01-c_verschiedene-arrays.js`
- `08-01-d_mehrzeiliges-array.js`
- `08-01-e_typeof-und-isarray.js`

### 8.2 Elemente lesen und ändern

- `08-02-a_elemente-lesen.js`
- `08-02-b_index-ohne-element.js`
- `08-02-c_index-aus-variable.js`
- `08-02-d_platz-umrechnen.js`
- `08-02-e_element-aendern.js`
- `08-02-f_const-array-fehler.js` *(erzeugt absichtlich einen Fehler)*

### 8.3 Elemente hinzufügen und entfernen

- `08-03-a_push.js`
- `08-03-b_pop.js`
- `08-03-c_unshift-und-shift.js`
- `08-03-d_warteschlange.js`
- `08-03-e_leeres-array-entfernen.js`
- `08-03-f_array-in-funktion.js`

### 8.4 Die Länge eines Arrays

- `08-04-a_length.js`
- `08-04-b_letztes-element.js`
- `08-04-c_leer-pruefen.js`
- `08-04-d_luecken.js`

### 8.5 Arrays durchlaufen mit `for` und `for…of`

- `08-05-a_for-schleife.js`
- `08-05-b_nummeriert.js`
- `08-05-c_for-of.js`
- `08-05-d_summe-und-durchschnitt.js`
- `08-05-e_neues-array-fuellen.js`
- `08-05-f_array-zurueckgeben.js`

### 8.6 Suchen: `includes`, `indexOf`, `find`

- `08-06-a_includes.js`
- `08-06-b_includes-doppelte-vermeiden.js`
- `08-06-c_includes-streng.js`
- `08-06-d_indexof.js`
- `08-06-e_indexof-ersetzen.js`
- `08-06-f_find.js`
- `08-06-g_find-mit-funktion.js`
- `08-06-h_find-ohne-treffer.js`

### 8.7 `forEach` – ein erster Blick

- `08-07-a_foreach.js`
- `08-07-b_foreach-mit-index.js`
- `08-07-c_foreach-mit-funktion.js`

### 8.8 Praxisbeispiel: Einkaufsliste (Einzelschritte)

- `08-08-a_schritt1-liste-anzeigen.js`
- `08-08-b_schritt2-hinzufuegen.js`
- `08-08-c_schritt3-letzten-entfernen.js`
- `08-08-d_schritt4-suchen.js`

### Typische Fehler

- `08-fehler-a_1-schleife-zu-oft.js`
- `08-fehler-b_2-length-mit-klammern.js` *(erzeugt absichtlich einen Fehler)*
- `08-fehler-c_3-indexof-im-if.js`
- `08-fehler-d_4-array-mit-plus.js`

Die Funktion `frageArtikel` aus Schritt 5 ist nur im vollständigen Programm in `einkaufsliste/` enthalten, weil sie `prompt` benötigt.

## Lösungen

| Datei | Übung |
|---|---|
| `loesungen/uebung-8-1_lieblingsfilme.js` | 8.1 Lieblingsfilme |
| `loesungen/uebung-8-2_notenstatistik.js` | 8.2 Notenstatistik |
| `loesungen/uebung-8-3_gaesteliste.js` | 8.3 Gästeliste |
| `loesungen/uebung-8-4_kontobewegungen.js` | 8.4 Kontobewegungen |
| `loesungen/uebung-8-5_einkaufsliste/` | 8.5 Einkaufsliste erweitern (Browser) |

Versuche die Übungen zuerst selbst. Am meisten lernst du, wenn du erst danach in die Lösung schaust.

---

© 2026 Lumio Studios · [lumio-studios.de](https://lumio-studios.de)
