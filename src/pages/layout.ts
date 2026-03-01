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
  <title>${title}</title>
  <meta name="description" content="${PROJECT.description}"/>
  <meta name="theme-color" content="${C}"/>
  <meta property="og:title" content="${title}"/>
  <meta property="og:description" content="${PROJECT.description}"/>
  <meta property="og:type" content="website"/>
  <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><rect width='32' height='32' rx='6' fill='%23030507'/><text x='50%25' y='54%25' text-anchor='middle' dominant-baseline='middle' font-size='18' fill='%2310b981'>Z</text></svg>"/>
  <link rel="preconnect" href="https://fonts.googleapis.com"/>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Space+Mono:wght@400;700&family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap"/>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" crossorigin="anonymous" referrerpolicy="no-referrer"/>
  <script src="https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.min.js"></script>
  ${extraHead}
  <style>
    /* ════════════════════════════════════════
       ZENTARAI — DESIGN SYSTEM v2
       Anti-pattern: NO rounded glass cards
       Terminal-inspired. Neon signal aesthetic.
    ════════════════════════════════════════ */
    :root {
      --z-green:  ${C};
      --z-dark:   ${CD};
      --z-light:  ${CL};
      --z-cyan:   #06b6d4;
      --z-bg:     #030507;
      --z-bg1:    #070c10;
      --z-bg2:    #0c1318;
      --z-line:   rgba(16,185,129,0.15);
      --z-txt:    #c8d4dc;
      --z-muted:  #6b7d8a;
      --z-dim:    #3a4a54;
      --z-mono:   'Space Mono', monospace;
      --z-sans:   'Space Grotesk', system-ui, sans-serif;
      --z-body:   'DM Sans', system-ui, sans-serif;
    }

    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    html { scroll-behavior: smooth; }

    body {
      background: var(--z-bg);
      color: var(--z-txt);
      font-family: var(--z-body);
      font-size: 15px;
      line-height: 1.65;
      overflow-x: hidden;
    }

    /* ── SCANLINE OVERLAY ── */
    body::before {
      content:'';
      position:fixed;inset:0;pointer-events:none;z-index:9999;
      background: repeating-linear-gradient(
        0deg,
        transparent,transparent 2px,
        rgba(0,0,0,0.04) 2px,rgba(0,0,0,0.04) 4px
      );
    }

    ::-webkit-scrollbar{width:4px;}
    ::-webkit-scrollbar-track{background:var(--z-bg);}
    ::-webkit-scrollbar-thumb{background:${C}66;border-radius:0;}

    /* ── KEYFRAMES ── */
    @keyframes z-blink   { 0%,100%{opacity:1} 50%{opacity:0} }
    @keyframes z-pulse   { 0%,100%{box-shadow:0 0 0 0 ${C}40} 50%{box-shadow:0 0 0 8px ${C}00} }
    @keyframes z-scan    { 0%{transform:translateY(-100%)} 100%{transform:translateY(100vh)} }
    @keyframes z-float   { 0%,100%{transform:translateY(0px)} 50%{transform:translateY(-10px)} }
    @keyframes z-glow-in { from{opacity:0;transform:translateY(28px)} to{opacity:1;transform:translateY(0)} }
    @keyframes z-slide-r { from{opacity:0;transform:translateX(-20px)} to{opacity:1;transform:translateX(0)} }
    @keyframes z-tick    { from{width:0} to{width:100%} }
    @keyframes z-neon-flicker {
      0%,19%,21%,23%,25%,54%,56%,100%{ text-shadow:0 0 10px ${C}cc,0 0 20px ${C}88,0 0 40px ${C}44; }
      20%,24%,55%{ text-shadow:none; }
    }
    @keyframes z-matrix-fall {
      0%{transform:translateY(-20px);opacity:0}
      10%{opacity:1}
      90%{opacity:1}
      100%{transform:translateY(600px);opacity:0}
    }
    @keyframes z-rotate-ring {
      from{transform:rotate(0deg)} to{transform:rotate(360deg)}
    }
    @keyframes z-bar-fill { from{width:0} to{width:var(--w)} }
    @keyframes z-count-up { from{opacity:0;transform:scale(0.85)} to{opacity:1;transform:scale(1)} }
    @keyframes z-shimmer {
      0%{background-position:-200% 0}
      100%{background-position:200% 0}
    }
    @keyframes z-signal-pulse {
      0%{transform:scale(1);opacity:1}
      50%{transform:scale(1.4);opacity:0.4}
      100%{transform:scale(1);opacity:1}
    }
    @keyframes z-dash-anim {
      to{stroke-dashoffset:0}
    }
    @keyframes z-typewriter {
      from{width:0} to{width:100%}
    }
    @keyframes z-particle-rise {
      0%{transform:translateY(0) scale(1);opacity:0.8}
      100%{transform:translateY(-120px) scale(0);opacity:0}
    }
    @keyframes z-wave {
      0%,100%{transform:scaleY(0.4)}
      50%{transform:scaleY(1)}
    }
    @keyframes z-orbit {
      from{transform:rotate(0deg) translateX(60px) rotate(0deg)}
      to{transform:rotate(360deg) translateX(60px) rotate(-360deg)}
    }
    @keyframes z-line-draw {
      from{stroke-dashoffset:1000}
      to{stroke-dashoffset:0}
    }
    @keyframes z-hex-spin {
      from{transform:rotate(0deg)}
      to{transform:rotate(60deg)}
    }
    @keyframes z-data-flow {
      0%{background-position:0% 0%}
      100%{background-position:0% 100%}
    }
    @keyframes z-glitch {
      0%,100%{clip-path:inset(0 0 100% 0);transform:translate(0)}
      20%{clip-path:inset(20% 0 60% 0);transform:translate(-3px,0)}
      40%{clip-path:inset(50% 0 30% 0);transform:translate(3px,0)}
      60%{clip-path:inset(10% 0 80% 0);transform:translate(-2px,0)}
      80%{clip-path:inset(70% 0 10% 0);transform:translate(2px,0)}
    }
    @keyframes z-border-run {
      0%{background-position:0% 50%}
      50%{background-position:100% 50%}
      100%{background-position:0% 50%}
    }

    /* ── PARTICLE SYSTEM ── */
    .z-particle {
      position:absolute;pointer-events:none;border-radius:50%;
      animation:z-particle-rise var(--dur,3s) ease-out var(--delay,0s) infinite;
    }

    /* ── ANIMATED BORDER ── */
    .z-border-anim {
      position:relative;
    }
    .z-border-anim::before {
      content:'';position:absolute;inset:-1px;
      background:linear-gradient(90deg,${C},#06b6d4,${C});
      background-size:200% 100%;
      animation:z-border-run 3s linear infinite;
      -webkit-mask:linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0);
      -webkit-mask-composite:xor;
      mask-composite:exclude;
      padding:1px;
      z-index:-1;
    }

    /* ── WAVEFORM BARS ── */
    .z-wave-bar {
      display:inline-block;width:3px;background:${C};border-radius:2px;
      animation:z-wave var(--spd,0.8s) ease-in-out infinite;
      animation-delay:var(--d,0s);
    }

    /* ── SCROLL REVEAL ── */
    .z-reveal {
      opacity:0;
      transform:translateY(24px);
      transition:opacity 0.7s cubic-bezier(.22,.68,0,1.2),
                 transform 0.7s cubic-bezier(.22,.68,0,1.2);
    }
    .z-reveal.visible { opacity:1; transform:translateY(0); }
    .z-reveal-l {
      opacity:0; transform:translateX(-24px);
      transition:opacity 0.65s ease,transform 0.65s ease;
    }
    .z-reveal-l.visible { opacity:1; transform:translateX(0); }
    .z-reveal-r {
      opacity:0; transform:translateX(24px);
      transition:opacity 0.65s ease,transform 0.65s ease;
    }
    .z-reveal-r.visible { opacity:1; transform:translateX(0); }

    /* ── LAYOUT ── */
    .z-wrap { padding-top:64px; min-height:100vh; }
    .z-inner { max-width:1180px; margin:0 auto; padding:0 1.75rem; }
    .z-section { padding:7rem 0; }

    /* ── NAVBAR ── */
    .z-nav {
      position:fixed;top:0;left:0;right:0;z-index:200;height:64px;
      display:flex;align-items:center;padding:0 2rem;justify-content:space-between;
      background:rgba(3,5,7,0.88);backdrop-filter:blur(16px);
      border-bottom:1px solid var(--z-line);
    }
    .z-nav-logo { display:flex;align-items:center;gap:10px;text-decoration:none; }
    .z-nav-logo-mark {
      width:34px;height:34px;border:1.5px solid ${C};border-radius:0;
      display:flex;align-items:center;justify-content:center;
      position:relative;overflow:hidden;
    }
    .z-nav-logo-mark::before {
      content:'';position:absolute;inset:0;
      background:linear-gradient(135deg,${C}22,transparent);
    }
    .z-nav-logo-text {
      font-family:var(--z-sans);font-size:1.05rem;font-weight:700;
      color:white;letter-spacing:-0.3px;
    }
    .z-nav-logo-text span { color:${C}; }
    .z-nav-links { display:flex;align-items:center;gap:1.75rem; }
    .z-nav-link {
      color:var(--z-muted);text-decoration:none;font-size:0.82rem;
      font-weight:500;letter-spacing:0.3px;transition:color 0.2s;
      font-family:var(--z-sans);text-transform:uppercase;
    }
    .z-nav-link:hover { color:${C}; }
    .z-nav-cta {
      display:inline-flex;align-items:center;gap:7px;
      padding:0.45rem 1.1rem;font-size:0.8rem;font-weight:600;
      background:transparent;border:1px solid ${C};color:${C};
      text-decoration:none;font-family:var(--z-mono);
      letter-spacing:0.5px;text-transform:uppercase;
      transition:all 0.2s;cursor:pointer;
    }
    .z-nav-cta:hover { background:${C}18;box-shadow:0 0 16px ${C}44; }

    /* ── TERMINAL CARD (main component) ── */
    .z-card {
      background:var(--z-bg1);
      border:1px solid rgba(16,185,129,0.14);
      border-radius:0;
      transition:border-color 0.25s,box-shadow 0.25s;
      position:relative;
    }
    .z-card:hover {
      border-color:${C}45;
      box-shadow:0 0 24px ${C}12;
    }
    /* Corner accent */
    .z-card::before {
      content:'';position:absolute;top:-1px;left:-1px;
      width:12px;height:12px;
      border-top:2px solid ${C};border-left:2px solid ${C};
    }
    .z-card::after {
      content:'';position:absolute;bottom:-1px;right:-1px;
      width:12px;height:12px;
      border-bottom:2px solid ${C};border-right:2px solid ${C};
    }

    /* ── ACCENT CARD (highlighted) ── */
    .z-card-accent {
      background:linear-gradient(135deg,${C}0a,${C}04);
      border:1px solid ${C}35;
    }
    .z-card-accent::before { border-color:${CL}; }
    .z-card-accent::after  { border-color:${CL}; }

    /* ── TYPOGRAPHY ── */
    .z-eyebrow {
      display:inline-flex;align-items:center;gap:8px;
      font-family:var(--z-mono);font-size:0.68rem;font-weight:400;
      letter-spacing:2px;text-transform:uppercase;color:${C};
      margin-bottom:1.1rem;
    }
    .z-eyebrow::before {
      content:'//';color:var(--z-dim);font-size:0.7rem;
    }

    .z-h1 {
      font-family:var(--z-sans);font-size:clamp(2.4rem,5.5vw,4.2rem);
      font-weight:700;line-height:1.06;letter-spacing:-2px;color:white;
    }
    .z-h2 {
      font-family:var(--z-sans);font-size:clamp(1.7rem,3.5vw,2.6rem);
      font-weight:700;line-height:1.1;letter-spacing:-1px;color:white;
    }
    .z-accent {
      color:${C};
      position:relative;display:inline-block;
    }
    .z-strike {
      text-decoration:line-through;color:var(--z-muted);
      font-size:0.8em;margin-right:8px;
    }

    /* Neon glow text */
    .z-neon {
      color:${C};
      text-shadow:0 0 10px ${C}cc,0 0 20px ${C}66;
    }

    /* Monospace data */
    .z-mono {
      font-family:var(--z-mono);font-size:0.78rem;
      color:var(--z-muted);letter-spacing:0.5px;
    }

    /* ── BUTTONS ── */
    .z-btn {
      display:inline-flex;align-items:center;gap:8px;
      padding:0.75rem 1.6rem;
      background:${C};color:#030507;
      font-family:var(--z-mono);font-size:0.8rem;font-weight:700;
      letter-spacing:0.8px;text-transform:uppercase;
      border:none;cursor:pointer;text-decoration:none;
      transition:all 0.2s;clip-path:polygon(0 0,calc(100% - 10px) 0,100% 10px,100% 100%,0 100%);
    }
    .z-btn:hover { background:${CL};box-shadow:0 0 24px ${C}88; }

    .z-btn-outline {
      display:inline-flex;align-items:center;gap:8px;
      padding:0.75rem 1.6rem;
      background:transparent;color:${C};
      font-family:var(--z-mono);font-size:0.8rem;font-weight:700;
      letter-spacing:0.8px;text-transform:uppercase;
      border:1px solid ${C}66;cursor:pointer;text-decoration:none;
      transition:all 0.2s;
    }
    .z-btn-outline:hover { background:${C}12;border-color:${C};box-shadow:0 0 16px ${C}33; }

    .z-btn-ghost {
      display:inline-flex;align-items:center;gap:8px;
      padding:0.75rem 1.6rem;
      background:rgba(255,255,255,0.04);color:var(--z-muted);
      font-family:var(--z-sans);font-size:0.82rem;font-weight:500;
      border:1px solid rgba(255,255,255,0.08);cursor:pointer;text-decoration:none;
      transition:all 0.2s;
    }
    .z-btn-ghost:hover { background:rgba(255,255,255,0.08);color:white; }

    /* ── STATUS BADGE ── */
    .z-badge {
      display:inline-flex;align-items:center;gap:5px;
      padding:2px 9px;font-family:var(--z-mono);
      font-size:0.63rem;letter-spacing:1px;text-transform:uppercase;
      border:1px solid;border-radius:0;
    }
    .z-badge-live  { color:${C};border-color:${C}44;background:${C}0e; }
    .z-badge-warn  { color:#fbbf24;border-color:#fbbf2444;background:#fbbf240e; }
    .z-badge-done  { color:#22c55e;border-color:#22c55e44;background:#22c55e0e; }
    .z-badge-gray  { color:var(--z-muted);border-color:rgba(255,255,255,0.1);background:rgba(255,255,255,0.03); }

    /* ── DIVIDER ── */
    .z-hr { border:none; border-top:1px solid rgba(16,185,129,0.07); margin:0; }

    /* ── GRID BG ── */
    .z-grid-bg {
      background-image:
        linear-gradient(var(--z-line) 1px,transparent 1px),
        linear-gradient(90deg,var(--z-line) 1px,transparent 1px);
      background-size:48px 48px;
    }

    /* ── DOT GRID ── */
    .z-dot-bg {
      background-image:radial-gradient(circle,${C}22 1px,transparent 1px);
      background-size:28px 28px;
    }

    /* ── TERMINAL LINE ── */
    .z-terminal-line {
      display:flex;align-items:center;gap:8px;
      padding:7px 12px;
      background:rgba(16,185,129,0.04);
      border-left:2px solid ${C}55;
      font-family:var(--z-mono);font-size:0.75rem;color:var(--z-muted);
      transition:all 0.2s;
    }
    .z-terminal-line:hover { background:rgba(16,185,129,0.08);border-left-color:${C}; }

    /* ── PROGRESS ── */
    .z-prog-track {
      height:3px;background:rgba(255,255,255,0.06);
      overflow:hidden;position:relative;
    }
    .z-prog-fill {
      height:100%;background:${C};
      width:0;transition:width 1.4s cubic-bezier(.22,.68,0,1);
    }

    /* ── NUMBER STAT ── */
    .z-stat-num {
      font-family:var(--z-mono);font-size:2.4rem;font-weight:700;
      color:${C};letter-spacing:-2px;line-height:1;
    }

    /* ── LIVE FEED LABELS ── */
    .z-feed-type, .z-feed-ts {
      font-family: var(--z-mono);
    }

    /* ── FOOTER ── */
    .z-footer {
      border-top:1px solid var(--z-line);
      padding:3.5rem 0 2rem;
      background:var(--z-bg);
    }

    /* ── SIGNAL RING (animated) ── */
    .z-ring {
      position:absolute;border-radius:50%;pointer-events:none;
    }

    /* ── RESPONSIVE ── */
    @media(max-width:1024px){
      .z-nav-links{display:none;}
      .z-mob-btn{display:flex!important;}
    }
    @media(max-width:768px){
      .z-section{padding:4.5rem 0;}
      .z-inner{padding:0 1rem;}
    }
  </style>
</head>
<body>
${navbar()}
<div class="z-wrap">
${body}
</div>
${footer()}
<script>
// ── Scroll reveal ──
const _rzObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if(e.isIntersecting){
      e.target.classList.add('visible');
      e.target.querySelectorAll('.z-prog-fill').forEach(b => {
        b.style.width = (b.dataset.w || '0') + '%';
      });
    }
  });
},{threshold:0.1});
document.querySelectorAll('.z-reveal,.z-reveal-l,.z-reveal-r').forEach(el=>_rzObs.observe(el));

