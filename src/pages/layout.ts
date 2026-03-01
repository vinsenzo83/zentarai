import { PROJECT } from '../data'

export function layout(title: string, body: string, extraHead = ''): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>${title} | ${PROJECT.name}</title>
  <meta name="description" content="${PROJECT.description}"/>
  <meta name="theme-color" content="${PROJECT.color}"/>
  <meta property="og:title" content="${title} | ${PROJECT.name}"/>
  <meta property="og:description" content="${PROJECT.description}"/>
  <meta property="og:type" content="website"/>
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css"/>
  <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
  ${extraHead}
  <style>
    :root {
      --c: ${PROJECT.color};
      --cd: ${PROJECT.colorDark};
      --cl: ${PROJECT.colorLight};
    }
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { background: #070d10; color: #e2e8f0; font-family: 'Inter', system-ui, sans-serif; overflow-x: hidden; }
    
    /* Scrollbar */
    ::-webkit-scrollbar { width: 6px; }
    ::-webkit-scrollbar-track { background: #0d1b22; }
    ::-webkit-scrollbar-thumb { background: ${PROJECT.color}55; border-radius: 3px; }

    /* Navbar */
    .navbar { position: fixed; top: 0; left: 0; right: 0; z-index: 100;
      background: rgba(7,13,16,0.85); backdrop-filter: blur(20px);
      border-bottom: 1px solid rgba(16,185,129,0.15);
      height: 64px; display: flex; align-items: center; padding: 0 2rem;
      justify-content: space-between; }
    .nav-logo { display: flex; align-items: center; gap: 0.75rem; text-decoration: none; }
    .nav-logo-icon { width: 36px; height: 36px; background: linear-gradient(135deg, ${PROJECT.color}, ${PROJECT.colorDark});
      border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 1rem; color: white; }
    .nav-logo-text { font-size: 1.2rem; font-weight: 800; background: linear-gradient(135deg, ${PROJECT.color}, ${PROJECT.colorLight});
      -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
    .nav-links { display: flex; align-items: center; gap: 1.5rem; }
    .nav-link { color: #94a3b8; text-decoration: none; font-size: 0.875rem; transition: color 0.2s; }
    .nav-link:hover { color: ${PROJECT.color}; }
    .nav-link.active { color: ${PROJECT.color}; }
    .nav-btn { padding: 0.5rem 1.25rem; background: ${PROJECT.color}; color: white; border-radius: 0.5rem;
      text-decoration: none; font-size: 0.875rem; font-weight: 600; transition: all 0.2s; border: none; cursor: pointer; }
    .nav-btn:hover { background: ${PROJECT.colorDark}; transform: translateY(-1px); }

    /* Main content */
    .page-wrap { padding-top: 64px; min-height: 100vh; }

    /* Hero gradient bg */
    .hero-bg { background: radial-gradient(ellipse 80% 60% at 50% -10%, ${PROJECT.color}20 0%, transparent 70%); }

    /* Section */
    .section { padding: 5rem 2rem; max-width: 1200px; margin: 0 auto; }
    .section-sm { padding: 3rem 2rem; max-width: 1200px; margin: 0 auto; }
    
    /* Cards */
    .card { background: rgba(255,255,255,0.03); border: 1px solid rgba(16,185,129,0.12);
      border-radius: 1rem; padding: 1.5rem; transition: all 0.3s; }
    .card:hover { border-color: ${PROJECT.color}40; transform: translateY(-2px);
      box-shadow: 0 8px 32px ${PROJECT.color}15; }

    /* Buttons */
    .btn-primary { display: inline-flex; align-items: center; gap: 0.5rem;
      padding: 0.75rem 1.75rem; background: linear-gradient(135deg, ${PROJECT.color}, ${PROJECT.colorDark});
      color: white; border-radius: 0.625rem; font-weight: 700; font-size: 0.95rem;
      text-decoration: none; border: none; cursor: pointer; transition: all 0.2s; }
    .btn-primary:hover { opacity: 0.9; transform: translateY(-2px); box-shadow: 0 8px 24px ${PROJECT.color}40; }
    .btn-outline { display: inline-flex; align-items: center; gap: 0.5rem;
      padding: 0.75rem 1.75rem; border: 1.5px solid ${PROJECT.color}; color: ${PROJECT.color};
      border-radius: 0.625rem; font-weight: 600; font-size: 0.95rem; text-decoration: none;
      background: transparent; cursor: pointer; transition: all 0.2s; }
    .btn-outline:hover { background: ${PROJECT.color}15; transform: translateY(-2px); }

    /* Badge */
    .badge { display: inline-flex; align-items: center; gap: 0.3rem;
      padding: 0.25rem 0.75rem; border-radius: 999px; font-size: 0.72rem; font-weight: 600; }
    .badge-green { background: rgba(16,185,129,0.15); color: ${PROJECT.color}; border: 1px solid ${PROJECT.color}30; }
    .badge-yellow { background: rgba(251,191,36,0.15); color: #fbbf24; border: 1px solid #fbbf2430; }
    .badge-gray { background: rgba(100,116,139,0.15); color: #94a3b8; border: 1px solid #94a3b830; }

    /* Section title */
    .section-title { font-size: 2rem; font-weight: 800; color: white; margin-bottom: 0.75rem; }
    .section-sub { font-size: 1rem; color: #64748b; margin-bottom: 3rem; }
    .gradient-text { background: linear-gradient(135deg, ${PROJECT.color}, ${PROJECT.colorLight});
      -webkit-background-clip: text; -webkit-text-fill-color: transparent; }

    /* Grid */
    .grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; }
    .grid-3 { display: grid; grid-template-columns: repeat(3,1fr); gap: 1.5rem; }
    .grid-4 { display: grid; grid-template-columns: repeat(4,1fr); gap: 1.25rem; }
    @media (max-width: 900px) {
      .grid-2, .grid-3, .grid-4 { grid-template-columns: 1fr 1fr; }
      .nav-links { display: none; }
    }
    @media (max-width: 600px) {
      .grid-2, .grid-3, .grid-4 { grid-template-columns: 1fr; }
      .section { padding: 3rem 1rem; }
    }

    /* Footer */
    .footer { border-top: 1px solid rgba(16,185,129,0.1); padding: 3rem 2rem;
      background: rgba(7,13,16,0.8); }

    /* Glow animation */
    @keyframes glow-pulse { 0%,100%{opacity:.4} 50%{opacity:.8} }
    .glow-orb { position: absolute; border-radius: 50%; filter: blur(80px); animation: glow-pulse 4s ease-in-out infinite; pointer-events: none; }

    /* Stat */
    .stat-val { font-size: 2.5rem; font-weight: 900; color: ${PROJECT.color}; line-height: 1; }
    .stat-lbl { font-size: 0.8rem; color: #64748b; margin-top: 0.25rem; }

    /* Form */
    .form-input { width: 100%; padding: 0.75rem 1rem; background: rgba(255,255,255,0.05);
      border: 1px solid rgba(16,185,129,0.2); border-radius: 0.5rem; color: white;
      font-size: 0.9rem; outline: none; transition: border-color 0.2s; }
    .form-input:focus { border-color: ${PROJECT.color}; }
    .form-input::placeholder { color: #475569; }
    .form-label { display: block; font-size: 0.8rem; color: #94a3b8; margin-bottom: 0.375rem; font-weight: 500; }

    /* Divider */
    .divider { border: none; border-top: 1px solid rgba(255,255,255,0.06); margin: 2.5rem 0; }

    /* Accordion (FAQ) */
    .faq-item { border-bottom: 1px solid rgba(255,255,255,0.06); }
    .faq-q { width: 100%; text-align: left; background: none; border: none; color: #e2e8f0;
      padding: 1.25rem 0; font-size: 0.95rem; font-weight: 600; cursor: pointer;
      display: flex; justify-content: space-between; align-items: center; }
    .faq-a { max-height: 0; overflow: hidden; transition: max-height 0.3s; color: #94a3b8; font-size: 0.875rem; line-height: 1.7; padding-bottom: 0; }
    .faq-a.open { max-height: 200px; padding-bottom: 1.25rem; }

    /* Progress bar */
    .prog-bar { height: 6px; background: rgba(255,255,255,0.06); border-radius: 3px; overflow: hidden; }
    .prog-fill { height: 100%; border-radius: 3px; background: linear-gradient(90deg, ${PROJECT.color}, ${PROJECT.colorLight}); transition: width 1s ease; }

    /* Timeline */
    .timeline-dot { width: 12px; height: 12px; border-radius: 50%; flex-shrink: 0; }
    .timeline-line { width: 2px; background: rgba(16,185,129,0.15); flex: 1; min-height: 40px; }
  </style>
</head>
<body>
${navbar()}
<div class="page-wrap">
${body}
</div>
${footer()}
<script>
// FAQ accordion
document.querySelectorAll('.faq-q').forEach(btn => {
  btn.addEventListener('click', () => {
    const ans = btn.nextElementSibling;
    const icon = btn.querySelector('.faq-icon');
    const isOpen = ans.classList.contains('open');
    document.querySelectorAll('.faq-a').forEach(a => a.classList.remove('open'));
    document.querySelectorAll('.faq-icon').forEach(i => { i.style.transform = 'rotate(0deg)'; });
    if (!isOpen) {
      ans.classList.add('open');
      if (icon) icon.style.transform = 'rotate(45deg)';
    }
  });
});

// Animate stats on scroll
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.querySelectorAll('.prog-fill').forEach(bar => {
        bar.style.width = bar.dataset.w + '%';
      });
    }
  });
}, { threshold: 0.3 });
document.querySelectorAll('.prog-section').forEach(s => observer.observe(s));
</script>
</body>
</html>`
}

function navbar(): string {
  return `
<nav class="navbar">
  <a href="/" class="nav-logo">
    <div class="nav-logo-icon"><i class="fas fa-brain"></i></div>
    <span class="nav-logo-text">${PROJECT.name}</span>
  </a>
  <div class="nav-links">
    <a href="/" class="nav-link">Home</a>
    <a href="/whitepaper" class="nav-link">Whitepaper</a>
    <a href="/vesting" class="nav-link">Vesting</a>
    <a href="${PROJECT.urls.twitter}" target="_blank" class="nav-link"><i class="fab fa-twitter"></i> Twitter</a>
    <a href="${PROJECT.urls.telegram}" target="_blank" class="nav-link"><i class="fab fa-telegram"></i> Telegram</a>
    <a href="/login" class="nav-btn"><i class="fas fa-wallet mr-1"></i> Connect Wallet</a>
  </div>
</nav>`
}

function footer(): string {
  return `
<footer class="footer">
  <div style="max-width:1200px;margin:0 auto;">
    <div class="grid-3" style="margin-bottom:2.5rem;">
      <div>
        <div style="display:flex;align-items:center;gap:0.75rem;margin-bottom:1rem;">
          <div class="nav-logo-icon"><i class="fas fa-brain"></i></div>
          <span class="nav-logo-text">${PROJECT.name}</span>
        </div>
        <p style="color:#64748b;font-size:0.85rem;line-height:1.7;max-width:260px;">${PROJECT.description}</p>
        <div style="display:flex;gap:0.75rem;margin-top:1.25rem;">
          <a href="${PROJECT.urls.twitter}" target="_blank" style="width:36px;height:36px;background:rgba(16,185,129,0.1);border:1px solid rgba(16,185,129,0.2);border-radius:0.5rem;display:flex;align-items:center;justify-content:center;color:#10b981;text-decoration:none;font-size:0.9rem;transition:all 0.2s;" onmouseover="this.style.background='rgba(16,185,129,0.2)'" onmouseout="this.style.background='rgba(16,185,129,0.1)'"><i class="fab fa-twitter"></i></a>
          <a href="${PROJECT.urls.telegram}" target="_blank" style="width:36px;height:36px;background:rgba(16,185,129,0.1);border:1px solid rgba(16,185,129,0.2);border-radius:0.5rem;display:flex;align-items:center;justify-content:center;color:#10b981;text-decoration:none;font-size:0.9rem;transition:all 0.2s;" onmouseover="this.style.background='rgba(16,185,129,0.2)'" onmouseout="this.style.background='rgba(16,185,129,0.1)'"><i class="fab fa-telegram"></i></a>
          <a href="${PROJECT.urls.github}" target="_blank" style="width:36px;height:36px;background:rgba(16,185,129,0.1);border:1px solid rgba(16,185,129,0.2);border-radius:0.5rem;display:flex;align-items:center;justify-content:center;color:#10b981;text-decoration:none;font-size:0.9rem;transition:all 0.2s;" onmouseover="this.style.background='rgba(16,185,129,0.2)'" onmouseout="this.style.background='rgba(16,185,129,0.1)'"><i class="fab fa-github"></i></a>
        </div>
      </div>
      <div>
        <h4 style="font-size:0.8rem;font-weight:700;color:#94a3b8;text-transform:uppercase;letter-spacing:0.1em;margin-bottom:1rem;">Quick Links</h4>
        <div style="display:flex;flex-direction:column;gap:0.6rem;">
          ${['Home|/', 'Whitepaper|/whitepaper', 'Vesting|/vesting', 'My Dashboard|/mypage'].map(l => {
            const [name, href] = l.split('|')
            return `<a href="${href}" style="color:#64748b;text-decoration:none;font-size:0.875rem;transition:color 0.2s;" onmouseover="this.style.color='#10b981'" onmouseout="this.style.color='#64748b'">${name}</a>`
          }).join('')}
        </div>
      </div>
      <div>
        <h4 style="font-size:0.8rem;font-weight:700;color:#94a3b8;text-transform:uppercase;letter-spacing:0.1em;margin-bottom:1rem;">Legal</h4>
        <div style="display:flex;flex-direction:column;gap:0.6rem;">
          ${['Privacy Policy|/privacy', 'Terms of Service|/terms', 'Disclaimer|/disclaimer'].map(l => {
            const [name, href] = l.split('|')
            return `<a href="${href}" style="color:#64748b;text-decoration:none;font-size:0.875rem;transition:color 0.2s;" onmouseover="this.style.color='#10b981'" onmouseout="this.style.color='#64748b'">${name}</a>`
          }).join('')}
        </div>
        <div style="margin-top:1.5rem;padding:0.75rem 1rem;background:rgba(16,185,129,0.06);border:1px solid rgba(16,185,129,0.15);border-radius:0.5rem;">
          <div style="font-size:0.7rem;color:#64748b;margin-bottom:0.25rem;">Token</div>
          <div style="font-size:0.9rem;font-weight:700;color:#10b981;">${PROJECT.token}</div>
          <div style="font-size:0.72rem;color:#64748b;">BNB Chain · BEP-20 · TGE ${PROJECT.tge}</div>
        </div>
      </div>
    </div>
    <hr class="divider"/>
    <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:1rem;">
      <span style="font-size:0.8rem;color:#475569;">© 2026 ${PROJECT.name}. All rights reserved.</span>
      <span style="font-size:0.75rem;color:#374151;background:rgba(255,255,255,0.03);padding:0.25rem 0.75rem;border-radius:999px;">Built on BNB Chain · Powered by AI</span>
    </div>
  </div>
</footer>`
}
