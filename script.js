'use strict';
const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();
const grid = document.getElementById('project-grid');
if (grid && typeof projects !== 'undefined') {
  const make = (tag, className, content) => { const el = document.createElement(tag); if (className) el.className = className; if (content) el.textContent = content; return el; };
  projects.forEach((project, index) => {
    const card = make('article', 'project-card');
    const cover = make('div', 'project-cover');
    if (project.image) { const img = document.createElement('img'); img.src = project.image; img.alt = `${project.title} screenshot`; img.loading = 'lazy'; cover.appendChild(img); }
    else { cover.classList.add('placeholder', `placeholder-${index % 3}`); const emblem = make('span','project-emblem', ['⌘','{ }','◇'][index % 3]); emblem.setAttribute('aria-hidden','true'); cover.appendChild(emblem); const badge = make('span','placeholder-label', 'PROJECT PREVIEW'); cover.appendChild(badge); }
    const body = make('div','project-body');
    body.appendChild(make('h3','project-title',project.title));
    body.appendChild(make('p','project-description',project.description));
    const tags = make('div','tags'); (project.technologies || []).forEach(t => tags.appendChild(make('span','',t))); body.appendChild(tags);
    if (project.github || project.demo) { const links = make('div','project-links'); [['GitHub',project.github], ['Live demo',project.demo]].forEach(([name,url]) => { if (!url) return; const a=make('a','',`${name} ↗`); a.href=url; a.target='_blank'; a.rel='noopener noreferrer'; links.appendChild(a); }); body.appendChild(links); }
    card.appendChild(cover); card.appendChild(body); grid.appendChild(card);
  });
}
