import { PROJECT } from '../data'

const C  = PROJECT.color       // #10b981
const CD = PROJECT.colorDark   // #059669
const CL = PROJECT.colorLight  // #34d399

export function layout(title: string, body: string, extraHead = ''): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>${title} | ${PROJECT.name}</title>
  <meta name="description" content="${PROJECT.description}"/>
  <meta name="theme-color" content="${C}"/>
  <meta property="og:title" content="${title} | ${PROJECT.name}"/>
  <meta property="og:description" content="${PROJECT.description}"/>
  <meta property="og:type" content="website"/>
  <link rel="preconnect" href="https://fonts.googleapis.com"/>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800;900&display=swap"/>
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css"/>
  <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
  ${extraHead}
  <style>
    :root {
      --c:   ${C};
      --cd:  ${CD};
      --cl:  ${CL};
      --bg:       #060c10;
      --bg-card:  rgba(255,255,255,0.03);
      --border:   rgba(16,185,129,0.12);
      --text:     #e2e8f0;
      --text-muted: #8891a5;
      --text-dim:   #4a5568;
    }
    *{box-sizing:border-box;margin:0;padding:0;}
    html{scroll-behavior:smooth;}
    body{background:var(--bg);color:var(--text);font-family:'Manrope',system-ui,sans-serif;overflow-x:hidden;line-height:1.6;}

    ::-webkit-scrollbar{width:5px;}
    ::-webkit-scrollbar-track{background:#0a1218;}
    ::-webkit-scrollbar-thumb{background:${C}55;border-radius:3px;}

    /* ── NAVBAR ── */
    .navbar{position:fixed;top:0;left:0;right:0;z-index:200;
      height:68px;display:flex;align-items:center;padding:0 2rem;
      justify-content:space-between;
      background:rgba(6,12,16,0.8);backdrop-filter:blur(20px);
      border-bottom:1px solid rgba(16,185,129,0.1);
      transition:background 0.3s;}
    .nav-logo{display:flex;align-items:center;gap:0.75rem;text-decoration:none;}
    .nav-logo-icon{width:38px;height:38px;background:linear-gradient(135deg,${C},${CD});
      border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:1rem;color:white;
      box-shadow:0 4px 16px ${C}40;}
    .nav-logo-text{font-size:1.2rem;font-weight:900;letter-spacing:-0.5px;
      background:linear-gradient(135deg,${C},${CL});
      -webkit-background-clip:text;-webkit-text-fill-color:transparent;}
    .nav-links{display:flex;align-items:center;gap:2rem;}
    .nav-link{color:var(--text-muted);text-decoration:none;font-size:0.875rem;font-weight:600;transition:color 0.2s;}
    .nav-link:hover{color:${C};}
    .nav-btn{padding:0.55rem 1.25rem;background:linear-gradient(135deg,${C},${CD});color:white;border-radius:8px;
      text-decoration:none;font-size:0.875rem;font-weight:700;transition:all 0.2s;border:none;cursor:pointer;
      box-shadow:0 4px 16px ${C}40;}
    .nav-btn:hover{opacity:0.9;transform:translateY(-1px);}

    /* ── LAYOUT ── */
    .page-wrap{padding-top:68px;min-height:100vh;}
    .section-inner{max-width:1200px;margin:0 auto;padding:0 2rem;}
    .section{padding:6rem 0;}

    /* ── GLASS CARD ── */
    .glass-card{background:rgba(255,255,255,0.03);
      border:1px solid rgba(16,185,129,0.1);border-radius:1rem;
      backdrop-filter:blur(10px);transition:all 0.3s;}
    .card-glow:hover{border-color:${C}35;transform:translateY(-3px);
      box-shadow:0 12px 40px ${C}15;}

    /* ── GRID BG ── */
    .grid-bg{background-image:linear-gradient(rgba(16,185,129,0.04) 1px,transparent 1px),
      linear-gradient(90deg,rgba(16,185,129,0.04) 1px,transparent 1px);
      background-size:60px 60px;}

    /* ── TYPOGRAPHY ── */
    .gradient-text{background:linear-gradient(135deg,${C},${CL});
      -webkit-background-clip:text;-webkit-text-fill-color:transparent;}
    .section-label{display:inline-flex;align-items:center;gap:6px;
      padding:6px 14px;background:rgba(16,185,129,0.08);
      border:1px solid rgba(16,185,129,0.2);border-radius:30px;
      font-size:12px;font-weight:700;letter-spacing:1.2px;
      color:${C};text-transform:uppercase;margin-bottom:1.25rem;}
    .section-title{font-size:clamp(1.8rem,4vw,2.8rem);font-weight:900;
      font-family:'Manrope',sans-serif;line-height:1.1;letter-spacing:-1px;
      color:white;margin-bottom:1rem;}
    .section-subtitle{font-size:1rem;color:var(--text-muted);line-height:1.8;
      max-width:600px;margin-bottom:2rem;}

    /* ── BUTTONS ── */
    .btn-primary{display:inline-flex;align-items:center;gap:0.5rem;
      padding:0.8rem 1.75rem;
      background:linear-gradient(135deg,${C},${CD});
      color:white;border-radius:10px;font-weight:700;font-size:0.95rem;
      text-decoration:none;border:none;cursor:pointer;transition:all 0.2s;
      box-shadow:0 6px 20px ${C}40;}
    .btn-primary:hover{opacity:0.9;transform:translateY(-2px);box-shadow:0 10px 28px ${C}55;}
    .btn-outline{display:inline-flex;align-items:center;gap:0.5rem;
      padding:0.8rem 1.75rem;border:1.5px solid ${C};color:${C};
      border-radius:10px;font-weight:700;font-size:0.95rem;text-decoration:none;
      background:transparent;cursor:pointer;transition:all 0.2s;}
    .btn-outline:hover{background:${C}12;transform:translateY(-2px);}
    .btn-ghost{display:inline-flex;align-items:center;gap:0.5rem;
      padding:0.8rem 1.75rem;border:1px solid rgba(255,255,255,0.1);color:var(--text-muted);
      border-radius:10px;font-weight:600;font-size:0.95rem;text-decoration:none;
      background:rgba(255,255,255,0.04);cursor:pointer;transition:all 0.2s;}
    .btn-ghost:hover{background:rgba(255,255,255,0.08);color:white;}

    /* ── BADGES ── */
    .badge{display:inline-flex;align-items:center;gap:0.3rem;
      padding:3px 10px;border-radius:999px;font-size:0.72rem;font-weight:700;}
    .badge-green{background:rgba(16,185,129,0.12);color:${C};border:1px solid ${C}30;}
    .badge-yellow{background:rgba(251,191,36,0.12);color:#fbbf24;border:1px solid #fbbf2430;}
    .badge-gray{background:rgba(100,116,139,0.12);color:#94a3b8;border:1px solid #94a3b830;}
    .badge-purple{background:rgba(139,92,246,0.12);color:#a78bfa;border:1px solid #a78bfa30;}

    /* ── DIVIDER ── */
    .divider{border:none;border-top:1px solid rgba(255,255,255,0.05);margin:0;}

    /* ── ANIMATIONS ── */
    @keyframes blink{0%,100%{opacity:1}50%{opacity:0.3}}
    @keyframes pulse-glow{0%,100%{opacity:0.5}50%{opacity:1}}
    @keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-12px)}}
    @keyframes fade-up{from{opacity:0;transform:translateY(24px)}to{opacity:1;transform:translateY(0)}}
    .float-anim{animation:float 6s ease-in-out infinite;}
    .fade-up{animation:fade-up 0.6s ease forwards;}
    .observe{opacity:0;transform:translateY(20px);transition:opacity 0.6s ease,transform 0.6s ease;}
    .observe.visible{opacity:1;transform:translateY(0);}

    /* ── FORMS ── */
    .form-input{width:100%;padding:0.75rem 1rem;
      background:rgba(255,255,255,0.05);
      border:1px solid rgba(16,185,129,0.2);border-radius:8px;color:white;
      font-size:0.9rem;outline:none;transition:border-color 0.2s;font-family:inherit;}
    .form-input:focus{border-color:${C};}
    .form-input::placeholder{color:#475569;}
    .form-label{display:block;font-size:0.8rem;color:#94a3b8;margin-bottom:6px;font-weight:600;}

    /* ── PROGRESS ── */
    .prog-bar{height:5px;background:rgba(255,255,255,0.06);border-radius:3px;overflow:hidden;}
    .prog-fill{height:100%;border-radius:3px;
      background:linear-gradient(90deg,${C},${CL});transition:width 1.2s ease;}

    /* ── FAQ ── */
    .faq-item{border-bottom:1px solid rgba(255,255,255,0.05);}

    /* ── FOOTER ── */
    .footer{border-top:1px solid rgba(16,185,129,0.08);padding:4rem 2rem 2rem;
      background:rgba(6,12,16,0.9);}

    /* ── RESPONSIVE ── */
    @media(max-width:1024px){
      .nav-links{display:none;}
      .mobile-menu-btn{display:flex!important;}
    }
    @media(max-width:768px){
      .section{padding:4rem 0;}
      .section-inner{padding:0 1rem;}
    }
  </style>
</head>
<body>
${navbar()}
<div class="page-wrap">
${body}
</div>
${footer()}
<script>
// Intersection Observer for scroll animations
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if(e.isIntersecting){
      e.target.classList.add('visible');
      // Progress bars
      e.target.querySelectorAll('.prog-fill').forEach(b => {
        b.style.width = b.dataset.w + '%';
      });
    }
  });
},{threshold:0.12});
document.querySelectorAll('.observe').forEach(el => observer.observe(el));

