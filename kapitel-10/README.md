# Kapitel 10: Mit Texten und Zahlen arbeiten

Begleitcode zum Buch **„JavaScript für Einsteiger – Programmieren lernen Schritt für Schritt“** (Lumio Studios, 2026).

In diesem Kapitel geht es um Template Literals, String-Methoden, das Formatieren von Zahlen, das `Math`-Objekt, Zufallszahlen und Datum und Uhrzeit mit `Date`. Das Praxisbeispiel ist ein Würfelspiel gegen den Computer.

## Inhalt

| Ordner | Inhalt |
|---|---|
| `beispiele/` | alle Codebeispiele aus dem Kapitel, je Beispiel eine Datei |
| `wuerfelspiel/` | das Praxisbeispiel aus Abschnitt 10.7 |
| `loesungen/` | Lösungen zu den Übungen 10.1 bis 10.5 |

## Beispiele ausführen

Die Dateien in `beispiele/` und `loesungen/` laufen mit Node.js:

1. Öffne ein Terminal im Ordner `kapitel-10`.
2. Gib zum Beispiel `node beispiele/10-1-01_template-literals.js` ein.
3. Vergleiche die Ausgabe mit dem Kommentar am Ende der Datei.

Du kannst den Code auch in die Browser-Konsole kopieren (`F12`, Reiter *Konsole*). Arrays und Objekte sehen dort etwas anders aus als in Node.js. Am Inhalt ändert das nichts.

Ein paar Hinweise:

- Bei Beispielen mit **Zufall** oder der **aktuellen Uhrzeit** steht im Kommentar „Ausgabe (Beispiel)“. Deine Ausgabe sieht dort anders aus.
- Die **Datumsbeispiele** zeigen deutsche Zeit. In einer anderen Zeitzone können die Uhrzeiten abweichen. Unter Linux und macOS erzwingst du deutsche Zeit mit `TZ=Europe/Berlin node datei.js`.
- Die Dateien `fehler-…` gehören zum Abschnitt *Typische Fehler*. Sie sind **absichtlich fehlerhaft** und zeigen den Fehler, nicht die Lösung.

## Würfelspiel starten

Das Würfelspiel verwendet `prompt` und `confirm` und läuft deshalb nur im Browser:

1. Öffne `wuerfelspiel/wuerfelspiel.html` im Browser.
2. Öffne mit `F12` die Konsole.
3. Gib deinen Namen ein und bestätige jede Runde mit *OK*.

Die Lösung zu Übung 10.5 startest du genauso mit `loesungen/uebung-10-5_wuerfelspiel.html`.

## Dateien

### beispiele/

