# MoneyMoney-meets-AMS (in progress)

MoneyMoney ist CSV Export für das Allgemeine Meldeportal Statistik (AMS) der Bundesbank wo erst Daten temp. zur Vorauswahl in einer HTML-Datei liegen.

**MoneyMoney-meets-AMS** ist eine Erweiterung (Plugin, Extension) für das Online-Banking-Programm _[MoneyMoney](https://moneymoney-app.com)_ (macOS). Mit **MoneyMoney-meets-AMS** können Umsätze von einem oder mehreren in _MoneyMoney_ geführten Konten direkt in das Allgemeine Meldeportal Statistik (AMS) der Bundesbank importiert werden.

Diese Implementierung bezieht sich nur auf die **Anlage Z 4** zur AWV „Zahlungen im Außenwirtschaftsverkehr“
*   Verwendung: Allgemeiner Meldevordruck für eingehende und ausgehende Zahlungen für Dienstleistungen, Transithandel, Warenverkehr und Kapitalverkehr
*   Meldefreigrenze: 12.500 €
*   Meldekreis: alle Meldepfichtigen
*   Abgabefrist: 7. Kalendertag nach Ende des Berichtsmonats

Quelle: [Erläuterungen zum Leistungsverzeichnis für die Zahlungsbilanz](https://www.bundesbank.de/Redaktion/DE/Downloads/Veroeffentlichungen/Statistische_Sonderveroeffentlichungen/Statso_7/statso_7_2013.pdf.pdf?__blob=publicationFile)

Quelle der Kennzahlen: [Leistungsverzeichnis
der Deutschen Bundesbank für die Zahlungsbilanz](https://extranet.bundesbank.de/ams/amsa/WebHelp/de/LinkedDocuments/leistungsverzeichnis.pdf)

## Installation

Klonen des github-Projekts in ein `$work directory`

Starte _MoneyMoney_ und wähle aus dem Menü `Hilfe` den Eintrag `Zeige Datenbank im Finder`. Im Finder öffnet sich dann der _MoneyMoney_-Ordner, der die Datenbank, die Kontoauszüge und die Erweiterungen anzeigen.

Kopiere die Datei `AMS.lua` (aus dem geklonten Projekt) in den Ordner `Extensions`. Auf dem Terminal unter `~/Library/Containers/com.moneymoney-app.retail/Data/Library/Application Support/MoneyMoney/Extensions` zufinden.

## MoneyMoney-meets-AMS starten

Wenn nun in _MoneyMoney_ Umsätze ausgewählt werden (in der Regel immer ein Monat von allen Konten), kann man im Menü `Konto` den Eintrag `Umsätze exportieren …` auswählen. In der Folge erscheint ein Dialog zur Bestimmung einer Exportdatei. In dem Auswahlmenü unten in diesem Dialog kann man nun den Punkt `AMS (.html)` auswählen. Damit wird das Plugin für den Export ausgewählt.

**MoneyMoney-meets-AMS** exportiet anschließend alle Transaktionen in das Ausland gingen oder daher kamen und erstellt daraus eine HTML-Datei, diese muss im `$work directory` abgespeichert werden.

## Transaktionen kategorisieren und CSV Datei erzeugen



## Import im AMS

TODO
