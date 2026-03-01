import { layout } from './layout'
import { PROJECT } from '../data'

export function vestingPage(): string {
  const body = `
<section style="padding:3rem 2rem;max-width:1200px;margin:0 auto;">
  <div style="margin-bottom:3rem;">
    <a href="/mypage" style="display:inline-flex;align-items:center;gap:0.5rem;color:#64748b;text-decoration:none;font-size:0.875rem;margin-bottom:1.5rem;">
      <i class="fas fa-arrow-left"></i> Back to Dashboard
    </a>
    <h1 class="section-title">Vesting <span class="gradient-text">Schedule</span></h1>
    <p style="color:#64748b;margin-top:0.5rem;">ZNTR token allocation and unlock timeline</p>
  </div>

  <!-- Summary cards -->
  <div class="grid-4" style="margin-bottom:3rem;">
    ${[
      ['Total Supply','10,000,000,000','ZNTR','#10b981'],
      ['TGE Unlock','5%','Public Sale — Immediate','#fbbf24'],
      ['Lock Period','6 – 48 mo','Varies by allocation','#3b82f6'],
      ['DEX Listing','PancakeSwap','BNB Chain · Q2 2026','#8b5cf6'],
    ].map(([label,val,sub,col]) => `
    <div class="card" style="border-color:${col}25;">
      <div style="font-size:0.75rem;color:#64748b;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:0.75rem;">${label}</div>
      <div style="font-size:1.5rem;font-weight:800;color:${col};">${val}</div>
      <div style="font-size:0.75rem;color:#475569;margin-top:0.25rem;">${sub}</div>
    </div>`).join('')}
  </div>

  <!-- Allocation table -->
  <div class="card" style="margin-bottom:2rem;overflow-x:auto;">
    <h3 style="font-size:1rem;font-weight:700;color:white;margin-bottom:1.5rem;display:flex;align-items:center;gap:0.5rem;">
      <i class="fas fa-table" style="color:${PROJECT.color};"></i> Allocation Breakdown
    </h3>
    <table style="width:100%;border-collapse:collapse;font-size:0.875rem;">
      <thead>
        <tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
          ${['Allocation','Percentage','Tokens (ZNTR)','Vesting Period','Cliff'].map(h =>
            `<th style="text-align:left;padding:0.75rem 0.5rem;font-size:0.75rem;color:#64748b;font-weight:600;text-transform:uppercase;letter-spacing:0.05em;">${h}</th>`
          ).join('')}
        </tr>
      </thead>
      <tbody>
        ${[
          ['Ecosystem Rewards', 40, '4,000,000,000', '0 – 36 months', 'None'],
          ['Team & Advisors',   15, '1,500,000,000', '12 – 36 months', '12 months'],
          ['Partnerships',      15, '1,500,000,000', '3 – 30 months',  '3 months'],
          ['Private Sale',      15, '1,500,000,000', '6 – 18 months',  '6 months'],
          ['Protocol Reserve',  10, '1,000,000,000', '0 – 48 months',  'None'],
          ['Public Sale',        5, '500,000,000',   'Unlocked at TGE','None'],
        ].map(([label, pct, tokens, vesting, cliff], i) => {
          const colors = ['#10b981','#34d399','#6ee7b7','#059669','#047857','#a7f3d0']
          return `
        <tr style="border-bottom:1px solid rgba(255,255,255,0.04);">
          <td style="padding:0.875rem 0.5rem;">
            <div style="display:flex;align-items:center;gap:0.5rem;">
              <div style="width:8px;height:8px;border-radius:2px;background:${colors[i]};flex-shrink:0;"></div>
              <span style="color:#e2e8f0;font-weight:500;">${label}</span>
            </div>
          </td>
          <td style="padding:0.875rem 0.5rem;color:${colors[i]};font-weight:700;">${pct}%</td>
          <td style="padding:0.875rem 0.5rem;color:#94a3b8;font-family:monospace;font-size:0.8rem;">${tokens}</td>
          <td style="padding:0.875rem 0.5rem;color:#94a3b8;">${vesting}</td>
          <td style="padding:0.875rem 0.5rem;">
            <span style="padding:0.2rem 0.6rem;border-radius:999px;font-size:0.7rem;background:${cliff==='None'?'rgba(16,185,129,0.1)':'rgba(251,191,36,0.1)'};color:${cliff==='None'?'#10b981':'#fbbf24'};">${cliff}</span>
          </td>
        </tr>`
        }).join('')}
      </tbody>
    </table>
  </div>

  <!-- Visual bar -->
  <div class="card prog-section">
    <h3 style="font-size:1rem;font-weight:700;color:white;margin-bottom:1.5rem;display:flex;align-items:center;gap:0.5rem;">
      <i class="fas fa-chart-bar" style="color:#3b82f6;"></i> Visual Distribution
    </h3>
    <div style="display:flex;flex-direction:column;gap:1rem;">
      ${[
        ['Ecosystem Rewards',40,'#10b981','0 – 36 mo'],
        ['Team & Advisors',15,'#34d399','12 – 36 mo'],
        ['Partnerships',15,'#6ee7b7','3 – 30 mo'],
        ['Private Sale',15,'#059669','6 – 18 mo'],
        ['Protocol Reserve',10,'#047857','0 – 48 mo'],
        ['Public Sale',5,'#a7f3d0','TGE'],
      ].map(([label, pct, col, period]) => `
      <div>
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:0.4rem;">
          <span style="font-size:0.82rem;color:#94a3b8;font-weight:500;">${label}</span>
          <div style="display:flex;align-items:center;gap:1rem;">
            <span style="font-size:0.72rem;color:#475569;">${period}</span>
            <span style="font-size:0.85rem;font-weight:700;color:${col};min-width:2.5rem;text-align:right;">${pct}%</span>
          </div>
        </div>
        <div class="prog-bar" style="height:10px;">
          <div class="prog-fill" data-w="${pct}" style="width:0%;background:${col};"></div>
        </div>
      </div>`).join('')}
    </div>
  </div>

  <!-- Note -->
  <div style="margin-top:1.5rem;padding:1rem 1.25rem;background:rgba(251,191,36,0.06);border:1px solid rgba(251,191,36,0.2);border-radius:0.75rem;display:flex;gap:0.75rem;">
    <i class="fas fa-exclamation-triangle" style="color:#fbbf24;margin-top:0.1rem;flex-shrink:0;"></i>
    <p style="font-size:0.82rem;color:#94a3b8;line-height:1.6;">
      <strong style="color:#fbbf24;">Note:</strong> Vesting schedules are subject to smart contract enforcement post-TGE.
      All unlock events will be visible on BSCScan. Private sale participants will receive individual vesting dashboard access after KYC completion.
    </p>
  </div>
</section>`

  return layout('Vesting Schedule', body)
}
