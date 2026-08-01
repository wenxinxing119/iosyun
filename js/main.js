// === Main Script ===
document.addEventListener('DOMContentLoaded', () => {
  initBackToTop();
  initSearch();
  initMobileMenu();
});

function initMobileMenu() {
  const btn = document.querySelector('.nav-mobile');
  if (btn) {
    btn.addEventListener('click', () => {
      document.querySelector('.nav-links').classList.toggle('show');
    });
  }
  // Close menu when clicking a link
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.addEventListener('click', () => {
      document.querySelector('.nav-links').classList.remove('show');
    });
  });
}

function initBackToTop() {
  const btn = document.getElementById('backToTop');
  if (!btn) return;
  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 400);
  });
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

function initSearch() {
  const searchInput = document.getElementById('heroSearch');
  if (searchInput) {
    searchInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && searchInput.value.trim()) {
        window.location.href = `category.html?search=${encodeURIComponent(searchInput.value.trim())}`;
      }
    });
  }
  const navSearch = document.getElementById('navSearch');
  if (navSearch) {
    navSearch.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && navSearch.value.trim()) {
        window.location.href = `category.html?search=${encodeURIComponent(navSearch.value.trim())}`;
      }
    });
  }
}

// === Icon Helpers ===
const iconColors = ['#007AFF','#5856D6','#FF2D55','#FF9500','#34C759','#AF52DE','#5AC8FA','#FF3B30','#FF6B35','#00B4D8','#E91E63','#7C3AED'];

function iconColor(name) {
  let hash = 0;
  for (let i = 0; i < name.length; i++) hash = name.charCodeAt(i) + ((hash << 5) - hash);
  return iconColors[Math.abs(hash) % iconColors.length];
}

function appIcon(app, size) {
  if (app.icon) {
    return `<img src="${app.icon}" alt="${app.name}" class="app-icon-img" style="width:${size}px;height:${size}px;border-radius:${size*0.25}px;flex-shrink:0;box-shadow:0 4px 12px rgba(0,0,0,.08);object-fit:cover;" loading="lazy" onerror="this.replaceWith(document.createElement('div'));this.parentElement&&this.parentElement.querySelector('.app-icon-fallback')&&appIconFallback(app,size,this.parentElement)">`;
  }
  const color = iconColor(app.name);
  const fontSize = Math.round(size * 0.42);
  const letter = app.name.charAt(0);
  return `<div class="app-icon-placeholder" style="width:${size}px;height:${size}px;border-radius:${size*0.25}px;background:${color};display:flex;align-items:center;justify-content:center;color:#fff;font-size:${fontSize}px;font-weight:700;flex-shrink:0;box-shadow:0 4px 12px ${color}44;">${letter}</div>`;
}

// === App Card Renderer ===
function createAppCard(app) {
  let badgeHTML = '';
  if (app.isFree && app.originalPrice) badgeHTML = '<span class="badge badge-free">限免</span>';
  else if (app.isHot) badgeHTML = '<span class="badge badge-hot">热门</span>';
  else if (app.originalPrice) badgeHTML = '<span class="badge badge-off">降价</span>';

  return `
    <div class="app-card" onclick="window.location.href='detail.html?id=${app.id}'">
      ${badgeHTML}
      ${appIcon(app, 64)}
      <div class="card-title">${app.name}</div>
      <div class="card-category">${app.category}</div>
      <div class="card-meta">
        <span class="card-price ${app.isFree || app.price === '免费' ? 'free' : ''}">${app.price}</span>
        ${app.originalPrice ? `<span class="card-original">${app.originalPrice}</span>` : ''}
        <span class="card-rating">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
          ${app.rating}
        </span>
      </div>
    </div>
  `;
}

function createFeaturedCard(app) {
  const gradients = ['gradient-1', 'gradient-2'];
  const grad = gradients[app.id % 2];
  return `
    <div class="featured-card" onclick="window.location.href='detail.html?id=${app.id}'">
      <div class="fc-img ${grad}">
        ${appIcon(app, 80)}
      </div>
      <div class="fc-content">
        <div class="fc-tag">${app.isFree && app.originalPrice ? '今日限免' : '编辑推荐'}</div>
        <div class="fc-title">${app.name}</div>
        <div class="fc-desc">${app.description.slice(0, 60)}...</div>
      </div>
    </div>
  `;
}

// === Toast ===
function showToast(msg) {
  let toast = document.getElementById('toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(toast._timeout);
  toast._timeout = setTimeout(() => toast.classList.remove('show'), 2000);
}

// === Countdown Timer ===
function startCountdown() {
  const el = document.getElementById('countdown');
  if (!el) return;
  function update() {
    const now = new Date();
    const end = new Date(now);
    end.setHours(23, 59, 59, 999);
    const diff = end - now;
    const h = Math.floor(diff / 3600000);
    const m = Math.floor((diff % 3600000) / 60000);
    const s = Math.floor((diff % 60000) / 1000);
    el.textContent = `${String(h).padStart(2,'0')}:${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
  }
  update();
  setInterval(update, 1000);
}
