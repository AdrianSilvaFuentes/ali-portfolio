/* ═══ Dev Grabber ═══
   Click        → abre menu (copiar seletor / copiar CSS)
   ⌘C / Ctrl+C  → copia seletor curto + HTML
   ⌘G           → ativa / desativa
   Esc          → fecha menu
   Badge fixo   → canto inferior direito
*/
(function () {
  let active = false;
  const IGNORE = new WeakSet();

  const hl = document.createElement('div');
  hl.style.cssText = 'position:fixed;z-index:99998;pointer-events:none;outline:2px solid #0360FD;background:rgba(3,96,253,.07);border-radius:3px;opacity:0;transition:opacity .1s;';
  document.body.appendChild(hl);
  IGNORE.add(hl);

  const tip = document.createElement('div');
  tip.style.cssText = 'position:fixed;z-index:99999;pointer-events:none;background:#0f1117;color:#e2e8f0;font:600 11px/1 monospace;padding:4px 8px;border-radius:5px;white-space:nowrap;opacity:0;transition:opacity .1s;';
  document.body.appendChild(tip);
  IGNORE.add(tip);

  const toast = document.createElement('div');
  toast.style.cssText = 'position:fixed;bottom:20px;left:50%;transform:translateX(-50%);z-index:100001;background:#0f1117;color:#fff;font:500 12px/1 sans-serif;padding:8px 18px;border-radius:8px;opacity:0;transition:opacity .2s;pointer-events:none;white-space:nowrap;';
  document.body.appendChild(toast);
  IGNORE.add(toast);

  const badge = document.createElement('button');
  badge.textContent = 'Grab';
  badge.style.cssText = 'position:fixed;bottom:16px;right:16px;z-index:99999;padding:5px 12px;border-radius:999px;border:1.5px solid #0360FD;background:#fff;color:#0360FD;font:600 11px/1 sans-serif;cursor:pointer;opacity:.55;transition:opacity .15s,background .15s,color .15s;letter-spacing:.03em;';
  badge.title = 'Ativar Grab (⌘G)';
  document.body.appendChild(badge);
  IGNORE.add(badge);

  const menu = document.createElement('div');
  menu.style.cssText = 'position:fixed;z-index:100000;background:#0f1117;border:1px solid #2d3748;border-radius:8px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,.5);opacity:0;pointer-events:none;transition:opacity .1s;min-width:180px;';
  document.body.appendChild(menu);
  IGNORE.add(menu);

  let hovered = null;
  let toastTimer;
  let menuVisible = false;
  const hiddenEls = new Map();

  function setActive(val) {
    active = val;
    badge.textContent = active ? '✦ Grab ON' : 'Grab';
    badge.style.background = active ? '#0360FD' : '#fff';
    badge.style.color = active ? '#fff' : '#0360FD';
    badge.style.opacity = active ? '1' : '.55';
    if (!active) { hl.style.opacity = '0'; tip.style.opacity = '0'; hideMenu(); restoreHidden(); }
  }

  badge.addEventListener('click', () => setActive(!active));

  function getLabel(el) {
    const tag = el.tagName.toLowerCase();
    const id = el.id ? `#${el.id}` : '';
    const cls = Array.from(el.classList).slice(0, 2).map(c => `.${c}`).join('');
    return `<${tag}${id}${cls}>`;
  }

  function shortSelector(el) {
    const tag = el.tagName.toLowerCase();
    const id = el.id ? `#${el.id}` : '';
    const classes = Array.from(el.classList).map(c => `.${c}`).join('');
    return `${tag}${id}${classes}`;
  }

  function getMatchedCSS(el) {
    const decls = new Map();
    for (const sheet of document.styleSheets) {
      let rules;
      try { rules = sheet.cssRules; } catch (_) { continue; }
      for (const rule of rules || []) {
        if (!rule.style || !rule.selectorText) continue;
        let matched;
        try { matched = el.matches(rule.selectorText); } catch (_) { continue; }
        if (!matched) continue;
        for (let i = 0; i < rule.style.length; i++) {
          const p = rule.style[i];
          decls.set(p, rule.style.getPropertyValue(p).trim());
        }
      }
    }
    if (!decls.size) return '/* nenhuma regra encontrada */';

    const GROUPS = [
      ['Layout', ['display','position','top','right','bottom','left','z-index',
        'width','height','min-width','max-width','min-height','max-height',
        'flex','flex-direction','flex-wrap','flex-grow','flex-shrink','flex-basis',
        'justify-content','justify-items','justify-self','align-content','align-items','align-self',
        'gap','row-gap','column-gap',
        'padding','padding-top','padding-right','padding-bottom','padding-left',
        'margin','margin-top','margin-right','margin-bottom','margin-left',
        'overflow','overflow-x','overflow-y','box-sizing','float','clear',
        'grid','grid-template-columns','grid-template-rows','grid-area','grid-column','grid-row']],
      ['Style', ['background','background-color','background-image','background-size',
        'background-position','background-repeat',
        'border','border-top','border-right','border-bottom','border-left',
        'border-color','border-width','border-style',
        'border-radius','border-top-left-radius','border-top-right-radius',
        'border-bottom-left-radius','border-bottom-right-radius',
        'outline','box-shadow','opacity','visibility','cursor','pointer-events',
        'filter','backdrop-filter']],
      ['Typography', ['font','font-family','font-size','font-weight','font-style',
        'line-height','letter-spacing','text-align','text-decoration','text-transform',
        'text-overflow','color','white-space','word-break']],
      ['Transition', ['transition','animation','transform','transform-origin','will-change']],
    ];

    const placed = new Set();
    const sections = [];

    for (const [name, props] of GROUPS) {
      const lines = [];
      for (const p of props) {
        if (decls.has(p)) { lines.push(`${p}: ${decls.get(p)};`); placed.add(p); }
      }
      if (lines.length) sections.push({ name, lines });
    }

    const other = [];
    for (const [p, v] of decls) { if (!placed.has(p)) other.push(`${p}: ${v};`); }
    if (other.length) sections.push({ name: 'Other', lines: other });

    return sections.map((s, i) => {
      const isLast = i === sections.length - 1;
      return `${s.name}:\n${s.lines.join('\n')}${isLast ? '' : '\n-------'}`;
    }).join('\n');
  }

  function highlight(el) {
    const r = el.getBoundingClientRect();
    hl.style.top = r.top + 'px';
    hl.style.left = r.left + 'px';
    hl.style.width = r.width + 'px';
    hl.style.height = r.height + 'px';
    hl.style.opacity = '1';
    const label = getLabel(el).replace(/</g, '&lt;').replace(/>/g, '&gt;');
    tip.innerHTML = `${label}<span style="margin-left:9px;font-weight:400;color:#38bdf8">${Math.round(r.width)}×${Math.round(r.height)}px</span>`;
    const tipTop = r.top < 26 ? r.bottom + 4 : r.top - 22;
    tip.style.top = tipTop + 'px';
    tip.style.left = r.left + 'px';
    tip.style.opacity = '1';
  }

  function showToast(msg) {
    toast.textContent = msg;
    toast.style.opacity = '1';
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.style.opacity = '0', 2200);
  }

  function restoreHidden() {
    for (const [el, orig] of hiddenEls) {
      el.style.opacity = orig.opacity;
      el.style.pointerEvents = orig.pointerEvents;
      el.style.outline = orig.outline;
    }
    hiddenEls.clear();
  }

  function hideMenu() {
    menu.style.opacity = '0';
    menu.style.pointerEvents = 'none';
    menuVisible = false;
  }

  function menuItem(label, icon, onClick) {
    const btn = document.createElement('button');
    btn.style.cssText = 'display:flex;align-items:center;gap:8px;width:100%;padding:9px 14px;background:none;border:none;border-bottom:1px solid #1a2035;color:#e2e8f0;font:500 12px/1 sans-serif;text-align:left;cursor:pointer;white-space:nowrap;box-sizing:border-box;';
    btn.innerHTML = `<span style="opacity:.5;font-size:13px">${icon}</span>${label}`;
    btn.addEventListener('mouseenter', () => { btn.style.background = '#1a2538'; });
    btn.addEventListener('mouseleave', () => { btn.style.background = 'none'; });
    btn.addEventListener('click', e => { e.stopPropagation(); onClick(); });
    return btn;
  }

  function showMenu(x, y, el) {
    menu.innerHTML = '';

    const itemSelector = menuItem('Copiar seletor', '⬡', () => {
      navigator.clipboard.writeText(shortSelector(el)).then(() => showToast('✦ Seletor copiado'));
      hideMenu();
    });
    const itemCSS = menuItem('Copiar CSS', '✦', () => {
      navigator.clipboard.writeText(getMatchedCSS(el)).then(() => showToast('✦ CSS copiado'));
      hideMenu();
    });

    const sep = document.createElement('div');
    sep.style.cssText = 'height:1px;background:#2d3748;margin:2px 0;';

    const isHidden = hiddenEls.has(el);
    const itemHide = menuItem(isHidden ? 'Mostrar div' : 'Ocultar div', '◻', () => {
      if (hiddenEls.has(el)) {
        const orig = hiddenEls.get(el);
        el.style.opacity = orig.opacity;
        el.style.pointerEvents = orig.pointerEvents;
        el.style.outline = orig.outline;
        hiddenEls.delete(el);
        showToast('◻ Div restaurado');
      } else {
        hiddenEls.set(el, { opacity: el.style.opacity, pointerEvents: el.style.pointerEvents, outline: el.style.outline });
        el.style.opacity = '0';
        el.style.pointerEvents = 'none';
        el.style.outline = 'none';
        showToast('◻ Div oculto — desative o Grab para restaurar');
      }
      hideMenu();
    });
    itemHide.style.borderBottom = 'none';

    menu.appendChild(itemSelector);
    menu.appendChild(itemCSS);
    menu.appendChild(sep);
    menu.appendChild(itemHide);

    // position: clamp to viewport
    menu.style.left = '0px';
    menu.style.top = '0px';
    menu.style.opacity = '1';
    menu.style.pointerEvents = 'all';
    menuVisible = true;

    const mw = menu.offsetWidth;
    const mh = menu.offsetHeight;
    const left = Math.min(x + 4, window.innerWidth - mw - 8);
    const top  = Math.min(y + 4, window.innerHeight - mh - 8);
    menu.style.left = left + 'px';
    menu.style.top  = top + 'px';
  }

  document.addEventListener('mousemove', e => {
    if (!active || menuVisible) return;
    const el = e.target;
    if (IGNORE.has(el)) return;
    hovered = el;
    highlight(el);
  });

  document.addEventListener('mouseleave', () => {
    hovered = null;
    hl.style.opacity = '0';
    tip.style.opacity = '0';
  });

  document.addEventListener('click', e => {
    if (!active) return;
    if (IGNORE.has(e.target) || menu.contains(e.target)) return;
    e.preventDefault();
    e.stopPropagation();
    if (menuVisible) { hideMenu(); return; }
    const el = hovered || e.target;
    showMenu(e.clientX, e.clientY, el);
  }, true);

  document.addEventListener('keydown', e => {
    if (e.metaKey && e.code === 'KeyG') { setActive(!active); return; }
    if (e.key === 'Alt' && active && hovered && !menuVisible) {
      e.preventDefault();
      const r = hovered.getBoundingClientRect();
      showMenu(r.left, r.bottom + 4, hovered);
      return;
    }
    if (e.key === 'Escape' && menuVisible) { hideMenu(); return; }

    if (active && hovered && !menuVisible) {
      if (e.key === 'ArrowUp') {
        e.preventDefault();
        const parent = hovered.parentElement;
        if (parent && parent !== document.body) { hovered = parent; highlight(parent); }
        return;
      }
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        const child = Array.from(hovered.children).find(c => !IGNORE.has(c));
        if (child) { hovered = child; highlight(child); }
        return;
      }
    }

    if (!(e.metaKey || e.ctrlKey) || e.key !== 'c') return;
    if (!active || !hovered) return;
    if (window.getSelection()?.toString().length > 0) return;
    e.preventDefault();
    const rawHtml = hovered.outerHTML;
    const html = rawHtml.length > 3000 ? rawHtml.slice(0, 3000) + '\n…[truncado]' : rawHtml;
    navigator.clipboard.writeText(`${shortSelector(hovered)}\n\n${html}`)
      .then(() => showToast('✦ Seletor + HTML copiados — cole no Claude'));
  });
})();