// ── FAQ accordion ──
function toggleFaq(i){
  const b = document.getElementById('faq-body-'+i);
  const ic = document.getElementById('faq-icon-'+i);
  const open = b.style.maxHeight && b.style.maxHeight!=='0px';
  document.querySelectorAll('[id^="faq-body-"]').forEach(el=>el.style.maxHeight='0px');
  document.querySelectorAll('[id^="faq-icon-"]').forEach(el=>el.style.transform='rotate(0deg)');
  if(!open){b.style.maxHeight=b.scrollHeight+'px';ic.style.transform='rotate(180deg)';}
}

// ── Mobile menu ──
const _mb = document.getElementById('z-mob-btn');
const _mm = document.getElementById('z-mob-menu');
if(_mb&&_mm){ _mb.addEventListener('click',()=>{ _mm.style.display=_mm.style.display==='flex'?'none':'flex'; }); }

// ── Animated counter ──
function animCounter(el, target, suffix='', duration=1800){
  const start = performance.now();
  const update = (ts) => {
    const p = Math.min((ts-start)/duration,1);
    const ease = 1-Math.pow(1-p,3);
    const cur = Math.floor(ease*target);
    el.textContent = cur.toLocaleString()+suffix;
    if(p<1) requestAnimationFrame(update);
  };
  requestAnimationFrame(update);
}
const _cntObs = new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      const el=e.target;
      const t=parseInt(el.dataset.target||'0');
      const s=el.dataset.suffix||'';
      animCounter(el,t,s);
      _cntObs.unobserve(el);
    }
  });
},{threshold:0.5});
document.querySelectorAll('[data-target]').forEach(el=>_cntObs.observe(el));

