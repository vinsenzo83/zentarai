import { layout } from './layout'
import { PROJECT } from '../data'

export function dashboardPage(): string {
  const body = `
<section style="padding:2rem;max-width:1400px;margin:0 auto;">
  <!-- Header -->
  <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:2rem;flex-wrap:wrap;gap:1rem;">
    <div>
      <h1 style="font-size:1.75rem;font-weight:800;color:white;">My Dashboard</h1>
      <p style="color:#64748b;font-size:0.875rem;margin-top:0.25rem;">Track your ZNTR portfolio and vesting schedule</p>
    </div>
    <div id="walletInfo" style="display:flex;align-items:center;gap:0.75rem;padding:0.625rem 1rem;background:rgba(16,185,129,0.08);border:1px solid rgba(16,185,129,0.2);border-radius:0.75rem;">
      <div style="width:8px;height:8px;border-radius:50%;background:#10b981;animation:glow-pulse 2s infinite;"></div>
      <span id="walletAddr" style="font-size:0.85rem;color:#e2e8f0;font-family:monospace;">Not connected</span>
      <button onclick="disconnectWallet()" style="font-size:0.7rem;color:#64748b;background:none;border:none;cursor:pointer;padding:0;" title="Disconnect">
        <i class="fas fa-sign-out-alt"></i>
      </button>
    </div>
  </div>

  <!-- Stats grid -->
  <div class="grid-4" style="margin-bottom:2rem;">
    ${[
      ['fas fa-coins','#10b981','ZNTR Balance','0 ZNTR','Your current token balance'],
      ['fas fa-lock','#3b82f6','Locked Tokens','0 ZNTR','Tokens under vesting schedule'],
      ['fas fa-unlock','#fbbf24','Claimable','0 ZNTR','Ready to claim now'],
      ['fas fa-chart-line','#8b5cf6','Portfolio Value','$0.00','Estimated USD value'],
    ].map(([icon,col,label,val,sub]) => `
    <div class="card">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:1rem;">
        <span style="font-size:0.75rem;color:#64748b;text-transform:uppercase;letter-spacing:0.05em;">${label}</span>
        <i class="${icon}" style="color:${col};font-size:1rem;"></i>
      </div>
      <div style="font-size:1.6rem;font-weight:800;color:white;margin-bottom:0.25rem;">${val}</div>
      <div style="font-size:0.75rem;color:#475569;">${sub}</div>
    </div>`).join('')}
  </div>

  <!-- Token info + Activity -->
  <div class="grid-2" style="gap:1.5rem;margin-bottom:2rem;">
    <!-- Token Info -->
    <div class="card">
      <h3 style="font-size:0.875rem;font-weight:700;color:white;margin-bottom:1.25rem;display:flex;align-items:center;gap:0.5rem;">
        <i class="fas fa-info-circle" style="color:${PROJECT.color};"></i> Token Information
      </h3>
      <div style="display:flex;flex-direction:column;gap:0.875rem;">
        ${[
          ['Token Name', 'ZentarAI'],
          ['Symbol', 'ZNTR'],
          ['Network', 'BNB Chain (BSC)'],
          ['Standard', 'BEP-20'],
          ['Total Supply', '10,000,000,000'],
          ['TGE Date', 'Q2 2026'],
          ['DEX', 'PancakeSwap'],
        ].map(([k, v]) => `
        <div style="display:flex;justify-content:space-between;align-items:center;padding:0.5rem 0;border-bottom:1px solid rgba(255,255,255,0.04);">
          <span style="font-size:0.8rem;color:#64748b;">${k}</span>
          <span style="font-size:0.85rem;color:#e2e8f0;font-weight:500;">${v}</span>
        </div>`).join('')}
      </div>
    </div>

    <!-- Vesting Preview -->
    <div class="card">
      <h3 style="font-size:0.875rem;font-weight:700;color:white;margin-bottom:1.25rem;display:flex;align-items:center;gap:0.5rem;">
        <i class="fas fa-clock" style="color:#fbbf24;"></i> Vesting Schedule Preview
      </h3>
      <div style="display:flex;flex-direction:column;gap:0.75rem;" class="prog-section">
        ${PROJECT.tokenomics.map((t, i) => {
          const colors = ['#10b981','#34d399','#6ee7b7','#059669','#047857','#a7f3d0']
          return `
        <div>
          <div style="display:flex;justify-content:space-between;margin-bottom:0.3rem;">
            <span style="font-size:0.78rem;color:#94a3b8;">${t.label}</span>
            <span style="font-size:0.78rem;color:${colors[i]};font-weight:600;">${t.pct}%</span>
          </div>
          <div class="prog-bar"><div class="prog-fill" data-w="${t.pct}" style="width:0%;background:${colors[i]};"></div></div>
          <div style="font-size:0.7rem;color:#475569;margin-top:0.2rem;">${t.vesting}</div>
        </div>`
        }).join('')}
      </div>
      <a href="/vesting" style="display:inline-flex;align-items:center;gap:0.4rem;margin-top:1.25rem;font-size:0.8rem;color:${PROJECT.color};text-decoration:none;font-weight:600;">
        View full schedule <i class="fas fa-arrow-right" style="font-size:0.7rem;"></i>
      </a>
    </div>
  </div>

  <!-- Quick links -->
  <div class="card">
    <h3 style="font-size:0.875rem;font-weight:700;color:white;margin-bottom:1.25rem;display:flex;align-items:center;gap:0.5rem;">
      <i class="fas fa-link" style="color:#8b5cf6;"></i> Quick Links
    </h3>
    <div style="display:flex;flex-wrap:wrap;gap:0.75rem;">
      ${[
        ['fas fa-file-alt','#10b981','Whitepaper','/whitepaper'],
        ['fas fa-chart-bar','#3b82f6','Vesting Schedule','/vesting'],
        ['fab fa-twitter','#1da1f2','Twitter',PROJECT.urls.twitter],
        ['fab fa-telegram','#0088cc','Telegram',PROJECT.urls.telegram],
        ['fab fa-github','#e2e8f0','GitHub',PROJECT.urls.github],
      ].map(([icon,col,label,href]) => `
      <a href="${href}" ${href.startsWith('http')?'target="_blank"':''} style="display:inline-flex;align-items:center;gap:0.5rem;padding:0.5rem 1rem;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:0.5rem;color:#94a3b8;text-decoration:none;font-size:0.82rem;font-weight:500;transition:all 0.2s;" onmouseover="this.style.borderColor='${col}';this.style.color='${col}'" onmouseout="this.style.borderColor='rgba(255,255,255,0.08)';this.style.color='#94a3b8'">
        <i class="${icon}" style="color:${col};font-size:0.85rem;"></i> ${label}
      </a>`).join('')}
    </div>
  </div>
</section>

<script>
(function(){
  const wallet = localStorage.getItem('zntr_wallet');
  const user = JSON.parse(localStorage.getItem('zntr_user') || 'null');
  const addrEl = document.getElementById('walletAddr');
  if(wallet) {
    addrEl.textContent = wallet.slice(0,6) + '…' + wallet.slice(-4);
  } else if(user) {
    addrEl.textContent = user.email;
  } else {
    addrEl.textContent = 'Demo Mode';
  }
})();

function disconnectWallet() {
  localStorage.removeItem('zntr_wallet');
  localStorage.removeItem('zntr_user');
  location.href = '/login';
}
</script>`

  return layout('My Dashboard', body)
}
