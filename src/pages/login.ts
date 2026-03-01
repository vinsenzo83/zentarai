import { layout } from './layout'
import { PROJECT } from '../data'

export function loginPage(): string {
  const body = `
<section style="min-height:100vh;display:flex;align-items:center;justify-content:center;padding:2rem;position:relative;overflow:hidden;" class="hero-bg">
  <div class="glow-orb" style="width:500px;height:500px;background:${PROJECT.color}12;top:-150px;right:-100px;"></div>
  <div style="width:100%;max-width:440px;position:relative;z-index:1;">
    <!-- Logo -->
    <div style="text-align:center;margin-bottom:2rem;">
      <div style="width:64px;height:64px;background:linear-gradient(135deg,${PROJECT.color},${PROJECT.colorDark});border-radius:1rem;display:flex;align-items:center;justify-content:center;margin:0 auto 1rem;font-size:1.75rem;color:white;">
        <i class="fas fa-brain"></i>
      </div>
      <h1 style="font-size:1.5rem;font-weight:800;color:white;">Welcome to ${PROJECT.name}</h1>
      <p style="font-size:0.875rem;color:#64748b;margin-top:0.5rem;">Connect your wallet or sign in to continue</p>
    </div>

    <!-- Card -->
    <div style="background:rgba(255,255,255,0.04);border:1px solid rgba(16,185,129,0.15);border-radius:1.25rem;padding:2rem;">
      <!-- Wallet buttons -->
      <div style="display:flex;flex-direction:column;gap:0.75rem;margin-bottom:1.75rem;">
        <button onclick="connectWallet('metamask')" style="width:100%;padding:0.875rem 1rem;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.1);border-radius:0.75rem;color:white;font-size:0.9rem;font-weight:600;cursor:pointer;display:flex;align-items:center;gap:0.75rem;transition:all 0.2s;" onmouseover="this.style.borderColor='#f6851b';this.style.background='rgba(246,133,27,0.08)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.1)';this.style.background='rgba(255,255,255,0.04)'">
          <img src="https://upload.wikimedia.org/wikipedia/commons/3/36/MetaMask_Fox.svg" style="width:24px;height:24px;object-fit:contain;" alt="MetaMask"/>
          Connect MetaMask
          <i class="fas fa-chevron-right" style="margin-left:auto;color:#64748b;font-size:0.75rem;"></i>
        </button>
        <button onclick="connectWallet('walletconnect')" style="width:100%;padding:0.875rem 1rem;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.1);border-radius:0.75rem;color:white;font-size:0.9rem;font-weight:600;cursor:pointer;display:flex;align-items:center;gap:0.75rem;transition:all 0.2s;" onmouseover="this.style.borderColor='#3b99fc';this.style.background='rgba(59,153,252,0.08)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.1)';this.style.background='rgba(255,255,255,0.04)'">
          <div style="width:24px;height:24px;background:linear-gradient(135deg,#3b99fc,#5d5fef);border-radius:6px;display:flex;align-items:center;justify-content:center;">
            <i class="fas fa-link" style="color:white;font-size:0.7rem;"></i>
          </div>
          WalletConnect
          <i class="fas fa-chevron-right" style="margin-left:auto;color:#64748b;font-size:0.75rem;"></i>
        </button>
      </div>

      <!-- Divider -->
      <div style="display:flex;align-items:center;gap:1rem;margin-bottom:1.75rem;">
        <hr style="flex:1;border:none;border-top:1px solid rgba(255,255,255,0.08);" />
        <span style="font-size:0.75rem;color:#475569;">or continue with email</span>
        <hr style="flex:1;border:none;border-top:1px solid rgba(255,255,255,0.08);" />
      </div>

      <!-- Email form -->
      <form id="loginForm" onsubmit="handleLogin(event)">
        <div style="margin-bottom:1rem;">
          <label class="form-label">Email address</label>
          <input type="email" class="form-input" placeholder="you@example.com" id="emailInput" required/>
        </div>
        <div style="margin-bottom:1.5rem;">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:0.375rem;">
            <label class="form-label" style="margin:0;">Password</label>
            <a href="#" style="font-size:0.75rem;color:${PROJECT.color};text-decoration:none;">Forgot password?</a>
          </div>
          <input type="password" class="form-input" placeholder="Enter password" id="passInput" required/>
        </div>
        <button type="submit" class="btn-primary" style="width:100%;justify-content:center;padding:0.875rem;">
          <i class="fas fa-sign-in-alt"></i> Sign In
        </button>
      </form>

      <p style="text-align:center;font-size:0.8rem;color:#475569;margin-top:1.5rem;">
        Don't have an account?
        <a href="#" onclick="toggleRegister()" style="color:${PROJECT.color};text-decoration:none;font-weight:600;"> Create account</a>
      </p>
    </div>

    <!-- Notice -->
    <div style="margin-top:1rem;padding:0.75rem 1rem;background:rgba(16,185,129,0.06);border:1px solid rgba(16,185,129,0.15);border-radius:0.75rem;display:flex;align-items:flex-start;gap:0.75rem;">
      <i class="fas fa-shield-alt" style="color:${PROJECT.color};margin-top:0.1rem;flex-shrink:0;"></i>
      <p style="font-size:0.75rem;color:#64748b;line-height:1.5;">Your wallet keys never leave your device. ZentarAI uses read-only access for authentication.</p>
    </div>

    <!-- Toast -->
    <div id="toast" style="position:fixed;bottom:2rem;left:50%;transform:translateX(-50%) translateY(100px);background:#1e293b;border:1px solid rgba(16,185,129,0.3);border-radius:0.75rem;padding:0.875rem 1.5rem;font-size:0.875rem;color:white;transition:transform 0.3s;z-index:999;display:flex;align-items:center;gap:0.5rem;pointer-events:none;"></div>
  </div>
</section>

<script>
function showToast(msg, ok) {
  const t = document.getElementById('toast');
  t.innerHTML = '<i class="fas ' + (ok?'fa-check-circle" style="color:#10b981':'fa-exclamation-circle" style="color:#ef4444') + '"></i> ' + msg;
  t.style.transform = 'translateX(-50%) translateY(0)';
  setTimeout(() => { t.style.transform = 'translateX(-50%) translateY(100px)'; }, 2800);
}

function connectWallet(type) {
  showToast(type === 'metamask' ? 'MetaMask connection requested…' : 'WalletConnect opening…', true);
  setTimeout(() => {
    if(type === 'metamask' && typeof window.ethereum !== 'undefined') {
      window.ethereum.request({method:'eth_requestAccounts'})
        .then(accs => {
          if(accs.length) {
            localStorage.setItem('zntr_wallet', accs[0]);
            showToast('Connected: ' + accs[0].slice(0,6)+'…'+accs[0].slice(-4), true);
            setTimeout(() => location.href='/mypage', 1200);
          }
        }).catch(() => showToast('Connection rejected', false));
    } else {
      showToast('Wallet not detected. Install MetaMask.', false);
    }
  }, 500);
}

function handleLogin(e) {
  e.preventDefault();
  const email = document.getElementById('emailInput').value;
  const pass = document.getElementById('passInput').value;
  if(!email || !pass) return showToast('Please fill in all fields', false);
  showToast('Signing in…', true);
  setTimeout(() => {
    localStorage.setItem('zntr_user', JSON.stringify({email, loginAt: Date.now()}));
    showToast('Welcome back!', true);
    setTimeout(() => location.href='/mypage', 1000);
  }, 900);
}

function toggleRegister() {
  showToast('Registration opens at TGE — Q2 2026', true);
}
</script>`

  return layout('Connect Wallet / Login', body)
}
