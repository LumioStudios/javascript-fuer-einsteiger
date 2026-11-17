# Kapitel 12: Events – auf Benutzer reagieren

Begleitcode zum Buch **„JavaScript für Einsteiger – Programmieren lernen Schritt für Schritt“** von Lumio Studios.

## So probierst du die Beispiele aus

1. Lade den Ordner `kapitel-12` herunter oder klone das Repository.
2. Öffne eine der `.html`-Dateien per Doppelklick im Browser.
3. Drücke `F12` und wähle den Reiter *Konsole*, um die Ausgaben zu sehen.
4. Klicke einmal auf eine freie Stelle der Seite, bevor du Tasten ausprobierst. Solange die Konsole aktiv ist, kommen Tastendrücke nicht bei der Seite an.

Zu jedem Beispiel gehören eine `.html`- und eine `.js`-Datei mit demselben Namen. Alle Beispiele aus den Abschnitten 12.2 bis 12.6 verwenden dieselbe Beispielseite aus Abschnitt 12.1.

## Inhalt

### Beispiele (`beispiele/`)

| Abschnitt | Datei | Thema |
|---|---|---|
| 12.2 | `12-2-1_erster-listener` | Der erste Event-Listener |
| 12.2 | `12-2-2_klickzaehler` | Arrow Function als Event-Listener |
| 12.2 | `12-2-3_mehrere-listener` | Mehrere Listener für ein Element |
| 12.2 | `12-2-4_listener-entfernen` | Event-Listener wieder entfernen |
| 12.3 | `12-3-1_umschalten` | Ein Button, der umschaltet |
| 12.3 | `12-3-2_listenpunkte` | Klicks auf Listenpunkte |
| 12.3 | `12-3-3_doppelklick` | Doppelklick |
| 12.3 | `12-3-4_maus` | `mouseenter` und `mouseleave` |
| 12.3 | `12-3-5_button-sperren` | Buttons sperren mit `disabled` |
| 12.4 | `12-4-1_taste-anzeigen` | Gedrückte Taste anzeigen |
| 12.4 | `12-4-2_bestimmte-tasten` | Auf bestimmte Tasten reagieren |
| 12.4 | `12-4-3_pfeiltasten` | Markierung mit Pfeiltasten |
| 12.4 | `12-4-4_gross-klein` | Groß- und Kleinschreibung |
| 12.4 | `12-4-5_gedrueckt-halten` | Gedrückt halten mit `event.repeat` |
| 12.4 | `12-4-6_tastenkombination` | Tastenkombinationen |
| 12.5 | `12-5-1_event-objekt` | Was im Event-Objekt steht |
| 12.5 | `12-5-2_ein-listener` | Ein Listener für mehrere Elemente |
| 12.5 | `12-5-3_klickposition` | Wohin geklickt wurde |
| 12.5 | `12-5-4_bubbling` | Events steigen auf |
| 12.5 | `12-5-5_target-currenttarget` | `target` und `currentTarget` |
| 12.5 | `12-5-6_delegation` | Event-Delegation |
| 12.6 | `12-6-1_link-aufhalten` | Einen Link aufhalten |
| 12.6 | `12-6-2_kontextmenue` | Das Kontextmenü ersetzen |
| 12.6 | `12-6-3_tasten-abfangen` | Tasten abfangen |
| 12.6 | `12-6-4_strg-s` | `Strg` + `S` abfangen |

### Praxisbeispiel (`praxis-zaehler/`)

Der Zähler aus Abschnitt 12.7: `zaehler.html` und `zaehler.js`.

- Buttons „−1“, „+1“ und „Auf 0“
- Bereich von 0 bis 20, am Rand wird der passende Button gesperrt
- `Shift` gedrückt halten: Zählen in Fünferschritten
- Pfeiltasten zählen, `Esc` setzt zurück

### Lösungen (`loesungen/`)

Die Lösungen zu den Übungen aus Anhang A:

| Übung | Ordner |
|---|---|
| 12.1 Lichtschalter | `uebung-12-1_lichtschalter` |
| 12.2 Tastenspion | `uebung-12-2_tastenspion` |
| 12.3 Farbwähler | `uebung-12-3_farbwaehler` |
| 12.4 Klickfelder | `uebung-12-4_klickfelder` |
| 12.5 Einkaufsliste mit Maus | `uebung-12-5_einkaufsliste` |

Versuche die Übungen zuerst selbst, bevor du in die Lösungen schaust.

## Hinweis

Alle Beispiele laufen im Browser. Node.js kennt kein DOM und keine Events der Webseite, deshalb funktionieren sie dort nicht.