// ── Particle System (lightweight - CSS-only, 12 static elements) ──
(function(){
  const container = document.getElementById('z-particle-field');
  if(!container) return;
  // Use requestIdleCallback for non-blocking init
  const init = function(){
    const colors = ['${C}88','#06b6d455','${CL}66'];
    const frag = document.createDocumentFragment();
    for(let i=0;i<12;i++){
      const p = document.createElement('div');
      const size = 2 + (i%3)*1.5;
      const col = colors[i%3];
      p.setAttribute('style',
        'position:absolute;border-radius:50%;pointer-events:none;'+
        'width:'+size+'px;height:'+size+'px;'+
        'left:'+(5+i*8)+'%;top:'+(10+((i*17)%80))+'%;'+
        'background:'+col+';'+
        'animation:z-particle-rise '+(3+i*0.4)+'s ease-out -'+(i*0.3)+'s infinite'
      );
      frag.appendChild(p);
    }
    container.appendChild(frag);
  };
  if('requestIdleCallback' in window){ requestIdleCallback(init,{timeout:2000}); }
  else { setTimeout(init,500); }
})();

// ── Live signal feed (dynamic, deferred after page load) ──
(function(){
  const initFeed = function(){
    const feed = document.getElementById('z-live-feed');
    if(!feed) return;
    const C = '${C}', CL = '${CL}';
    const signals = [
      {type:'WHALE',    msg:'0x9f2c moved 4.8M ZNTR \u2014 accumulation detected',   c:C,         icon:'fa-fish'},
      {type:'TREND',    msg:'Bullish divergence \u2014 RSI 14d cross confirmed',       c:'#22c55e', icon:'fa-chart-line'},
      {type:'ANOMALY',  msg:'TVL spike +18% on PancakeSwap \u2014 protocol alert',    c:'#f97316', icon:'fa-exclamation'},
      {type:'SENTIMENT',msg:'Social signal: 89\u2191 across 18 feeds \u2014 4hr',     c:'#8b5cf6', icon:'fa-brain'},
      {type:'PROTOCOL', msg:'Validator participation +9% \u2014 network health +',    c:CL,        icon:'fa-shield-alt'},
      {type:'WHALE',    msg:'Smart wallet 0x4a1d entered at support zone',            c:C,         icon:'fa-fish'},
      {type:'TREND',    msg:'Pattern: inverse H&amp;S forming \u2014 85% confidence', c:'#fbbf24', icon:'fa-chart-bar'},
      {type:'ANOMALY',  msg:'Bridge volume +34% \u2014 unusual cross-chain activity', c:'#ef4444', icon:'fa-random'},
      {type:'SENTIMENT',msg:'Fear &amp; Greed: 42\u219261 shift in 6hr window',       c:'#06b6d4', icon:'fa-heart-pulse'},
      {type:'PROTOCOL', msg:'ZNTR staking APY signal updated \u2014 12.4% current',  c:'#10b981', icon:'fa-lock'},
    ];
    let idx = 0;
    function addLine(){
      const s = signals[idx % signals.length]; idx++;
      const row = document.createElement('div');
      row.setAttribute('style',
        'display:flex;align-items:center;gap:8px;padding:6px 10px;'+
        'background:'+s.c+'08;border-left:2px solid '+s.c+'44;'+
        'margin-bottom:1px;opacity:0;transition:opacity 0.35s;'
      );
      row.innerHTML =
        '<i class="fas '+s.icon+'" style="color:'+s.c+';font-size:0.62rem;flex-shrink:0;width:11px;"></i>'+
        '<span class="z-feed-type" style="font-size:0.59rem;color:'+s.c+';flex-shrink:0;letter-spacing:0.8px;">['+s.type+']</span>'+
        '<span style="font-size:0.68rem;color:#6b7d8a;flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">'+s.msg+'</span>'+
        '<span class="z-feed-ts" style="font-size:0.56rem;color:#3a4a54;flex-shrink:0;">now</span>';
      feed.insertBefore(row, feed.firstChild);
      requestAnimationFrame(function(){ row.style.opacity='1'; });
      while(feed.children.length > 6){
        const last = feed.lastChild;
        if(last){ last.style.opacity='0'; setTimeout(function(){ if(last.parentNode) last.parentNode.removeChild(last); },300); }
      }
    }
    for(let i=0;i<4;i++) setTimeout(addLine, 600+i*500);
    setInterval(addLine, 3500);
  };
  if(document.readyState==='complete'){ setTimeout(initFeed,200); }
  else { window.addEventListener('load',function(){ setTimeout(initFeed,200); }); }
})();
</script>
</body>
</html>`
}

function navbar(): string {
  return `
