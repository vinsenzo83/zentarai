import { layout } from './layout'
import { PROJECT } from '../data'

export function legalPage(type: 'privacy' | 'terms' | 'disclaimer'): string {
  const c = PROJECT.color

  const content: Record<string, { title: string; icon: string; body: string }> = {
    privacy: {
      title: 'Privacy Policy',
      icon: 'fas fa-user-shield',
      body: `
<p>Last Updated: March 1, 2026</p>
<h3>1. Information We Collect</h3>
<p>We collect information you provide directly, including wallet addresses, email addresses, and usage data when you interact with ZentarAI platform services.</p>
<h3>2. How We Use Your Information</h3>
<p>We use collected information to provide platform services, send important updates about ZNTR token and TGE events, improve our AI signal systems, and comply with legal obligations.</p>
<h3>3. Wallet Data</h3>
<p>Blockchain wallet addresses are public by nature. We may use your wallet address to verify token holdings and provide appropriate access tiers. We never request or store private keys.</p>
<h3>4. Data Security</h3>
<p>We implement industry-standard security measures including encryption in transit and at rest. However, no system is 100% secure, and you use our platform at your own risk.</p>
<h3>5. Contact</h3>
<p>Privacy concerns may be directed to our Telegram community at ${PROJECT.urls.telegram}.</p>`
    },
    terms: {
      title: 'Terms of Service',
      icon: 'fas fa-file-contract',
      body: `
<p>Last Updated: March 1, 2026</p>
<h3>1. Acceptance of Terms</h3>
<p>By accessing ZentarAI services, you agree to these Terms of Service. If you do not agree, please do not use our platform.</p>
<h3>2. Eligibility</h3>
<p>You must be 18 years or older and not located in a jurisdiction where cryptocurrency activities are prohibited.</p>
<h3>3. Platform Use</h3>
<p>ZentarAI provides AI-powered market intelligence signals for informational purposes only. You acknowledge that signals are not financial advice and should not be solely relied upon for investment decisions.</p>
<h3>4. ZNTR Token</h3>
<p>ZNTR is a utility token providing access to platform features and governance. It is not a security or investment contract. Token values may fluctuate and you may lose the value of purchased tokens.</p>
<h3>5. Prohibited Activities</h3>
<p>You may not use ZentarAI for illegal activities, market manipulation, unauthorized access attempts, or any activity that violates applicable laws.</p>
<h3>6. Limitation of Liability</h3>
<p>ZentarAI is not liable for any losses arising from use of the platform, signal inaccuracies, or smart contract vulnerabilities beyond our reasonable control.</p>`
    },
    disclaimer: {
      title: 'Disclaimer',
      icon: 'fas fa-exclamation-circle',
      body: `
<p>Last Updated: March 1, 2026</p>
<h3>Not Financial Advice</h3>
<p>Nothing on the ZentarAI platform, including AI signals, tokenomics data, roadmap information, or any other content constitutes financial, investment, legal, or tax advice. Always consult qualified professionals before making financial decisions.</p>
<h3>Risk Warning</h3>
<p>Cryptocurrency and digital asset investments involve substantial risk, including the risk of losing your entire investment. Prices are highly volatile and can decrease rapidly. Past performance does not guarantee future results.</p>
<h3>Forward-Looking Statements</h3>
<p>This website may contain forward-looking statements regarding ZentarAI project development, token utility, and market projections. These statements involve risks and uncertainties. Actual results may differ materially from expectations.</p>
<h3>BNB Chain Notice</h3>
<p>ZNTR token operations occur on BNB Chain (BSC Mainnet). Users are responsible for understanding gas fees, network conditions, and the irreversible nature of blockchain transactions.</p>
<h3>Regulatory Compliance</h3>
<p>You are responsible for ensuring your participation in ZentarAI complies with the laws and regulations of your jurisdiction. ZentarAI does not guarantee regulatory compliance in all jurisdictions.</p>`
    }
  }

  const page = content[type]

  const body = `
<div style="max-width:800px;margin:0 auto;padding:2rem;">
  <div style="margin-bottom:2rem;">
    <div class="badge badge-green" style="margin-bottom:1rem;">
      <i class="${page.icon}"></i> Legal
    </div>
    <h1 style="font-size:2rem;font-weight:900;color:white;margin-bottom:0.5rem;">${page.title}</h1>
    <p style="color:#64748b;font-size:0.875rem;">ZentarAI · ${PROJECT.token} · BNB Chain</p>
  </div>

  <div class="card" style="line-height:1.9;">
    <div style="color:#94a3b8;font-size:0.9rem;">
      <style>
        .legal-body h3 { color: #e2e8f0; font-size: 1rem; font-weight: 700; margin: 1.5rem 0 0.5rem; }
        .legal-body p { margin-bottom: 0.75rem; }
      </style>
      <div class="legal-body">${page.body}</div>
    </div>
  </div>

  <div style="margin-top:2rem;display:flex;gap:1rem;flex-wrap:wrap;">
    ${['Privacy Policy|/privacy','Terms of Service|/terms','Disclaimer|/disclaimer'].map(l => {
      const [name, href] = l.split('|')
      return `<a href="${href}" style="color:${href === `/${type}` ? c : '#64748b'};text-decoration:none;font-size:0.85rem;font-weight:600;border-bottom:1px solid ${href === `/${type}` ? c : 'transparent'};padding-bottom:2px;">${name}</a>`
    }).join('')}
  </div>
</div>`

  return layout(page.title, body)
}