| Datei | Abschnitt |
|---|---|
| `10-1-01_template-literals.js` | Template Literals |
| `10-1-02_ausdruecke-in-den-platzhaltern.js` | Ausdrücke in den Platzhaltern |
| `10-1-03_ausdruecke-in-den-platzhaltern.js` | Ausdrücke in den Platzhaltern |
| `10-1-04_mehrzeilige-texte.js` | Mehrzeilige Texte |
| `10-2-01_ein-text-ist-eine-reihe-von-zeichen.js` | Ein Text ist eine Reihe von Zeichen |
| `10-2-02_strings-lassen-sich-nicht-veraendern.js` | Strings lassen sich nicht verändern |
| `10-2-03_gross-und-klein-touppercase-und-tolowercase.js` | Groß und klein: toUpperCase und toLowerCase |
| `10-2-04_gross-und-klein-touppercase-und-tolowercase.js` | Groß und klein: toUpperCase und toLowerCase |
| `10-2-05_leerzeichen-entfernen-trim.js` | Leerzeichen entfernen: trim |
| `10-2-06_suchen-in-texten.js` | Suchen in Texten |
| `10-2-07_ausschneiden-slice.js` | Ausschneiden: slice |
| `10-2-08_ausschneiden-slice.js` | Ausschneiden: slice |
| `10-2-09_ausschneiden-slice.js` | Ausschneiden: slice |
| `10-2-10_zerlegen-und-zusammensetzen-split-und-join.js` | Zerlegen und zusammensetzen: split und join |
| `10-2-11_zerlegen-und-zusammensetzen-split-und-join.js` | Zerlegen und zusammensetzen: split und join |
| `10-2-12_zerlegen-und-zusammensetzen-split-und-join.js` | Zerlegen und zusammensetzen: split und join |
| `10-2-13_zerlegen-und-zusammensetzen-split-und-join.js` | Zerlegen und zusammensetzen: split und join |
| `10-2-14_ersetzen-replace-und-replaceall.js` | Ersetzen: replace und replaceAll |
| `10-2-15_ersetzen-replace-und-replaceall.js` | Ersetzen: replace und replaceAll |
| `10-2-16_methoden-verketten.js` | Methoden verketten |
| `10-3-01_zahlen-formatieren.js` | Zahlen formatieren |
| `10-3-02_feste-nachkommastellen-tofixed.js` | Feste Nachkommastellen: toFixed |
| `10-3-03_feste-nachkommastellen-tofixed.js` | Feste Nachkommastellen: toFixed |
| `10-3-04_das-deutsche-format-tolocalestring.js` | Das deutsche Format: toLocaleString |
| `10-3-05_optionen-als-objekt.js` | Optionen als Objekt |
| `10-3-06_optionen-als-objekt.js` | Optionen als Objekt |
| `10-3-07_optionen-als-objekt.js` | Optionen als Objekt |
| `10-3-08_optionen-als-objekt.js` | Optionen als Objekt |
| `10-3-09_zahlen-aus-texten-lesen-parseint-und.js` | Zahlen aus Texten lesen: parseInt und parseFloat |
| `10-4-01_das-math-objekt.js` | Das Math-Objekt |
| `10-4-02_runden-auf-ganze-zahlen.js` | Runden auf ganze Zahlen |
| `10-4-03_runden-auf-ganze-zahlen.js` | Runden auf ganze Zahlen |
| `10-4-04_auf-nachkommastellen-runden.js` | Auf Nachkommastellen runden |
| `10-4-05_groesster-und-kleinster-wert-math-max-und.js` | Größter und kleinster Wert: Math.max und Math.min |
| `10-4-06_groesster-und-kleinster-wert-math-max-und.js` | Größter und kleinster Wert: Math.max und Math.min |
| `10-4-07_weitere-nuetzliche-methoden.js` | Weitere nützliche Methoden |
| `10-4-08_weitere-nuetzliche-methoden.js` | Weitere nützliche Methoden |
| `10-5-01_zufallszahlen-erzeugen.js` | Zufallszahlen erzeugen |
| `10-5-02_vom-zufall-zum-wuerfel.js` | Vom Zufall zum Würfel |
| `10-5-03_eine-funktion-fuer-jeden-bereich.js` | Eine Funktion für jeden Bereich |
| `10-5-04_ist-der-wuerfel-fair.js` | Ist der Würfel fair? |
| `10-5-05_zufaellig-auswaehlen.js` | Zufällig auswählen |
| `10-5-06_zufaellig-auswaehlen.js` | Zufällig auswählen |
| `10-6-01_das-aktuelle-datum.js` | Das aktuelle Datum |
| `10-6-02_ein-bestimmtes-datum-anlegen.js` | Ein bestimmtes Datum anlegen |
| `10-6-03_ein-bestimmtes-datum-anlegen.js` | Ein bestimmtes Datum anlegen |
| `10-6-04_einzelne-teile-auslesen.js` | Einzelne Teile auslesen |
| `10-6-05_einzelne-teile-auslesen.js` | Einzelne Teile auslesen |
| `10-6-06_datum-und-uhrzeit-formatieren.js` | Datum und Uhrzeit formatieren |
| `10-6-07_datum-und-uhrzeit-formatieren.js` | Datum und Uhrzeit formatieren |
| `10-6-08_ein-datum-veraendern.js` | Ein Datum verändern |
| `10-6-09_mit-daten-rechnen.js` | Mit Daten rechnen |
| `10-6-10_mit-daten-rechnen.js` | Mit Daten rechnen |
| `10-7-01_schritt-1-zwei-wuerfel-werfen.js` | Schritt 1: Zwei Würfel werfen |
| `10-7-02_schritt-2-einen-wurf-beschreiben.js` | Schritt 2: Einen Wurf beschreiben |
| `10-7-03_schritt-3-den-namen-aufraeumen.js` | Schritt 3: Den Namen aufräumen |
| `fehler-1_platzhalter-in-normalen-anfuehrungszeichen.js` | Platzhalter in normalen Anführungszeichen |
| `fehler-2_das-ergebnis-einer-string-methode-nicht.js` | Das Ergebnis einer String-Methode nicht speichern |
| `fehler-3_mit-dem-ergebnis-von-tofixed-weiterrechnen.js` | Mit dem Ergebnis von `toFixed` weiterrechnen |
| `fehler-4_den-monat-bei-date-falsch-angeben.js` | Den Monat bei `Date` falsch angeben |

### wuerfelspiel/

| Datei | Inhalt |
|---|---|
| `wuerfelspiel.html` | HTML-Seite, die das Spiel lädt |
| `wuerfelspiel.js` | das komplette Spiel aus Abschnitt 10.7 |

### loesungen/

| Datei | Übung |
|---|---|
| `uebung-10-1_visitenkarte.js` | Übung 10.1 – Visitenkarte |
| `uebung-10-2-1_zaehle-woerter.js` | Übung 10.2 – Teil 1: Wörter zählen |
| `uebung-10-2-2_initialen.js` | Übung 10.2 – Teil 2: Initialen |
| `uebung-10-2-3_zensiere.js` | Übung 10.2 – Teil 3: Zensieren |
| `uebung-10-2-4_sterne-mit-join.js` | Übung 10.2 – Teil 3: Variante mit join |
| `uebung-10-3_preisrechner.js` | Übung 10.3 – Preisrechner |
| `uebung-10-4_lottozahlen.js` | Übung 10.4 – Lottozahlen |
| `uebung-10-5_wuerfelspiel.html` | HTML-Seite für Übung 10.5 |
| `uebung-10-5_wuerfelspiel.js` | Übung 10.5 – Würfelspiel erweitern |
