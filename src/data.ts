export const PROJECT = {
  name: 'ZentarAI',
  codename: 'zentarai',
  tagline: 'Turn Signal Into Strategy',
  description: 'AI-powered predictive intelligence platform that transforms real-time data into decisive ecosystem strategy.',
  version: '1.0.0',
  status: 'active',
  chain: 'BNB Chain',
  chainId: 56,
  standard: 'BEP-20',
  token: 'ZNTR',
  supply: '10,000,000,000',
  supplyNum: '10B',
  tge: 'Q2 2026',
  category: 'AI + Predictive Intelligence',
  color: '#10b981',
  colorDark: '#059669',
  colorLight: '#34d399',
  urls: {
    production: 'https://zentarai.xyz',
    pages: 'https://zentarai.pages.dev',
    github: 'https://github.com/vinsenzo83/zentarai',
    twitter: 'https://x.com/intellora_',
    telegram: 'https://t.me/ZentarAI',
    bscscan: '',  // TGE 이후 업데이트 예정
  },
  contractAddress: '',  // 토큰 미발행 — TGE Q2 2026 이후 업데이트
  tokenKey: '',
  sourceCodeUrl: 'https://github.com/vinsenzo83/zentarai/archive/refs/heads/main.zip',
  team: [
    { name: 'Zara Ellison', role: 'CEO & Founder', bio: 'AI systems architect with 12+ years in predictive analytics and enterprise intelligence.' },
    { name: 'Kai Mercer', role: 'CTO', bio: 'Former ML lead at Google DeepMind. Expert in real-time data pipeline and signal processing.' },
    { name: 'Nova Hartwell', role: 'CMO', bio: 'Web3 growth strategist with track record scaling 3 crypto projects to top-100 CMC.' },
    { name: 'Eli Thornton', role: 'Head of Research', bio: 'PhD in computational intelligence. Pioneered sentiment-signal fusion algorithms.' },
  ],
  tokenomics: [
    { label: 'Ecosystem Rewards', pct: 40, vesting: '0–36 months' },
    { label: 'Team & Advisors', pct: 15, vesting: '12–36 months' },
    { label: 'Partnerships', pct: 15, vesting: '3–30 months' },
    { label: 'Private Sale', pct: 15, vesting: '6–18 months' },
    { label: 'Protocol Reserve', pct: 10, vesting: '0–48 months' },
    { label: 'Public Sale', pct: 5, vesting: 'Unlocked at TGE' },
  ],
  roadmap: [
    {
      phase: 'Phase 1', period: 'Q4 2025 – Q1 2026', status: 'completed',
      items: ['Core AI signal engine', 'Smart contract audit', 'Community building (X, Telegram)', 'Seed funding round', 'Website v1.0 launch']
    },
    {
      phase: 'Phase 2', period: 'Q2 2026', status: 'in-progress',
      items: ['Token Generation Event (TGE)', 'PancakeSwap DEX listing', 'ZentarAI dashboard beta', 'Signal API v1', 'KYC & CertiK audit']
    },
    {
      phase: 'Phase 3', period: 'Q3–Q4 2026', status: 'upcoming',
      items: ['AI Prediction marketplace', 'Cross-chain intelligence bridge', 'Enterprise SDK release', 'CEX listing campaign', 'DAO governance v1']
    },
    {
      phase: 'Phase 4', period: 'Q1 2027+', status: 'future',
      items: ['ZentarAI L2 data layer', 'Multichain signal feeds', 'AI-native oracle network', 'Global ecosystem expansion', 'Mobile app release']
    },
  ],
  pages: [
    { path: '/', name: 'Home', status: 'done' },
    { path: '/login', name: 'Login / Wallet Connect', status: 'done' },
    { path: '/mypage', name: 'My Dashboard', status: 'done' },
    { path: '/vesting', name: 'Vesting Schedule', status: 'done' },
    { path: '/whitepaper', name: 'Whitepaper', status: 'done' },
    { path: '/privacy', name: 'Privacy Policy', status: 'done' },
    { path: '/terms', name: 'Terms of Service', status: 'done' },
    { path: '/disclaimer', name: 'Disclaimer', status: 'done' },
  ],
  partners: ['BNB Chain', 'PancakeSwap', 'Chainlink', 'CertiK', 'Google Cloud AI', 'OKX Web3'],
  features: [
    { icon: 'fas fa-brain', title: 'AI Signal Engine', desc: 'Real-time pattern recognition across 500+ on-chain and off-chain data sources.' },
    { icon: 'fas fa-chart-line', title: 'Predictive Analytics', desc: 'Forward-looking intelligence that identifies trends before they become obvious.' },
    { icon: 'fas fa-network-wired', title: 'Ecosystem Intelligence', desc: 'Cross-protocol data aggregation for holistic market understanding.' },
    { icon: 'fas fa-bolt', title: 'Real-time Decisioning', desc: 'Sub-second signal processing ensures you act on intelligence, not lag.' },
    { icon: 'fas fa-shield-alt', title: 'Verified & Audited', desc: 'CertiK audit planned pre-TGE. Contract will be published on BNB Chain at TGE Q2 2026.' },
    { icon: 'fas fa-coins', title: 'ZNTR Token', desc: 'Governance, staking rewards, and premium signal access powered by ZNTR.' },
  ],
  faq: [
    { q: 'What is ZentarAI?', a: 'ZentarAI is an AI-powered predictive intelligence platform built on BNB Chain, turning real-time on-chain and off-chain signals into actionable ecosystem strategy.' },
    { q: 'What is the ZNTR token used for?', a: 'ZNTR is used for governance voting, staking to earn platform rewards, and accessing premium AI signal feeds and predictive dashboards.' },
    { q: 'When is the TGE?', a: 'The Token Generation Event (TGE) is planned for Q2 2026, with subsequent PancakeSwap listing shortly after.' },
    { q: 'Is ZentarAI audited?', a: 'A CertiK audit is planned before TGE (Q2 2026). The smart contract address will be published on BSCScan upon token launch. Our repository is already open-source on GitHub.' },
    { q: 'How do I participate in the Private Sale?', a: 'Connect your wallet on our platform and complete KYC to access the private sale allocation. Details available in the Whitepaper.' },
    { q: 'What chain is ZNTR deployed on?', a: 'ZNTR is a BEP-20 token deployed on BNB Chain (BSC Mainnet, Chain ID: 56).' },
  ],
  progress: 35,
}
