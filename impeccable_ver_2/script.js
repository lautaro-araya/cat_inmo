(() => {
  const stateBar = document.getElementById('filter-state');
  const secBar   = document.getElementById('filter-sec');
  const table    = document.getElementById('lot-table');
  if (!stateBar || !table) return;

  const rows   = Array.from(table.querySelectorAll('tbody tr'));
  const rowSec = new Map(rows.map(r => [r, r.querySelector('.c-sec')?.textContent.trim() ?? '']));

  let activeState = 'todos';
  let activeSec   = 'A';

  function apply() {
    for (const r of rows) {
      const stateOk = activeState === 'todos' || r.dataset.state === activeState;
      const secOk   = rowSec.get(r) === activeSec;
      r.dataset.hidden = (stateOk && secOk) ? 'false' : 'true';
    }
  }

  apply();

  stateBar.addEventListener('click', e => {
    const btn = e.target.closest('.filt');
    if (!btn) return;
    activeState = btn.dataset.filter;
    for (const b of stateBar.querySelectorAll('.filt')) {
      const on = b === btn;
      b.classList.toggle('is-active', on);
      b.setAttribute('aria-pressed', String(on));
    }
    apply();
  });

  secBar.addEventListener('click', e => {
    const btn = e.target.closest('.filt');
    if (!btn) return;
    activeSec = btn.dataset.sec;
    for (const b of secBar.querySelectorAll('.filt')) {
      const on = b === btn;
      b.classList.toggle('is-active', on);
      b.setAttribute('aria-pressed', String(on));
    }
    apply();
  });
})();
