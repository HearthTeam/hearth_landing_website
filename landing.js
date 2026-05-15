// ============================================================
// HEARTH — landing interactions
// ============================================================

(() => {
  // ----- NAV scroll state -----
  const nav = document.getElementById('nav');
  const onScroll = () => {
    nav.classList.toggle('scrolled', window.scrollY > 12);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // ----- Scroll-spy: highlight nav link of section in view -----
  const spyNavLinks = [...document.querySelectorAll('.nav-links a[href^="#"]')];
  const linkBySection = {};
  spyNavLinks.forEach(a => {
    const id = a.getAttribute('href').slice(1);
    if (id) linkBySection[id] = a;
  });
  const spySections = Object.keys(linkBySection)
    .map(id => document.getElementById(id))
    .filter(Boolean);
  if (spySections.length) {
    const setActive = (id) => {
      spyNavLinks.forEach(a => {
        const linkId = a.getAttribute('href').slice(1);
        a.classList.toggle('active', linkId === id);
      });
    };
    // Track which sections are currently intersecting and pick the topmost one
    const visible = new Set();
    const spy = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) visible.add(e.target.id);
        else visible.delete(e.target.id);
      });
      // Find the visible section closest to the top of the viewport
      let bestId = null;
      let bestTop = Infinity;
      visible.forEach(id => {
        const el = document.getElementById(id);
        if (!el) return;
        const t = el.getBoundingClientRect().top;
        if (t < bestTop) { bestTop = t; bestId = id; }
      });
      if (bestId) setActive(bestId);
    }, {
      // Trigger when section crosses the nav band (~80px from top)
      rootMargin: '-80px 0px -55% 0px',
      threshold: 0,
    });
    spySections.forEach(s => spy.observe(s));
  }

  // ----- Mobile menu (hamburger) -----
  const burger = document.getElementById('navBurger');
  const navLinks = document.getElementById('navLinks');
  if (burger && navLinks) {
    const closeMenu = () => {
      document.body.classList.remove('menu-open');
      burger.setAttribute('aria-expanded', 'false');
    };
    const openMenu = () => {
      document.body.classList.add('menu-open');
      burger.setAttribute('aria-expanded', 'true');
    };
    burger.addEventListener('click', () => {
      if (document.body.classList.contains('menu-open')) closeMenu();
      else openMenu();
    });
    navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && document.body.classList.contains('menu-open')) closeMenu();
    });
    // tap outside (overlay)
    document.addEventListener('click', (e) => {
      if (!document.body.classList.contains('menu-open')) return;
      if (e.target === burger || burger.contains(e.target)) return;
      if (navLinks.contains(e.target)) return;
      closeMenu();
    });
  }

  // ----- Reveal on scroll -----
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.18, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));

  // ----- Hero scraps parallax -----
  const heroScraps = document.querySelectorAll('#heroScraps .scrap');
  let scrapsTicking = false;
  const onHeroScroll = () => {
    if (scrapsTicking) return;
    scrapsTicking = true;
    requestAnimationFrame(() => {
      const y = window.scrollY;
      heroScraps.forEach((el, i) => {
        const speed = (i % 3 === 0) ? 0.2 : (i % 3 === 1) ? 0.12 : 0.32;
        const baseRot = parseFloat(el.dataset.rot || (el.style.transform.match(/-?\d+(?:\.\d+)?(?=deg)/) || [0])[0]);
        if (!el.dataset.rot) el.dataset.rot = baseRot;
        el.style.transform = `translate3d(0, ${y * -speed}px, 0) rotate(${baseRot}deg)`;
      });
      scrapsTicking = false;
    });
  };
  window.addEventListener('scroll', onHeroScroll, { passive: true });
  onHeroScroll();

  // ----- Chaos → order scrub -----
  const stage = document.getElementById('scrubStage');
  const grid = document.getElementById('chaosGrid');

  // 9 items: 3 photos + 6 notes. Authored CHAOS positions and ORDER (3x3 grid) positions.
  const items = [
    { type: 'photo', src: 'assets/forno-ivana.jpg',   chaos: { x: 8,  y: 6,  w: 22, h: 30, rot: -7 } },
    { type: 'photo', src: 'assets/borgo-drone.jpg',   chaos: { x: 64, y: 10, w: 26, h: 28, rot: 5  } },
    { type: 'photo', src: 'assets/mercato-pesce.jpg', chaos: { x: 38, y: 64, w: 24, h: 30, rot: -3 } },
    { type: 'note',  variant: '',     lab: 'Sito Comune · 2014',  body: '5 pagine, news 2019.',     chaos: { x: 36, y: 8,  w: 20, h: 16, rot: 4 } },
    { type: 'note',  variant: 'red',  lab: 'Volantino Sagra',     body: 'Stampato. Mai online.',    chaos: { x: 84, y: 48, w: 14, h: 18, rot: -6 } },
    { type: 'note',  variant: '',     lab: 'Pro Loco · PDF',      body: 'Itinerario su carta.',     chaos: { x: 4,  y: 66, w: 18, h: 16, rot: 3  } },
    { type: 'note',  variant: 'blue', lab: 'Instagram',           body: '3 post · mese scorso.',    chaos: { x: 68, y: 70, w: 18, h: 18, rot: 4  } },
    { type: 'note',  variant: 'ink',  lab: 'Whatsapp Comune',     body: '"Le foto della festa."',   chaos: { x: 14, y: 38, w: 18, h: 16, rot: -3 } },
    { type: 'note',  variant: '',     lab: 'Fotocamera reflex',   body: '120 GB · senza tag.',      chaos: { x: 42, y: 38, w: 18, h: 16, rot: 2  } },
  ];

  // 3x3 ordered grid layout (in % of frame)
  const cols = 3, rows = 3;
  const ordered = items.map((it, i) => {
    const c = i % cols, r = Math.floor(i / cols);
    const w = 28, h = 26;
    const x = 4 + c * (w + 4);
    const y = 6 + r * (h + 4);
    return { x, y, w, h, rot: 0 };
  });

  if (grid) {
    items.forEach((it, i) => {
      const el = document.createElement('div');
      el.className = 'item ' + (it.type === 'note' ? 'note ' + (it.variant || '') : '');
      if (it.type === 'photo') {
        el.style.backgroundImage = `url('${it.src}')`;
        const lab = document.createElement('span');
        lab.className = 'lab';
        lab.textContent = ['Forno · borgo', 'Borgo · drone', 'Mercato · sabato'][i] || '';
        el.appendChild(lab);
      } else {
        const lab = document.createElement('span');
        lab.className = 'lab';
        lab.textContent = it.lab;
        el.appendChild(lab);
        el.appendChild(document.createTextNode(' ' + it.body));
      }
      grid.appendChild(el);
    });
  }

  const lerp = (a, b, t) => a + (b - a) * t;
  const ease = t => t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;

  function applyScrub(t) {
    if (!grid) return;
    const els = grid.querySelectorAll('.item');
    els.forEach((el, i) => {
      const c = items[i].chaos;
      const o = ordered[i];
      const x = lerp(c.x, o.x, t);
      const y = lerp(c.y, o.y, t);
      const w = lerp(c.w, o.w, t);
      const h = lerp(c.h, o.h, t);
      const rot = lerp(c.rot, o.rot, t);
      el.style.left = x + '%';
      el.style.top = y + '%';
      el.style.width = w + '%';
      el.style.height = h + '%';
      el.style.transform = `rotate(${rot}deg)`;
    });
    const cap = document.querySelector('.scrub-caption');
    if (cap) {
      cap.querySelector('.cap-from').style.color = `rgba(244,77,65, ${1 - t})`;
      cap.querySelector('.cap-to').style.color   = `rgba(11,11,11, ${0.3 + 0.7 * t})`;
    }
  }

  let scrubTicking = false;
  const onScrub = () => {
    if (scrubTicking || !stage) return;
    scrubTicking = true;
    requestAnimationFrame(() => {
      const rect = stage.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      const progressed = Math.min(1, Math.max(0, -rect.top / total));
      applyScrub(ease(progressed));
      scrubTicking = false;
    });
  };
  window.addEventListener('scroll', onScrub, { passive: true });
  onScrub();

  // ----- Map territori -----
  const territori = {
    capraia:   { tag: 'Isola',         name: 'Capraia',                 type: 'Isola · comunità · ritmi locali',   out: 'Luoghi · persone · guida digitale', img: 'assets/borgo-drone.jpg',     k: [42, 18, 26] },
    agnone:    { tag: 'Area interna',  name: 'Agnone',                  type: 'Tradizioni · artigianato · identità', out: 'Botteghe · persone · patrimonio',  img: 'assets/fonderia-campane.jpg', k: [56, 24, 14] },
    vergemoli: { tag: 'Borghi diffusi',name: 'Fabbriche di Vergemoli',  type: 'Borghi diffusi · natura · percorsi', out: 'Luoghi · sentieri · mappa',         img: 'assets/vergemoli-ponte.jpg', k: [38, 12, 9]  },
    firenze:   { tag: "Città d'arte",  name: 'Firenze',                 type: "Città d'arte · esperienze · operatori", out: 'Percorsi · schede · contenuti',  img: 'assets/firenze-duomo.jpg',   k: [72, 31, 48] },
  };
  const pins = document.querySelectorAll('.map-pin');
  const md = {
    img:   document.getElementById('mdImg'),
    tag:   document.getElementById('mdTag'),
    name:  document.getElementById('mdName'),
    type:  document.getElementById('mdType'),
    out:   document.getElementById('mdOut'),
    k1:    document.getElementById('mdK1'),
    k2:    document.getElementById('mdK2'),
    k3:    document.getElementById('mdK3'),
  };
  function selectPin(key) {
    const t = territori[key];
    if (!t) return;
    pins.forEach(p => p.classList.toggle('active', p.dataset.pin === key));
    if (md.img)  md.img.style.backgroundImage = `url('${t.img}')`;
    if (md.tag)  md.tag.textContent = t.tag;
    if (md.name) md.name.textContent = t.name;
    if (md.type) md.type.textContent = t.type;
    if (md.out)  md.out.textContent = t.out;
    if (md.k1)   md.k1.textContent = t.k[0];
    if (md.k2)   md.k2.textContent = t.k[1];
    if (md.k3)   md.k3.textContent = t.k[2];
    const mdLink = document.getElementById('mdLink');
    if (mdLink) mdLink.setAttribute('href', `caso-${key}.html`);
  }
  pins.forEach(p => p.addEventListener('click', () => selectPin(p.dataset.pin)));
  selectPin('capraia');

  // ----- Form (Formspree-ready) -----
  // Replace the endpoint in HTML (data-formspree-endpoint) with your real Formspree URL.
  // Until then, the form simulates a successful submission (demo behaviour).
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const btn = form.querySelector('button[type="submit"]');
      const orig = btn.textContent;
      const setStatus = (text, ok) => {
        btn.disabled = false;
        btn.textContent = text;
        btn.style.background = ok ? 'var(--cream)' : 'var(--hearth-red)';
        btn.style.color = ok ? 'var(--ink)' : 'var(--cream)';
      };
      const reset = () => {
        btn.textContent = orig;
        btn.style.background = '';
        btn.style.color = '';
      };
      const isEN = document.body.dataset.lang === 'en';
      const endpoint = form.dataset.formspreeEndpoint;
      const live = endpoint && endpoint.includes('formspree.io/f/') && !endpoint.includes('YOUR_FORMSPREE_ID');

      btn.disabled = true;
      btn.textContent = isEN ? 'Sending…' : 'Invio in corso…';

      if (!live) {
        // Demo path: simulate success
        setTimeout(() => {
          setStatus('✓ ' + (isEN ? 'Sent — we\'ll be in touch' : 'Inviato — vi ricontattiamo'), true);
          setTimeout(() => { reset(); form.reset(); }, 3500);
        }, 700);
        return;
      }

      try {
        const data = new FormData(form);
        const res = await fetch(endpoint, {
          method: 'POST',
          body: data,
          headers: { Accept: 'application/json' }
        });
        if (res.ok) {
          setStatus('✓ ' + (isEN ? 'Sent — we\'ll be in touch' : 'Inviato — vi ricontattiamo'), true);
          setTimeout(() => { reset(); form.reset(); }, 3500);
        } else {
          throw new Error('http_' + res.status);
        }
      } catch (err) {
        setStatus('✕ ' + (isEN ? 'Send failed — try email below' : 'Errore — usa l\'email qui sotto'), false);
        setTimeout(reset, 4000);
      }
    });
  }

  // ----- IT / EN toggle -----
  const dict = {
    en: {
      nav_problem: 'The problem', nav_method: 'Method', nav_pillars: 'Pillars',
      nav_card: 'Card', nav_map: 'Territories', nav_contact: 'Contact', nav_op: 'Operators',
      cta_nav: 'Let\'s talk',
      hero_kicker: 'BENEFIT COMPANY · TERRITORIAL PLATFORM',
      hero_l1: 'Territories have content', hero_l2: 'everywhere', hero_l3: '.',
      hero_l4: 'But', hero_l5: 'no system', hero_l6: '.',
      hero_lead: 'Hearth builds a living digital base of the territory.\nContent, cards, guides, QR codes and portals — always up to date.',
      cta_primary: 'Map your territory',
      cta_secondary: 'How it works',
      hero_meta_for: 'For municipalities, public bodies and local operators',
      hero_meta_year: 'Overview 2026',

      problem_eyebrow: '01 / Today',
      problem_t1: 'Photos scattered. Uncoordinated socials.',
      problem_t2: 'Old websites. Tourist-board PDFs.',
      problem_t3: 'Events told once and then forgotten.',
      problem_lead: 'It\'s not a communication problem.', problem_lead_strong: 'There\'s no usable base.',
      scrub_from: 'DISPERSION', scrub_to: 'SYSTEM',

      pillars_eyebrow: '02 / What we tell',
      pillars_t1: 'Four pillars to', pillars_t2: 'tell a territory', pillars_t3: '.',
      pillar_1_ttl: 'Places', pillar_1_meta: 'Villages, churches, paths, viewpoints. Every spot becomes a living card.',
      pillar_2_ttl: 'People & community', pillar_2_meta: 'Artisans, farmers, custodians, associations. The territory is first the people who live it.',
      pillar_3_ttl: 'Products & activity', pillar_3_meta: 'Food, wine, crafts, shops. The local economy becomes tellable.',
      pillar_4_ttl: 'Events & seasons', pillar_4_meta: 'Festivals, markets, anniversaries, town rhythms. The real calendar of a territory.',

      card_eyebrow: '03 / The living card',
      card_t1: 'One digital core.', card_t2: 'Many concrete uses, every day.',
      card_lead: 'Each place, person, product or event becomes a structured card. From there: guides, maps, QR codes, portals and partner materials.',
      card_act_1: 'Itinerary', card_act_2: 'Save',
      card_foot_lab: 'From this card:',
      out_qr_lab: 'On-territory QR', out_qr_ttl: 'Square panel', out_qr_meta: 'Printed on the totem · links to the card',
      out_guide_lab: 'Digital guide', out_guide_ttl: "For the municipality's portal", out_guide_meta: 'Updatable · reusable for grant applications',
      out_app_lab: 'Territory app', out_app_ttl: 'What\'s on now', out_app_meta: 'Location · hours · seasons',

      method_eyebrow: '05 / How it works',
      method_t1: 'From the territory', method_t2: 'to the platform', method_t3: '.',
      step_1_ttl: 'Mapping & priorities', step_1_meta: 'We figure out what to tell first, where to start, which content really matters.',
      step_2_ttl: 'Content production', step_2_meta: 'Photos, videos and texts gathered on the ground, with the community.',
      step_3_ttl: 'Digital structuring', step_3_meta: 'Each piece of content becomes an ordered, reusable, searchable card.',
      step_4_ttl: 'Publishing & activation', step_4_meta: 'Guides, maps, QR codes, cards and ready-to-use materials.',
      step_5_ttl: 'Continuous update', step_5_meta: 'The base stays alive and changes with the territory, year after year.',

      op_eyebrow: '04 / Operators and partners',
      op_t1: 'Not just municipalities.', op_t2: 'The whole territory.',
      op_lead: 'Shops, producers, guides, experiences. Hearth also gathers and structures those who live the territory every day.',
      op_1_pin: 'Happening now', op_1_cap: 'Borgo Vecchio',
      op_1_ttl: 'Silvestri wood-fired bakery',
      op_1_m1: 'Borgo Vecchio', op_1_m2: 'open', op_1_m3: 'warm bread',
      op_1_q: '"Opens at 7. Warm bread, 7 minutes ago."',
      op_1_tag: 'Visible in guide · activatable now',
      op_2_pin: 'Local rhythm', op_2_cap: 'Living harbour',
      op_2_ttl: 'Nicola, fisherman',
      op_2_m1: 'Living harbour', op_2_m2: 'boats returning', op_2_m3: 'every morning',
      op_2_q: '"Fish arrives when the village wakes up."',
      op_2_tag: 'Local story · narrative content',
      op_3_pin: 'Experience', op_3_cap: 'Winery · September',
      op_3_ttl: 'Harvest with Giovanni',
      op_3_m1: 'Winery', op_3_m2: '4h', op_3_m3: 'September / October',
      op_3_q: '"Three rows, one table, a real story."',
      op_3_tag: 'Experience · partner-buildable',

      map_eyebrow: '06 / Active cases',
      map_t1: 'We\'ve already done this in', map_t2: 'very different territories', map_t3: '.',
      map_lead: 'Capraia, Agnone, Fabbriche di Vergemoli, Florence. Islands, villages, inland areas, art cities. Different patrimonies, same method.',
      map_stat_places: 'places', map_stat_people: 'people', map_stat_events: 'events',

      model_eyebrow: '07 / The model',
      model_t1: 'Initial activation', model_t2: '+ ongoing update', model_t3: '.',
      model_phase_1: 'Phase 1 · one-off', model_1_ttl: 'Start — the digital core',
      model_1_meta: 'Initial build of the base: mapping, content, cards, archive and first publication.',
      model_1_foot: 'Launch in a few months',
      model_phase_2: 'Phase 2 · annual', model_2_ttl: 'Continuity — the base stays alive',
      model_2_meta: 'Annual fee to update content, add new cards and keep guides, QR codes and materials always usable.',
      model_2_foot: 'Recurring',
      model_foot: 'Recommended minimum: <strong>three years</strong>. Territorial development is not a one-off campaign.',

      impact_eyebrow: '08 / Impact',
      impact_t1: 'More order. More content.', impact_t2: 'More capacity to develop value.',
      imp_1_t: 'Territory more readable', imp_1_m: 'A single starting point to know what\'s there and why it matters.',
      imp_2_t: 'Reusable content', imp_2_m: 'One card, many uses: portal, QR, social, brochure, grant.',
      imp_3_t: 'Coordinated local network', imp_3_m: 'Municipality, operators and community work on a shared base.',
      imp_4_t: 'Ready for grants', imp_4_m: 'Tidy, citable, reusable materials when needed.',
      imp_5_t: 'Fewer restarts from zero', imp_5_m: 'Every new project starts from content already in place.',

      contact_kicker: 'Hearth · Benefit Company',
      contact_t1: 'Have a territory to', contact_t2: 'organize', contact_t3: '?',
      contact_lead: 'Let\'s start from the first digital core. We map, produce and organize. Then it stays alive over time.',
      form_who: 'Who you are', form_who_ph: 'Select…',
      form_who_1: 'Municipality / public body', form_who_2: 'Operator / local partner', form_who_3: 'Tourist board / association', form_who_4: 'Other',
      form_territory: 'Territory', form_territory_ph: 'Town, area, island…',
      form_email: 'Email',
      form_msg: 'What you\'d like to tell', form_msg_ph: 'Even just two lines…',
      form_send: 'Send', form_or: 'Or write to us at',

      foot_sub: 'The patrimony of territories, organized.',
      foot_h_contact: 'Contact', foot_h_legal: 'Legal',
      foot_legal_2: 'Overview 2026', foot_made: 'Made for territories',

      trust_lab: 'They chose Hearth',
      tm_capraia: 'Island · LI', tm_vergemoli: 'Diffuse villages · LU',
      tm_agnone: 'Inland area · IS', tm_firenze: 'Art city · FI',
      trust_foot: '+ new activations in progress.', trust_cta: 'Add your territory →',
      map_read_case: 'Read the full case →',
    }
  };
  const itDefaults = {};
  document.querySelectorAll('[data-i18n]').forEach(el => itDefaults[el.dataset.i18n] = el.innerHTML);
  document.querySelectorAll('[data-i18n-ph]').forEach(el => itDefaults['__ph_' + el.dataset.i18nPh] = el.placeholder);

  function setLang(lang) {
    document.body.dataset.lang = lang;
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const k = el.dataset.i18n;
      if (lang === 'it') el.innerHTML = itDefaults[k] ?? el.innerHTML;
      else if (dict.en[k] !== undefined) el.innerHTML = dict.en[k];
    });
    document.querySelectorAll('[data-i18n-ph]').forEach(el => {
      const k = el.dataset.i18nPh;
      if (lang === 'it') el.placeholder = itDefaults['__ph_' + k] ?? el.placeholder;
      else if (dict.en[k] !== undefined) el.placeholder = dict.en[k];
    });
    try { localStorage.setItem('hearth_lang', lang); } catch (e) {}
  }
  const langBtn = document.getElementById('langToggle');
  if (langBtn) {
    langBtn.addEventListener('click', () => {
      setLang(document.body.dataset.lang === 'en' ? 'it' : 'en');
    });
  }
  try {
    const stored = localStorage.getItem('hearth_lang');
    if (stored && stored !== 'it') setLang(stored);
  } catch (e) {}
})();
