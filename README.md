# Hearth — sito statico

Questo pacchetto contiene il sito Hearth pronto per essere messo online.

## Struttura

```
/
├── index.html               # Homepage
├── creator.html             # Programma Creator
├── metodo.html              # Il metodo
├── caso-capraia.html        # Caso: Capraia
├── caso-vergemoli.html      # Caso: Fabbriche di Vergemoli
├── caso-agnone.html         # Caso: Agnone
├── caso-firenze.html        # Caso: Firenze
├── landing.css              # Stili globali (homepage + chrome)
├── pages.css                # Stili pagine interne (metodo + casi)
├── creator.css              # Stili pagina Creator
├── landing.js               # JS homepage (mappa, IT/EN, form, scrub, parallax)
├── i18n-pages.js            # Toggle IT/EN per pagine interne
└── assets/                  # Immagini, logo, icone (referenziate come assets/…)
```

## Deploy

È un sito statico: tutti i file vanno serviti così come sono.
Compatibile con Netlify, Vercel, Cloudflare Pages, GitHub Pages, S3+CloudFront, qualunque hosting statico.

Entry point: `index.html`.

## Form contatti

Il form usa Formspree. Endpoint attivo configurato in `index.html`:
```
data-formspree-endpoint="https://formspree.io/f/mqenopjw"
```
Se l'endpoint non è configurato, il form simula un invio andato a buon fine (modalità demo).

## Lingue

- Homepage: i18n nativo via attributi `data-i18n` (vedi `landing.js`).
- Pagine interne: toggle IT/EN gestito da `i18n-pages.js` con dizionario interno.
- Preferenza salvata su `localStorage` (chiave `hearth_lang`), condivisa tra tutte le pagine.

## Font

Maven Pro caricato da Google Fonts (`<link href="https://fonts.googleapis.com/css2?family=Maven+Pro:…">`).
Tutti i font dell'identità sono già hostati: nessun upload aggiuntivo richiesto.

## Cose da verificare prima del go-live

- [ ] Aggiornare meta `og:url` con il dominio finale (al momento punta a hearth.eu.com).
- [ ] Aggiungere `sitemap.xml` e `robots.txt` se richiesto dal CMS/hosting.
- [ ] Verificare che il form Formspree riceva correttamente (test end-to-end).
- [ ] Cache headers: assets/ può essere servito con cache lunga (immutable).

— Generato 2026-05-14.