// FAQ accordion
function toggleFaq(i){
  const body = document.getElementById('faq-body-'+i);
  const icon = document.getElementById('faq-icon-'+i);
  const isOpen = body.style.maxHeight && body.style.maxHeight !== '0px';
  document.querySelectorAll('[id^="faq-body-"]').forEach(el=>el.style.maxHeight='0px');
  document.querySelectorAll('[id^="faq-icon-"]').forEach(el=>el.style.transform='rotate(0deg)');
  if(!isOpen){body.style.maxHeight=body.scrollHeight+'px';icon.style.transform='rotate(180deg)';}
}

// Mobile menu
const mobileBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
if(mobileBtn && mobileMenu){
  mobileBtn.addEventListener('click',()=>{
    mobileMenu.style.display = mobileMenu.style.display==='flex' ? 'none' : 'flex';
  });
}
</script>
</body>
</html>`
}

function navbar(): string {
  return `
<nav class="navbar" id="navbar">
  <a href="/" class="nav-logo">
    <div class="nav-logo-icon"><i class="fas fa-brain"></i></div>
    <span class="nav-logo-text">${PROJECT.name}</span>
  </a>
  <div class="nav-links">
    <a href="/#features" class="nav-link">Features</a>
    <a href="/#tokenomics" class="nav-link">Tokenomics</a>
    <a href="/#roadmap" class="nav-link">Roadmap</a>
    <a href="/whitepaper" class="nav-link">Whitepaper</a>
    <a href="${PROJECT.urls.twitter}" target="_blank" class="nav-link"><i class="fab fa-twitter"></i></a>
    <a href="${PROJECT.urls.telegram}" target="_blank" class="nav-link"><i class="fab fa-telegram"></i></a>
    <a href="/login" class="nav-btn"><i class="fas fa-wallet"></i> Connect</a>
  </div>
  <button id="mobile-menu-btn" style="display:none;background:none;border:none;color:${PROJECT.color};font-size:1.3rem;cursor:pointer;padding:0.5rem;" aria-label="Menu">
    <i class="fas fa-bars"></i>
  </button>