<nav class="z-nav" id="z-nav">
  <a href="/" class="z-nav-logo">
    <div class="z-nav-logo-mark">
      <i class="fas fa-brain" style="font-size:0.9rem;color:${C};position:relative;z-index:1;"></i>
    </div>
    <span class="z-nav-logo-text">Zentar<span>AI</span></span>
  </a>
  <div class="z-nav-links">
    <a href="/#signal" class="z-nav-link">Signal</a>
    <a href="/#architecture" class="z-nav-link">Architecture</a>
    <a href="/#token" class="z-nav-link">ZNTR</a>
    <a href="/#network" class="z-nav-link">Network</a>
    <a href="/#partners" class="z-nav-link">Partners</a>
    <a href="/whitepaper" class="z-nav-link">Docs</a>
    <a href="${PROJECT.urls.twitter}" target="_blank" class="z-nav-link" style="font-size:0.9rem;"><i class="fab fa-x-twitter"></i></a>
    <a href="${PROJECT.urls.telegram}" target="_blank" class="z-nav-link" style="font-size:0.9rem;"><i class="fab fa-telegram"></i></a>
    <a href="/login" class="z-nav-cta"><i class="fas fa-terminal" style="font-size:0.7rem;"></i> init_wallet</a>
  </div>
  <button id="z-mob-btn" class="z-mob-btn" style="display:none;background:none;border:none;color:${C};font-size:1.2rem;cursor:pointer;padding:0.5rem;" aria-label="Menu">
    <i class="fas fa-bars"></i>
  </button>
