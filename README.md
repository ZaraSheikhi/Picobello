# Picobello Bremen

Statische Website für den Picobello Bremen Gebäudeservice.

## Seiten

- Startseite
- Leistungen
- Warum wir
- Ablauf
- Bewertungen
- Kontakt
- Impressum und Datenschutz

## Veröffentlichung

Alle Dateien aus diesem Ordner in das Webroot der Domain hochladen. Es ist kein Build-Schritt erforderlich.

## Vor dem echten Livegang ersetzen

Die Website verwendet bewusst Beispieldaten. Folgende Angaben müssen durch die echten Kundendaten ersetzt werden:

- `Max Mustermann`
- `Weserblick 24, 28205 Bremen`
- Kundenbewertungen und Namen
- falls abweichend: Öffnungszeiten, Telefonnummer und E-Mail-Adresse
- Angaben in `impressum.html` und `datenschutz.html`

Das Kontaktformular versendet über FormSubmit an `kontakt@picobellobremen.de`. Beim ersten Absenden verschickt FormSubmit eine Aktivierungs-E-Mail an diese Adresse. Der Link darin muss einmal bestätigt werden, bevor echte Anfragen zugestellt werden.

Navigation und Footer liegen zentral in `components.js`. Änderungen an Menü, Telefonnummer, Adresse oder Öffnungszeiten müssen dort nur einmal vorgenommen werden. Die Website benötigt kein PHP.