</nav>
<!-- Mobile menu -->
<div id="mobile-menu" style="display:none;position:fixed;top:68px;left:0;right:0;z-index:199;
  background:rgba(6,12,16,0.98);backdrop-filter:blur(20px);
  border-bottom:1px solid rgba(16,185,129,0.15);
  flex-direction:column;padding:1.5rem 2rem;gap:1rem;">
  <a href="/#features" class="nav-link" style="font-size:1rem;padding:0.5rem 0;">Features</a>
  <a href="/#tokenomics" class="nav-link" style="font-size:1rem;padding:0.5rem 0;">Tokenomics</a>
  <a href="/#roadmap" class="nav-link" style="font-size:1rem;padding:0.5rem 0;">Roadmap</a>
  <a href="/whitepaper" class="nav-link" style="font-size:1rem;padding:0.5rem 0;">Whitepaper</a>
  <a href="/login" class="nav-btn" style="text-align:center;justify-content:center;margin-top:0.5rem;">
    <i class="fas fa-wallet"></i> Connect Wallet
  </a>
</div>`
}

function footer(): string {
  return `
<footer class="footer">
  <div class="section-inner">
    <div style="display:grid;grid-template-columns:2fr 1fr 1fr;gap:3rem;margin-bottom:3rem;">
      <div>
        <div style="display:flex;align-items:center;gap:0.75rem;margin-bottom:1.25rem;">
          <div class="nav-logo-icon"><i class="fas fa-brain"></i></div>
          <span class="nav-logo-text" style="font-size:1.3rem;">${PROJECT.name}</span>
        </div>
        <p style="color:var(--text-muted);font-size:0.875rem;line-height:1.8;max-width:300px;margin-bottom:1.5rem;">${PROJECT.description}</p>
        <div style="display:flex;gap:0.75rem;">
          ${[
            [PROJECT.urls.twitter, 'fab fa-twitter', 'rgba(255,255,255,0.1)', '#fff'],
            [PROJECT.urls.telegram, 'fab fa-telegram', 'rgba(41,160,216,0.15)', '#29A0D8'],
            [PROJECT.urls.github, 'fab fa-github', 'rgba(255,255,255,0.08)', '#94a3b8'],
          ].map(([href, icon, bg, col]) => `
          <a href="${href}" target="_blank" style="width:38px;height:38px;background:${bg};border:1px solid rgba(255,255,255,0.08);border-radius:9px;display:flex;align-items:center;justify-content:center;color:${col};text-decoration:none;font-size:0.9rem;transition:all 0.2s;"
            onmouseover="this.style.transform='translateY(-2px)'" onmouseout="this.style.transform='translateY(0)'">
            <i class="${icon}"></i>
          </a>`).join('')}
        </div>
      </div>
      <div>
        <h4 style="font-size:0.75rem;font-weight:800;color:#94a3b8;text-transform:uppercase;letter-spacing:0.1em;margin-bottom:1.25rem;">Product</h4>
        <div style="display:flex;flex-direction:column;gap:0.75rem;">
          ${['Features|/#features','Tokenomics|/#tokenomics','Roadmap|/#roadmap','Vesting|/vesting','Whitepaper|/whitepaper'].map(l => {
            const [n, h] = l.split('|')
            return `<a href="${h}" style="color:var(--text-muted);text-decoration:none;font-size:0.875rem;transition:color 0.2s;"
              onmouseover="this.style.color='${PROJECT.color}'" onmouseout="this.style.color='var(--text-muted)'">${n}</a>`
          }).join('')}
        </div>
      </div>
      <div>
        <h4 style="font-size:0.75rem;font-weight:800;color:#94a3b8;text-transform:uppercase;letter-spacing:0.1em;margin-bottom:1.25rem;">Legal</h4>
        <div style="display:flex;flex-direction:column;gap:0.75rem;">
          ${['Privacy Policy|/privacy','Terms of Service|/terms','Disclaimer|/disclaimer'].map(l => {
            const [n, h] = l.split('|')
            return `<a href="${h}" style="color:var(--text-muted);text-decoration:none;font-size:0.875rem;transition:color 0.2s;"
              onmouseover="this.style.color='${PROJECT.color}'" onmouseout="this.style.color='var(--text-muted)'">${n}</a>`
          }).join('')}
        </div>
        <div style="margin-top:1.5rem;padding:0.875rem 1rem;background:rgba(16,185,129,0.06);border:1px solid rgba(16,185,129,0.15);border-radius:0.75rem;">
          <div style="font-size:0.68rem;color:var(--text-dim);margin-bottom:0.25rem;text-transform:uppercase;letter-spacing:0.08em;">Token</div>
          <div style="font-size:1rem;font-weight:800;color:${PROJECT.color};">${PROJECT.token}</div>
          <div style="font-size:0.72rem;color:var(--text-muted);">BNB Chain · BEP-20 · TGE ${PROJECT.tge}</div>
        </div>
      </div>
    </div>
    <div style="border-top:1px solid rgba(255,255,255,0.05);padding-top:1.5rem;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:1rem;">
      <span style="font-size:0.8rem;color:var(--text-dim);">© 2026 ${PROJECT.name}. All rights reserved.</span>
      <span style="font-size:0.75rem;color:var(--text-dim);background:rgba(255,255,255,0.03);padding:0.25rem 0.875rem;border-radius:999px;border:1px solid rgba(255,255,255,0.06);">Built on BNB Chain · Powered by AI</span>
    </div>
  </div>
</footer>`
}