</nav>
<div id="z-mob-menu" style="display:none;position:fixed;top:64px;left:0;right:0;z-index:199;
  background:rgba(3,5,7,0.98);border-bottom:1px solid rgba(16,185,129,0.15);
  flex-direction:column;padding:1.5rem 2rem;gap:1.25rem;">
  <a href="/#signal" class="z-nav-link" style="font-size:0.95rem;text-transform:none;">Signal Engine</a>
  <a href="/#architecture" class="z-nav-link" style="font-size:0.95rem;text-transform:none;">Architecture</a>
  <a href="/#token" class="z-nav-link" style="font-size:0.95rem;text-transform:none;">ZNTR Token</a>
  <a href="/#network" class="z-nav-link" style="font-size:0.95rem;text-transform:none;">Network</a>
  <a href="/#partners" class="z-nav-link" style="font-size:0.95rem;text-transform:none;">Partners</a>
  <a href="/whitepaper" class="z-nav-link" style="font-size:0.95rem;text-transform:none;">Docs</a>
  <a href="/login" class="z-nav-cta" style="width:fit-content;"><i class="fas fa-terminal" style="font-size:0.7rem;"></i> init_wallet</a>
</div>`
}

function footer(): string {
  return `
<footer class="z-footer">
  <div class="z-inner">
    <div style="display:grid;grid-template-columns:2fr 1fr 1fr;gap:3rem;margin-bottom:2.5rem;">
      <div>
        <div style="display:flex;align-items:center;gap:10px;margin-bottom:1.25rem;">
          <div class="z-nav-logo-mark"><i class="fas fa-brain" style="font-size:0.9rem;color:${C};position:relative;z-index:1;"></i></div>
          <span class="z-nav-logo-text" style="font-size:1.1rem;">Zentar<span>AI</span></span>
        </div>
        <p style="color:var(--z-muted);font-size:0.82rem;line-height:1.85;max-width:280px;margin-bottom:1.5rem;font-family:var(--z-body);">${PROJECT.description}</p>
        <div style="display:flex;gap:0.625rem;">
          ${[
            [PROJECT.urls.twitter,'fab fa-x-twitter','rgba(255,255,255,0.08)','#fff'],
            [PROJECT.urls.telegram,'fab fa-telegram','rgba(41,160,216,0.12)','#29A0D8'],
            [PROJECT.urls.github,'fab fa-github','rgba(255,255,255,0.05)','#94a3b8'],
          ].map(([href,icon,bg,col]) => `
          <a href="${href}" target="_blank" style="width:34px;height:34px;background:${bg};border:1px solid rgba(255,255,255,0.08);display:flex;align-items:center;justify-content:center;color:${col};text-decoration:none;font-size:0.85rem;transition:all 0.2s;"
            onmouseover="this.style.borderColor='${C}55';this.style.color='${C}'" onmouseout="this.style.borderColor='rgba(255,255,255,0.08)';this.style.color='${col}'">
            <i class="${icon}"></i>
          </a>`).join('')}
        </div>
      </div>
      <div>
        <h4 style="font-family:var(--z-mono);font-size:0.62rem;color:var(--z-dim);text-transform:uppercase;letter-spacing:2px;margin-bottom:1.25rem;">// Platform</h4>
        <div style="display:flex;flex-direction:column;gap:0.75rem;">
          ${['Signal Engine|/#signal','Architecture|/#architecture','ZNTR Token|/#token','Vesting|/vesting','Whitepaper|/whitepaper'].map(l => {
            const [n,h] = l.split('|')
            return `<a href="${h}" style="color:var(--z-muted);text-decoration:none;font-size:0.82rem;transition:color 0.2s;font-family:var(--z-body);"
              onmouseover="this.style.color='${C}'" onmouseout="this.style.color='var(--z-muted)'">${n}</a>`
          }).join('')}
        </div>
      </div>
      <div>
        <h4 style="font-family:var(--z-mono);font-size:0.62rem;color:var(--z-dim);text-transform:uppercase;letter-spacing:2px;margin-bottom:1.25rem;">// Legal</h4>
        <div style="display:flex;flex-direction:column;gap:0.75rem;">
          ${['Privacy Policy|/privacy','Terms of Service|/terms','Disclaimer|/disclaimer'].map(l => {
            const [n,h] = l.split('|')
            return `<a href="${h}" style="color:var(--z-muted);text-decoration:none;font-size:0.82rem;transition:color 0.2s;font-family:var(--z-body);"
              onmouseover="this.style.color='${C}'" onmouseout="this.style.color='var(--z-muted)'">${n}</a>`
          }).join('')}
        </div>
        <div style="margin-top:1.5rem;padding:0.875rem 1rem;background:${C}08;border-left:2px solid ${C};">
          <div style="font-family:var(--z-mono);font-size:0.6rem;color:var(--z-dim);letter-spacing:1.5px;margin-bottom:4px;">// TOKEN</div>
          <div style="font-family:var(--z-mono);font-size:1.1rem;font-weight:700;color:${C};">${PROJECT.token}</div>
          <div style="font-family:var(--z-mono);font-size:0.65rem;color:var(--z-muted);">BNB_CHAIN · BEP-20 · TGE_${PROJECT.tge.replace(' ','_')}</div>
        </div>
      </div>
    </div>
    <div style="border-top:1px solid rgba(255,255,255,0.05);padding-top:1.5rem;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:1rem;">
      <span style="font-family:var(--z-mono);font-size:0.65rem;color:var(--z-dim);">© 2026 ${PROJECT.name}. All rights reserved.</span>
      <span style="font-family:var(--z-mono);font-size:0.62rem;color:${C};background:${C}0a;padding:0.2rem 0.75rem;border:1px solid ${C}22;">BUILT_ON_BNB_CHAIN · POWERED_BY_AI_SIGNALS</span>
    </div>
  </div>
</footer>`
}
