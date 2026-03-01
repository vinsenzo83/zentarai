import { layout } from './layout'
import { PROJECT } from '../data'

const C  = PROJECT.color
const CD = PROJECT.colorDark
const CL = PROJECT.colorLight

export function homePage(): string {

  /* ══════════════════════════════════════
     HERO — Terminal + Live Signal Feed
  ══════════════════════════════════════ */
  const hero = `
  <section id="home" style="min-height:100vh;display:flex;align-items:center;position:relative;overflow:hidden;padding-top:64px;">

    <!-- Animated dot grid -->
    <div class="z-dot-bg" style="position:absolute;inset:0;opacity:0.35;pointer-events:none;"></div>

    <!-- Particle field container (JS populated) -->
    <div id="z-particle-field" style="position:absolute;inset:0;pointer-events:none;overflow:hidden;"></div>

    <!-- Radial gradient orbs -->
    <div style="position:absolute;top:-10%;left:-8%;width:700px;height:700px;background:radial-gradient(circle,${C}10 0%,transparent 65%);pointer-events:none;animation:z-float 12s ease-in-out infinite;"></div>
    <div style="position:absolute;bottom:-15%;right:-10%;width:600px;height:600px;background:radial-gradient(circle,#06b6d410 0%,transparent 65%);pointer-events:none;animation:z-float 9s ease-in-out infinite 4s;"></div>

    <!-- Animated horizontal scan line -->
    <div style="position:absolute;left:0;right:0;height:1px;background:linear-gradient(90deg,transparent,${C}33,transparent);pointer-events:none;animation:z-scan 6s linear infinite;top:0;"></div>

    <!-- Vertical scan line -->
    <div style="position:absolute;left:50%;top:0;width:1px;height:100%;background:linear-gradient(180deg,transparent,${C}22,transparent);pointer-events:none;"></div>

    <!-- Corner decorations -->
    <div style="position:absolute;top:80px;left:24px;width:40px;height:40px;border-top:1px solid ${C}44;border-left:1px solid ${C}44;pointer-events:none;"></div>
    <div style="position:absolute;bottom:24px;right:24px;width:40px;height:40px;border-bottom:1px solid ${C}44;border-right:1px solid ${C}44;pointer-events:none;"></div>

    <div class="z-inner" style="width:100%;position:relative;z-index:1;padding-top:3rem;padding-bottom:3rem;">
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:4rem;align-items:center;" id="z-hero-grid">

        <!-- LEFT: copy -->
        <div>
          <!-- Eyebrow -->
          <div style="display:inline-flex;align-items:center;gap:10px;margin-bottom:1.75rem;animation:z-glow-in 0.5s ease forwards;">
            <span style="width:6px;height:6px;background:${C};display:block;animation:z-signal-pulse 2s infinite;"></span>
            <span style="font-family:var(--z-mono);font-size:0.68rem;letter-spacing:2px;text-transform:uppercase;color:${C};">LIVE — AI Predictive Intelligence · BNB Chain</span>
          </div>

          <!-- H1 -->
          <h1 class="z-h1" style="margin-bottom:1.5rem;animation:z-glow-in 0.6s ease 0.1s both;">
            <span class="z-strike">react</span>to signals.<br/>
            <span style="color:${C};text-shadow:0 0 30px ${C}66;">predict</span> outcomes.
          </h1>

          <p style="font-size:1rem;color:var(--z-muted);line-height:1.85;margin-bottom:2rem;max-width:480px;animation:z-glow-in 0.6s ease 0.2s both;font-family:var(--z-body);">
            ZentarAI processes 500+ on-chain and off-chain data streams through proprietary ML models — surfacing decisive intelligence before it becomes market consensus.
          </p>

          <!-- Buttons -->
          <div style="display:flex;gap:0.875rem;flex-wrap:wrap;margin-bottom:2rem;animation:z-glow-in 0.6s ease 0.3s both;">
            <a href="/#signal" class="z-btn"><i class="fas fa-terminal" style="font-size:0.7rem;"></i> explore_signal</a>
            <a href="/whitepaper" class="z-btn-outline"><i class="fas fa-book" style="font-size:0.7rem;"></i> read_docs</a>
            <a href="/login" class="z-btn-ghost"><i class="fas fa-wallet" style="font-size:0.7rem;"></i> connect</a>
          </div>

          <!-- Get Started 3-step -->
          <div style="display:flex;align-items:center;gap:0;margin-bottom:2rem;animation:z-glow-in 0.6s ease 0.35s both;overflow:hidden;border:1px solid rgba(16,185,129,0.12);">
            ${[
              {n:'01', label:'Create Account', desc:'Email or wallet', icon:'fas fa-user-plus'},
              {n:'02', label:'Connect Wallet', desc:'MetaMask / WalletConnect', icon:'fas fa-wallet'},
              {n:'03', label:'Read Signals',   desc:'Live intelligence feed', icon:'fas fa-satellite-dish'},
            ].map((s,i) => `
            <div style="flex:1;padding:0.875rem;${i<2?'border-right:1px solid rgba(16,185,129,0.1);':''}display:flex;align-items:center;gap:10px;background:${i===0?C+'08':'transparent'};transition:background 0.2s;"
              onmouseover="this.style.background='${C}0a'" onmouseout="this.style.background='${i===0?C+'08':'transparent'}'">
              <div style="width:28px;height:28px;background:${C}15;border:1px solid ${C}30;display:flex;align-items:center;justify-content:center;flex-shrink:0;">
                <i class="${s.icon}" style="color:${C};font-size:0.65rem;"></i>
              </div>
              <div style="min-width:0;">
                <div style="font-family:var(--z-mono);font-size:0.58rem;color:${C};letter-spacing:1px;margin-bottom:1px;">${s.n}</div>
                <div style="font-family:var(--z-sans);font-size:0.78rem;font-weight:600;color:white;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${s.label}</div>
                <div style="font-size:0.65rem;color:var(--z-dim);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${s.desc}</div>
              </div>
            </div>`).join('')}
          </div>

          <!-- Stat row — terminal style -->
          <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:0;border:1px solid rgba(16,185,129,0.12);animation:z-glow-in 0.6s ease 0.4s both;margin-bottom:1.25rem;">
            ${[
              {v:'10B', l:'ZNTR Supply', c:C},
              {v:'Q2 2026', l:'TGE Target', c:CL},
              {v:'BEP-20', l:'BNB Chain', c:'#f3ba2f'},
            ].map((s,i) => `
            <div style="padding:1rem;${i<2?'border-right:1px solid rgba(16,185,129,0.12);':''}">
              <div style="font-family:var(--z-mono);font-size:1.3rem;font-weight:700;color:${s.c};letter-spacing:-1px;">${s.v}</div>
              <div style="font-family:var(--z-mono);font-size:0.63rem;color:var(--z-dim);margin-top:3px;letter-spacing:1px;text-transform:uppercase;">${s.l}</div>
            </div>`).join('')}
          </div>

          <!-- Contract Address Banner -->
          <div style="display:flex;align-items:center;gap:10px;padding:0.6rem 0.875rem;background:rgba(251,191,36,0.05);border:1px solid rgba(251,191,36,0.2);animation:z-glow-in 0.6s ease 0.45s both;">
            <i class="fas fa-file-contract" style="color:#f3ba2f;font-size:0.75rem;flex-shrink:0;"></i>
            <div style="flex:1;min-width:0;">
              <span style="font-family:var(--z-mono);font-size:0.58rem;color:#f3ba2f;letter-spacing:1px;text-transform:uppercase;">CONTRACT</span>
              <span style="font-family:var(--z-mono);font-size:0.68rem;color:var(--z-muted);margin-left:8px;word-break:break-all;">${PROJECT.contractAddress}</span>
            </div>
            <a href="https://bscscan.com/token/${PROJECT.contractAddress}" target="_blank" rel="noopener"
              style="font-family:var(--z-mono);font-size:0.6rem;color:#f3ba2f;border:1px solid rgba(251,191,36,0.3);padding:2px 8px;white-space:nowrap;text-decoration:none;flex-shrink:0;"
              onmouseover="this.style.background='rgba(251,191,36,0.1)'" onmouseout="this.style.background='transparent'">
              BSCScan ↗
            </a>
          </div>
        </div>

        <!-- RIGHT: Live signal terminal demo -->
        <div class="z-reveal-r" style="position:relative;" id="z-hero-right">
          <!-- Main terminal panel -->
          <div style="background:var(--z-bg1);border:1px solid rgba(16,185,129,0.2);position:relative;overflow:hidden;">
            <!-- Terminal top bar -->
            <div style="display:flex;align-items:center;justify-content:space-between;padding:0.75rem 1rem;background:rgba(16,185,129,0.06);border-bottom:1px solid rgba(16,185,129,0.12);">
              <div style="display:flex;align-items:center;gap:8px;">
                <div style="width:8px;height:8px;background:#ef4444;"></div>
                <div style="width:8px;height:8px;background:#fbbf24;"></div>
                <div style="width:8px;height:8px;background:${C};animation:z-blink 2s infinite;"></div>
              </div>
              <span style="font-family:var(--z-mono);font-size:0.65rem;color:var(--z-muted);">zentarai://signal-engine/live</span>
              <span class="z-badge z-badge-live"><span style="width:4px;height:4px;background:${C};display:inline-block;animation:z-signal-pulse 1.5s infinite;"></span>LIVE</span>
            </div>

            <!-- Signal feed body -->
            <div style="padding:0.75rem;display:flex;flex-direction:column;gap:0;" id="z-signal-feed">
              <!-- Dynamic live feed (z-live-feed injected by JS) -->
              <div id="z-live-feed" style="display:flex;flex-direction:column;gap:0;min-height:160px;"></div>

              <!-- Live typing cursor line -->
              <div style="display:flex;align-items:center;gap:8px;padding:7px 12px;background:${C}08;border-left:2px solid ${C};margin-top:1px;">
                <span style="font-family:var(--z-mono);font-size:0.68rem;color:${C};">$</span>
                <span id="z-typing" style="font-family:var(--z-mono);font-size:0.68rem;color:var(--z-muted);"></span>
                <span style="width:6px;height:12px;background:${C};animation:z-blink 1s infinite;display:inline-block;"></span>
              </div>
            </div>

            <!-- Bottom metrics bar -->
            <div style="display:grid;grid-template-columns:repeat(3,1fr);border-top:1px solid rgba(16,185,129,0.1);">
              ${[
                {l:'DATA_SOURCES', v:'500+'},
                {l:'LATENCY', v:'<1s'},
                {l:'UPTIME', v:'99.9%'},
              ].map((m,i) => `
              <div style="padding:0.625rem;text-align:center;${i<2?'border-right:1px solid rgba(16,185,129,0.08);':''}">
                <div style="font-family:var(--z-mono);font-size:0.82rem;font-weight:700;color:${C};">${m.v}</div>
                <div style="font-family:var(--z-mono);font-size:0.55rem;color:var(--z-dim);letter-spacing:1px;">${m.l}</div>
              </div>`).join('')}
            </div>
          </div>

          <!-- Floating info chips -->
          <div style="position:absolute;top:-14px;right:-12px;background:var(--z-bg1);border:1px solid rgba(251,191,36,0.35);padding:6px 12px;display:flex;align-items:center;gap:8px;">
            <i class="fas fa-link" style="color:#f3ba2f;font-size:0.7rem;"></i>
            <div>
              <div style="font-family:var(--z-mono);font-size:0.68rem;font-weight:700;color:white;">BNB Chain</div>
              <div style="font-family:var(--z-mono);font-size:0.6rem;color:var(--z-muted);">Chain ID: 56</div>
            </div>
          </div>
          <div style="position:absolute;bottom:-14px;left:-12px;background:var(--z-bg1);border:1px solid ${C}35;padding:6px 12px;display:flex;align-items:center;gap:8px;">
            <i class="fas fa-shield-alt" style="color:${C};font-size:0.7rem;"></i>
            <div>
              <div style="font-family:var(--z-mono);font-size:0.68rem;font-weight:700;color:white;">CertiK Audit</div>
              <div style="font-family:var(--z-mono);font-size:0.6rem;color:var(--z-muted);">Pre-TGE Planned</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>

  <!-- typing animation script (hero) -->
  <script>
  (function(){
    const lines = [
      'scanning whale_wallets --chain=BSC --threshold=1M',
      'running sentiment_fusion --sources=14 --mode=realtime',
      'pattern_match --model=v3.2 --confidence=0.89',
      'alert: anomaly_detected --protocol=pancakeswap --severity=medium',
    ];
    let li=0, ci=0;
    const el = document.getElementById('z-typing');
    if(!el) return;
    function type(){
      if(ci<lines[li].length){ el.textContent+=lines[li][ci++]; setTimeout(type,38); }
      else { setTimeout(erase,2000); }
    }
    function erase(){
      if(ci>0){ el.textContent=lines[li].slice(0,--ci); setTimeout(erase,18); }
      else { li=(li+1)%lines.length; setTimeout(type,500); }
    }
    setTimeout(type, 1800);
  })();
  </script>`

  /* ══════════════════════════════════════
     CONTRACT ADDRESS TOP BANNER
  ══════════════════════════════════════ */
  const contractBanner = `
  <div style="background:#0a0f08;border-bottom:1px solid rgba(251,191,36,0.15);padding:0.5rem 0;overflow:hidden;position:relative;">
    <div class="z-inner">
      <div style="display:flex;align-items:center;justify-content:center;gap:1.5rem;flex-wrap:wrap;">
        <div style="display:flex;align-items:center;gap:8px;">
          <span style="width:6px;height:6px;background:#f3ba2f;display:block;animation:z-signal-pulse 2s infinite;"></span>
          <span style="font-family:var(--z-mono);font-size:0.65rem;color:#f3ba2f;letter-spacing:1px;text-transform:uppercase;">ZNTR CONTRACT ADDRESS</span>
        </div>
        <div style="display:flex;align-items:center;gap:8px;">
          <span style="font-family:var(--z-mono);font-size:0.72rem;color:var(--z-muted);letter-spacing:0.5px;">${PROJECT.contractAddress}</span>
          <button onclick="navigator.clipboard.writeText('${PROJECT.contractAddress}').then(()=>{ this.textContent='Copied!'; setTimeout(()=>this.textContent='Copy',1500); })"
            style="font-family:var(--z-mono);font-size:0.6rem;color:#f3ba2f;background:rgba(251,191,36,0.08);border:1px solid rgba(251,191,36,0.25);padding:2px 10px;cursor:pointer;transition:background 0.2s;"
            onmouseover="this.style.background='rgba(251,191,36,0.15)'" onmouseout="this.style.background='rgba(251,191,36,0.08)'">Copy</button>
          <a href="https://bscscan.com/token/${PROJECT.contractAddress}" target="_blank" rel="noopener"
            style="font-family:var(--z-mono);font-size:0.6rem;color:#f3ba2f;border:1px solid rgba(251,191,36,0.25);padding:2px 10px;text-decoration:none;background:rgba(251,191,36,0.05);"
            onmouseover="this.style.background='rgba(251,191,36,0.12)'" onmouseout="this.style.background='rgba(251,191,36,0.05)'">
            BSCScan ↗
          </a>
        </div>
        <div style="display:flex;align-items:center;gap:6px;">
          <i class="fas fa-link" style="color:#f3ba2f;font-size:0.6rem;"></i>
          <span style="font-family:var(--z-mono);font-size:0.62rem;color:var(--z-dim);">BNB Chain · BEP-20 · TGE Q2 2026</span>
        </div>
      </div>
    </div>
  </div>`

  /* ══════════════════════════════════════
     SIGNAL METRICS BAR
  ══════════════════════════════════════ */
  const metricsBar = `
  <div style="padding:1.25rem 0;background:${C}06;border-top:1px solid ${C}12;border-bottom:1px solid ${C}12;position:relative;overflow:hidden;">
    <!-- Animated scan line -->
    <div style="position:absolute;top:0;left:-100%;width:40%;height:100%;background:linear-gradient(90deg,transparent,${C}08,transparent);animation:z-shimmer 4s linear infinite;pointer-events:none;"></div>
    <div class="z-inner">
      <div style="display:grid;grid-template-columns:repeat(6,1fr);gap:0;text-align:center;" id="z-metrics-bar">
        ${[
          {icon:'fas fa-satellite-dish', v:'500+', l:'data_sources',   target:500, suffix:'+'},
          {icon:'fas fa-bolt',            v:'<1s',  l:'signal_latency', target:0,  suffix:''},
          {icon:'fas fa-brain',           v:'3yr',  l:'training_data',  target:3,  suffix:'yr'},
          {icon:'fas fa-coins',           v:'10B',  l:'zntr_supply',    target:10, suffix:'B'},
          {icon:'fas fa-vote-yea',        v:'DAO',  l:'governance_2027',target:0,  suffix:''},
          {icon:'fas fa-link',            v:'BEP-20', l:'bnb_chain',    target:0,  suffix:''},
        ].map((s,i) => `
        <div class="z-reveal" style="padding:0.875rem;${i<5?'border-right:1px solid rgba(255,255,255,0.04);':''}display:flex;flex-direction:column;align-items:center;gap:4px;animation-delay:${i*0.08}s;transition:background 0.2s;" onmouseover="this.style.background='rgba(16,185,129,0.06)'" onmouseout="this.style.background='transparent'">
          <i class="${s.icon}" style="font-size:0.95rem;color:${C};margin-bottom:2px;animation:z-float ${3+i*0.5}s ease-in-out infinite;"></i>
          <div style="font-family:var(--z-mono);font-size:0.82rem;font-weight:700;color:white;"${s.target>0?` data-target="${s.target}" data-suffix="${s.suffix}"`:''}>
            ${s.v}
          </div>
          <div style="font-family:var(--z-mono);font-size:0.58rem;color:var(--z-dim);letter-spacing:1px;">${s.l}</div>
          <!-- mini waveform -->
          <div style="display:flex;align-items:flex-end;gap:2px;height:10px;margin-top:2px;">
            ${[0.4,0.8,0.6,1.0,0.5,0.9,0.3].map((h,wi) => `<div style="width:2px;background:${C}55;border-radius:1px;height:${Math.floor(h*10)}px;animation:z-wave ${0.6+wi*0.1}s ease-in-out infinite;animation-delay:${wi*0.07}s;"></div>`).join('')}
          </div>
        </div>`).join('')}
      </div>
    </div>
  </div>`

  /* ══════════════════════════════════════
     INTERACTIVE DEMO SECTION
     (wallet 연결 없이 시스템 시연)
  ══════════════════════════════════════ */
  const demo = `
  <div class="z-hr"></div>
  <section id="signal" class="z-section" style="position:relative;overflow:hidden;">
    <div class="z-dot-bg" style="position:absolute;inset:0;opacity:0.2;pointer-events:none;"></div>
    <div class="z-inner" style="position:relative;z-index:1;">

      <!-- Section header -->
      <div style="margin-bottom:3.5rem;" class="z-reveal">
        <div class="z-eyebrow">signal engine demo</div>
        <h2 class="z-h2" style="margin-bottom:0.875rem;">
          watch intelligence<br/><span style="color:${C};">process in real-time.</span>
        </h2>
        <p style="font-size:0.95rem;color:var(--z-muted);max-width:540px;line-height:1.85;font-family:var(--z-body);">
          No wallet required. This is how ZentarAI transforms raw blockchain noise into structured, actionable signal — <em style="color:white;font-style:normal;">before any human analyst can react.</em>
        </p>
      </div>

      <!-- Demo grid: pipeline visualization -->
      <div style="display:grid;grid-template-columns:1fr 1px 1fr 1px 1fr;gap:0;margin-bottom:3rem;" class="z-reveal" id="z-pipeline">

        <!-- Step 1: Input -->
        <div style="padding:1.75rem 1.5rem;">
          <div style="font-family:var(--z-mono);font-size:0.6rem;color:${C};letter-spacing:2px;margin-bottom:1rem;">// INPUT_LAYER</div>
          <h3 style="font-family:var(--z-sans);font-size:1rem;font-weight:700;color:white;margin-bottom:1rem;">Raw Data Ingestion</h3>
          <div style="display:flex;flex-direction:column;gap:6px;" id="z-demo-inputs">
            ${[
              {src:'BSC mempool', bytes:'2.4MB/s', c:C},
              {src:'Twitter/X sentiment', bytes:'8.1k posts/min', c:CL},
              {src:'DEX order flow', bytes:'12.3k tx/s', c:'#8b5cf6'},
              {src:'Whale tracker', bytes:'247 wallets', c:'#fbbf24'},
              {src:'Protocol TVL feeds', bytes:'38 protocols', c:'#f97316'},
            ].map(d => `
            <div style="display:flex;align-items:center;justify-content:space-between;padding:6px 10px;background:${d.c}08;border-left:2px solid ${d.c}55;">
              <span style="font-family:var(--z-mono);font-size:0.68rem;color:var(--z-muted);">${d.src}</span>
              <span style="font-family:var(--z-mono);font-size:0.62rem;color:${d.c};">${d.bytes}</span>
            </div>`).join('')}
          </div>
        </div>

        <!-- Divider line with flow arrows -->
        <div style="display:flex;flex-direction:column;justify-content:center;align-items:center;gap:12px;padding:0 0.5rem;">
          ${Array(5).fill(0).map((_,i) => `
          <i class="fas fa-chevron-right" style="color:${C}55;font-size:0.6rem;animation:z-glow-in 0.3s ease ${i*0.15}s both;"></i>`).join('')}
        </div>

        <!-- Step 2: Processing -->
        <div style="padding:1.75rem 1.5rem;background:${C}05;border-top:1px solid ${C}18;border-bottom:1px solid ${C}18;">
          <div style="font-family:var(--z-mono);font-size:0.6rem;color:${CL};letter-spacing:2px;margin-bottom:1rem;">// ML_PROCESSING</div>
          <h3 style="font-family:var(--z-sans);font-size:1rem;font-weight:700;color:white;margin-bottom:1rem;">Pattern Recognition</h3>
          <!-- Animated progress bars -->
          <div style="display:flex;flex-direction:column;gap:8px;" id="z-demo-proc">
            ${[
              {model:'anomaly_detect', pct:89, c:C},
              {model:'sentiment_fusion', pct:76, c:CL},
              {model:'price_forecast', pct:94, c:'#8b5cf6'},
              {model:'whale_classify', pct:83, c:'#fbbf24'},
              {model:'trend_pattern', pct:91, c:'#f97316'},
            ].map(m => `
            <div>
              <div style="display:flex;justify-content:space-between;margin-bottom:4px;">
                <span style="font-family:var(--z-mono);font-size:0.65rem;color:var(--z-muted);">${m.model}</span>
                <span style="font-family:var(--z-mono);font-size:0.65rem;color:${m.c};">${m.pct}%</span>
              </div>
              <div class="z-prog-track">
                <div class="z-prog-fill" data-w="${m.pct}" style="background:${m.c};"></div>
              </div>
            </div>`).join('')}
          </div>
        </div>

        <!-- Divider -->
        <div style="display:flex;flex-direction:column;justify-content:center;align-items:center;gap:12px;padding:0 0.5rem;">
          ${Array(5).fill(0).map((_,i) => `
          <i class="fas fa-chevron-right" style="color:${C}55;font-size:0.6rem;animation:z-glow-in 0.3s ease ${i*0.15}s both;"></i>`).join('')}
        </div>

        <!-- Step 3: Output signals -->
        <div style="padding:1.75rem 1.5rem;">
          <div style="font-family:var(--z-mono);font-size:0.6rem;color:#fbbf24;letter-spacing:2px;margin-bottom:1rem;">// SIGNAL_OUTPUT</div>
          <h3 style="font-family:var(--z-sans);font-size:1rem;font-weight:700;color:white;margin-bottom:1rem;">Actionable Intelligence</h3>
          <div style="display:flex;flex-direction:column;gap:6px;" id="z-demo-output">
            ${[
              {sig:'ACCUMULATE_SIGNAL', conf:'HIGH', c:C},
              {sig:'SENTIMENT_BULL',    conf:'MED',  c:CL},
              {sig:'WHALE_MOVE_ALERT',  conf:'HIGH', c:'#ef4444'},
              {sig:'TVL_ANOMALY',       conf:'LOW',  c:'#fbbf24'},
              {sig:'TREND_REVERSAL',    conf:'MED',  c:'#8b5cf6'},
            ].map(o => `
            <div style="display:flex;align-items:center;justify-content:space-between;padding:6px 10px;background:${o.c}08;border-right:2px solid ${o.c}55;">
              <span style="font-family:var(--z-mono);font-size:0.68rem;color:${o.c};">${o.sig}</span>
              <span class="z-badge" style="color:${o.c};border-color:${o.c}44;background:${o.c}0e;">${o.conf}</span>
            </div>`).join('')}
          </div>
        </div>
      </div>

      <!-- Demo CTA bar -->
      <div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:1.5rem;padding:1.5rem;background:${C}07;border:1px solid ${C}20;" class="z-reveal">
        <div>
          <div style="font-family:var(--z-mono);font-size:0.7rem;color:${C};margin-bottom:4px;">// DEMO_NOTE</div>
          <p style="font-size:0.875rem;color:var(--z-muted);font-family:var(--z-body);">
            This is a live simulation of the ZentarAI signal pipeline. Connect your wallet at TGE to access real signal feeds, premium tiers, and DAO participation.
          </p>
        </div>
        <div style="display:flex;gap:0.75rem;flex-shrink:0;">
          <a href="/whitepaper" class="z-btn-outline" style="font-size:0.72rem;padding:0.6rem 1.2rem;"><i class="fas fa-book" style="font-size:0.65rem;"></i> read_whitepaper</a>
          <a href="/login" class="z-btn" style="font-size:0.72rem;padding:0.6rem 1.2rem;"><i class="fas fa-terminal" style="font-size:0.65rem;"></i> init_wallet</a>
        </div>
      </div>
    </div>
  </section>`

  /* ══════════════════════════════════════
     ARCHITECTURE (replaces "How It Works")
  ══════════════════════════════════════ */
  const architecture = `
  <div class="z-hr"></div>
  <section id="architecture" class="z-section">
    <div class="z-inner">
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:5rem;align-items:start;" id="z-arch-grid">

        <!-- Left: description stack -->
        <div class="z-reveal-l">
          <div class="z-eyebrow">system architecture</div>
          <h2 class="z-h2" style="margin-bottom:1.25rem;">
            three-layer<br/><span style="color:${C};">signal topology.</span>
          </h2>
          <p style="font-size:0.95rem;color:var(--z-muted);line-height:1.9;margin-bottom:2rem;font-family:var(--z-body);">
            Unlike reactive analytics tools, ZentarAI operates across three distinct intelligence layers — each feeding the next with increasing signal confidence.
          </p>

          <!-- Timeline steps -->
          <div style="display:flex;flex-direction:column;gap:0;position:relative;">
            <div style="position:absolute;left:15px;top:0;bottom:0;width:1px;background:linear-gradient(180deg,${C},${CL},${C}44);"></div>
            ${[
              {n:'L1', title:'Data Aggregation Layer', desc:'500+ real-time streams: on-chain events, wallet flows, social sentiment, and DeFi protocol metrics — normalized into a unified data bus.', c:C},
              {n:'L2', title:'ML Signal Layer',        desc:'Proprietary models trained on 3+ years of blockchain behavioral data. Anomaly detection, sentiment fusion, and pattern libraries updated continuously.', c:CL},
              {n:'L3', title:'Intelligence Delivery',  desc:'Processed signals delivered sub-second to the ZentarAI dashboard, Signal API v1, and DAO strategy feeds — ahead of visible market movements.', c:'#fbbf24'},
            ].map((s,i) => `
            <div style="display:flex;gap:1.5rem;padding:1.25rem 0;padding-left:2.5rem;position:relative;animation:z-glow-in 0.5s ease ${i*0.15}s both;">
              <div style="position:absolute;left:9px;top:1.5rem;width:12px;height:12px;background:${s.c};border:2px solid var(--z-bg);"></div>
              <div>
                <div style="display:flex;align-items:center;gap:8px;margin-bottom:5px;">
                  <span style="font-family:var(--z-mono);font-size:0.65rem;color:${s.c};letter-spacing:1px;">[${s.n}]</span>
                  <span style="font-family:var(--z-sans);font-size:0.95rem;font-weight:600;color:white;">${s.title}</span>
                </div>
                <p style="font-size:0.82rem;color:var(--z-muted);line-height:1.75;font-family:var(--z-body);">${s.desc}</p>
              </div>
            </div>`).join('')}
          </div>
        </div>

        <!-- Right: capability cards -->
        <div class="z-reveal-r" style="display:flex;flex-direction:column;gap:0.875rem;">
          ${[
            {icon:'fas fa-satellite-dish', c:C,         title:'Real-Time Data Bus',       desc:'Ingests blockchain events, wallet signals, and social feeds with sub-second normalization across 500+ sources.', tags:['On-chain','Social','DEX flows']},
            {icon:'fas fa-brain',          c:CL,        title:'Adversarial ML Engine',    desc:'Six proprietary models run in parallel — anomaly detection, sentiment fusion, whale classification, and trend forecasting.', tags:['Anomaly','Sentiment','Forecast']},
            {icon:'fas fa-bolt',           c:'#fbbf24', title:'Signal Delivery API',      desc:'RESTful Signal API v1 exposes processed intelligence to DAOs, protocols, and builders with webhook alert support.', tags:['REST API','Webhooks','DAO feeds']},
            {icon:'fas fa-shield-alt',     c:'#22c55e', title:'Verified Smart Contracts', desc:'All ZNTR contracts source-verified on BSCScan. CertiK audit planned pre-TGE Q2 2026. Open-source repository.', tags:['CertiK','BSCScan','Open-source']},
          ].map((f,i) => `
          <div class="z-card" style="padding:1.25rem 1.5rem;display:flex;gap:1rem;animation:z-glow-in 0.5s ease ${i*0.1}s both;">
            <div style="width:42px;height:42px;background:${f.c}12;border:1px solid ${f.c}25;display:flex;align-items:center;justify-content:center;flex-shrink:0;">
              <i class="${f.icon}" style="color:${f.c};font-size:1rem;"></i>
            </div>
            <div style="flex:1;min-width:0;">
              <h4 style="font-family:var(--z-sans);font-size:0.9rem;font-weight:600;color:white;margin-bottom:4px;">${f.title}</h4>
              <p style="font-size:0.78rem;color:var(--z-muted);line-height:1.7;margin-bottom:8px;font-family:var(--z-body);">${f.desc}</p>
              <div style="display:flex;flex-wrap:wrap;gap:5px;">
                ${f.tags.map(t => `<span style="font-family:var(--z-mono);font-size:0.6rem;letter-spacing:0.5px;padding:2px 8px;border:1px solid rgba(255,255,255,0.08);color:var(--z-muted);">${t}</span>`).join('')}
              </div>
            </div>
          </div>`).join('')}
        </div>
      </div>
    </div>
  </section>`

  /* ══════════════════════════════════════
     TOKEN SECTION (replaces "Tokenomics")
  ══════════════════════════════════════ */
  const token = `
  <div class="z-hr"></div>
  <section id="token" class="z-section" style="position:relative;overflow:hidden;">
    <div class="z-grid-bg" style="position:absolute;inset:0;opacity:0.4;pointer-events:none;"></div>
    <div class="z-inner" style="position:relative;z-index:1;">
      <div style="text-align:center;max-width:560px;margin:0 auto 3.5rem;" class="z-reveal">
        <div class="z-eyebrow">token architecture</div>
        <h2 class="z-h2" style="margin-bottom:0.875rem;">
          utility drives<br/><span style="color:${C};">the flywheel.</span>
        </h2>
        <p style="font-size:0.92rem;color:var(--z-muted);line-height:1.85;font-family:var(--z-body);">ZNTR is not a speculative asset — it's the access layer, governance key, and value capture mechanism for the ZentarAI intelligence network.</p>
      </div>

      <div style="display:grid;grid-template-columns:1fr 1fr;gap:3rem;align-items:start;" id="z-token-grid">
        <!-- Left: key metrics -->
        <div class="z-reveal-l">
          <!-- Token identity block -->
          <div style="border:1px solid ${C}22;margin-bottom:1.5rem;overflow:hidden;">
            <div style="background:${C}08;padding:0.75rem 1rem;border-bottom:1px solid ${C}18;">
              <span style="font-family:var(--z-mono);font-size:0.62rem;color:${C};letter-spacing:2px;">// ZNTR_TOKEN_SPEC</span>
            </div>
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:0;">
              ${[
                {k:'TOKEN_NAME',  v:'ZentarAI'},
                {k:'TICKER',      v:'ZNTR'},
                {k:'TOTAL_SUPPLY',v:'10,000,000,000'},
                {k:'NETWORK',     v:'BNB Chain'},
                {k:'STANDARD',    v:'BEP-20'},
                {k:'TGE_DATE',    v:'Q2 2026'},
              ].map((r,i) => `
              <div style="padding:0.75rem 1rem;${i%2===0?'border-right:1px solid rgba(16,185,129,0.08);':''}${i<4?'border-bottom:1px solid rgba(16,185,129,0.08);':''}">
                <div style="font-family:var(--z-mono);font-size:0.58rem;color:var(--z-dim);letter-spacing:1px;margin-bottom:3px;">${r.k}</div>
                <div style="font-family:var(--z-mono);font-size:0.82rem;font-weight:700;color:white;">${r.v}</div>
              </div>`).join('')}
            </div>
          </div>

          <!-- Allocation bars -->
          <div style="font-family:var(--z-mono);font-size:0.62rem;color:var(--z-dim);letter-spacing:2px;margin-bottom:0.875rem;">// ALLOCATION_MATRIX</div>
          <div style="display:flex;flex-direction:column;gap:8px;">
            ${[
              {cat:'Ecosystem Rewards', pct:40, c:C,         amt:'4.0B'},
              {cat:'Team & Advisors',   pct:15, c:CL,        amt:'1.5B'},
              {cat:'Partnerships',      pct:15, c:'#8b5cf6', amt:'1.5B'},
              {cat:'Private Sale',      pct:15, c:'#fbbf24', amt:'1.5B'},
              {cat:'Protocol Reserve',  pct:10, c:'#f97316', amt:'1.0B'},
              {cat:'Public Sale',       pct:5,  c:'#22c55e', amt:'0.5B'},
            ].map(a => `
            <div>
              <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:5px;">
                <div style="display:flex;align-items:center;gap:7px;">
                  <div style="width:7px;height:7px;background:${a.c};"></div>
                  <span style="font-size:0.8rem;color:var(--z-txt);font-family:var(--z-body);">${a.cat}</span>
                </div>
                <div style="display:flex;align-items:center;gap:8px;">
                  <span style="font-family:var(--z-mono);font-size:0.72rem;color:var(--z-muted);">${a.amt}</span>
                  <span style="font-family:var(--z-mono);font-size:0.82rem;font-weight:700;color:${a.c};">${a.pct}%</span>
                </div>
              </div>
              <div class="z-prog-track">
                <div class="z-prog-fill" data-w="${a.pct}" style="background:${a.c};"></div>
              </div>
            </div>`).join('')}
          </div>
        </div>

        <!-- Right: chart + vesting -->
        <div class="z-reveal-r" style="display:flex;flex-direction:column;gap:1.25rem;">
          <!-- Donut chart -->
          <div style="border:1px solid rgba(16,185,129,0.12);padding:1.75rem;text-align:center;">
            <div style="position:relative;display:inline-block;">
              <canvas id="tokenomicsChart" width="240" height="240"></canvas>
              <div style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);">
                <div style="font-family:var(--z-mono);font-size:1.4rem;font-weight:700;color:${C};">10B</div>
                <div style="font-family:var(--z-mono);font-size:0.58rem;color:var(--z-dim);letter-spacing:1px;">ZNTR</div>
              </div>
            </div>
          </div>

          <!-- Vesting table -->
          <div style="border:1px solid rgba(16,185,129,0.1);overflow:hidden;">
            <div style="background:${C}06;padding:0.625rem 1rem;border-bottom:1px solid rgba(16,185,129,0.1);display:flex;align-items:center;justify-content:space-between;">
              <span style="font-family:var(--z-mono);font-size:0.6rem;color:${C};letter-spacing:2px;">// VESTING_SCHEDULE</span>
              <a href="/vesting" style="font-family:var(--z-mono);font-size:0.6rem;color:var(--z-muted);text-decoration:none;letter-spacing:0.5px;" onmouseover="this.style.color='${C}'" onmouseout="this.style.color='var(--z-muted)'">full_details →</a>
            </div>
            <table style="width:100%;border-collapse:collapse;font-size:0.75rem;">
              <thead>
                <tr style="border-bottom:1px solid rgba(255,255,255,0.04);">
                  <th style="text-align:left;padding:7px 12px;font-family:var(--z-mono);font-size:0.58rem;color:var(--z-dim);letter-spacing:1px;font-weight:400;">CATEGORY</th>
                  <th style="text-align:center;padding:7px 8px;font-family:var(--z-mono);font-size:0.58rem;color:var(--z-dim);letter-spacing:1px;font-weight:400;">CLIFF</th>
                  <th style="text-align:center;padding:7px 8px;font-family:var(--z-mono);font-size:0.58rem;color:var(--z-dim);letter-spacing:1px;font-weight:400;">VEST</th>
                </tr>
              </thead>
              <tbody>
                ${[
                  {cat:'Ecosystem', col:C,         cliff:'—',     vest:'36 mo'},
                  {cat:'Team',      col:CL,        cliff:'12 mo', vest:'36 mo'},
                  {cat:'Partners',  col:'#8b5cf6', cliff:'3 mo',  vest:'30 mo'},
                  {cat:'Private',   col:'#fbbf24', cliff:'6 mo',  vest:'18 mo'},
                  {cat:'Reserve',   col:'#f97316', cliff:'—',     vest:'48 mo'},
                  {cat:'Public',    col:'#22c55e', cliff:'—',     vest:'TGE'},
                ].map(r => `
                <tr style="border-bottom:1px solid rgba(255,255,255,0.03);">
                  <td style="padding:7px 12px;"><div style="display:flex;align-items:center;gap:7px;"><div style="width:6px;height:6px;background:${r.col};"></div><span style="font-family:var(--z-sans);font-size:0.78rem;color:var(--z-txt);">${r.cat}</span></div></td>
                  <td style="text-align:center;padding:7px 8px;font-family:var(--z-mono);font-size:0.72rem;color:var(--z-muted);">${r.cliff}</td>
                  <td style="text-align:center;padding:7px 8px;font-family:var(--z-mono);font-size:0.72rem;color:${r.col};font-weight:700;">${r.vest}</td>
                </tr>`).join('')}
              </tbody>
            </table>
          </div>

          <!-- 60mo release chart -->
          <div style="border:1px solid rgba(16,185,129,0.1);padding:1rem;">
            <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:0.875rem;flex-wrap:wrap;gap:0.5rem;">
              <span style="font-family:var(--z-mono);font-size:0.6rem;color:${C};letter-spacing:1.5px;">// 60_MONTH_RELEASE</span>
              <div style="display:flex;gap:1rem;">
                ${[{mo:'M12',v:'33%',c:CL},{mo:'M36',v:'79%',c:'#fbbf24'},{mo:'M48',v:'100%',c:'#f97316'}].map(m=>`
                <div style="text-align:center;"><div style="font-family:var(--z-mono);font-size:0.7rem;font-weight:700;color:${m.c};">${m.v}</div><div style="font-family:var(--z-mono);font-size:0.55rem;color:var(--z-dim);">${m.mo}</div></div>`).join('')}
              </div>
            </div>
            <canvas id="vestingChart" height="70"></canvas>
          </div>
        </div>
      </div>
    </div>
  </section>`

  /* ══════════════════════════════════════
     NETWORK SECTION (replaces "Ecosystem")
  ══════════════════════════════════════ */
  const network = `
  <div class="z-hr"></div>
  <section id="network" class="z-section">
    <div class="z-inner">
      <div style="text-align:center;max-width:540px;margin:0 auto 3.5rem;" class="z-reveal">
        <div class="z-eyebrow">intelligence network</div>
        <h2 class="z-h2" style="margin-bottom:0.875rem;">
          data compounds.<br/><span style="color:${C};">signals converge.</span>
        </h2>
        <p style="font-size:0.92rem;color:var(--z-muted);line-height:1.85;font-family:var(--z-body);">Four interconnected modules form a closed intelligence loop — where each signal improves the next prediction cycle.</p>
      </div>

      <!-- 2x2 module grid -->
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:1px;background:rgba(16,185,129,0.08);margin-bottom:2.5rem;" id="z-network-grid">
        ${[
          {icon:'fas fa-database', c:C,         title:'Signal Intelligence Platform',
            code:'SIP_v1.3',
            desc:'The core engine aggregates on-chain events, wallet behavior, DeFi TVL, and social layers into a normalized intelligence stream — processed every 850ms.',
            items:['On-chain event indexing','Wallet behavioral clustering','DeFi TVL correlation engine','Social sentiment fusion']},
          {icon:'fas fa-code',     c:CL,        title:'Signal API & Dev SDK',
            code:'API_v1.0',
            desc:'Developer-first REST API exposing processed signals to DAOs, protocols, and builders. Webhook alerts, BNB Chain SDK, and configurable thresholds.',
            items:['REST API v1 (JSON)','Webhook alert system','BNB Chain SDK','DAO strategy integration']},
          {icon:'fas fa-users',    c:'#8b5cf6', title:'DAO Governance Protocol',
            code:'DAO_2027',
            desc:'ZNTR token holders govern signal parameters, fund allocation, and protocol upgrades through on-chain voting — launching Q1 2027.',
            items:['On-chain proposal voting','Treasury management','Signal parameter tuning','Protocol upgrade governance']},
          {icon:'fas fa-coins',    c:'#fbbf24', title:'ZNTR Incentive Loop',
            code:'ECON_v1',
            desc:'Platform usage generates staking yield, unlocks premium signal tiers, and accumulates governance weight — forming a self-reinforcing participation flywheel.',
            items:['Staking yield (APY)','Premium tier unlocks','Governance weighting','Fee burn mechanism']},
        ].map((m,i) => `
        <div class="z-reveal" style="background:var(--z-bg);padding:2rem;animation-delay:${i*0.08}s;position:relative;overflow:hidden;">
          <div style="position:absolute;top:1rem;right:1rem;font-family:var(--z-mono);font-size:0.6rem;color:var(--z-dim);letter-spacing:1px;">${m.code}</div>
          <div style="width:44px;height:44px;background:${m.c}10;border:1px solid ${m.c}25;display:flex;align-items:center;justify-content:center;margin-bottom:1rem;">
            <i class="${m.icon}" style="color:${m.c};font-size:1.1rem;"></i>
          </div>
          <h3 style="font-family:var(--z-sans);font-size:1rem;font-weight:700;color:white;margin-bottom:0.625rem;">${m.title}</h3>
          <p style="font-size:0.8rem;color:var(--z-muted);line-height:1.75;margin-bottom:1rem;font-family:var(--z-body);">${m.desc}</p>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:5px;">
            ${m.items.map(it => `
            <div style="display:flex;align-items:center;gap:6px;padding:5px 8px;background:${m.c}06;border-left:1px solid ${m.c}33;">
              <i class="fas fa-chevron-right" style="color:${m.c};font-size:0.55rem;"></i>
              <span style="font-size:0.72rem;color:var(--z-muted);font-family:var(--z-body);">${it}</span>
            </div>`).join('')}
          </div>
        </div>`).join('')}
      </div>

      <!-- Ecosystem stats row -->
      <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:rgba(16,185,129,0.08);" class="z-reveal" id="z-eco-stats">
        ${[
          {v:'500+', l:'data sources', suffix:'', c:C},
          {v:'6',    l:'tier-1 partners', suffix:'', c:CL},
          {v:'99.9', l:'% uptime SLA', suffix:'%', c:'#8b5cf6'},
          {v:'Q2',   l:'2026 TGE launch', suffix:'', c:'#fbbf24'},
        ].map(s => `
        <div style="background:var(--z-bg);padding:1.5rem;text-align:center;">
          <div class="z-stat-num" data-target="${parseInt(s.v)||0}" data-suffix="${s.suffix}" style="color:${s.c};font-size:1.8rem;">${s.v}${s.suffix}</div>
          <div style="font-family:var(--z-mono);font-size:0.62rem;color:var(--z-dim);letter-spacing:1px;margin-top:6px;text-transform:uppercase;">${s.l}</div>
        </div>`).join('')}
      </div>
    </div>
  </section>`

  /* ══════════════════════════════════════
     ROADMAP — Vertical Timeline
  ══════════════════════════════════════ */
  const roadmap = `
  <div class="z-hr"></div>
  <section id="roadmap" class="z-section" style="position:relative;overflow:hidden;">
    <div style="position:absolute;left:50%;top:0;bottom:0;width:1px;background:linear-gradient(180deg,transparent,${C}22,${C}44,${C}22,transparent);pointer-events:none;transform:translateX(-50%);"></div>
    <div class="z-inner" style="position:relative;z-index:1;">
      <div style="text-align:center;max-width:520px;margin:0 auto 3.5rem;" class="z-reveal">
        <div class="z-eyebrow">execution timeline</div>
        <h2 class="z-h2" style="margin-bottom:0.875rem;">
          from signal<br/><span style="color:${C};">to network.</span>
        </h2>
        <p style="font-size:0.92rem;color:var(--z-muted);line-height:1.85;font-family:var(--z-body);">Four milestone-driven phases. Each one expands the intelligence surface area of the ZentarAI network.</p>
      </div>

      <!-- 4-column grid (different from AILINK) -->
      <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:1.25rem;" id="z-roadmap-grid">
        ${PROJECT.roadmap.map((p,i) => {
          const sc = p.status==='completed'?'#22c55e':p.status==='in-progress'?C:p.status==='upcoming'?'#fbbf24':'#4a5568'
          const sl = p.status==='completed'?'DONE':p.status==='in-progress'?'ACTIVE':p.status==='upcoming'?'NEXT':'FUTURE'
          return `
          <div class="z-reveal" style="animation-delay:${i*0.1}s;position:relative;">
            <div style="border:1px solid ${sc}${p.status==='in-progress'?'55':'22'};padding:1.5rem;${p.status==='in-progress'?`box-shadow:0 0 24px ${C}18;`:''}">
              <!-- Top corner phase label -->
              <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:1rem;">
                <span style="font-family:var(--z-mono);font-size:0.72rem;font-weight:700;color:${sc};">0${i+1}</span>
                <span class="z-badge" style="color:${sc};border-color:${sc}44;background:${sc}0e;font-size:0.58rem;">${sl}</span>
              </div>
              <div style="font-family:var(--z-mono);font-size:0.65rem;color:${sc};letter-spacing:0.5px;margin-bottom:5px;">${p.period}</div>
              <h3 style="font-family:var(--z-sans);font-size:1rem;font-weight:700;color:white;margin-bottom:1rem;">${p.phase}</h3>
              <div style="display:flex;flex-direction:column;gap:6px;">
                ${p.items.map(it => `
                <div style="display:flex;align-items:flex-start;gap:7px;">
                  <div style="width:4px;height:4px;background:${sc};flex-shrink:0;margin-top:7px;"></div>
                  <span style="font-size:0.78rem;color:${p.status==='completed'?'var(--z-dim)':'var(--z-muted)'};line-height:1.5;font-family:var(--z-body);${p.status==='completed'?'text-decoration:line-through;':''}">${it}</span>
                </div>`).join('')}
              </div>
            </div>
            ${p.status==='in-progress'?`<div style="position:absolute;top:0;left:0;right:0;height:2px;background:linear-gradient(90deg,transparent,${C},transparent);"></div>`:''}
          </div>`}).join('')}
      </div>
    </div>
  </section>`

  /* ══════════════════════════════════════
     TEAM — Horizontal strip (not grid)
  ══════════════════════════════════════ */
  const team = `
  <div class="z-hr"></div>
  <section id="team" class="z-section">
    <div class="z-inner">
      <div style="display:grid;grid-template-columns:1fr 2fr;gap:4rem;align-items:start;" id="z-team-grid">
        <!-- Left: header -->
        <div class="z-reveal-l">
          <div class="z-eyebrow">core contributors</div>
          <h2 class="z-h2" style="margin-bottom:1.25rem;">
            the minds<br/>behind<br/><span style="color:${C};">the signal.</span>
          </h2>
          <p style="font-size:0.88rem;color:var(--z-muted);line-height:1.85;margin-bottom:1.75rem;font-family:var(--z-body);">AI engineers, ML researchers, Web3 growth strategists, and data scientists — assembled to build predictive intelligence infrastructure for the next cycle.</p>
          <div style="display:flex;flex-direction:column;gap:6px;">
            ${['AI/ML Engineers','Blockchain Devs','Data Scientists','Backend Engineers','Growth Strategists','Research Analysts'].map(r => `
            <div style="display:flex;align-items:center;gap:8px;">
              <i class="fas fa-chevron-right" style="color:${C};font-size:0.6rem;"></i>
              <span style="font-size:0.82rem;color:var(--z-muted);font-family:var(--z-body);">${r}</span>
            </div>`).join('')}
          </div>
        </div>
        <!-- Right: team cards -->
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:1px;background:rgba(16,185,129,0.08);" class="z-reveal-r" id="z-team-cards">
          ${PROJECT.team.map((m,i) => {
            const cols=[C,CL,'#8b5cf6','#fbbf24']
            const col=cols[i%cols.length]
            return `
            <div style="background:var(--z-bg1);padding:1.5rem;position:relative;overflow:hidden;">
              <div style="position:absolute;top:0;left:0;right:0;height:2px;background:linear-gradient(90deg,${col},transparent);"></div>
              <div style="display:flex;align-items:center;gap:10px;margin-bottom:0.875rem;">
                <div style="width:36px;height:36px;background:${col}18;border:1px solid ${col}30;display:flex;align-items:center;justify-content:center;flex-shrink:0;">
                  <span style="font-family:var(--z-mono);font-size:0.9rem;font-weight:700;color:${col};">${m.name.charAt(0)}</span>
                </div>
                <div>
                  <div style="font-family:var(--z-sans);font-size:0.9rem;font-weight:600;color:white;">${m.name}</div>
                  <div style="font-family:var(--z-mono);font-size:0.62rem;color:${col};letter-spacing:0.5px;">${m.role.toLowerCase()}</div>
                </div>
              </div>
              <p style="font-size:0.78rem;color:var(--z-muted);line-height:1.7;font-family:var(--z-body);">${m.bio}</p>
            </div>`}).join('')}
        </div>
      </div>
    </div>
  </section>`

  /* ══════════════════════════════════════
     PARTNERS — Logo strip + detail cards
  ══════════════════════════════════════ */
  const partners = `
  <div class="z-hr"></div>
  <section id="partners" class="z-section" style="background:${C}03;">
    <div class="z-inner">
      <div style="text-align:center;max-width:500px;margin:0 auto 3rem;" class="z-reveal">
        <div class="z-eyebrow">infrastructure partners</div>
        <h2 class="z-h2" style="margin-bottom:0.875rem;">
          built on<br/><span style="color:${C};">proven rails.</span>
        </h2>
        <p style="font-size:0.88rem;color:var(--z-muted);line-height:1.85;font-family:var(--z-body);">Every component of ZentarAI runs on battle-tested infrastructure. No experimental dependencies.</p>
      </div>

      <!-- Partner grid: 3 cols, flat minimal style -->
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:1px;background:rgba(16,185,129,0.08);margin-bottom:2rem;" class="z-reveal" id="z-partner-grid">
        ${[
          {name:'BNB Chain',      cat:'infrastructure', icon:'fas fa-link',          c:'#f3ba2f', url:'https://www.bnbchain.org',       desc:'Native blockchain network — Chain ID 56'},
          {name:'PancakeSwap',    cat:'dex_listing',    icon:'fas fa-exchange-alt',  c:'#1FC7D4', url:'https://pancakeswap.finance',    desc:'Initial DEX liquidity event at TGE'},
          {name:'Chainlink',      cat:'oracle_layer',   icon:'fas fa-link',          c:'#375BD2', url:'https://chain.link',             desc:'Decentralized price and data oracles'},
          {name:'CertiK',         cat:'security_audit', icon:'fas fa-shield-alt',    c:'#00D1A0', url:'https://www.certik.com',          desc:'Pre-TGE smart contract audit (planned)'},
          {name:'Google Cloud AI',cat:'ai_infra',       icon:'fab fa-google',        c:'#4285F4', url:'https://cloud.google.com/ai',    desc:'ML model hosting and GPU compute layer'},
          {name:'OKX Web3',       cat:'exchange',       icon:'fas fa-exchange-alt',  c:'#00CCFF', url:'https://www.okx.com/web3',       desc:'Web3 wallet and DEX routing partner'},
        ].map((p,i) => `
        <a href="${p.url}" target="_blank" rel="noopener" class="z-reveal" style="background:var(--z-bg);padding:1.5rem;text-decoration:none;display:flex;flex-direction:column;gap:0.875rem;animation-delay:${i*0.06}s;transition:background 0.2s;"
          onmouseover="this.style.background='${p.c}08'" onmouseout="this.style.background='var(--z-bg)'">
          <div style="display:flex;align-items:center;justify-content:space-between;">
            <div style="width:38px;height:38px;background:${p.c}12;border:1px solid ${p.c}22;display:flex;align-items:center;justify-content:center;">
              <i class="${p.icon}" style="color:${p.c};font-size:0.95rem;"></i>
            </div>
            <span style="font-family:var(--z-mono);font-size:0.58rem;color:var(--z-dim);letter-spacing:1px;text-transform:uppercase;">${p.cat}</span>
          </div>
          <div>
            <div style="font-family:var(--z-sans);font-size:0.9rem;font-weight:600;color:white;margin-bottom:3px;">${p.name}</div>
            <div style="font-size:0.75rem;color:var(--z-muted);font-family:var(--z-body);">${p.desc}</div>
          </div>
          <div style="display:flex;align-items:center;gap:4px;font-family:var(--z-mono);font-size:0.62rem;color:var(--z-dim);">
            <i class="fas fa-external-link-alt" style="font-size:0.55rem;"></i> visit_site
          </div>
        </a>`).join('')}
      </div>

      <!-- Partnership CTA -->
      <div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:1.5rem;padding:1.75rem;border:1px solid ${C}20;background:${C}06;" class="z-reveal">
        <div>
          <div style="font-family:var(--z-mono);font-size:0.62rem;color:${C};letter-spacing:2px;margin-bottom:6px;">// PARTNERSHIP_PROGRAM</div>
          <h3 style="font-family:var(--z-sans);font-size:1.1rem;font-weight:700;color:white;margin-bottom:5px;">Integrate ZentarAI signals into your protocol.</h3>
          <p style="font-size:0.82rem;color:var(--z-muted);font-family:var(--z-body);">DeFi protocols, AI research labs, data providers — apply for early API access and co-marketing.</p>
        </div>
        <a href="${PROJECT.urls.telegram}" target="_blank" class="z-btn" style="flex-shrink:0;"><i class="fab fa-telegram" style="font-size:0.75rem;"></i> apply_partnership</a>
      </div>
    </div>
  </section>`

  /* ══════════════════════════════════════
     COMMUNITY — Asymmetric layout
  ══════════════════════════════════════ */
  const community = `
  <div class="z-hr"></div>
  <section id="community" class="z-section" style="position:relative;overflow:hidden;">
    <div style="position:absolute;top:0;right:0;width:500px;height:500px;background:radial-gradient(circle,${C}07 0%,transparent 60%);pointer-events:none;"></div>
    <div class="z-inner" style="position:relative;z-index:1;">
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:2rem;margin-bottom:2rem;" id="z-comm-grid">

        <!-- X card -->
        <div class="z-card z-reveal-l" style="padding:2rem;overflow:hidden;position:relative;">
          <div style="position:absolute;top:0;left:0;bottom:0;width:3px;background:linear-gradient(180deg,white,rgba(255,255,255,0.2));"></div>
          <div style="display:flex;align-items:center;gap:12px;margin-bottom:1.25rem;">
            <div style="width:46px;height:46px;background:rgba(0,0,0,0.4);border:1px solid rgba(255,255,255,0.12);display:flex;align-items:center;justify-content:center;">
              <i class="fab fa-x-twitter" style="font-size:1.2rem;color:white;"></i>
            </div>
            <div>
              <div style="font-family:var(--z-sans);font-size:1rem;font-weight:700;color:white;">X (Twitter)</div>
              <div style="font-family:var(--z-mono);font-size:0.65rem;color:var(--z-muted);">@intellora_</div>
            </div>
          </div>
          <p style="font-size:0.85rem;color:var(--z-muted);line-height:1.8;margin-bottom:1.25rem;font-family:var(--z-body);">Signal alerts, TGE countdown, product drops, and ecosystem announcements — delivered daily to 24k+ followers.</p>
          <div style="display:flex;gap:2rem;margin-bottom:1.5rem;">
            ${[{v:'24k+',l:'followers'},{v:'Daily',l:'signals'},{v:'Active',l:'community'}].map(s=>`
            <div><div style="font-family:var(--z-mono);font-size:1rem;font-weight:700;color:white;">${s.v}</div><div style="font-family:var(--z-mono);font-size:0.6rem;color:var(--z-dim);letter-spacing:1px;">${s.l}</div></div>`).join('')}
          </div>
          <a href="${PROJECT.urls.twitter}" target="_blank" class="z-btn-ghost" style="width:100%;justify-content:center;">
            <i class="fab fa-x-twitter"></i> follow @intellora_
          </a>
        </div>

        <!-- Telegram card -->
        <div class="z-card z-reveal-r" style="padding:2rem;overflow:hidden;position:relative;border-color:rgba(41,160,216,0.25);">
          <div style="position:absolute;top:0;left:0;bottom:0;width:3px;background:linear-gradient(180deg,#29A0D8,rgba(41,160,216,0.2));"></div>
          <div style="display:flex;align-items:center;gap:12px;margin-bottom:1.25rem;">
            <div style="width:46px;height:46px;background:rgba(41,160,216,0.12);border:1px solid rgba(41,160,216,0.25);display:flex;align-items:center;justify-content:center;">
              <i class="fab fa-telegram" style="font-size:1.2rem;color:#29A0D8;"></i>
            </div>
            <div>
              <div style="font-family:var(--z-sans);font-size:1rem;font-weight:700;color:white;">Telegram</div>
              <div style="font-family:var(--z-mono);font-size:0.65rem;color:var(--z-muted);">t.me/ZentarAI</div>
            </div>
          </div>
          <p style="font-size:0.85rem;color:var(--z-muted);line-height:1.8;margin-bottom:1.25rem;font-family:var(--z-body);">Direct team access, real-time signal discussions, AMA sessions, and exclusive early supporter benefits — 24/7 active.</p>
          <div style="display:flex;gap:2rem;margin-bottom:1.5rem;">
            ${[{v:'Growing',l:'members'},{v:'24/7',l:'active'},{v:'AMA',l:'sessions'}].map(s=>`
            <div><div style="font-family:var(--z-mono);font-size:1rem;font-weight:700;color:white;">${s.v}</div><div style="font-family:var(--z-mono);font-size:0.6rem;color:var(--z-dim);letter-spacing:1px;">${s.l}</div></div>`).join('')}
          </div>
          <a href="${PROJECT.urls.telegram}" target="_blank" style="display:flex;align-items:center;justify-content:center;gap:8px;width:100%;padding:0.75rem;background:rgba(41,160,216,0.1);border:1px solid rgba(41,160,216,0.25);color:#29A0D8;font-family:var(--z-mono);font-size:0.75rem;font-weight:600;text-decoration:none;letter-spacing:0.5px;transition:all 0.2s;"
            onmouseover="this.style.background='rgba(41,160,216,0.2)'" onmouseout="this.style.background='rgba(41,160,216,0.1)'">
            <i class="fab fa-telegram"></i> join_community
          </a>
        </div>
      </div>

      <!-- Early access strip -->
      <div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:1.5rem;padding:1.75rem;border:1px solid ${C}22;background:${C}06;position:relative;overflow:hidden;" class="z-reveal">
        <div style="position:absolute;right:-30px;top:-30px;width:180px;height:180px;background:radial-gradient(circle,${C}10,transparent);pointer-events:none;"></div>
        <div style="position:relative;z-index:1;">
          <div style="font-family:var(--z-mono);font-size:0.62rem;color:${C};letter-spacing:2px;margin-bottom:6px;">// EARLY_SUPPORTER_PROGRAM</div>
          <h3 style="font-family:var(--z-sans);font-size:1.1rem;font-weight:700;color:white;margin-bottom:6px;">Secure your whitelist spot before TGE.</h3>
          <p style="font-size:0.82rem;color:var(--z-muted);font-family:var(--z-body);">Early community members get private sale whitelist priority, exclusive badge, and premium signal tier at launch.</p>
          <div style="display:flex;gap:1.5rem;margin-top:0.875rem;flex-wrap:wrap;">
            ${[
              {icon:'fas fa-key',    c:'#fbbf24', t:'whitelist_priority'},
              {icon:'fas fa-medal',  c:C,         t:'early_badge'},
              {icon:'fas fa-signal', c:CL,        t:'premium_signals'},
            ].map(b=>`
            <div style="display:flex;align-items:center;gap:6px;">
              <i class="${b.icon}" style="color:${b.c};font-size:0.7rem;"></i>
              <span style="font-family:var(--z-mono);font-size:0.65rem;color:var(--z-muted);letter-spacing:0.5px;">${b.t}</span>
            </div>`).join('')}
          </div>
        </div>
        <div style="display:flex;flex-direction:column;gap:0.625rem;min-width:200px;position:relative;z-index:1;">
          <a href="${PROJECT.urls.twitter}" target="_blank" class="z-btn" style="justify-content:center;font-size:0.72rem;padding:0.65rem 1.2rem;"><i class="fab fa-x-twitter" style="font-size:0.65rem;"></i> follow_for_updates</a>
          <a href="${PROJECT.urls.telegram}" target="_blank" class="z-btn-outline" style="justify-content:center;font-size:0.72rem;padding:0.65rem 1.2rem;"><i class="fab fa-telegram" style="font-size:0.65rem;"></i> join_telegram</a>
        </div>
      </div>
    </div>
  </section>`

  /* ══════════════════════════════════════
     FAQ
  ══════════════════════════════════════ */
  const faq = `
  <div class="z-hr"></div>
  <section id="faq" class="z-section">
    <div class="z-inner">
      <div style="display:grid;grid-template-columns:1fr 2fr;gap:4rem;align-items:start;" id="z-faq-grid">
        <div class="z-reveal-l">
          <div class="z-eyebrow">knowledge base</div>
          <h2 class="z-h2" style="margin-bottom:1rem;">
            questions<br/><span style="color:${C};">answered.</span>
          </h2>
          <p style="font-size:0.88rem;color:var(--z-muted);line-height:1.85;font-family:var(--z-body);">Everything you need to know about ZentarAI, ZNTR, and the signal intelligence platform.</p>
        </div>
        <div class="z-reveal-r" style="display:flex;flex-direction:column;gap:0;border:1px solid rgba(16,185,129,0.1);">
          ${PROJECT.faq.map((item,i) => `
          <div style="border-bottom:1px solid rgba(255,255,255,0.04);">
            <button onclick="toggleFaq(${i})" style="width:100%;display:flex;align-items:center;justify-content:space-between;padding:1.1rem 1.25rem;background:transparent;border:none;cursor:pointer;text-align:left;gap:1rem;transition:background 0.2s;"
              onmouseover="this.style.background='rgba(16,185,129,0.04)'" onmouseout="this.style.background='transparent'">
              <span style="font-family:var(--z-sans);font-size:0.9rem;font-weight:600;color:white;">${item.q}</span>
              <i class="fas fa-chevron-down" id="faq-icon-${i}" style="color:${C};font-size:0.72rem;flex-shrink:0;transition:transform 0.3s;"></i>
            </button>
            <div id="faq-body-${i}" style="max-height:0;overflow:hidden;transition:max-height 0.35s ease;">
              <div style="padding:0 1.25rem 1.1rem;font-size:0.85rem;color:var(--z-muted);line-height:1.85;font-family:var(--z-body);">${item.a}</div>
            </div>
          </div>`).join('')}
        </div>
      </div>
    </div>
  </section>`

  /* ══════════════════════════════════════
     CTA — Full-bleed terminal style
  ══════════════════════════════════════ */
  const cta = `
  <div class="z-hr"></div>
  <section class="z-section z-reveal" style="position:relative;overflow:hidden;">
    <div class="z-grid-bg" style="position:absolute;inset:0;opacity:0.35;pointer-events:none;"></div>
    <div style="position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:800px;height:400px;background:radial-gradient(ellipse,${C}0d 0%,transparent 60%);pointer-events:none;"></div>
    <div class="z-inner" style="position:relative;z-index:1;text-align:center;">
      <div style="font-family:var(--z-mono);font-size:0.62rem;color:${C};letter-spacing:3px;text-transform:uppercase;margin-bottom:1.5rem;">// JOIN_ZENTARAI_NETWORK</div>
      <h2 style="font-family:var(--z-sans);font-size:clamp(2rem,5vw,3.4rem);font-weight:700;line-height:1.08;letter-spacing:-1.5px;margin-bottom:1.1rem;color:white;">
        stop reacting.<br/><span class="z-neon">start predicting.</span>
      </h2>
      <p style="font-size:1rem;color:var(--z-muted);line-height:1.85;margin-bottom:2.25rem;max-width:500px;margin-left:auto;margin-right:auto;font-family:var(--z-body);">ZentarAI compresses the gap between raw market noise and decisive intelligence. Your edge begins here.</p>
      <div style="display:flex;gap:0.875rem;justify-content:center;flex-wrap:wrap;margin-bottom:2rem;">
        <a href="${PROJECT.urls.twitter}" target="_blank" class="z-btn"><i class="fab fa-x-twitter" style="font-size:0.75rem;"></i> follow_on_x</a>
        <a href="${PROJECT.urls.telegram}" target="_blank" class="z-btn-outline"><i class="fab fa-telegram" style="font-size:0.75rem;"></i> join_telegram</a>
        <a href="/whitepaper" class="z-btn-ghost"><i class="fas fa-book" style="font-size:0.75rem;"></i> read_docs</a>
      </div>
      <!-- Status line -->
      <div style="display:inline-flex;align-items:center;gap:10px;font-family:var(--z-mono);font-size:0.65rem;color:var(--z-dim);">
        <span style="width:5px;height:5px;background:${C};animation:z-signal-pulse 2s infinite;display:inline-block;"></span>
        SIGNAL_ENGINE: ONLINE · TGE_TARGET: ${PROJECT.tge.toUpperCase()} · CHAIN: BNB_MAINNET_56
      </div>
    </div>
  </section>`

  /* ── RESPONSIVE ── */
  const responsive = `
  <style>
    @media(max-width:1024px){
      #z-hero-grid{grid-template-columns:1fr!important;}
      #z-hero-right{display:none!important;}
      #z-token-grid{grid-template-columns:1fr!important;}
      #z-arch-grid{grid-template-columns:1fr!important;}
      #z-team-grid{grid-template-columns:1fr!important;}
    }
    @media(max-width:900px){
      #z-metrics-bar{grid-template-columns:repeat(3,1fr)!important;}
      #z-pipeline{grid-template-columns:1fr!important;}
      #z-pipeline>*:nth-child(2),#z-pipeline>*:nth-child(4){display:none!important;}
      #z-network-grid{grid-template-columns:1fr!important;}
      #z-partner-grid{grid-template-columns:repeat(2,1fr)!important;}
      #z-faq-grid{grid-template-columns:1fr!important;}
      #z-roadmap-grid{grid-template-columns:repeat(2,1fr)!important;}
      #z-team-cards{grid-template-columns:1fr!important;}
    }
    @media(max-width:768px){
      #z-comm-grid{grid-template-columns:1fr!important;}
      #z-eco-stats{grid-template-columns:repeat(2,1fr)!important;}
      #z-team-cards{grid-template-columns:1fr 1fr!important;}
    }
    @media(max-width:599px){
      #z-metrics-bar{grid-template-columns:repeat(2,1fr)!important;}
      #z-partner-grid{grid-template-columns:1fr!important;}
      #z-roadmap-grid{grid-template-columns:1fr!important;}
      #z-eco-stats{grid-template-columns:1fr 1fr!important;}
      #z-team-cards{grid-template-columns:1fr!important;}
    }
  </style>`

  /* ── CHARTS ── */
  const charts = `
  <script>
  // Chart.js가 async 로딩이므로 준비 완료 후 실행
  function initCharts(){
  (function(){
    // Tokenomics donut
    const tCtx = document.getElementById('tokenomicsChart');
    if(tCtx){
      new Chart(tCtx,{
        type:'doughnut',
        data:{
          labels:${JSON.stringify(PROJECT.tokenomics.map(t=>t.label))},
          datasets:[{
            data:${JSON.stringify(PROJECT.tokenomics.map(t=>t.pct))},
            backgroundColor:['${C}','${CL}','#8b5cf6','#fbbf24','#f97316','#22c55e'],
            borderColor:'#030507',
            borderWidth:3,
            hoverOffset:6
          }]
        },
        options:{
          cutout:'74%',responsive:false,
          plugins:{
            legend:{display:false},
            tooltip:{
              backgroundColor:'#0c1318',
              borderColor:'rgba(16,185,129,0.2)',
              borderWidth:1,titleColor:'#fff',bodyColor:'#6b7d8a',
              padding:10,
              callbacks:{label:c=>' '+c.label+': '+c.raw+'%'}
            }
          }
        }
      });
    }

    // 60-month vesting line
    const vCtx = document.getElementById('vestingChart');
    if(vCtx){
      const months=Array.from({length:61},(_,i)=>i);
      let cum=500;
      const data=months.map(m=>{
        if(m===0) return 500;
        cum+=111.1;
        if(m>=4&&m<=33)  cum+=50;
        if(m>=7&&m<=24)  cum+=83.33;
        if(m>=13&&m<=48) cum+=41.67;
        cum+=20.83;
        if(cum>10000) cum=10000;
        return Math.round(cum*10)/10;
      });
      new Chart(vCtx,{
        type:'line',
        data:{
          labels:months,
          datasets:[{
            data:data,borderColor:'${C}',
            backgroundColor:'rgba(16,185,129,0.06)',
            borderWidth:2,fill:true,tension:0.4,
            pointRadius:0,pointHoverRadius:4,
            pointHoverBackgroundColor:'${CL}',
            pointHoverBorderColor:'#fff',
            pointHoverBorderWidth:2
          }]
        },
        options:{
          responsive:true,
          interaction:{intersect:false,mode:'index'},
          plugins:{
            legend:{display:false},
            tooltip:{
              backgroundColor:'#0c1318',
              borderColor:'rgba(16,185,129,0.2)',
              borderWidth:1,titleColor:'#fff',bodyColor:'#6b7d8a',
              padding:10,
              callbacks:{label:c=>' '+(c.parsed.y/1000).toFixed(2)+'B ZNTR ('+(c.parsed.y/100).toFixed(2)+'%)'}
            }
          },
          scales:{
            x:{grid:{color:'rgba(255,255,255,0.03)'},ticks:{color:'#3a4a54',font:{size:10},maxTicksLimit:12},border:{color:'rgba(255,255,255,0.05)'}},
            y:{grid:{color:'rgba(255,255,255,0.03)'},ticks:{color:'#3a4a54',font:{size:10},callback:v=>(v/1000).toFixed(1)+'B'},border:{color:'rgba(255,255,255,0.05)'}}
          }
        }
      });
    }

    // Demo progress bar animation
    document.querySelectorAll('.z-prog-fill').forEach(el=>{
      const w=el.dataset.w||0;
      setTimeout(()=>{ el.style.width=w+'%'; },400);
    });
  })();
  }
  // Chart.js async 대응: 로드 완료 시점에 맞춰 실행
  if(typeof Chart !== 'undefined'){
    initCharts();
  } else {
    document.querySelector('script[src*="chart.js"]').addEventListener('load', initCharts);
    // fallback: 1초 후에도 Chart가 없으면 재시도
    setTimeout(function(){ if(typeof Chart !== 'undefined' && !window._chartDone){ initCharts(); window._chartDone=true; } }, 1000);
  }
  </script>`

  const body = hero + contractBanner + metricsBar + demo + architecture + token + network + roadmap + team + partners + community + faq + cta + responsive + charts

  return layout(`${PROJECT.name} — ${PROJECT.tagline}`, body)
}
