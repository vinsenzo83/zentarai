import { layout } from './layout'
import { PROJECT } from '../data'

export function homePage(): string {
  const tokenomicsJson = JSON.stringify(PROJECT.tokenomics.map(t => t.pct))
  const tokenomicsLabels = JSON.stringify(PROJECT.tokenomics.map(t => t.label))
  const tokenomicsColors = JSON.stringify([
    '#10b981','#34d399','#6ee7b7','#059669','#047857','#a7f3d0'
  ])

  const heroSection = `
<section style="min-height:100vh;display:flex;align-items:center;position:relative;overflow:hidden;" class="hero-bg">
  <div class="glow-orb" style="width:600px;height:600px;background:${PROJECT.color}18;top:-200px;left:50%;transform:translateX(-50%);"></div>
  <div class="glow-orb" style="width:300px;height:300px;background:${PROJECT.color}10;bottom:10%;right:5%;animation-delay:2s;"></div>
  <div style="max-width:1200px;margin:0 auto;padding:2rem;width:100%;text-align:center;position:relative;z-index:1;">
    <div style="display:inline-flex;align-items:center;gap:0.5rem;padding:0.4rem 1rem;background:rgba(16,185,129,0.1);border:1px solid rgba(16,185,129,0.25);border-radius:999px;font-size:0.8rem;color:${PROJECT.color};margin-bottom:2rem;">
      <i class="fas fa-circle" style="font-size:0.5rem;animation:glow-pulse 2s infinite;"></i> AI-Powered Predictive Intelligence · BNB Chain
    </div>
    <h1 style="font-size:clamp(2.8rem,7vw,5.5rem);font-weight:900;color:white;line-height:1.08;letter-spacing:-0.03em;margin-bottom:1.5rem;">
      Turn Signal<br/><span class="gradient-text">Into Strategy</span>
    </h1>
    <p style="font-size:clamp(1rem,2.5vw,1.25rem);color:#94a3b8;max-width:620px;margin:0 auto 2.5rem;line-height:1.7;">
      ZentarAI identifies meaningful trends before they become obvious — transforming real-time on-chain signals into decisive ecosystem intelligence.
    </p>
    <div style="display:flex;align-items:center;justify-content:center;gap:1rem;flex-wrap:wrap;">
      <a href="/login" class="btn-primary"><i class="fas fa-rocket"></i> Launch App</a>
      <a href="/whitepaper" class="btn-outline"><i class="fas fa-file-alt"></i> Read Whitepaper</a>
    </div>
    <div style="display:flex;justify-content:center;gap:3rem;margin-top:4rem;flex-wrap:wrap;">
      ${[
        ['10B', 'Total Supply'],
        ['Q2 2026', 'TGE Date'],
        ['BEP-20', 'Token Standard'],
        ['BNB Chain', 'Network'],
      ].map(([v, l]) => `
      <div style="text-align:center;">
        <div class="stat-val">${v}</div>
        <div class="stat-lbl">${l}</div>
      </div>`).join('')}
    </div>
  </div>
</section>`

  const featuresSection = `
<section style="padding:6rem 2rem;background:rgba(0,0,0,0.2);">
  <div style="max-width:1200px;margin:0 auto;">
    <div style="text-align:center;margin-bottom:4rem;">
      <h2 class="section-title">Why <span class="gradient-text">ZentarAI</span>?</h2>
      <p class="section-sub">Intelligence that anticipates — not reacts</p>
    </div>
    <div class="grid-3">
      ${PROJECT.features.map(f => `
      <div class="card" style="text-align:center;">
        <div style="width:56px;height:56px;background:rgba(16,185,129,0.1);border:1px solid rgba(16,185,129,0.2);border-radius:0.875rem;display:flex;align-items:center;justify-content:center;margin:0 auto 1.25rem;">
          <i class="${f.icon}" style="color:${PROJECT.color};font-size:1.4rem;"></i>
        </div>
        <h3 style="font-size:1rem;font-weight:700;color:white;margin-bottom:0.5rem;">${f.title}</h3>
        <p style="font-size:0.85rem;color:#64748b;line-height:1.6;">${f.desc}</p>
      </div>`).join('')}
    </div>
  </div>
</section>`

  const tokenomicsSection = `
<section style="padding:6rem 2rem;" id="tokenomics">
  <div style="max-width:1200px;margin:0 auto;">
    <div style="text-align:center;margin-bottom:4rem;">
      <h2 class="section-title">Token <span class="gradient-text">Allocation</span></h2>
      <p class="section-sub">ZNTR · Total Supply 10,000,000,000 · BNB Chain BEP-20</p>
    </div>
    <div class="grid-2" style="align-items:center;gap:3rem;">
      <div style="position:relative;max-width:360px;margin:0 auto;">
        <canvas id="donutChart" style="width:100%;"></canvas>
        <div style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);text-align:center;pointer-events:none;">
          <div style="font-size:1.6rem;font-weight:900;color:white;">ZNTR</div>
          <div style="font-size:0.75rem;color:#64748b;">10B Supply</div>
        </div>
      </div>
      <div style="display:flex;flex-direction:column;gap:0.875rem;" class="prog-section">
        ${PROJECT.tokenomics.map((t, i) => {
          const colors = ['#10b981','#34d399','#6ee7b7','#059669','#047857','#a7f3d0']
          return `
        <div>
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:0.375rem;">
            <div style="display:flex;align-items:center;gap:0.5rem;">
              <div style="width:10px;height:10px;border-radius:2px;background:${colors[i]};flex-shrink:0;"></div>
              <span style="font-size:0.875rem;color:#e2e8f0;font-weight:500;">${t.label}</span>
            </div>
            <div style="text-align:right;">
              <span style="font-size:0.9rem;font-weight:700;color:${colors[i]};">${t.pct}%</span>
              <span style="font-size:0.72rem;color:#475569;margin-left:0.5rem;">${t.vesting}</span>
            </div>
          </div>
          <div class="prog-bar"><div class="prog-fill" data-w="${t.pct}" style="width:0%;background:${colors[i]};"></div></div>
        </div>`
        }).join('')}
      </div>
    </div>
  </div>
</section>`

  const roadmapSection = `
<section style="padding:6rem 2rem;background:rgba(0,0,0,0.15);">
  <div style="max-width:1200px;margin:0 auto;">
    <div style="text-align:center;margin-bottom:4rem;">
      <h2 class="section-title">Road<span class="gradient-text">map</span></h2>
      <p class="section-sub">From signal to strategy — our development journey</p>
    </div>
    <div class="grid-2" style="gap:2rem;">
      ${PROJECT.roadmap.map(r => {
        const statusMap: Record<string,string> = {
          'completed': '#10b981',
          'in-progress': '#fbbf24',
          'upcoming': '#3b82f6',
          'future': '#64748b'
        }
        const statusLabel: Record<string,string> = {
          'completed': 'Completed',
          'in-progress': 'In Progress',
          'upcoming': 'Upcoming',
          'future': 'Future'
        }
        const col = statusMap[r.status] || '#64748b'
        return `
      <div class="card">
        <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:1.25rem;">
          <div>
            <div style="font-size:0.75rem;font-weight:700;color:${col};text-transform:uppercase;letter-spacing:0.08em;margin-bottom:0.25rem;">${r.phase}</div>
            <div style="font-size:1rem;font-weight:700;color:white;">${r.period}</div>
          </div>
          <span class="badge" style="background:${col}18;color:${col};border-color:${col}30;">
            <i class="fas fa-circle" style="font-size:0.45rem;"></i> ${statusLabel[r.status]}
          </span>
        </div>
        <ul style="display:flex;flex-direction:column;gap:0.5rem;">
          ${r.items.map(item => `
          <li style="display:flex;align-items:center;gap:0.75rem;font-size:0.85rem;color:#94a3b8;">
            <i class="fas fa-check-circle" style="color:${col};font-size:0.75rem;flex-shrink:0;"></i>
            ${item}
          </li>`).join('')}
        </ul>
      </div>`
      }).join('')}
    </div>
  </div>
</section>`

  const teamSection = `
<section style="padding:6rem 2rem;">
  <div style="max-width:1200px;margin:0 auto;">
    <div style="text-align:center;margin-bottom:4rem;">
      <h2 class="section-title">Core <span class="gradient-text">Team</span></h2>
      <p class="section-sub">Builders of the predictive intelligence frontier</p>
    </div>
    <div class="grid-4">
      ${PROJECT.team.map((m, i) => {
        const icons = ['fas fa-user-tie','fas fa-microchip','fas fa-bullhorn','fas fa-flask']
        const colors = ['#10b981','#3b82f6','#f59e0b','#8b5cf6']
        return `
      <div class="card" style="text-align:center;">
        <div style="width:64px;height:64px;border-radius:50%;background:linear-gradient(135deg,${colors[i]},${colors[i]}80);display:flex;align-items:center;justify-content:center;margin:0 auto 1rem;font-size:1.5rem;color:white;">
          <i class="${icons[i]}"></i>
        </div>
        <div style="font-size:0.95rem;font-weight:700;color:white;margin-bottom:0.25rem;">${m.name}</div>
        <div style="font-size:0.75rem;color:${colors[i]};font-weight:600;margin-bottom:0.75rem;">${m.role}</div>
        <p style="font-size:0.78rem;color:#64748b;line-height:1.6;">${m.bio}</p>
      </div>`
      }).join('')}
    </div>
  </div>
</section>`

  const partnersSection = `
<section style="padding:4rem 2rem;background:rgba(0,0,0,0.2);">
  <div style="max-width:1200px;margin:0 auto;text-align:center;">
    <p style="font-size:0.8rem;color:#475569;text-transform:uppercase;letter-spacing:0.1em;margin-bottom:2rem;">Ecosystem Partners</p>
    <div style="display:flex;flex-wrap:wrap;justify-content:center;gap:1rem;">
      ${PROJECT.partners.map(p => `
      <span style="padding:0.5rem 1.25rem;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:0.5rem;font-size:0.85rem;color:#94a3b8;font-weight:500;">${p}</span>`).join('')}
    </div>
  </div>
</section>`

  const faqSection = `
<section style="padding:6rem 2rem;">
  <div style="max-width:800px;margin:0 auto;">
    <div style="text-align:center;margin-bottom:4rem;">
      <h2 class="section-title">Frequently Asked <span class="gradient-text">Questions</span></h2>
    </div>
    <div>
      ${PROJECT.faq.map((item, i) => `
      <div class="faq-item">
        <button class="faq-q">
          ${item.q}
          <i class="fas fa-plus faq-icon" style="color:${PROJECT.color};font-size:0.9rem;transition:transform 0.3s;flex-shrink:0;"></i>
        </button>
        <div class="faq-a">${item.a}</div>
      </div>`).join('')}
    </div>
  </div>
</section>`

  const ctaSection = `
<section style="padding:6rem 2rem;background:rgba(0,0,0,0.3);">
  <div style="max-width:700px;margin:0 auto;text-align:center;">
    <div style="width:80px;height:80px;background:linear-gradient(135deg,${PROJECT.color},${PROJECT.colorDark});border-radius:1.25rem;display:flex;align-items:center;justify-content:center;margin:0 auto 2rem;font-size:2rem;color:white;">
      <i class="fas fa-brain"></i>
    </div>
    <h2 style="font-size:2.5rem;font-weight:900;color:white;margin-bottom:1rem;">Ready to act on <span class="gradient-text">intelligence</span>?</h2>
    <p style="color:#64748b;margin-bottom:2.5rem;line-height:1.7;">Join the ZentarAI ecosystem and gain a competitive edge with AI-powered predictive signals.</p>
    <div style="display:flex;justify-content:center;gap:1rem;flex-wrap:wrap;">
      <a href="/login" class="btn-primary"><i class="fas fa-wallet"></i> Connect Wallet</a>
      <a href="${PROJECT.urls.telegram}" target="_blank" class="btn-outline"><i class="fab fa-telegram"></i> Join Community</a>
    </div>
  </div>
</section>`

  const chartScript = `
<script>
(function(){
  const ctx = document.getElementById('donutChart');
  if(!ctx) return;
  new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ${tokenomicsLabels},
      datasets: [{
        data: ${tokenomicsJson},
        backgroundColor: ${tokenomicsColors},
        borderWidth: 0,
        hoverOffset: 8
      }]
    },
    options: {
      cutout: '72%',
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            label: function(ctx){ return ' ' + ctx.label + ': ' + ctx.parsed + '%'; }
          }
        }
      }
    }
  });
})();
</script>`

  const body = heroSection + featuresSection + tokenomicsSection + roadmapSection + teamSection + partnersSection + faqSection + ctaSection + chartScript

  return layout('Home', body)
}
