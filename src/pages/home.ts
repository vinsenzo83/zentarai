import { layout } from './layout'
import { PROJECT } from '../data'

const C  = PROJECT.color
const CD = PROJECT.colorDark
const CL = PROJECT.colorLight

export function homePage(): string {

  /* ── HERO ── */
  const hero = `
  <section id="home" style="min-height:100vh;display:flex;align-items:center;position:relative;overflow:hidden;padding-top:80px;">
    <div class="grid-bg" style="position:absolute;inset:0;opacity:0.5;"></div>
    <div style="position:absolute;top:5%;left:-5%;width:600px;height:600px;background:radial-gradient(circle,${C}18 0%,transparent 70%);border-radius:50%;filter:blur(60px);animation:pulse-glow 8s ease-in-out infinite;pointer-events:none;"></div>
    <div style="position:absolute;bottom:10%;right:-5%;width:500px;height:500px;background:radial-gradient(circle,${CL}0e 0%,transparent 70%);border-radius:50%;filter:blur(70px);animation:pulse-glow 10s ease-in-out infinite 3s;pointer-events:none;"></div>

    <div class="section-inner" style="width:100%;position:relative;z-index:1;">
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:5rem;align-items:center;" id="hero-grid">
        <!-- Left -->
        <div>
          <div class="fade-up" style="display:inline-flex;align-items:center;gap:8px;background:rgba(16,185,129,0.08);border:1px solid rgba(16,185,129,0.22);border-radius:30px;padding:8px 18px;margin-bottom:1.75rem;">
            <span style="width:7px;height:7px;background:${C};border-radius:50%;animation:blink 2s infinite;flex-shrink:0;"></span>
            <span style="font-size:11px;font-weight:800;letter-spacing:1.5px;color:${C};text-transform:uppercase;">AI Predictive Intelligence · BNB Chain</span>
          </div>
          <h1 class="fade-up" style="font-size:clamp(2.5rem,5.5vw,4.5rem);font-weight:900;font-family:'Manrope',sans-serif;line-height:1.07;letter-spacing:-2px;margin-bottom:1.5rem;animation-delay:0.1s;">
            Turn Signal<br/><span class="gradient-text">Into Strategy.</span>
          </h1>
          <p class="fade-up" style="font-size:clamp(1rem,1.8vw,1.15rem);color:var(--text-muted);line-height:1.85;margin-bottom:2.25rem;max-width:500px;animation-delay:0.2s;">
            ${PROJECT.name} identifies meaningful trends before they become obvious.
            Intelligence is no longer reactive — <strong style="color:var(--text);">it's anticipatory.</strong>
          </p>
          <div class="fade-up" style="display:flex;gap:0.75rem;flex-wrap:wrap;margin-bottom:2.75rem;animation-delay:0.3s;">
            <a href="/#how-it-works" class="btn-primary" style="font-size:0.95rem;"><i class="fas fa-rocket"></i> Get Started</a>
            <a href="/whitepaper" class="btn-outline" style="font-size:0.95rem;"><i class="fas fa-file-alt"></i> Whitepaper</a>
            <a href="/login" class="btn-ghost" style="font-size:0.9rem;"><i class="fas fa-wallet"></i> Connect</a>
          </div>
          <!-- Stats row -->
          <div class="fade-up" style="display:grid;grid-template-columns:repeat(3,1fr);gap:1.25rem;animation-delay:0.4s;">
            ${[
              ['10B', 'ZNTR Total Supply', C],
              ['Q2 2026', 'TGE & DEX Listing', CL],
              ['BNB', 'BEP-20 Verified', '#f3ba2f'],
            ].map(([v, l, col]) => `
            <div style="border-left:2px solid ${col};padding-left:14px;">
              <div style="font-size:1.6rem;font-weight:900;font-family:'Manrope',sans-serif;color:${col};">${v}</div>
              <div style="font-size:0.72rem;color:var(--text-muted);margin-top:3px;">${l}</div>
            </div>`).join('')}
          </div>
        </div>

        <!-- Right: Live Signal Card -->
        <div class="float-anim" style="position:relative;display:flex;justify-content:center;">
          <div class="glass-card card-glow" style="width:100%;max-width:420px;padding:1.75rem;background:linear-gradient(145deg,rgba(10,18,24,0.95),rgba(6,12,16,0.98));border:1px solid rgba(16,185,129,0.18);border-radius:1.5rem;">
            <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:1.25rem;">
              <div style="display:flex;align-items:center;gap:10px;">
                <div style="width:40px;height:40px;background:linear-gradient(135deg,${C},${CD});border-radius:11px;display:flex;align-items:center;justify-content:center;">
                  <i class="fas fa-brain" style="color:white;font-size:15px;"></i>
                </div>
                <div>
                  <div style="font-size:13px;font-weight:800;color:white;">AI Signal Engine</div>
                  <div style="font-size:11px;color:var(--text-muted);">Real-time Intelligence</div>
                </div>
              </div>
              <span class="badge badge-green"><span style="width:5px;height:5px;background:${C};border-radius:50%;animation:blink 1.5s infinite;display:inline-block;"></span> LIVE</span>
            </div>
            <div style="display:flex;flex-direction:column;gap:9px;margin-bottom:1.25rem;">
              ${[
                ['Whale accumulation detected', 'BNB Chain on-chain signal', C, '2s'],
                ['Predictive alert: Trend shift', 'AI pattern recognition', '#fbbf24', '8s'],
                ['Community sentiment: 82%↑', 'Social signal aggregation', '#8b5cf6', '15s'],
                ['Cross-chain flow anomaly', 'Ecosystem intelligence', CL, '31s'],
                ['ZNTR staking signal detected', 'Protocol intelligence', '#f97316', '1m'],
              ].map(([title, desc, col, t]) => `
              <div style="display:flex;align-items:center;gap:10px;background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.05);border-radius:9px;padding:9px 12px;">
                <div style="width:6px;height:6px;background:${col};border-radius:50%;flex-shrink:0;"></div>
                <div style="flex:1;min-width:0;">
                  <div style="font-size:12px;color:var(--text);font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${title}</div>
                  <div style="font-size:10px;color:var(--text-muted);">${desc}</div>
                </div>
                <span style="font-size:10px;color:var(--text-dim);white-space:nowrap;">${t} ago</span>
              </div>`).join('')}
            </div>
            <div style="display:flex;align-items:center;gap:8px;background:rgba(16,185,129,0.07);border:1px solid rgba(16,185,129,0.18);border-radius:9px;padding:10px 14px;">
              <i class="fas fa-network-wired" style="color:${C};font-size:12px;"></i>
              <span style="font-size:11px;color:var(--text-muted);">500+ data sources · Sub-second latency</span>
            </div>
          </div>
          <!-- Floating badges -->
          <div class="glass-card" style="position:absolute;top:-16px;right:-14px;padding:9px 14px;display:flex;align-items:center;gap:8px;border-radius:12px;border:1px solid rgba(16,185,129,0.25);">
            <i class="fas fa-shield-alt" style="color:${C};font-size:12px;"></i>
            <div><div style="font-size:11px;font-weight:700;color:white;">CertiK Audited</div><div style="font-size:10px;color:var(--text-muted);">Security Verified</div></div>
          </div>
          <div class="glass-card" style="position:absolute;bottom:-14px;left:-14px;padding:9px 14px;display:flex;align-items:center;gap:8px;border-radius:12px;border:1px solid rgba(251,191,36,0.25);">
            <i class="fas fa-link" style="color:#f3ba2f;font-size:12px;"></i>
            <div><div style="font-size:11px;font-weight:700;color:white;">BNB Chain</div><div style="font-size:10px;color:var(--text-muted);">BEP-20 Native</div></div>
          </div>
        </div>
      </div>
    </div>
  </section>`

  /* ── TRUST BAR ── */
  const trustBar = `
  <section style="padding:1.5rem 0;background:rgba(16,185,129,0.04);border-top:1px solid rgba(16,185,129,0.1);border-bottom:1px solid rgba(16,185,129,0.1);">
    <div class="section-inner">
      <div style="display:grid;grid-template-columns:repeat(6,1fr);gap:0;text-align:center;" id="trust-bar">
        ${[
          {icon:'fas fa-brain', val:'AI Engine', label:'On-Chain Signals'},
          {icon:'fas fa-chart-line', val:'Predictive', label:'Analytics Layer'},
          {icon:'fas fa-network-wired', val:'500+', label:'Data Sources'},
          {icon:'fas fa-coins', val:'10B', label:'ZNTR Supply'},
          {icon:'fas fa-vote-yea', val:'DAO', label:'Governance 2027'},
          {icon:'fas fa-link', val:'BEP-20', label:'BNB Chain Native'},
        ].map((s, i) => `
        <div style="padding:1rem;${i<5?'border-right:1px solid rgba(255,255,255,0.05);':''}display:flex;flex-direction:column;align-items:center;gap:4px;">
          <i class="${s.icon}" style="font-size:1.1rem;color:${C};margin-bottom:2px;"></i>
          <div style="font-size:0.9rem;font-weight:800;color:white;">${s.val}</div>
          <div style="font-size:0.7rem;color:var(--text-muted);">${s.label}</div>
        </div>`).join('')}
      </div>
    </div>
  </section>`

  /* ── HOW IT WORKS ── */
  const howItWorks = `
  <section id="how-it-works" class="section observe">
    <div class="section-inner">
      <div style="text-align:center;max-width:640px;margin:0 auto 3.5rem;">
        <div class="section-label"><i class="fas fa-play-circle"></i> How It Works</div>
        <h2 class="section-title">From <span class="gradient-text">Noise to Clarity</span></h2>
        <p class="section-subtitle" style="margin:0 auto;">ZentarAI transforms overwhelming data streams into decisive intelligence in three steps.</p>
      </div>
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:1.75rem;position:relative;" id="hiw-grid">
        <div style="position:absolute;top:56px;left:18%;right:18%;height:1px;background:linear-gradient(90deg,transparent,${C},${CL},transparent);opacity:0.25;z-index:0;pointer-events:none;"></div>
        ${[
          {n:'01', icon:'fas fa-satellite-dish', color:C, title:'Aggregate Signals',
            desc:'ZentarAI collects and normalizes 500+ real-time on-chain and off-chain data streams — wallet flows, social sentiment, protocol metrics, and market micro-structure.',
            items:['On-chain event listeners','Social sentiment feeds','Protocol metrics','Whale wallet tracking']},
          {n:'02', icon:'fas fa-brain', color:CL, title:'AI Pattern Recognition',
            desc:'Proprietary ML models trained on 3+ years of blockchain data identify repeating structural patterns — surfacing signals before they manifest in price action.',
            items:['ML anomaly detection','Sentiment-signal fusion','Trend forecasting','Pattern library (3yr data)']},
          {n:'03', icon:'fas fa-bolt', color:'#fbbf24', title:'Decisive Intelligence',
            desc:'Processed signals are delivered as actionable intelligence via the ZentarAI dashboard and Signal API — enabling ecosystems to act confidently and ahead of the crowd.',
            items:['Real-time dashboard','Signal API v1','DAO strategy feeds','Enterprise SDK']},
        ].map((s, i) => `
        <div class="glass-card card-glow observe" style="padding:2rem;position:relative;z-index:1;animation-delay:${i*0.12}s;">
          <div style="width:64px;height:64px;background:${s.color}18;border:2px solid ${s.color}30;border-radius:50%;display:flex;align-items:center;justify-content:center;margin-bottom:1.25rem;position:relative;">
            <i class="${s.icon}" style="font-size:1.5rem;color:${s.color};"></i>
            <span style="position:absolute;top:-8px;right:-8px;background:var(--bg);border:1px solid rgba(255,255,255,0.1);border-radius:6px;font-size:10px;font-weight:800;color:${s.color};padding:2px 6px;">${s.n}</span>
          </div>
          <h3 style="font-size:1.1rem;font-weight:800;font-family:'Manrope',sans-serif;color:white;margin-bottom:0.6rem;">${s.title}</h3>
          <p style="font-size:0.82rem;color:var(--text-muted);line-height:1.75;margin-bottom:1.1rem;">${s.desc}</p>
          <ul style="list-style:none;display:flex;flex-direction:column;gap:6px;">
            ${s.items.map(it => `<li style="display:flex;align-items:center;gap:8px;font-size:0.78rem;color:var(--text-muted);">
              <i class="fas fa-check" style="color:${s.color};font-size:9px;"></i>${it}</li>`).join('')}
          </ul>
        </div>`).join('')}
      </div>
    </div>
  </section>`

  /* ── FEATURES ── */
  const features = `
  <div class="divider"></div>
  <section id="features" class="section">
    <div class="section-inner">
      <div style="max-width:640px;margin-bottom:3.5rem;">
        <div class="section-label"><i class="fas fa-layer-group"></i> Core Features</div>
        <h2 class="section-title">Intelligence. <span class="gradient-text">Anticipated.</span></h2>
        <p class="section-subtitle">Every module of ZentarAI is engineered for one purpose — delivering foresight before the market reacts.</p>
      </div>
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:1.25rem;" id="feat-grid">
        ${[
          {icon:'fas fa-brain',color:C,title:'AI Signal Engine',desc:'Real-time pattern recognition across 500+ on-chain and off-chain data sources. Processes signals in under 1 second.',tags:['Pattern Recognition','Sub-1s Latency','500+ Sources']},
          {icon:'fas fa-chart-line',color:CL,title:'Predictive Analytics',desc:'Forward-looking intelligence built on 3 years of blockchain behavioral data. Identifies trends before they appear.',tags:['3yr Training Data','Trend Forecasting','Proactive Alerts']},
          {icon:'fas fa-network-wired',color:'#8b5cf6',title:'Ecosystem Intelligence',desc:'Cross-protocol aggregation delivers a holistic view of DeFi, NFT, and social signal layers simultaneously.',tags:['Cross-Protocol','DeFi + Social','Unified Layer']},
          {icon:'fas fa-bolt',color:'#fbbf24',title:'Real-time Decisioning',desc:'Sub-second signal delivery ensures your strategy is always ahead of visible market movements.',tags:['Real-time Feed','Dashboard View','API Access']},
          {icon:'fas fa-shield-alt',color:'#22c55e',title:'Verified & Audited',desc:'Smart contracts audited by CertiK. All contracts source-verified and publicly transparent on BSCScan.',tags:['CertiK Audit','BSCScan Verified','Open Source']},
          {icon:'fas fa-coins',color:'#f97316',title:'ZNTR Token Economy',desc:'Governance voting, staking rewards, and premium signal tier access — all powered by the ZNTR utility token.',tags:['Governance','Staking APY','Premium Tiers']},
        ].map((f, i) => `
        <div class="glass-card card-glow observe" style="padding:1.75rem;animation-delay:${i*0.07}s;">
          <div style="width:48px;height:48px;background:${f.color}18;border:1px solid ${f.color}30;border-radius:14px;display:flex;align-items:center;justify-content:center;margin-bottom:1.1rem;">
            <i class="${f.icon}" style="font-size:1.25rem;color:${f.color};"></i>
          </div>
          <h3 style="font-size:1rem;font-weight:800;font-family:'Manrope',sans-serif;margin-bottom:0.6rem;color:white;">${f.title}</h3>
          <p style="font-size:0.82rem;color:var(--text-muted);line-height:1.75;margin-bottom:1rem;">${f.desc}</p>
          <div style="display:flex;flex-wrap:wrap;gap:5px;">
            ${f.tags.map(t => `<span style="font-size:10px;font-weight:700;padding:3px 8px;border-radius:5px;background:rgba(255,255,255,0.05);color:var(--text-muted);border:1px solid rgba(255,255,255,0.07);">${t}</span>`).join('')}
          </div>
        </div>`).join('')}
      </div>
    </div>
  </section>`

  /* ── ECOSYSTEM ── */
  const ecosystem = `
  <div class="divider"></div>
  <section id="ecosystem" class="section">
    <div class="section-inner">
      <div style="text-align:center;max-width:680px;margin:0 auto 3.5rem;">
        <div class="section-label"><i class="fas fa-network-wired"></i> Ecosystem</div>
        <h2 class="section-title">One <span class="gradient-text">Intelligence</span> Loop</h2>
        <p class="section-subtitle" style="margin:0 auto;">A self-reinforcing cycle where data becomes signal, signal becomes strategy, and strategy drives ecosystem growth.</p>
      </div>
      <!-- Flow -->
      <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:0;margin-bottom:3.5rem;position:relative;" id="eco-flow">
        <div style="position:absolute;top:46%;left:10%;right:10%;height:1px;background:linear-gradient(90deg,${C},${CL},${C},${CL});opacity:0.18;z-index:0;pointer-events:none;"></div>
        ${[
          {n:'01', icon:'fas fa-satellite-dish', color:C, title:'Data Aggregation', desc:'500+ streams collected in real-time'},
          {n:'02', icon:'fas fa-brain', color:CL, title:'AI Processing', desc:'ML pattern recognition & fusion'},
          {n:'03', icon:'fas fa-bolt', color:'#fbbf24', title:'Signal Generation', desc:'Actionable intelligence delivered'},
          {n:'04', icon:'fas fa-chart-line', color:'#8b5cf6', title:'Strategic Action', desc:'Ecosystem acts ahead of the market'},
        ].map((s, i) => `
        <div class="observe" style="position:relative;z-index:1;text-align:center;padding:0 1rem;animation-delay:${i*0.1}s;">
          <div style="width:70px;height:70px;margin:0 auto 1rem;background:linear-gradient(135deg,${s.color}15,${s.color}08);border:2px solid ${s.color}30;border-radius:50%;display:flex;align-items:center;justify-content:center;position:relative;">
            <i class="${s.icon}" style="font-size:1.5rem;color:${s.color};"></i>
            <span style="position:absolute;top:-8px;right:-8px;background:var(--bg);border:1px solid rgba(255,255,255,0.1);border-radius:6px;font-size:10px;font-weight:800;color:${s.color};padding:2px 6px;">${s.n}</span>
          </div>
          <h3 style="font-size:0.95rem;font-weight:800;color:white;margin-bottom:6px;">${s.title}</h3>
          <p style="font-size:0.8rem;color:var(--text-muted);line-height:1.6;">${s.desc}</p>
        </div>`).join('')}
      </div>
      <!-- Pillars -->
      <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:1.25rem;" id="eco-pillars">
        ${[
          {icon:'fas fa-database', color:C, title:'Signal Intelligence Platform',
            desc:'The core ZentarAI engine aggregates data from on-chain events, wallet behaviors, DeFi protocol metrics, and social layers into a unified intelligence stream.',
            items:['On-chain event indexing','Wallet behavioral analysis','DeFi TVL correlation','Social sentiment fusion']},
          {icon:'fas fa-code', color:CL, title:'Signal API & Developer Tools',
            desc:'ZentarAI exposes processed intelligence via a developer-friendly REST API, enabling DAOs, protocols, and builders to integrate predictive signals directly.',
            items:['REST API v1','SDK for BNB Chain','DAO strategy feeds','Webhook alerts']},
          {icon:'fas fa-users', color:'#8b5cf6', title:'Community & DAO Governance',
            desc:'ZNTR token holders govern platform development, signal parameters, fund allocation, and network expansion through on-chain voting.',
            items:['On-chain voting','Treasury management','Signal parameter tuning','Protocol upgrade proposals']},
          {icon:'fas fa-coins', color:'#fbbf24', title:'ZNTR Token Economy',
            desc:'A sustainable token economy where platform usage generates staking rewards, premium tier unlocks, and governance influence — creating a flywheel of ecosystem participation.',
            items:['Staking yield (APY)','Premium signal tiers','Governance weight','Fee burn mechanism']},
        ].map((p, i) => `
        <div class="glass-card card-glow observe" style="padding:1.875rem;animation-delay:${i*0.08}s;">
          <div style="display:flex;align-items:flex-start;gap:1.1rem;margin-bottom:1.25rem;">
            <div style="width:50px;height:50px;background:${p.color}18;border:1px solid ${p.color}30;border-radius:14px;flex-shrink:0;display:flex;align-items:center;justify-content:center;">
              <i class="${p.icon}" style="font-size:1.25rem;color:${p.color};"></i>
            </div>
            <div>
              <h3 style="font-size:1.05rem;font-weight:800;font-family:'Manrope',sans-serif;margin-bottom:6px;color:white;">${p.title}</h3>
              <p style="font-size:0.82rem;color:var(--text-muted);line-height:1.7;">${p.desc}</p>
            </div>
          </div>
          <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:6px;">
            ${p.items.map(it => `<div style="display:flex;align-items:center;gap:7px;background:rgba(255,255,255,0.03);border-radius:7px;padding:7px 10px;"><i class="fas fa-check" style="color:${p.color};font-size:9px;"></i><span style="font-size:0.78rem;color:var(--text-muted);">${it}</span></div>`).join('')}
          </div>
        </div>`).join('')}
      </div>
    </div>
  </section>`

  /* ── TOKENOMICS ── */
  const tokenomics = `
  <div class="divider"></div>
  <section id="tokenomics" class="section">
    <div class="section-inner">
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:4.5rem;align-items:start;" id="token-grid">
        <!-- Left -->
        <div>
          <div class="section-label"><i class="fas fa-coins"></i> Tokenomics</div>
          <h2 class="section-title">ZNTR <span class="gradient-text">Token</span><br/>Economy</h2>
          <p class="section-subtitle" style="margin-bottom:2rem;">A utility-first token designed for long-term platform sustainability and community governance.</p>
          <!-- Key info grid -->
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:0.75rem;margin-bottom:1.75rem;">
            ${[
              {label:'Token Name', val:'ZentarAI', icon:'fas fa-tag'},
              {label:'Ticker', val:'ZNTR', icon:'fas fa-hashtag'},
              {label:'Total Supply', val:'10,000,000,000', icon:'fas fa-infinity'},
              {label:'Network', val:'BNB Chain', icon:'fas fa-network-wired'},
              {label:'Standard', val:'BEP-20', icon:'fas fa-file-code'},
              {label:'TGE', val:'Q2 2026', icon:'fas fa-calendar'},
            ].map(it => `
            <div style="background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.07);border-radius:12px;padding:14px 16px;">
              <div style="display:flex;align-items:center;gap:6px;margin-bottom:4px;">
                <i class="${it.icon}" style="color:${C};font-size:10px;"></i>
                <span style="font-size:10px;color:var(--text-muted);text-transform:uppercase;letter-spacing:0.8px;font-weight:700;">${it.label}</span>
              </div>
              <div style="font-size:0.875rem;font-weight:800;color:white;">${it.val}</div>
            </div>`).join('')}
          </div>
          <!-- Allocations -->
          <div style="display:flex;flex-direction:column;gap:9px;">
            ${[
              {cat:'Ecosystem Rewards', pct:40, color:C, amount:'4.0B'},
              {cat:'Team & Advisors', pct:15, color:CL, amount:'1.5B'},
              {cat:'Partnerships', pct:15, color:'#8b5cf6', amount:'1.5B'},
              {cat:'Private Sale', pct:15, color:'#fbbf24', amount:'1.5B'},
              {cat:'Protocol Reserve', pct:10, color:'#f97316', amount:'1.0B'},
              {cat:'Public Sale', pct:5, color:'#22c55e', amount:'0.5B'},
            ].map(a => `
            <div style="background:rgba(255,255,255,0.025);border:1px solid rgba(255,255,255,0.06);border-radius:11px;padding:12px 16px;">
              <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:7px;">
                <div style="display:flex;align-items:center;gap:8px;">
                  <div style="width:9px;height:9px;background:${a.color};border-radius:3px;"></div>
                  <span style="font-size:0.82rem;font-weight:700;color:white;">${a.cat}</span>
                </div>
                <div>
                  <span style="font-size:0.9rem;font-weight:900;color:${a.color};">${a.pct}%</span>
                  <span style="font-size:0.72rem;color:var(--text-muted);margin-left:7px;">${a.amount}</span>
                </div>
              </div>
              <div style="height:4px;background:rgba(255,255,255,0.05);border-radius:2px;overflow:hidden;">
                <div style="height:100%;width:${a.pct}%;background:${a.color};border-radius:2px;"></div>
              </div>
            </div>`).join('')}
          </div>
        </div>
        <!-- Right -->
        <div style="display:flex;flex-direction:column;gap:1.5rem;">
          <div class="glass-card" style="padding:2rem;text-align:center;">
            <div style="position:relative;display:inline-block;">
              <canvas id="tokenomicsChart" width="260" height="260"></canvas>
              <div style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);text-align:center;">
                <div style="font-size:1.6rem;font-weight:900;font-family:'Manrope',sans-serif;color:white;">10B</div>
                <div style="font-size:0.72rem;color:var(--text-muted);">ZNTR Supply</div>
              </div>
            </div>
          </div>
          <!-- Vesting table -->
          <div class="glass-card" style="padding:1.5rem;">
            <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:1rem;">
              <h3 style="font-size:0.95rem;font-weight:800;display:flex;align-items:center;gap:7px;color:white;"><i class="fas fa-calendar-alt" style="color:${C};"></i> Vesting Schedule</h3>
              <a href="/vesting" style="font-size:0.75rem;color:${C};text-decoration:none;display:flex;align-items:center;gap:4px;font-weight:700;">Full Details <i class="fas fa-arrow-right" style="font-size:9px;"></i></a>
            </div>
            <div style="overflow-x:auto;">
              <table style="width:100%;border-collapse:collapse;font-size:0.78rem;">
                <thead><tr style="border-bottom:1px solid rgba(255,255,255,0.06);">
                  <th style="text-align:left;padding:7px 5px;color:var(--text-muted);font-size:0.68rem;text-transform:uppercase;letter-spacing:0.08em;font-weight:700;">Category</th>
                  <th style="text-align:center;padding:7px 5px;color:var(--text-muted);font-size:0.68rem;text-transform:uppercase;font-weight:700;">Cliff</th>
                  <th style="text-align:center;padding:7px 5px;color:var(--text-muted);font-size:0.68rem;text-transform:uppercase;font-weight:700;">Vest</th>
                </tr></thead>
                <tbody>
                  ${[
                    {cat:'Ecosystem', col:C, cliff:'—', vest:'36 mo'},
                    {cat:'Team', col:CL, cliff:'12 mo', vest:'36 mo'},
                    {cat:'Partnerships', col:'#8b5cf6', cliff:'3 mo', vest:'30 mo'},
                    {cat:'Private Sale', col:'#fbbf24', cliff:'6 mo', vest:'18 mo'},
                    {cat:'Reserve', col:'#f97316', cliff:'—', vest:'48 mo'},
                    {cat:'Public Sale', col:'#22c55e', cliff:'—', vest:'TGE'},
                  ].map(r => `
                  <tr style="border-bottom:1px solid rgba(255,255,255,0.04);">
                    <td style="padding:8px 5px;"><div style="display:flex;align-items:center;gap:6px;"><div style="width:7px;height:7px;background:${r.col};border-radius:2px;"></div><span style="color:white;font-weight:600;">${r.cat}</span></div></td>
                    <td style="text-align:center;padding:8px 5px;color:var(--text-muted);">${r.cliff}</td>
                    <td style="text-align:center;padding:8px 5px;color:${r.col};font-weight:800;">${r.vest}</td>
                  </tr>`).join('')}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <!-- 60-Month Vesting Chart -->
      <div class="glass-card observe" style="padding:2rem;margin-top:1.75rem;">
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:1.5rem;flex-wrap:wrap;gap:0.75rem;">
          <div>
            <h3 style="font-size:1.1rem;font-weight:800;font-family:'Manrope',sans-serif;color:white;">60-Month Token Release Schedule</h3>
            <p style="font-size:0.82rem;color:var(--text-muted);margin-top:4px;">Cumulative circulating supply — fully distributed by Month 48</p>
          </div>
          <div style="display:flex;gap:0.875rem;flex-wrap:wrap;">
            ${[
              {mo:'Month 1', val:'5.6%', col:C},
              {mo:'Month 12', val:'33.2%', col:CL},
              {mo:'Month 24', val:'57.1%', col:'#8b5cf6'},
              {mo:'Month 36', val:'79.4%', col:'#fbbf24'},
              {mo:'Month 48', val:'100%', col:'#f97316'},
            ].map(m => `
            <div style="text-align:center;">
              <div style="font-size:0.82rem;font-weight:800;color:${m.col};">${m.val}</div>
              <div style="font-size:0.65rem;color:var(--text-muted);">${m.mo}</div>
            </div>`).join('')}
          </div>
        </div>
        <canvas id="vestingChart" height="80"></canvas>
      </div>
    </div>
  </section>`

  /* ── ROADMAP ── */
  const roadmap = `
  <div class="divider"></div>
  <section id="roadmap" class="section">
    <div class="section-inner">
      <div style="text-align:center;max-width:620px;margin:0 auto 3.5rem;">
        <div class="section-label"><i class="fas fa-map"></i> Roadmap</div>
        <h2 class="section-title">Path to <span class="gradient-text">Intelligence</span></h2>
        <p class="section-subtitle" style="margin:0 auto;">From MVP to full decentralized AI intelligence network — a phased, milestone-driven rollout.</p>
      </div>
      <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:1.25rem;" id="roadmap-grid">
        ${PROJECT.roadmap.map((p, i) => {
          const sc = p.status==='completed'?'#22c55e':p.status==='in-progress'?C:p.status==='upcoming'?'#fbbf24':'#64748b'
          const sl = p.status==='completed'?'Completed':p.status==='in-progress'?'Active':'Upcoming'
          const si = p.status==='completed'?'fas fa-check':p.status==='in-progress'?'fas fa-spinner fa-spin':p.status==='upcoming'?'fas fa-clock':'fas fa-hourglass'
          return `
          <div class="glass-card card-glow observe" style="padding:1.625rem;position:relative;animation-delay:${i*0.1}s;${p.status==='in-progress'?`border-color:${C}40;box-shadow:0 4px 28px ${C}18;`:''}">
            <div style="width:38px;height:38px;background:${sc}18;border:1.5px solid ${sc}40;border-radius:11px;display:flex;align-items:center;justify-content:center;margin-bottom:0.875rem;">
              <span style="font-size:0.82rem;font-weight:900;color:${sc};">0${i+1}</span>
            </div>
            <div style="position:absolute;top:1.1rem;right:1.1rem;">
              <span class="badge" style="background:${sc}15;color:${sc};border:1px solid ${sc}30;font-size:0.65rem;">
                <i class="${si}" style="font-size:0.55rem;"></i> ${sl}
              </span>
            </div>
            <div style="font-size:0.72rem;color:${sc};font-weight:800;letter-spacing:0.5px;margin-bottom:4px;">${p.period}</div>
            <h3 style="font-size:1.05rem;font-weight:800;font-family:'Manrope',sans-serif;margin-bottom:1rem;color:white;">${p.phase}</h3>
            <ul style="list-style:none;display:flex;flex-direction:column;gap:8px;">
              ${p.items.map(it => `<li style="display:flex;align-items:flex-start;gap:7px;">
                <div style="width:5px;height:5px;background:${sc};border-radius:50%;flex-shrink:0;margin-top:6px;"></div>
                <span style="font-size:0.78rem;color:${p.status==='completed'?'var(--text-dim)':'var(--text-muted)'};line-height:1.5;${p.status==='completed'?'text-decoration:line-through;':''}">${it}</span>
              </li>`).join('')}
            </ul>
          </div>`}).join('')}
      </div>
    </div>
  </section>`

  /* ── TEAM ── */
  const team = `
  <div class="divider"></div>
  <section id="team" class="section">
    <div class="section-inner">
      <div style="text-align:center;max-width:600px;margin:0 auto 3.5rem;">
        <div class="section-label"><i class="fas fa-users"></i> Core Team</div>
        <h2 class="section-title">People Behind <span class="gradient-text">ZentarAI</span></h2>
        <p class="section-subtitle" style="margin:0 auto;">AI engineers, ML researchers, and Web3 growth strategists united to build the world's most anticipatory intelligence platform.</p>
      </div>
      <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:1.25rem;margin-bottom:1.5rem;">
        ${PROJECT.team.map((m, i) => {
          const colors = [C, CL, '#8b5cf6', '#fbbf24']
          const col = colors[i % colors.length]
          return `
          <div class="glass-card card-glow observe" style="padding:1.75rem;position:relative;overflow:hidden;animation-delay:${i*0.1}s;">
            <div style="position:absolute;top:0;left:0;right:0;height:3px;background:linear-gradient(90deg,${col},transparent);"></div>
            <div style="width:60px;height:60px;background:linear-gradient(135deg,${col}33,${col}11);border:2px solid ${col}40;border-radius:50%;display:flex;align-items:center;justify-content:center;margin-bottom:1rem;">
              <span style="font-size:1.4rem;font-weight:900;color:${col};">${m.name.charAt(0)}</span>
            </div>
            <h3 style="font-size:1rem;font-weight:800;font-family:'Manrope',sans-serif;margin-bottom:3px;color:white;">${m.name}</h3>
            <div style="font-size:0.78rem;color:${col};font-weight:700;margin-bottom:0.75rem;">${m.role}</div>
            <p style="font-size:0.78rem;color:var(--text-muted);line-height:1.65;">${m.bio}</p>
          </div>`}).join('')}
      </div>
      <div class="glass-card observe" style="padding:1.75rem;background:linear-gradient(135deg,rgba(16,185,129,0.05),rgba(16,185,129,0.02));">
        <div style="display:flex;align-items:center;gap:2rem;flex-wrap:wrap;">
          <div style="flex:1;min-width:260px;">
            <h3 style="font-size:1.05rem;font-weight:800;color:white;margin-bottom:0.5rem;">Full Team Structure</h3>
            <p style="font-size:0.82rem;color:var(--text-muted);line-height:1.7;">Backed by AI engineers, ML researchers, blockchain developers, data scientists, and community growth specialists.</p>
          </div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;">
            ${['AI/ML Engineers','Blockchain Devs','Data Scientists','Backend Engineers','Community Team','Growth Strategists'].map(r => `
            <div style="display:flex;align-items:center;gap:7px;">
              <i class="fas fa-check-circle" style="color:${C};font-size:11px;"></i>
              <span style="font-size:0.82rem;color:var(--text-muted);">${r}</span>
            </div>`).join('')}
          </div>
        </div>
      </div>
    </div>
  </section>`

  /* ── PARTNERS ── */
  const partners = `
  <div class="divider"></div>
  <section id="partners" class="section" style="background:rgba(16,185,129,0.02);">
    <div class="section-inner">
      <div style="text-align:center;max-width:600px;margin:0 auto 3.5rem;">
        <div class="section-label"><i class="fas fa-handshake"></i> Partners & Ecosystem</div>
        <h2 class="section-title">Powered By the <span class="gradient-text">Best</span></h2>
        <p class="section-subtitle" style="margin:0 auto;">Strategic partnerships with leading blockchain infrastructure, AI research, and security providers.</p>
      </div>
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:1rem;margin-bottom:2rem;" id="partner-grid">
        ${[
          {name:'BNB Chain',cat:'Infrastructure',icon:'fas fa-link',color:'#f3ba2f',url:'https://www.bnbchain.org',desc:'Native blockchain network'},
          {name:'PancakeSwap',cat:'DEX',icon:'fas fa-exchange-alt',color:'#1FC7D4',url:'https://pancakeswap.finance',desc:'Primary DEX listing'},
          {name:'Chainlink',cat:'Oracle',icon:'fas fa-link',color:'#375BD2',url:'https://chain.link',desc:'Decentralized data oracles'},
          {name:'CertiK',cat:'Security',icon:'fas fa-shield-alt',color:'#00D1A0',url:'https://www.certik.com',desc:'Smart contract audit'},
          {name:'Google Cloud AI',cat:'Cloud AI',icon:'fab fa-google',color:'#4285F4',url:'https://cloud.google.com/ai',desc:'AI model infrastructure'},
          {name:'OKX Web3',cat:'Exchange',icon:'fas fa-exchange-alt',color:'#00CCFF',url:'https://www.okx.com/web3',desc:'Web3 wallet & DEX partner'},
        ].map((p, i) => `
        <a href="${p.url}" target="_blank" rel="noopener" class="glass-card card-glow observe" style="padding:1.25rem;text-decoration:none;display:flex;flex-direction:column;gap:10px;animation-delay:${i*0.06}s;transition:transform 0.25s;"
          onmouseover="this.style.transform='translateY(-4px)'" onmouseout="this.style.transform='translateY(0)'">
          <div style="display:flex;align-items:center;justify-content:space-between;">
            <div style="width:42px;height:42px;background:${p.color}18;border:1px solid ${p.color}30;border-radius:11px;display:flex;align-items:center;justify-content:center;">
              <i class="${p.icon}" style="font-size:1rem;color:${p.color};"></i>
            </div>
            <span style="font-size:0.62rem;font-weight:800;letter-spacing:0.8px;text-transform:uppercase;color:var(--text-dim);">${p.cat}</span>
          </div>
          <div>
            <div style="font-size:0.9rem;font-weight:800;color:white;margin-bottom:3px;">${p.name}</div>
            <div style="font-size:0.78rem;color:var(--text-muted);">${p.desc}</div>
          </div>
          <div style="display:flex;align-items:center;gap:4px;color:var(--text-dim);font-size:0.72rem;margin-top:auto;">
            <i class="fas fa-external-link-alt" style="font-size:9px;"></i> Visit →
          </div>
        </a>`).join('')}
      </div>
      <div class="glass-card" style="padding:2.25rem;text-align:center;background:linear-gradient(135deg,rgba(16,185,129,0.07),rgba(16,185,129,0.03));border:1px solid rgba(16,185,129,0.18);">
        <div class="section-label" style="margin-bottom:0.875rem;"><i class="fas fa-plus"></i> Partnership Program</div>
        <h3 style="font-size:1.4rem;font-weight:900;font-family:'Manrope',sans-serif;margin-bottom:0.6rem;color:white;">Become a ZentarAI Partner</h3>
        <p style="font-size:0.875rem;color:var(--text-muted);max-width:440px;margin:0 auto 1.5rem;line-height:1.7;">DeFi protocols, AI research labs, data providers, and ecosystem builders — join the growing ZentarAI intelligence network.</p>
        <a href="${PROJECT.urls.telegram}" target="_blank" class="btn-primary"><i class="fab fa-telegram"></i> Contact via Telegram</a>
      </div>
    </div>
  </section>`

  /* ── STATS ── */
  const stats = `
  <div class="divider"></div>
  <section id="stats" class="section" style="position:relative;overflow:hidden;">
    <div style="position:absolute;inset:0;background:radial-gradient(ellipse at 50% 50%,${C}07 0%,transparent 70%);pointer-events:none;"></div>
    <div class="section-inner observe" style="position:relative;z-index:1;">
      <div style="text-align:center;max-width:640px;margin:0 auto 3rem;">
        <div class="section-label"><i class="fas fa-chart-line"></i> Platform Stats</div>
        <h2 class="section-title">ZentarAI at a <span class="gradient-text">Glance</span></h2>
        <p class="section-subtitle" style="margin:0 auto;">Key metrics as we build toward the Q2 2026 TGE launch.</p>
      </div>
      <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:1.25rem;margin-bottom:2rem;" id="stats-grid">
        ${[
          {icon:'fas fa-users', color:C, val:'24k+', label:'Community Members', sub:'X followers', trend:'+2k this month'},
          {icon:'fas fa-coins', color:CL, val:'10B', label:'Total Supply', sub:'ZNTR tokens', trend:'BEP-20 on BNB Chain'},
          {icon:'fas fa-satellite-dish', color:'#8b5cf6', val:'500+', label:'Data Sources', sub:'Real-time streams', trend:'Sub-1s latency'},
          {icon:'fas fa-calendar', color:'#fbbf24', val:'Q2 2026', label:'TGE Target', sub:'DEX listing', trend:'PancakeSwap first'},
        ].map(s => `
        <div class="glass-card observe" style="padding:1.75rem;text-align:center;position:relative;overflow:hidden;">
          <div style="position:absolute;inset:0;background:radial-gradient(ellipse at 50% 0%,${s.color}10 0%,transparent 70%);pointer-events:none;"></div>
          <div style="width:50px;height:50px;background:${s.color}18;border:1px solid ${s.color}30;border-radius:14px;display:flex;align-items:center;justify-content:center;margin:0 auto 1rem;">
            <i class="${s.icon}" style="font-size:1.25rem;color:${s.color};"></i>
          </div>
          <div style="font-size:1.9rem;font-weight:900;font-family:'Manrope',sans-serif;color:${s.color};margin-bottom:5px;letter-spacing:-1px;">${s.val}</div>
          <div style="font-size:0.875rem;font-weight:700;color:white;margin-bottom:3px;">${s.label}</div>
          <div style="font-size:0.75rem;color:var(--text-muted);margin-bottom:0.75rem;">${s.sub}</div>
          <div style="font-size:0.68rem;color:${s.color};background:${s.color}12;border:1px solid ${s.color}20;border-radius:6px;padding:3px 8px;display:inline-block;">${s.trend}</div>
        </div>`).join('')}
      </div>
      <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:1rem;">
        ${[
          {label:'BNB Chain', icon:'fas fa-link', color:'#f3ba2f', sub:'Primary network'},
          {label:'6 Partners', icon:'fas fa-handshake', color:C, sub:'Tier-1 ecosystem'},
          {label:'CertiK Audit', icon:'fas fa-shield-alt', color:'#22c55e', sub:'Security verified'},
          {label:'AI + BNB Chain', icon:'fas fa-brain', color:'#8b5cf6', sub:'Signals · Predict · Govern'},
        ].map(s => `
        <div style="background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.07);border-radius:14px;padding:1.1rem 1rem;display:flex;align-items:center;gap:12px;transition:all 0.25s;"
          onmouseover="this.style.background='rgba(255,255,255,0.06)'" onmouseout="this.style.background='rgba(255,255,255,0.03)'">
          <div style="width:38px;height:38px;background:${s.color}15;border:1px solid ${s.color}25;border-radius:11px;display:flex;align-items:center;justify-content:center;flex-shrink:0;">
            <i class="${s.icon}" style="font-size:1rem;color:${s.color};"></i>
          </div>
          <div>
            <div style="font-size:0.875rem;font-weight:700;color:white;">${s.label}</div>
            <div style="font-size:0.72rem;color:var(--text-muted);">${s.sub}</div>
          </div>
        </div>`).join('')}
      </div>
    </div>
  </section>`

  /* ── COMMUNITY ── */
  const community = `
  <div class="divider"></div>
  <section id="community" class="section" style="position:relative;overflow:hidden;">
    <div style="position:absolute;top:0;left:50%;transform:translateX(-50%);width:800px;height:400px;background:radial-gradient(ellipse,${C}07 0%,transparent 70%);pointer-events:none;"></div>
    <div class="section-inner observe" style="position:relative;z-index:1;">
      <div style="text-align:center;max-width:640px;margin:0 auto 3rem;">
        <div class="section-label"><i class="fab fa-twitter"></i> Community</div>
        <h2 class="section-title">Join the <span class="gradient-text">Intelligence Movement</span></h2>
        <p class="section-subtitle" style="margin:0 auto;">24,000+ members already following ZentarAI. Be first to act on intelligence.</p>
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:1.5rem;margin-bottom:2rem;">
        <!-- X/Twitter -->
        <div class="glass-card card-glow" style="padding:2.25rem;background:linear-gradient(135deg,rgba(15,20,28,0.95),rgba(6,12,16,0.98));border:1px solid rgba(255,255,255,0.1);position:relative;overflow:hidden;">
          <div style="position:absolute;top:-30px;right:-30px;width:140px;height:140px;background:radial-gradient(circle,rgba(255,255,255,0.04) 0%,transparent 70%);border-radius:50%;pointer-events:none;"></div>
          <div style="display:flex;align-items:center;gap:14px;margin-bottom:1.25rem;">
            <div style="width:52px;height:52px;background:rgba(0,0,0,0.4);border:1px solid rgba(255,255,255,0.15);border-radius:14px;display:flex;align-items:center;justify-content:center;">
              <i class="fab fa-x-twitter" style="font-size:1.375rem;color:white;"></i>
            </div>
            <div>
              <div style="font-size:1.1rem;font-weight:900;font-family:'Manrope',sans-serif;color:white;">X (Twitter)</div>
              <div style="font-size:0.82rem;color:var(--text-muted);">@intellora_</div>
            </div>
          </div>
          <p style="font-size:0.875rem;color:var(--text-muted);line-height:1.75;margin-bottom:1.5rem;">Stay ahead with ZentarAI signal alerts, TGE updates, product launches, and ecosystem announcements — delivered daily.</p>
          <div style="display:flex;gap:1.5rem;margin-bottom:1.5rem;">
            ${[{val:'24k+',label:'Followers'},{val:'Daily',label:'Signals'},{val:'Active',label:'Community'}].map(s => `
            <div><div style="font-size:1.1rem;font-weight:900;color:white;">${s.val}</div><div style="font-size:0.7rem;color:var(--text-muted);">${s.label}</div></div>`).join('')}
          </div>
          <a href="${PROJECT.urls.twitter}" target="_blank" rel="noopener" class="btn-ghost" style="width:100%;justify-content:center;">
            <i class="fab fa-x-twitter"></i> Follow @intellora_
          </a>
        </div>
        <!-- Telegram -->
        <div class="glass-card card-glow" style="padding:2.25rem;background:linear-gradient(135deg,rgba(0,136,204,0.08),rgba(6,12,16,0.98));border:1px solid rgba(0,136,204,0.2);position:relative;overflow:hidden;">
          <div style="position:absolute;top:-30px;right:-30px;width:140px;height:140px;background:radial-gradient(circle,rgba(0,136,204,0.1) 0%,transparent 70%);border-radius:50%;pointer-events:none;"></div>
          <div style="display:flex;align-items:center;gap:14px;margin-bottom:1.25rem;">
            <div style="width:52px;height:52px;background:rgba(0,136,204,0.15);border:1px solid rgba(0,136,204,0.3);border-radius:14px;display:flex;align-items:center;justify-content:center;">
              <i class="fab fa-telegram" style="font-size:1.375rem;color:#29A0D8;"></i>
            </div>
            <div>
              <div style="font-size:1.1rem;font-weight:900;font-family:'Manrope',sans-serif;color:white;">Telegram</div>
              <div style="font-size:0.82rem;color:var(--text-muted);">t.me/ZentarAI</div>
            </div>
          </div>
          <p style="font-size:0.875rem;color:var(--text-muted);line-height:1.75;margin-bottom:1.5rem;">Join our Telegram for direct team access, real-time signal discussions, AMA sessions, and exclusive early supporter benefits.</p>
          <div style="display:flex;gap:1.5rem;margin-bottom:1.5rem;">
            ${[{val:'Growing',label:'Members'},{val:'24/7',label:'Active'},{val:'AMA',label:'Sessions'}].map(s => `
            <div><div style="font-size:1.1rem;font-weight:900;color:white;">${s.val}</div><div style="font-size:0.7rem;color:var(--text-muted);">${s.label}</div></div>`).join('')}
          </div>
          <a href="${PROJECT.urls.telegram}" target="_blank" rel="noopener" style="display:flex;align-items:center;justify-content:center;gap:8px;width:100%;padding:0.8rem;background:rgba(0,136,204,0.15);border:1px solid rgba(0,136,204,0.3);border-radius:10px;color:#29A0D8;font-weight:700;font-size:0.9rem;text-decoration:none;transition:all 0.2s;"
            onmouseover="this.style.background='rgba(0,136,204,0.25)'" onmouseout="this.style.background='rgba(0,136,204,0.15)'">
            <i class="fab fa-telegram"></i> Join Telegram Community
          </a>
        </div>
      </div>
      <!-- Early access banner -->
      <div style="background:linear-gradient(135deg,rgba(16,185,129,0.1),rgba(16,185,129,0.04));border:1px solid rgba(16,185,129,0.22);border-radius:1.25rem;padding:2.25rem 2.5rem;display:flex;align-items:center;justify-content:space-between;gap:2rem;flex-wrap:wrap;">
        <div>
          <div class="section-label" style="margin-bottom:0.75rem;"><i class="fas fa-star"></i> Early Access</div>
          <h3 style="font-size:1.4rem;font-weight:900;font-family:'Manrope',sans-serif;margin-bottom:0.6rem;color:white;">Get Early Supporter Benefits</h3>
          <p style="font-size:0.875rem;color:var(--text-muted);line-height:1.7;max-width:480px;">Early community members receive priority whitelist access for Private Sale, exclusive ZentarAI Early Supporter badge, and premium signal tier at TGE.</p>
          <div style="display:flex;gap:1.25rem;margin-top:1rem;flex-wrap:wrap;">
            ${[
              {icon:'fas fa-key', color:'#fbbf24', text:'Whitelist Priority'},
              {icon:'fas fa-medal', color:C, text:'Early Supporter Badge'},
              {icon:'fas fa-signal', color:CL, text:'Premium Signal Tier'},
            ].map(b => `
            <div style="display:flex;align-items:center;gap:6px;">
              <i class="${b.icon}" style="color:${b.color};font-size:0.75rem;"></i>
              <span style="font-size:0.8rem;color:var(--text-muted);font-weight:600;">${b.text}</span>
            </div>`).join('')}
          </div>
        </div>
        <div style="display:flex;flex-direction:column;gap:0.75rem;min-width:220px;">
          <a href="${PROJECT.urls.twitter}" target="_blank" class="btn-primary" style="justify-content:center;"><i class="fab fa-x-twitter"></i> Follow for Updates</a>
          <a href="${PROJECT.urls.telegram}" target="_blank" class="btn-outline" style="justify-content:center;"><i class="fab fa-telegram"></i> Join Community</a>
        </div>
      </div>
    </div>
  </section>`

  /* ── FAQ ── */
  const faq = `
  <div class="divider"></div>
  <section id="faq" class="section">
    <div class="section-inner">
      <div style="text-align:center;max-width:600px;margin:0 auto 3rem;">
        <div class="section-label"><i class="fas fa-question-circle"></i> FAQ</div>
        <h2 class="section-title">Frequently Asked <span class="gradient-text">Questions</span></h2>
      </div>
      <div style="max-width:800px;margin:0 auto;display:flex;flex-direction:column;gap:0.75rem;">
        ${PROJECT.faq.map((item, i) => `
        <div class="glass-card" style="border-radius:14px;overflow:hidden;">
          <button onclick="toggleFaq(${i})" style="width:100%;display:flex;align-items:center;justify-content:space-between;padding:1.25rem 1.5rem;background:transparent;border:none;cursor:pointer;text-align:left;gap:1rem;">
            <span style="font-size:0.95rem;font-weight:700;color:white;">${item.q}</span>
            <i class="fas fa-chevron-down" id="faq-icon-${i}" style="color:${C};font-size:0.8rem;flex-shrink:0;transition:transform 0.3s;"></i>
          </button>
          <div id="faq-body-${i}" style="max-height:0;overflow:hidden;transition:max-height 0.35s ease;">
            <div style="padding:0 1.5rem 1.25rem;font-size:0.875rem;color:var(--text-muted);line-height:1.8;">${item.a}</div>
          </div>
        </div>`).join('')}
      </div>
    </div>
  </section>`

  /* ── CTA ── */
  const cta = `
  <div class="divider"></div>
  <section class="section observe" style="position:relative;overflow:hidden;">
    <div style="position:absolute;inset:0;background:linear-gradient(135deg,${C}0d,${CD}07);"></div>
    <div class="grid-bg" style="position:absolute;inset:0;opacity:0.3;"></div>
    <div class="section-inner" style="position:relative;z-index:1;">
      <div style="text-align:center;max-width:680px;margin:0 auto;">
        <div class="section-label" style="margin-bottom:1.375rem;"><i class="fas fa-rocket"></i> Join ZentarAI</div>
        <h2 style="font-size:clamp(2rem,5vw,3.5rem);font-weight:900;font-family:'Manrope',sans-serif;line-height:1.1;letter-spacing:-1.5px;margin-bottom:1.1rem;color:white;">
          Act on Intelligence<br/><span class="gradient-text">Before the Market Does.</span>
        </h2>
        <p style="font-size:1rem;color:var(--text-muted);line-height:1.8;margin-bottom:2.25rem;">ZentarAI turns overwhelming inputs into operational foresight. Confidence becomes your competitive edge.</p>
        <div style="display:flex;gap:0.75rem;justify-content:center;flex-wrap:wrap;">
          <a href="${PROJECT.urls.twitter}" target="_blank" class="btn-primary" style="font-size:0.95rem;"><i class="fab fa-x-twitter"></i> Follow on X</a>
          <a href="${PROJECT.urls.telegram}" target="_blank" class="btn-outline" style="font-size:0.95rem;"><i class="fab fa-telegram"></i> Join Telegram</a>
          <a href="/whitepaper" class="btn-ghost" style="font-size:0.9rem;"><i class="fas fa-file-alt"></i> Whitepaper</a>
        </div>
      </div>
    </div>
  </section>`

  /* ── RESPONSIVE ── */
  const responsive = `
  <style>
    @media(max-width:1024px){
      #hero-grid{grid-template-columns:1fr!important;gap:2.5rem!important;}
      #hero-grid>div:last-child{display:none;}
      #token-grid{grid-template-columns:1fr!important;gap:2rem!important;}
      #team-grid{grid-template-columns:repeat(2,1fr)!important;}
    }
    @media(max-width:900px){
      #trust-bar{grid-template-columns:repeat(3,1fr)!important;}
      #feat-grid,#eco-pillars{grid-template-columns:repeat(2,1fr)!important;}
      #partner-grid{grid-template-columns:repeat(2,1fr)!important;}
      #roadmap-grid{grid-template-columns:repeat(2,1fr)!important;}
      #hiw-grid{grid-template-columns:1fr!important;}
      #eco-flow{grid-template-columns:repeat(2,1fr)!important;}
    }
    @media(max-width:768px){
      #community-grid{grid-template-columns:1fr!important;}
      #stats-grid{grid-template-columns:repeat(2,1fr)!important;}
      #team-grid{grid-template-columns:1fr!important;}
    }
    @media(max-width:599px){
      #trust-bar{grid-template-columns:repeat(2,1fr)!important;}
      #feat-grid,#partner-grid,#roadmap-grid,#stats-grid{grid-template-columns:1fr!important;}
      #eco-pillars{grid-template-columns:1fr!important;}
    }
  </style>`

  /* ── GET STARTED / HOW TO JOIN ── */
  const getStarted = `
  <div class="divider"></div>
  <section id="get-started" class="section" style="position:relative;overflow:hidden;">
    <div class="grid-bg" style="position:absolute;inset:0;opacity:0.25;"></div>
    <div class="section-inner observe" style="position:relative;z-index:1;">
      <div style="text-align:center;max-width:640px;margin:0 auto 3.5rem;">
        <div class="section-label"><i class="fas fa-map-signs"></i> Get Started</div>
        <h2 class="section-title">Access Intelligence in <span class="gradient-text">3 Simple Steps</span></h2>
        <p class="section-subtitle" style="margin:0 auto;">No barriers. Connect your wallet, subscribe to signal feeds, and let ZentarAI surface what matters — before the market moves.</p>
      </div>
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:1.75rem;position:relative;" id="gs-grid">
        <div style="position:absolute;top:52px;left:calc(16.7% + 50px);right:calc(16.7% + 50px);height:2px;background:linear-gradient(90deg,${C},${CL});opacity:0.25;z-index:0;pointer-events:none;"></div>
        ${[
          {step:'01', icon:'fas fa-wallet', color:C, title:'Connect Your Wallet',
            desc:'Link MetaMask, Trust Wallet, or any BNB Chain-compatible wallet. One-click authentication — no sign-up form required.',
            items:['MetaMask', 'Trust Wallet', 'WalletConnect', 'OKX Wallet']},
          {step:'02', icon:'fas fa-satellite-dish', color:CL, title:'Subscribe to Signal Feeds',
            desc:'Select your signal categories — on-chain whale tracking, DeFi alerts, social sentiment, or cross-protocol anomaly detection.',
            items:['Whale Tracking', 'DeFi Alerts', 'Sentiment Feed', 'Anomaly Detection']},
          {step:'03', icon:'fas fa-chart-line', color:'#fbbf24', title:'Act Ahead of the Market',
            desc:'Receive real-time intelligence in your ZentarAI dashboard. ZNTR token holders unlock premium signal tiers and governance voting.',
            items:['Dashboard View', 'Signal API', 'ZNTR Staking', 'DAO Governance']},
        ].map((s, i) => `
        <div class="glass-card card-glow observe" style="padding:2rem;position:relative;z-index:1;animation-delay:${i*0.12}s;">
          <div style="position:absolute;top:-1px;left:0;right:0;height:3px;background:linear-gradient(90deg,${s.color},${s.color}60);border-radius:20px 20px 0 0;"></div>
          <div style="display:flex;align-items:flex-start;justify-content:space-between;margin-bottom:1.25rem;">
            <div style="width:54px;height:54px;background:${s.color}18;border:1px solid ${s.color}35;border-radius:16px;display:flex;align-items:center;justify-content:center;">
              <i class="${s.icon}" style="font-size:1.375rem;color:${s.color};"></i>
            </div>
            <span style="font-size:2.25rem;font-weight:900;font-family:'Manrope',sans-serif;color:${s.color};opacity:0.18;line-height:1;">${s.step}</span>
          </div>
          <h3 style="font-size:1.1rem;font-weight:800;font-family:'Manrope',sans-serif;margin-bottom:0.75rem;color:white;">${s.title}</h3>
          <p style="font-size:0.83rem;color:var(--text-muted);line-height:1.75;margin-bottom:1.1rem;">${s.desc}</p>
          <div style="display:flex;flex-direction:column;gap:6px;">
            ${s.items.map(item => `
            <div style="display:flex;align-items:center;gap:8px;">
              <i class="fas fa-check-circle" style="color:${s.color};font-size:11px;flex-shrink:0;"></i>
              <span style="font-size:0.78rem;color:var(--text-muted);">${item}</span>
            </div>`).join('')}
          </div>
        </div>`).join('')}
      </div>
      <!-- Progress bar -->
      <div style="display:flex;align-items:center;justify-content:center;gap:1.5rem;margin-top:3rem;flex-wrap:wrap;">
        ${[
          {icon:'fas fa-wallet', label:'Connect', color:C},
          {icon:'fas fa-arrow-right', label:'', color:'rgba(255,255,255,0.2)', arrow:true},
          {icon:'fas fa-satellite-dish', label:'Subscribe', color:CL},
          {icon:'fas fa-arrow-right', label:'', color:'rgba(255,255,255,0.2)', arrow:true},
          {icon:'fas fa-chart-line', label:'Earn Intelligence', color:'#fbbf24'},
        ].map(s => (s as any).arrow
          ? `<i class="${s.icon}" style="color:${s.color};font-size:0.875rem;"></i>`
          : `<div style="display:flex;align-items:center;gap:8px;">
              <div style="width:36px;height:36px;background:${s.color}20;border:1px solid ${s.color}35;border-radius:10px;display:flex;align-items:center;justify-content:center;">
                <i class="${s.icon}" style="color:${s.color};font-size:0.875rem;"></i>
              </div>
              <span style="font-size:0.82rem;font-weight:600;color:white;">${s.label}</span>
            </div>`
        ).join('')}
      </div>
    </div>
  </section>`

  /* ── CHART SCRIPT ── */
  const chartScript = `
  <script>
    // FAQ accordion
    function toggleFaq(i) {
      const body = document.getElementById('faq-body-'+i);
      const icon = document.getElementById('faq-icon-'+i);
      const isOpen = body.style.maxHeight && body.style.maxHeight !== '0px';
      document.querySelectorAll('[id^="faq-body-"]').forEach(el=>el.style.maxHeight='0px');
      document.querySelectorAll('[id^="faq-icon-"]').forEach(el=>el.style.transform='rotate(0deg)');
      if(!isOpen){body.style.maxHeight=body.scrollHeight+'px';icon.style.transform='rotate(180deg)';}
    }

    // Tokenomics donut chart
    (function(){
      const ctx = document.getElementById('tokenomicsChart');
      if(!ctx) return;
      new Chart(ctx,{
        type:'doughnut',
        data:{
          labels:${JSON.stringify(PROJECT.tokenomics.map(t => t.label))},
          datasets:[{
            data:${JSON.stringify(PROJECT.tokenomics.map(t => t.pct))},
            backgroundColor:['${C}','${CL}','#8b5cf6','#fbbf24','#f97316','#22c55e'],
            borderColor:'#060c10',
            borderWidth:3,
            hoverOffset:8
          }]
        },
        options:{
          cutout:'72%',
          responsive:false,
          plugins:{
            legend:{display:false},
            tooltip:{
              backgroundColor:'#0d1822',
              borderColor:'rgba(16,185,129,0.2)',
              borderWidth:1,
              titleColor:'#fff',
              bodyColor:'#8891a5',
              padding:12,
              callbacks:{label:ctx=>' '+ctx.label+': '+ctx.raw+'%'}
            }
          }
        }
      });
    })();

    // 60-month Vesting line chart
    (function(){
      const vestCtx = document.getElementById('vestingChart');
      if(!vestCtx) return;
      // ZNTR vesting schedule: 10B total
      // Ecosystem(40%=4B): no cliff, linear 36mo → 111.1M/mo
      // Team(15%=1.5B): 12mo cliff, 36mo vest → 41.67M/mo from mo13
      // Partnerships(15%=1.5B): 3mo cliff, 30mo vest → 50M/mo from mo4
      // Private Sale(15%=1.5B): 6mo cliff, 18mo vest → 83.33M/mo from mo7
      // Reserve(10%=1B): no cliff, 48mo vest → 20.83M/mo
      // Public Sale(5%=0.5B): TGE unlock 500M at mo0
      const months = Array.from({length:61},(_,i)=>i);
      let cum = 0;
      const data = months.map(m=>{
        if(m===0){cum=500;return cum;} // Public Sale TGE
        cum += 111.1; // Ecosystem
        if(m>=4 && m<=33) cum += 50; // Partnerships
        if(m>=7 && m<=24) cum += 83.33; // Private Sale
        if(m>=13 && m<=48) cum += 41.67; // Team
        cum += 20.83; // Reserve (capped at 48mo)
        if(cum>10000) cum=10000;
        return Math.round(cum*10)/10;
      });
      new Chart(vestCtx,{
        type:'line',
        data:{
          labels:months,
          datasets:[{
            label:'Circulating Supply',
            data:data,
            borderColor:'${C}',
            backgroundColor:'rgba(16,185,129,0.07)',
            borderWidth:2.5,
            fill:true,
            tension:0.4,
            pointRadius:0,
            pointHoverRadius:5,
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
              backgroundColor:'#0d1822',
              borderColor:'rgba(16,185,129,0.25)',
              borderWidth:1,
              titleColor:'#fff',
              bodyColor:'#8891a5',
              padding:12,
              callbacks:{label:ctx=>' '+(ctx.parsed.y/1000).toFixed(2)+'B ZNTR ('+(ctx.parsed.y/100).toFixed(2)+'%)'}
            }
          },
          scales:{
            x:{grid:{color:'rgba(255,255,255,0.04)'},ticks:{color:'#5a6278',font:{size:11},maxTicksLimit:12},border:{color:'rgba(255,255,255,0.06)'}},
            y:{grid:{color:'rgba(255,255,255,0.04)'},ticks:{color:'#5a6278',font:{size:11},callback:val=>(val/1000).toFixed(1)+'B'},border:{color:'rgba(255,255,255,0.06)'}}
          }
        }
      });
    })();
  </script>`

  const body = hero + trustBar + howItWorks + features + ecosystem + tokenomics + roadmap + team + partners + stats + getStarted + community + faq + cta + responsive + chartScript

  return layout(`${PROJECT.name} — ${PROJECT.tagline}`, body)
}
