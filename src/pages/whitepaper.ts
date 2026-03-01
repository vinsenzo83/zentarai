import { layout } from './layout'
import { PROJECT } from '../data'

export function whitepaperPage(): string {
  const tocItems = [
    ['abstract','1. Abstract'],
    ['problem','2. Problem Statement'],
    ['solution','3. ZentarAI Solution'],
    ['token','4. Token Economics'],
    ['technology','5. Technology Stack'],
    ['roadmap','6. Roadmap'],
    ['team','7. Team'],
    ['legal','8. Legal Disclaimer'],
  ]

  const body = `
<div style="max-width:1200px;margin:0 auto;padding:3rem 2rem;display:grid;grid-template-columns:240px 1fr;gap:3rem;align-items:start;">
  <div style="position:sticky;top:80px;">
    <div style="background:rgba(255,255,255,0.03);border:1px solid rgba(16,185,129,0.12);border-radius:1rem;padding:1.25rem;">
      <div style="font-size:0.75rem;font-weight:700;color:#64748b;text-transform:uppercase;letter-spacing:0.1em;margin-bottom:1rem;">Contents</div>
      <ul style="list-style:none;display:flex;flex-direction:column;gap:0.125rem;">
        ${tocItems.map(([id,title]) =>
          '<li><a href="#'+id+'" style="color:#64748b;text-decoration:none;font-size:0.85rem;padding:0.4rem 0.75rem;display:block;border-radius:0.375rem;" onmouseover="this.style.color=\'#10b981\';this.style.background=\'rgba(16,185,129,0.08)\'" onmouseout="this.style.color=\'#64748b\';this.style.background=\'transparent\'">'+title+'</a></li>'
        ).join('')}
      </ul>
    </div>
    <div style="margin-top:1rem;padding:1rem;background:rgba(16,185,129,0.06);border:1px solid rgba(16,185,129,0.15);border-radius:0.75rem;text-align:center;">
      <div style="font-size:0.75rem;color:#64748b;margin-bottom:0.5rem;">Token</div>
      <div style="font-size:1.25rem;font-weight:800;color:${PROJECT.color};">ZNTR</div>
      <div style="font-size:0.72rem;color:#64748b;">BNB Chain · TGE ${PROJECT.tge}</div>
      <a href="/login" class="btn-primary" style="width:100%;justify-content:center;padding:0.6rem;font-size:0.8rem;margin-top:0.875rem;display:flex;text-decoration:none;">
        <i class="fas fa-wallet"></i>&nbsp;Connect Wallet
      </a>
    </div>
  </div>

  <div>
    <div style="margin-bottom:3rem;">
      <span class="badge badge-green" style="margin-bottom:1rem;display:inline-flex;"><i class="fas fa-circle" style="font-size:0.45rem;"></i>&nbsp;v1.0.0</span>
      <h1 style="font-size:2.5rem;font-weight:900;color:white;line-height:1.1;margin-bottom:1rem;">
        ${PROJECT.name}<br/><span class="gradient-text">Whitepaper</span>
      </h1>
      <p style="font-size:1rem;color:#94a3b8;line-height:1.7;max-width:600px;">AI-Powered Predictive Intelligence on BNB Chain. Turn Signal Into Strategy.</p>
    </div>

    <div id="abstract" style="padding-bottom:2.5rem;border-bottom:1px solid rgba(255,255,255,0.06);margin-bottom:2.5rem;">
      <h2 style="font-size:1.35rem;font-weight:800;color:white;margin-bottom:1rem;display:flex;align-items:center;gap:0.75rem;">
        <i class="fas fa-file-alt" style="color:${PROJECT.color};"></i> 1. Abstract
      </h2>
      <div style="font-size:0.9rem;color:#94a3b8;line-height:1.8;">
        <p>ZentarAI is an AI-powered predictive intelligence layer built on BNB Chain (BSC Mainnet). The platform transforms real-time on-chain and off-chain data into forward-looking ecosystem signals, enabling protocols, traders, and DAOs to act on intelligence rather than react to noise.</p>
        <p style="margin-top:1rem;">The native token ZNTR (BEP-20, Total Supply: 10,000,000,000) powers governance, staking, and premium signal access across the ZentarAI ecosystem.</p>
      </div>
    </div>

    <div id="problem" style="padding-bottom:2.5rem;border-bottom:1px solid rgba(255,255,255,0.06);margin-bottom:2.5rem;">
      <h2 style="font-size:1.35rem;font-weight:800;color:white;margin-bottom:1rem;display:flex;align-items:center;gap:0.75rem;">
        <i class="fas fa-exclamation-circle" style="color:#ef4444;"></i> 2. Problem Statement
      </h2>
      <div style="font-size:0.9rem;color:#94a3b8;line-height:1.8;">
        <p>The Web3 ecosystem generates unprecedented volumes of data yet most participants remain reactive, chasing lagging indicators rather than leading signals.</p>
        <ul style="margin-top:1rem;display:flex;flex-direction:column;gap:0.5rem;list-style:none;">
          <li style="display:flex;gap:0.75rem;"><i class="fas fa-times-circle" style="color:#ef4444;margin-top:0.15rem;flex-shrink:0;font-size:0.85rem;"></i><span>Information overload: 500+ data sources with no unified intelligence layer</span></li>
          <li style="display:flex;gap:0.75rem;"><i class="fas fa-times-circle" style="color:#ef4444;margin-top:0.15rem;flex-shrink:0;font-size:0.85rem;"></i><span>Reactive decision-making: actors respond to events after the fact</span></li>
          <li style="display:flex;gap:0.75rem;"><i class="fas fa-times-circle" style="color:#ef4444;margin-top:0.15rem;flex-shrink:0;font-size:0.85rem;"></i><span>Lack of predictive tools: existing analytics are descriptive, not prescriptive</span></li>
          <li style="display:flex;gap:0.75rem;"><i class="fas fa-times-circle" style="color:#ef4444;margin-top:0.15rem;flex-shrink:0;font-size:0.85rem;"></i><span>High noise ratio: distinguishing meaningful signals is manual and slow</span></li>
        </ul>
      </div>
    </div>

    <div id="solution" style="padding-bottom:2.5rem;border-bottom:1px solid rgba(255,255,255,0.06);margin-bottom:2.5rem;">
      <h2 style="font-size:1.35rem;font-weight:800;color:white;margin-bottom:1rem;display:flex;align-items:center;gap:0.75rem;">
        <i class="fas fa-lightbulb" style="color:#fbbf24;"></i> 3. ZentarAI Solution
      </h2>
      <div style="font-size:0.9rem;color:#94a3b8;line-height:1.8;">
        <p>ZentarAI bridges the reactive intelligence gap with AI-driven pattern recognition delivering anticipatory insights:</p>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin-top:1.25rem;">
          <div style="padding:1rem;background:rgba(16,185,129,0.06);border:1px solid rgba(16,185,129,0.15);border-radius:0.75rem;">
            <div style="font-size:0.85rem;font-weight:700;color:#10b981;margin-bottom:0.4rem;">Signal Engine</div>
            <div style="font-size:0.8rem;">Monitors 500+ on-chain and off-chain data sources in real-time</div>
          </div>
          <div style="padding:1rem;background:rgba(16,185,129,0.06);border:1px solid rgba(16,185,129,0.15);border-radius:0.75rem;">
            <div style="font-size:0.85rem;font-weight:700;color:#10b981;margin-bottom:0.4rem;">Pattern Recognition</div>
            <div style="font-size:0.8rem;">ML models trained on historical cycles detect emerging trends</div>
          </div>
          <div style="padding:1rem;background:rgba(16,185,129,0.06);border:1px solid rgba(16,185,129,0.15);border-radius:0.75rem;">
            <div style="font-size:0.85rem;font-weight:700;color:#10b981;margin-bottom:0.4rem;">Ecosystem Alerts</div>
            <div style="font-size:0.8rem;">Configurable alerts for liquidity, sentiment, and governance shifts</div>
          </div>
          <div style="padding:1rem;background:rgba(16,185,129,0.06);border:1px solid rgba(16,185,129,0.15);border-radius:0.75rem;">
            <div style="font-size:0.85rem;font-weight:700;color:#10b981;margin-bottom:0.4rem;">Strategic Dashboard</div>
            <div style="font-size:0.8rem;">Unified interface for ecosystem actors to consume intelligence</div>
          </div>
        </div>
      </div>
    </div>

    <div id="token" style="padding-bottom:2.5rem;border-bottom:1px solid rgba(255,255,255,0.06);margin-bottom:2.5rem;">
      <h2 style="font-size:1.35rem;font-weight:800;color:white;margin-bottom:1rem;display:flex;align-items:center;gap:0.75rem;">
        <i class="fas fa-coins" style="color:#fbbf24;"></i> 4. Token Economics
      </h2>
      <div style="font-size:0.9rem;color:#94a3b8;line-height:1.8;">
        <p><strong style="color:white;">Token:</strong> ZNTR &nbsp;|&nbsp; <strong style="color:white;">Standard:</strong> BEP-20 &nbsp;|&nbsp; <strong style="color:white;">Chain:</strong> BNB Chain &nbsp;|&nbsp; <strong style="color:white;">Supply:</strong> 10,000,000,000</p>
        <div style="margin-top:1.25rem;display:flex;flex-direction:column;gap:0.625rem;">
          ${PROJECT.tokenomics.map((t, i) => {
            const cols = ['#10b981','#34d399','#6ee7b7','#059669','#047857','#a7f3d0']
            return '<div style="display:flex;align-items:center;justify-content:space-between;padding:0.625rem 0.75rem;background:rgba(255,255,255,0.03);border-radius:0.5rem;"><div style="display:flex;align-items:center;gap:0.5rem;"><div style="width:8px;height:8px;border-radius:2px;background:'+cols[i]+';"></div><span>'+t.label+'</span></div><div style="text-align:right;"><span style="font-weight:700;color:'+cols[i]+';">'+t.pct+'%</span><span style="font-size:0.75rem;color:#475569;margin-left:0.75rem;">'+t.vesting+'</span></div></div>'
          }).join('')}
        </div>
        <p style="margin-top:1.25rem;"><strong style="color:white;">ZNTR Utilities:</strong> Governance voting · Staking rewards · Premium signal access · Protocol fee discounts · DAO participation</p>
      </div>
    </div>

    <div id="technology" style="padding-bottom:2.5rem;border-bottom:1px solid rgba(255,255,255,0.06);margin-bottom:2.5rem;">
      <h2 style="font-size:1.35rem;font-weight:800;color:white;margin-bottom:1rem;display:flex;align-items:center;gap:0.75rem;">
        <i class="fas fa-microchip" style="color:#8b5cf6;"></i> 5. Technology Stack
      </h2>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:1rem;">
        <div style="padding:1rem;background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.06);border-radius:0.75rem;">
          <div style="font-size:0.8rem;font-weight:700;color:${PROJECT.color};margin-bottom:0.35rem;">AI Core</div>
          <div style="font-size:0.78rem;color:#94a3b8;">Transformer-based models + LSTM for time-series prediction</div>
        </div>
        <div style="padding:1rem;background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.06);border-radius:0.75rem;">
          <div style="font-size:0.8rem;font-weight:700;color:${PROJECT.color};margin-bottom:0.35rem;">Data Layer</div>
          <div style="font-size:0.78rem;color:#94a3b8;">500+ APIs: on-chain indexers, social feeds, governance trackers</div>
        </div>
        <div style="padding:1rem;background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.06);border-radius:0.75rem;">
          <div style="font-size:0.8rem;font-weight:700;color:${PROJECT.color};margin-bottom:0.35rem;">Smart Contracts</div>
          <div style="font-size:0.78rem;color:#94a3b8;">BEP-20 on BNB Chain, CertiK-audited, open-source on GitHub</div>
        </div>
        <div style="padding:1rem;background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.06);border-radius:0.75rem;">
          <div style="font-size:0.8rem;font-weight:700;color:${PROJECT.color};margin-bottom:0.35rem;">Infrastructure</div>
          <div style="font-size:0.78rem;color:#94a3b8;">Hono + Cloudflare Workers edge deployment, Chainlink oracles</div>
        </div>
      </div>
    </div>

    <div id="roadmap" style="padding-bottom:2.5rem;border-bottom:1px solid rgba(255,255,255,0.06);margin-bottom:2.5rem;">
      <h2 style="font-size:1.35rem;font-weight:800;color:white;margin-bottom:1rem;display:flex;align-items:center;gap:0.75rem;">
        <i class="fas fa-road" style="color:#3b82f6;"></i> 6. Roadmap
      </h2>
      <div style="display:flex;flex-direction:column;gap:1.25rem;">
        ${PROJECT.roadmap.map(r => {
          const cm: Record<string,string> = {'completed':'#10b981','in-progress':'#fbbf24','upcoming':'#3b82f6','future':'#64748b'}
          const col = cm[r.status] || '#64748b'
          return '<div style="display:flex;gap:1rem;align-items:flex-start;"><div style="width:12px;height:12px;border-radius:50%;background:'+col+';margin-top:0.2rem;flex-shrink:0;"></div><div><div style="font-size:0.85rem;font-weight:700;color:'+col+';">'+r.phase+' · '+r.period+'</div><ul style="margin-top:0.35rem;list-style:none;display:flex;flex-direction:column;gap:0.3rem;">'+ r.items.map(item=>'<li style="font-size:0.8rem;color:#94a3b8;">• '+item+'</li>').join('')+'</ul></div></div>'
        }).join('')}
      </div>
    </div>

    <div id="team" style="padding-bottom:2.5rem;border-bottom:1px solid rgba(255,255,255,0.06);margin-bottom:2.5rem;">
      <h2 style="font-size:1.35rem;font-weight:800;color:white;margin-bottom:1rem;display:flex;align-items:center;gap:0.75rem;">
        <i class="fas fa-users" style="color:#ec4899;"></i> 7. Team
      </h2>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:1rem;">
        ${PROJECT.team.map(m => '<div style="padding:1rem;background:rgba(255,255,255,0.03);border-radius:0.75rem;"><div style="font-size:0.9rem;font-weight:700;color:white;">'+m.name+'</div><div style="font-size:0.75rem;color:'+PROJECT.color+';font-weight:600;margin-bottom:0.5rem;">'+m.role+'</div><div style="font-size:0.78rem;color:#94a3b8;line-height:1.5;">'+m.bio+'</div></div>').join('')}
      </div>
    </div>

    <div id="legal">
      <h2 style="font-size:1.35rem;font-weight:800;color:white;margin-bottom:1rem;display:flex;align-items:center;gap:0.75rem;">
        <i class="fas fa-gavel" style="color:#64748b;"></i> 8. Legal Disclaimer
      </h2>
      <p style="font-size:0.85rem;color:#94a3b8;line-height:1.8;">This whitepaper is for informational purposes only and does not constitute financial advice. ZNTR tokens are utility tokens and are not securities. Please read our full <a href="/disclaimer" style="color:${PROJECT.color};">Disclaimer</a>, <a href="/privacy" style="color:${PROJECT.color};">Privacy Policy</a>, and <a href="/terms" style="color:${PROJECT.color};">Terms of Service</a>.</p>
    </div>
  </div>
</div>

<style>
@media(max-width:900px){
  div[style*="grid-template-columns:240px"]{grid-template-columns:1fr!important;}
  div[style*="position:sticky"]{position:static!important;display:none;}
}
</style>`

  return layout('Whitepaper', body)
}
