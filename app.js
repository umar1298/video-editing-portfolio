/* ===== Portfolio renderer — no build step, pure vanilla JS ===== */

/* thumbnail + embed URL helpers for each host */
function thumbFor(p){
  if (p.thumb) return p.thumb;
  if (p.host === "youtube") return `https://img.youtube.com/vi/${p.id}/hqdefault.jpg`;
  // Vimeo has no predictable public thumb URL without an API call,
  // so fall back to a dark placeholder if none supplied.
  return "assets/placeholder.svg";
}
function embedFor(p){
  if (p.host === "youtube")
    return `https://www.youtube.com/embed/${p.id}?autoplay=1&rel=0`;
  if (p.host === "vimeo")
    return `https://player.vimeo.com/video/${p.id}?autoplay=1`;
  return "";
}

const PLAY_ICON = `<svg viewBox="0 0 68 68" fill="none">
  <circle cx="34" cy="34" r="33" fill="rgba(0,0,0,.45)" stroke="#fff" stroke-opacity=".85" stroke-width="2"/>
  <path d="M27 22l22 12-22 12V22z" fill="#fff"/></svg>`;

/* ---------- populate profile text ---------- */
function fillProfile(){
  const set = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
  set("brandName", PROFILE.name);
  set("footName", PROFILE.name);
  set("heroName", PROFILE.name);
  set("heroTagline", PROFILE.tagline);
  set("heroIntro", PROFILE.intro);
  set("aboutText", PROFILE.intro);
  document.title = `${PROFILE.name} — ${PROFILE.tagline}`;

  const email = document.getElementById("emailLink");
  if (email){ email.textContent = PROFILE.email; email.href = `mailto:${PROFILE.email}`; }

  const socials = document.getElementById("socials");
  if (socials) socials.innerHTML = PROFILE.socials
    .map(s => `<a href="${s.url}" target="_blank" rel="noopener">${s.label}</a>`).join("");

  // skills = unique tools across all projects
  const tools = [...new Set(PROJECTS.flatMap(p => p.tools.split(",").map(t => t.trim())))];
  const skills = document.getElementById("skills");
  if (skills) skills.innerHTML = tools.map(t => `<span class="skill">${t}</span>`).join("");
}

/* ---------- cards ---------- */
function cardHTML(p, i){
  return `<article class="card reveal" data-cat="${p.category}" data-index="${i}" style="transition-delay:${(i%3)*60}ms">
    <div class="thumb">
      <img loading="lazy" src="${thumbFor(p)}" alt="${p.title}" onerror="this.src='assets/placeholder.svg'"/>
      <div class="play-badge">${PLAY_ICON}</div>
    </div>
    <div class="card-body">
      <h3>${p.title}</h3>
      <div class="card-role">${p.role}</div>
      <div class="card-tools">${p.tools}</div>
    </div>
  </article>`;
}

function renderGrid(filter="All"){
  const grid = document.getElementById("grid");
  grid.innerHTML = PROJECTS
    .map((p,i)=>({p,i}))
    .filter(({p}) => filter === "All" || p.category === filter)
    .map(({p,i}) => cardHTML(p,i))
    .join("");
  observeReveals();
}

/* ---------- filters ---------- */
function renderFilters(){
  const cats = ["All", ...new Set(PROJECTS.map(p => p.category))];
  const wrap = document.getElementById("filters");
  wrap.innerHTML = cats.map((c,i) =>
    `<button class="filter-btn ${i===0?'active':''}" data-cat="${c}">${c}</button>`).join("");
  wrap.addEventListener("click", e => {
    const btn = e.target.closest(".filter-btn"); if(!btn) return;
    wrap.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    renderGrid(btn.dataset.cat);
  });
}

/* ---------- lightbox ---------- */
const lb = document.getElementById("lightbox");
function openLightbox(p){
  document.getElementById("lbFrame").innerHTML =
    `<iframe src="${embedFor(p)}" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>`;
  document.getElementById("lbTitle").textContent = p.title;
  document.getElementById("lbSub").textContent = `${p.role} — ${p.tools}`;
  lb.classList.add("open"); lb.setAttribute("aria-hidden","false");
  document.body.style.overflow = "hidden";
}
function closeLightbox(){
  lb.classList.remove("open"); lb.setAttribute("aria-hidden","true");
  document.getElementById("lbFrame").innerHTML = "";   // stops playback
  document.body.style.overflow = "";
}
document.getElementById("grid").addEventListener("click", e => {
  const card = e.target.closest(".card"); if(!card) return;
  openLightbox(PROJECTS[+card.dataset.index]);
});
document.getElementById("lbClose").addEventListener("click", closeLightbox);
lb.addEventListener("click", e => { if (e.target === lb) closeLightbox(); });
document.addEventListener("keydown", e => { if (e.key === "Escape") closeLightbox(); });

/* ---------- scroll reveal ---------- */
let io;
function observeReveals(){
  if (!io) io = new IntersectionObserver(entries => {
    entries.forEach(en => { if (en.isIntersecting){ en.target.classList.add("in"); io.unobserve(en.target);} });
  }, { threshold:.12 });
  document.querySelectorAll(".reveal").forEach(el => io.observe(el));
}

/* ---------- boot ---------- */
fillProfile();
renderFilters();
renderGrid();
