const headerTarget = document.querySelector("[data-site-header]");
const footerTarget = document.querySelector("[data-site-footer]");

if (headerTarget) {
  headerTarget.outerHTML = `
    <header class="site-header">
      <div class="topbar">
        <div class="container topbar-inner">
          <span>Gebäudeservice in Bremen &amp; Umgebung</span>
          <div class="topbar-links">
            <a href="tel:+4915510731306">01551 0731306</a>
            <a href="mailto:kontakt@picobellobremen.de">kontakt@picobellobremen.de</a>
          </div>
        </div>
      </div>
      <nav class="nav container" aria-label="Hauptnavigation">
        <a class="brand" href="index.html" aria-label="Picobello Bremen Startseite">
          <img src="logo.png" alt="Picobello Bremen Gebäudeservice" width="176" height="117">
        </a>
        <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="main-menu">
          <span></span><span></span><span></span><span class="sr-only">Menü öffnen</span>
        </button>
        <div class="nav-links" id="main-menu">
          <a href="leistungen.html">Leistungen</a>
          <a href="warum-wir.html">Warum wir</a>
          <a href="ablauf.html">Ablauf</a>
          <a href="bewertungen.html">Bewertungen</a>
          <a class="button button-small" href="kontakt.html">Angebot anfragen</a>
        </div>
      </nav>
    </header>`;
}

if (footerTarget) {
  footerTarget.outerHTML = `
    <footer class="footer">
      <div class="container footer-grid">
        <div class="footer-brand">
          <img src="logo.png" alt="Picobello Bremen" width="150" height="100">
          <p>Gebäudeservice mit Herz – für saubere Räume und mehr Zeit für das, was wirklich zählt.</p>
        </div>
        <div>
          <h3>Navigation</h3>
          <a href="leistungen.html">Leistungen</a>
          <a href="warum-wir.html">Warum wir</a>
          <a href="ablauf.html">Ablauf</a>
          <a href="bewertungen.html">Bewertungen</a>
          <a href="kontakt.html">Kontakt</a>
        </div>
        <div>
          <h3>Kontakt</h3>
          <a href="tel:+4915510731306">01551 0731306</a>
          <a href="mailto:kontakt@picobellobremen.de">kontakt@picobellobremen.de</a>
          <p>Weserblick 24<br>28205 Bremen</p>
        </div>
        <div>
          <h3>Erreichbarkeit</h3>
          <p>Mo.–Sa.: 08:00–18:00 Uhr<br>Sonntag: nach Vereinbarung</p>
          <span class="open-badge"><i></i> Antwort meist am selben Werktag</span>
        </div>
      </div>
      <div class="container footer-bottom">
        <span>© ${new Date().getFullYear()} Picobello Bremen</span>
        <div><a href="impressum.html">Impressum</a><a href="datenschutz.html">Datenschutz</a></div>
        <span>Gebäudeservice aus Bremen</span>
      </div>
    </footer>
    <a class="mobile-call" href="tel:+4915510731306">☎ <span>Jetzt anrufen</span></a>`;
}
