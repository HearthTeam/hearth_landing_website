// ============================================================
// HEARTH — Shared IT/EN language toggle for subpages
// (index.html uses its own dict in landing.js)
// ============================================================
(() => {
  // Italian → English dictionary, matched against trimmed text-node values.
  // Keep keys EXACTLY as they appear in the HTML (one entry per
  // distinct text-node string).
  const MAP = {
    // ---------- Skip link ----------
    'Salta al contenuto': 'Skip to content',

    // ---------- Nav ----------
    'Il problema': 'The problem',
    'Pilastri': 'Pillars',
    'Scheda': 'Card',
    'Operatori': 'Operators',
    'Metodo': 'Method',
    'Territori': 'Territories',
    'Creator': 'Creator',
    'Contatti': 'Contact',
    'Parliamone': "Let's talk",
    "Scarica l'app": 'Download app',
    'Cambia lingua': 'Change language',

    // ---------- Aside (TOC) ----------
    'In questa pagina': 'On this page',
    'Indice': 'Index',
    'Sintesi': 'Summary',
    'Il contesto': 'Context',
    'Cosa abbiamo fatto': 'What we did',
    'I numeri': 'Numbers',

    // ---------- Page hero / metodo ----------
    'Hearth · Il metodo': 'Hearth · The method',
    'Dal territorio': 'From the territory',
    'alla piattaforma': 'to the platform',
    'Cinque fasi per trasformare il patrimonio disperso in una base digitale viva: ordinata, aggiornabile, riutilizzabile per anni.':
      'Five phases to turn scattered patrimony into a living digital base — ordered, updatable, reusable for years.',
    '5 fasi': '5 phases',
    '12 settimane': '12 weeks',
    'Triennio incluso': 'Three-year cycle included',

    // ---------- Method phases ----------
    'Fase 01': 'Phase 01',
    'Fase 02': 'Phase 02',
    'Fase 03': 'Phase 03',
    'Fase 04': 'Phase 04',
    'Fase 05': 'Phase 05',
    'Mappatura e priorità': 'Mapping & priorities',
    'Produzione contenuti': 'Content production',
    'Strutturazione digitale': 'Digital structuring',
    'Pubblicazione e attivazione': 'Publishing & activation',
    'Aggiornamento continuo': 'Continuous update',

    "Il primo passo non è produrre. È ascoltare. Una ricognizione condivisa del territorio per capire cosa raccontare prima, dove iniziare, quali contenuti contano davvero per Comune, operatori e comunità.":
      "The first step is not producing. It's listening. A shared survey of the territory to figure out what to tell first, where to start, which content really matters for the municipality, operators and community.",
    'Meglio venti contenuti che contano che cinquanta riempitivi.':
      'Better twenty pieces of content that matter than fifty fillers.',
    'Definizione del referente operativo': 'Defining the operational lead',
    'Mappa del patrimonio esistente': 'Map of existing patrimony',
    'Selezione delle prime 20 unità da produrre': 'Selecting the first 20 units to produce',
    'Allineamento sui canali di pubblicazione': 'Aligning on publication channels',

    "Foto, video e testi raccolti sul campo, con la comunità. Attiviamo creator locali, figure segnalate dal territorio o risorse Hearth quando serve. L'obiettivo è qualità editoriale, non quantità.":
      "Photos, videos and texts gathered on the ground, with the community. We activate local creators, figures referred by the territory, or Hearth resources when needed. The goal is editorial quality, not quantity.",
    "Forno Silvestri, Borgo Vecchio — produzione contenuti sul campo.":
      "Silvestri bakery, Borgo Vecchio — content production on the ground.",
    "Forno a legna in un borgo, racconto sul campo":
      "Wood-fired bakery in a village, on-the-ground storytelling",

    "Ogni contenuto diventa una scheda ordinata: titolo, descrizione, dati essenziali, materiali multimediali, riferimenti spaziali e temporali. La struttura è la stessa per tutto il territorio.":
      "Each piece of content becomes an ordered card: title, description, essential data, media, spatial and temporal references. The structure is the same across the whole territory.",
    'Una scheda. Molti usi. Per anni.': 'One card. Many uses. For years.',

    "Le schede vengono pubblicate sull'app traveler Hearth, sui moduli web embeddabili e sui QR territoriali. Il Comune riceve materiali pronti all'uso per portale, accoglienza, bandi, eventi.":
      "The cards are published on the Hearth Traveller app, on embeddable web modules and on territorial QR codes. The municipality receives ready-to-use materials for portal, hospitality, grants and events.",
    "App traveler Hearth — consultabile sul territorio": 'Hearth Traveller app — usable on the territory',
    "Moduli web embeddabili — sito istituzionale, partner, info point": 'Embeddable web modules — institutional site, partners, info points',
    "QR territoriali — pannelli, totem, segnaletica": 'Territorial QR codes — panels, totems, signage',
    'Archivio digitale — base per nuovi progetti': 'Digital archive — base for new projects',

    "La base non viene consegnata e abbandonata. Nei tre anni successivi resta viva: il Comune aggiorna informazioni operative (date, orari, programmi) attraverso il backoffice, mentre Hearth mantiene revisione editoriale e standard.":
      "The base is not delivered and abandoned. Over the following three years it stays alive: the municipality updates operational info (dates, hours, programmes) via the backoffice, while Hearth keeps editorial review and standards.",
    'mesi inclusi': 'months included',
    'contenuti complessivi': 'total pieces of content',
    'anni di base viva': 'years of living base',

    // ---------- Page CTA (varianti) ----------
    'Anche il vostro territorio': 'Your territory',
    'merita una': 'deserves a',
    'base': 'base',
    'Ogni caso parte da una mappatura. Iniziamo dal vostro primo nucleo digitale.':
      'Every case starts with a mapping. Let\'s begin with your first digital core.',
    'Pronti a iniziare': 'Ready to start',
    'dal vostro': 'from your',
    'primo nucleo': 'first core',
    'Mappiamo il territorio, definiamo le priorità e attiviamo i primi venti contenuti nel ciclo iniziale.':
      'We map the territory, set priorities and activate the first twenty pieces of content in the initial cycle.',
    'Il tuo territorio,': 'Your territory,',
    'raccontato': 'told',
    'come merita': 'as it deserves',
    "Scarica l'app Creator e fai il primo contenuto. Da lì in poi decidi tu quanto crescere.":
      'Download the Creator app and make your first piece of content. From there on, it\'s up to you how much to grow.',
    'Inizia ora': 'Start now',

    // ---------- Other cases ----------
    'Altri': 'Other',
    'casi attivati': 'active cases',
    'Isola · Toscana': 'Island · Tuscany',
    'Isola · comunità · ritmi locali': 'Island · community · local rhythms',
    'Borghi diffusi · Toscana': 'Diffuse villages · Tuscany',
    'Borghi diffusi · natura · percorsi': 'Diffuse villages · nature · paths',
    'Area interna · Molise': 'Inland area · Molise',
    'Tradizioni · artigianato · identità': 'Traditions · craft · identity',
    "Città d'arte · Toscana": 'Art city · Tuscany',
    "Città d'arte · esperienze · operatori": 'Art city · experiences · operators',
    'Fabbriche di Vergemoli': 'Fabbriche di Vergemoli',
    'Capraia': 'Capraia',
    'Agnone': 'Agnone',
    'Firenze': 'Florence',

    // ---------- Creator gancio ----------
    'Per i creator': 'For creators',
    'Conosci il tuo territorio?': 'You know your territory?',
    'Raccontalo con noi': 'Tell it with us',
    "Hearth si costruisce con creator locali: fotografi, videomaker, testimoni del territorio. Scarica l'app Creator, supera il primo contenuto e diventi parte della rete.":
      'Hearth is built with local creators: photographers, videomakers, witnesses of the territory. Download the Creator app, pass the first piece of content and join the network.',
    'Compenso diretto sui progetti speciali': 'Direct pay on special projects',
    'Hearth Coin · partecipi al fatturato mensile': 'Hearth Coin · share in monthly revenue',
    'Crediti editoriali con i tuoi contatti': 'Editorial credits with your contacts',
    'Badge Creator Hearth verificato': 'Verified Hearth Creator badge',
    'Scopri il programma →': 'Explore the programme →',
    'Scarica su': 'Download on',
    'App Store': 'App Store',
    'Google Play': 'Google Play',
    'Hearth · Creator': 'Hearth · Creator',
    'Contenuto in corso': 'Content in progress',
    'Forno Silvestri · Borgo Vecchio': 'Silvestri bakery · Borgo Vecchio',
    'Apertura ore 7 · 3 scatti + 1 reel + scheda': 'Opens 7 AM · 3 shots + 1 reel + card',
    '2 / 3 elementi completati': '2 / 3 items completed',
    'Hearth Coin questo mese': 'Hearth Coin this month',
    'Creator verificato': 'Verified creator',
    'Da gennaio 2026': 'Since January 2026',

    // ---------- Contatti ----------
    'Hearth · Società Benefit': 'Hearth · Benefit Company',
    'Hai un territorio da': 'Have a territory to',
    'organizzare': 'organize',
    'Partiamo dal primo nucleo digitale. Mappiamo, produciamo e organizziamo. Poi resta vivo nel tempo.':
      "Let's start from the first digital core. We map, produce and organize. Then it stays alive over time.",
    'Chi sei': 'Who you are',
    'Seleziona…': 'Select…',
    'Comune / ente pubblico': 'Municipality / public body',
    'Operatore / partner locale': 'Operator / local partner',
    'Pro Loco / associazione': 'Tourist board / association',
    'Altro': 'Other',
    'Territorio': 'Territory',
    'Comune, area, isola…': 'Town, area, island…',
    'Email': 'Email',
    'Cosa vorreste raccontare': "What you'd like to tell",
    'Anche solo due righe…': 'Even just two lines…',
    'Scrivici': 'Send',
    'Oppure scrivici a': 'Or write to us at',

    // ---------- Footer ----------
    'Il patrimonio dei territori, organizzato.': 'The patrimony of territories, organized.',
    'Legal': 'Legal',
    'Overview 2026': 'Overview 2026',
    'Made for territories': 'Made for territories',

    // ---------- Case heroes ----------
    'Capraia, in sintesi': 'Capraia, at a glance',
    'Fabbriche di': 'Fabbriche di',
    'Vergemoli': 'Vergemoli',
    'Fabbriche di Vergemoli, in sintesi': 'Fabbriche di Vergemoli, at a glance',
    'Agnone, in sintesi': 'Agnone, at a glance',
    'Firenze, in sintesi': 'Florence, at a glance',
    'Capitolo 01': 'Chapter 01',
    'Capitolo 02': 'Chapter 02',
    'Output principali': 'Main outputs',
    'I numeri del caso': 'The case in numbers',
    'luoghi': 'places',
    'persone': 'people',
    'eventi': 'events',

    // ---------- Capraia ----------
    "Un'isola del Tirreno, una comunità piccola che è il territorio stesso. Da Capraia siamo partiti con una mappatura serrata: ogni angolo del porto, ogni sentiero, ogni operatore raccontato in un'unica base ordinata.":
      "A Tyrrhenian island, a small community that is the territory itself. From Capraia we began with a tight mapping: every corner of the harbour, every path, every operator told in a single ordered base.",
    "Capraia è un'isola dove la comunità coincide con il territorio. Pochi residenti, una rete densa di operatori — albergatori, pescatori, guide, ristoratori — e un patrimonio diffuso fatto di sentieri, scorci, ritmi quotidiani e stagioni.":
      "Capraia is an island where the community coincides with the territory. Few residents, a dense network of operators — hoteliers, fishermen, guides, restaurateurs — and a diffuse patrimony made of paths, vistas, daily rhythms and seasons.",
    'Capraia, prima, viveva in dieci cartelle diverse. Oggi è una base sola.':
      'Capraia, before, lived in ten different folders. Today it is a single base.',
    "Abbiamo costruito il primo nucleo digitale dell'isola: 42 luoghi schedati, 18 persone raccontate, 26 eventi e ritmi messi a calendario. Tutto in un sistema unico, consultabile sull'app traveler Hearth e attivabile dal Comune via backoffice.":
      "We built the first digital core of the island: 42 places catalogued, 18 people told, 26 events and rhythms set on a calendar. All in one system, consultable on the Hearth Traveller app and activatable by the municipality via the backoffice.",
    'Mappatura completa di sentieri, porti, scorci e punti identitari': 'Full mapping of paths, harbours, vistas and identity points',
    'Racconto editoriale di pescatori, custodi, guide e operatori locali': 'Editorial storytelling of fishermen, custodians, guides and local operators',
    'Calendario dei ritmi locali (rientro barche, mercati, stagioni)': "Calendar of local rhythms (boats' return, markets, seasons)",
    "QR territoriali in 8 punti dell'isola": "Territorial QR codes at 8 points on the island",
    'Modulo web embeddabile per il sito del Comune': 'Embeddable web module for the municipality website',
    'Giovanni · pescatore storico del Porto di Capraia.': 'Giovanni · historic fisherman of the Port of Capraia.',
    'Giovanni, pescatore storico del Porto di Capraia, sulla sua barca.': 'Giovanni, historic fisherman of the Port of Capraia, on his boat.',
    'Il primo nucleo digitale di Capraia è ora attivo. Nei tre anni successivi viene aggiornato attraverso il backoffice del Comune, mantenendo standard editoriale e copertura coerente.':
      "Capraia's first digital core is now live. Over the following three years it is updated via the municipality's backoffice, keeping editorial standard and consistent coverage.",

    // ---------- Vergemoli ----------
    "Tanti borghi, una sola identità. Fabbriche di Vergemoli è una comunità che vive in più paesi sparsi, legati da sentieri, ponti, grotte e una natura potentissima. Hearth è stato lo strumento per tenerli insieme digitalmente.":
      "Many villages, one identity. Fabbriche di Vergemoli is a community living across scattered hamlets, linked by paths, bridges, caves and powerful nature. Hearth was the tool to hold them together digitally.",
    "Fabbriche di Vergemoli è un Comune fatto di più borghi diffusi sulle Alpi Apuane: paesi piccoli, distanti, ognuno con il proprio carattere ma uniti da una stessa identità territoriale.":
      "Fabbriche di Vergemoli is a municipality made of multiple diffuse villages across the Apuan Alps: small, distant towns, each with its own character but united by a shared territorial identity.",
    "Il rischio dei territori a borghi diffusi è che ogni frazione comunichi per conto suo, o non comunichi affatto. Servono ":
      'The risk in diffuse-village territories is that each hamlet communicates on its own, or not at all. They need ',
    'un sistema condiviso': 'a shared system',
    ' e una struttura editoriale comune.': ' and a common editorial structure.',
    'Più borghi, una sola identità leggibile.': 'Many villages, one readable identity.',
    "Abbiamo unificato i borghi in un nucleo digitale unico: sentieri tracciati, scorci documentati, eventi sincronizzati e percorsi tematici trasversali tra le frazioni. Il risultato è una mappa viva che il visitatore — e l'amministrazione — leggono come un tutto.":
      "We unified the villages into one digital core: tracked paths, documented vistas, synced events and thematic routes across hamlets. The result is a living map that both the visitor and the administration read as a whole.",
    'Schedatura dei principali borghi e frazioni': 'Cataloguing of the main villages and hamlets',
    'Rete dei sentieri e percorsi naturalistici': 'Network of paths and nature trails',
    'Racconto di custodi e testimoni locali': 'Storytelling of local custodians and witnesses',
    'Cartografia digitale unificata': 'Unified digital cartography',
    'Materiali pronti per bandi PNRR aree interne': 'Materials ready for PNRR inland-area grants',
    'Luigi, custode del metato · antico metodo di essiccazione delle castagne.':
      'Luigi, keeper of the metato · ancient method for drying chestnuts.',
    'Fabbriche di Vergemoli — custode al metato, essiccazione delle castagne in autunno.':
      'Fabbriche di Vergemoli — keeper at the metato, chestnut drying in autumn.',
    'Il primo nucleo digitale di Fabbriche di Vergemoli è ora attivo. Nei tre anni successivi viene aggiornato attraverso il backoffice del Comune, mantenendo standard editoriale e copertura coerente.':
      "Fabbriche di Vergemoli's first digital core is now live. Over the following three years it is updated via the municipality's backoffice, keeping editorial standard and consistent coverage.",

    // ---------- Agnone ----------
    "Agnone è il Molise che resiste: fonderie millenarie, botteghe, riti e una comunità che il proprio mestiere lo eredita. Il primo nucleo digitale qui parla soprattutto di chi lavora la materia.":
      "Agnone is the Molise that endures: millennium-old foundries, workshops, rites and a community that inherits its trades. The first digital core here speaks above all of those who work the material.",
    "Agnone, nelle aree interne del Molise, è un luogo dove l'artigianato è ancora identità: la fonderia delle campane più antica del mondo, le botteghe orafe, i riti del fuoco. Il patrimonio è fatto di persone e mestieri tanto quanto di luoghi.":
      "Agnone, in the inland areas of Molise, is a place where craft is still identity: the oldest bell foundry in the world, goldsmith workshops, fire rites. The patrimony is made of people and trades as much as of places.",
    "La sfida era raccontare ":
      'The challenge was to tell ',
    'il sapere': 'the know-how',
    ' più che lo spazio: trasformare gesti, mani, processi e voci in contenuti strutturati che non si perdano con il passaggio generazionale.':
      ' more than the space: turning gestures, hands, processes and voices into structured content that doesn\'t get lost between generations.',
    'Il sapere non si conserva in scatola. Si conserva raccontandolo.':
      'Know-how isn\'t kept in a box. It\'s kept by telling it.',
    "Abbiamo costruito un nucleo digitale dove le persone hanno peso editoriale almeno quanto i luoghi. Botteghe, fonderia, artigiani e testimoni locali sono ora schede strutturate, navigabili come parte di un'unica narrazione del territorio.":
      "We built a digital core where people carry editorial weight at least as much as places. Workshops, foundry, artisans and local witnesses are now structured cards, navigable as part of one narrative of the territory.",
    'Racconto della fonderia delle campane e dei suoi maestri': 'Storytelling of the bell foundry and its masters',
    'Botteghe orafe e di artigianato locale': 'Goldsmith and local craft workshops',
    'Riti del fuoco, della Ndocciata e delle stagioni': 'Fire rites, the Ndocciata and the seasons',
    'Calendario delle ricorrenze identitarie': 'Calendar of identity anniversaries',
    'Materiali per la candidatura a riconoscimenti UNESCO': 'Materials for UNESCO recognition applications',
    'Gianluca · antico maestro casaro del Caseificio Di Pietro.': 'Gianluca · historic master cheesemaker at Caseificio Di Pietro.',
    'Agnone — Gianluca, antico maestro casaro del Caseificio Di Pietro, lavora la mozzarella a mano.':
      'Agnone — Gianluca, historic master cheesemaker at Caseificio Di Pietro, working mozzarella by hand.',
    'Il primo nucleo digitale di Agnone è ora attivo. Nei tre anni successivi viene aggiornato attraverso il backoffice del Comune, mantenendo standard editoriale e copertura coerente.':
      "Agnone's first digital core is now live. Over the following three years it is updated via the municipality's backoffice, keeping editorial standard and consistent coverage.",

    // ---------- Firenze ----------
    "Firenze non ha bisogno di essere raccontata. Ha bisogno di essere riorganizzata. Hearth qui ha lavorato sul tessuto degli operatori, sui percorsi laterali e sulle esperienze che il turismo di massa non vede.":
      "Florence doesn't need to be told. It needs to be reorganized. Here Hearth worked on the operator fabric, on the lateral routes and on the experiences that mass tourism never sees.",
    "Firenze è la città d'arte per antonomasia, ma la sua narrazione pubblica è quasi sempre la stessa: monumenti, code, cartoline. Il rischio è che il resto — quartieri, botteghe, artigiani, ritmi quotidiani — resti invisibile.":
      "Florence is the art city by definition, but its public narrative is almost always the same: monuments, queues, postcards. The risk is that the rest — neighbourhoods, workshops, artisans, daily rhythms — stays invisible.",
    "Abbiamo lavorato a Firenze come si lavora in un territorio piccolo: ":
      "We worked in Florence as you'd work in a small territory: ",
    'una rete densa di operatori': 'a dense network of operators',
    ' da legare in un sistema unico, e percorsi alternativi che riportano valore fuori dai circuiti saturi.':
      ' to be linked into one system, and alternative routes that bring value back outside saturated circuits.',
    'Firenze non chiede di essere raccontata. Chiede di essere ordinata.':
      "Florence doesn't ask to be told. It asks to be ordered.",
    "Un nucleo digitale che parla anche degli operatori, dei laboratori, delle esperienze costruibili. La base è pensata per essere usata da partner locali — hotel, ristoranti, info point — e non solo dal Comune.":
      "A digital core that also speaks of operators, workshops and buildable experiences. The base is designed to be used by local partners — hotels, restaurants, info points — and not just by the municipality.",
    'Schedatura di luoghi storici e percorsi laterali ai grandi monumenti': 'Cataloguing of historic places and lateral routes around the main monuments',
    'Mappa degli artigiani e delle botteghe storiche': 'Map of artisans and historic workshops',
    'Esperienze costruibili con partner (vendemmie, laboratori, visite)': 'Buildable experiences with partners (harvests, workshops, visits)',
    'Moduli web per hotel e operatori locali': 'Web modules for hotels and local operators',
    'Materiali multilingua per accoglienza qualificata': 'Multilingual materials for qualified hospitality',
    'Esperienze costruibili con partner locali — vendemmia in cantina.': 'Buildable experiences with local partners — harvest in the winery.',
    'Firenze — Esperienze costruibili con partner locali — vendemmia in cantina.':
      'Florence — buildable experiences with local partners — harvest in the winery.',
    'Il primo nucleo digitale di Firenze è ora attivo. Nei tre anni successivi viene aggiornato attraverso il backoffice del Comune, mantenendo standard editoriale e copertura coerente.':
      "Florence's first digital core is now live. Over the following three years it is updated via the municipality's backoffice, keeping editorial standard and consistent coverage.",

    // ---------- Creator page ----------
    'Programma Creator · 2026': 'Creator Programme · 2026',
    'Sei il modo in cui': "You're the way",
    'il tuo territorio': 'your territory',
    'si racconta': 'tells itself',
    "Hearth costruisce la base digitale dei territori italiani con la collaborazione di chi quei territori li vive. Fotografi, videomaker, testimoni locali. Se vuoi raccontare luoghi, persone, prodotti ed eventi del tuo posto, c'è un percorso preciso per entrare.":
      "Hearth builds the digital base of Italian territories with the collaboration of those who live them. Photographers, videomakers, local witnesses. If you want to tell the places, people, products and events of your place, there's a clear path in.",
    "Scarica l'app Creator": 'Download the Creator app',
    'Come funziona →': 'How it works →',
    'Come funziona': 'How it works',
    'Quattro passi.': 'Four steps.',
    'Niente burocrazia.': 'No bureaucracy.',
    "Non serve un curriculum, non serve un'agenzia. Serve un telefono o una macchina fotografica che funzionano bene, e voglia di raccontare il proprio territorio.":
      "No CV needed, no agency needed. You need a phone or camera that works well, and the will to tell your territory.",
    "Scarica l'app": "Download the app",
    "L'app Creator Hearth è gratuita su iOS e Android. La trovi sugli store.":
      'The Hearth Creator app is free on iOS and Android. Find it on the stores.',
    'Crea il primo contenuto test': 'Create your first test piece',
    'Un contenuto guidato che serve doppiamente: ti insegna lo standard editoriale Hearth e ci permette di valutare le tue abilità sul campo.':
      'A guided piece of content that serves a double purpose: it teaches you the Hearth editorial standard and lets us evaluate your field skills.',
    'Ricevi il badge verificato': 'Get the verified badge',
    "Se il test è approvato, diventi Creator Hearth verificato. Ottieni il badge, l'accesso ai progetti e ai vantaggi.":
      "If the test is approved, you become a verified Hearth Creator. You get the badge, access to projects and benefits.",
    'Inizia a raccontare': 'Start telling',
    'Ti arrivano richieste di contenuti per il tuo territorio. Decidi tu cosa accettare. Vieni compensato per ogni progetto speciale.':
      'You receive content requests for your territory. You decide what to accept. You get paid for every special project.',
    'Cosa ti chiediamo': 'What we ask of you',
    'Strumenti, occhio': 'Tools, eye',
    'e': 'and',
    'conoscenza del posto': 'knowledge of the place',
    'Hearth pubblica contenuti che restano nel tempo: hanno bisogno di qualità tecnica e di profondità di sguardo. Non chiediamo certificazioni — chiediamo che il primo contenuto test mostri entrambe.':
      'Hearth publishes content that lasts: it needs technical quality and depth of view. We don\'t ask for certifications — we ask that the first test piece shows both.',
    'Cosa ottieni': 'What you get',
    'Quattro modi per cui vale': 'Four reasons it\'s worth',
    'la pena': '',
    'stare in Hearth': 'being in Hearth',
    'Pagamento diretto': 'Direct payment',
    'Compenso sui progetti speciali': 'Payment on special projects',
    "Per ogni progetto speciale assegnato ricevi un compenso diretto, gestito interamente dall'app. Tariffa concordata in anticipo, pagamento alla consegna approvata.":
      'For every assigned special project you receive direct payment, fully managed in the app. Fee agreed in advance, paid on approved delivery.',
    'Quota mensile': 'Monthly share',
    'Hearth Coin · partecipi al fatturato': 'Hearth Coin · share in revenue',
    'Ogni contenuto pubblicato ti fa accumulare Hearth Coin. Le Coin danno diritto a una quota del fatturato mensile distribuito tra i Creator. Più contenuti, più Coin, più quota.':
      'Every published piece accumulates Hearth Coin. Coins entitle you to a share of monthly revenue distributed among Creators. More content, more coins, more share.',
    'Visibilità autoriale': 'Authorial visibility',
    'Crediti editoriali su ogni contenuto': 'Editorial credits on every piece',
    'Ogni scheda pubblicata su Hearth riporta il tuo nome come autore. Puoi inserire contatti e riferimenti pubblici per farti trovare da operatori, Comuni e media locali.':
      'Every card published on Hearth carries your name as author. You can include contacts and public references so operators, municipalities and local media can find you.',
    'Status & community': 'Status & community',
    'Diventi parte della rete: eventi esclusivi, experience gratuite, accesso anticipato ai nuovi progetti. Un programma dedicato che cresce nel tempo con vantaggi reali.':
      'You join the network: exclusive events, free experiences, early access to new projects. A dedicated programme that grows over time with real benefits.',
    'Hearth Coin, in chiaro': 'Hearth Coin, in plain words',
    'Più contribuisci,': 'The more you contribute,',
    'più': 'the more you',
    'guadagni nel tempo': 'earn over time',
    'Hearth Coin non è una valuta speculativa. È un meccanismo di partecipazione al valore che i Creator generano insieme.':
      "Hearth Coin isn't a speculative currency. It's a mechanism for sharing the value Creators generate together.",
    "Una parte del fatturato mensile di Hearth viene distribuita tra i Creator in proporzione alle Coin accumulate nel periodo. La quota di ogni Creator è trasparente, visibile dall'app, e si aggiorna in tempo reale.":
      "A share of Hearth's monthly revenue is distributed among Creators in proportion to coins accumulated in the period. Each Creator's share is transparent, visible in the app, and updates in real time.",
    'Le Coin si accumulano in modo semplice: ': 'Coins accumulate in a simple way: ',
    'contenuti pubblicati × qualità × engagement effettivo': 'published content × quality × actual engagement',
    '. Niente premi nascosti, niente algoritmi opachi.': '. No hidden bonuses, no opaque algorithms.',
    'Mese in corso': 'Current month',
    'Contenuti pubblicati': 'Published content',
    'Coin guadagnate': 'Coins earned',
    'Quota stimata': 'Estimated share',
    "Snapshot dimostrativo dall'app Creator": 'Demo snapshot from the Creator app',
    'Inizia subito': 'Start now',
    "Scarica l'app.": 'Download the app.',
    'Fai il': 'Make the',
    'primo contenuto test': 'first test piece',
    'Da lì in poi è il tuo territorio a parlare per te.': 'From there on, your territory speaks for you.',
    'Gratuita · iOS 16+ / Android 9+ · IT & EN · Italia (in espansione)':
      'Free · iOS 16+ / Android 9+ · IT & EN · Italy (expanding)',
    'Domande ricorrenti': 'Frequently asked',
    'Le risposte': 'The most',
    'più': 'most',
    'cercate': 'sought answers',
    'Devo essere un fotografo professionista?': 'Do I need to be a professional photographer?',
    'No. Serve un buon telefono o una macchina fotografica decente e cura nello scattare. Il primo contenuto test ci dice tutto quello che ci serve sapere.':
      "No. A good phone or a decent camera and care when shooting are enough. The first test piece tells us all we need.",
    'Quanto tempo richiede ogni contenuto?': 'How much time does each piece take?',
    "Molto meno di quanto immagini. Con l’app Creator carichi foto e video direttamente sul posto: molte parti sono guidate o automatizzate, incluso il montaggio del reel. Tu raccogli il materiale, Hearth ti aiuta a trasformarlo in contenuto pronto.":
      "Far less than you'd think. With the Creator app you upload photos and videos directly on site: many parts are guided or automated, including reel editing. You gather the material, Hearth helps you turn it into a ready piece.",
    'Quanto vale un Hearth Coin in euro?': 'What is one Hearth Coin worth in euros?',
    "Il valore non è fisso: dipende dal fatturato del mese e dalle Coin totali distribuite. Nell'app vedi sempre la quota stimata in tempo reale.":
      "The value isn't fixed: it depends on the monthly revenue and total coins distributed. In the app you always see the estimated share in real time.",
    'Posso essere creator in più territori?': 'Can I be a creator in multiple territories?',
    'Sì. Ogni Creator può lavorare nei territori che conosce. È utile dichiarare nel profilo le zone in cui hai accesso reale.':
      'Yes. Each Creator can work in territories they know. It\'s useful to declare in your profile the areas where you have real access.',
    'Cosa succede se il primo test non viene approvato?': 'What if the first test is not approved?',
    "Ti diamo un feedback puntuale e puoi riprovare. L'obiettivo è alzare lo standard, non chiudere le porte.":
      "We give you precise feedback and you can try again. The goal is to raise the bar, not to close doors.",
    'I miei contenuti restano miei?': 'Do my pieces stay mine?',
    "Mantieni la paternità dei contenuti e ricevi sempre il credito editoriale. Hearth ottiene la licenza d'uso per pubblicare i contenuti approvati sui canali della piattaforma.":
      "You retain authorship and always receive editorial credit. Hearth obtains the licence to publish approved content on the platform's channels.",
  };

  // Walk all text nodes under root, skipping scripts/styles/SVG text.
  const SKIP_TAGS = new Set(['SCRIPT','STYLE','NOSCRIPT','SVG']);
  function walk(node, fn) {
    if (!node) return;
    if (node.nodeType === Node.TEXT_NODE) { fn(node); return; }
    if (node.nodeType !== Node.ELEMENT_NODE) return;
    if (SKIP_TAGS.has(node.tagName)) return;
    if (node.hasAttribute && node.hasAttribute('data-i18n-skip')) return;
    for (let c = node.firstChild; c; c = c.nextSibling) walk(c, fn);
  }

  function setLang(lang) {
    document.body.dataset.lang = lang;
    document.documentElement.lang = lang;
    // Text nodes
    walk(document.body, (t) => {
      if (t.__origIT == null) t.__origIT = t.nodeValue;
      const orig = t.__origIT;
      const trimmed = orig.trim();
      if (!trimmed) return;
      if (lang === 'en' && MAP[trimmed] != null) {
        const leading = orig.match(/^\s*/)[0];
        const trailing = orig.match(/\s*$/)[0];
        t.nodeValue = leading + MAP[trimmed] + trailing;
      } else {
        t.nodeValue = orig;
      }
    });
    // Placeholders
    document.querySelectorAll('input[placeholder], textarea[placeholder]').forEach(el => {
      if (el.__origPh == null) el.__origPh = el.getAttribute('placeholder') || '';
      const en = MAP[el.__origPh.trim()];
      el.setAttribute('placeholder', (lang === 'en' && en) ? en : el.__origPh);
    });
    // <title> tag
    if (!document.__origTitle) document.__origTitle = document.title;
    // (we leave document.title in IT — search engines see the canonical)
    // aria-labels on the toggle itself
    const btn = document.getElementById('langToggle');
    if (btn) btn.setAttribute('aria-label', lang === 'en' ? 'Change language' : 'Cambia lingua');
    try { localStorage.setItem('hearth_lang', lang); } catch (e) {}
  }

  // Wire up the toggle and apply stored preference on load.
  function init() {
    const btn = document.getElementById('langToggle');
    if (btn) {
      btn.addEventListener('click', () => {
        setLang(document.body.dataset.lang === 'en' ? 'it' : 'en');
      });
    }
    try {
      const stored = localStorage.getItem('hearth_lang');
      if (stored === 'en') setLang('en');
    } catch (e) {}
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
