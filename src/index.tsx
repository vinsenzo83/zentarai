import { Hono } from 'hono'
import { serveStatic } from 'hono/cloudflare-workers'
import { homePage } from './pages/home'
import { loginPage } from './pages/login'
import { dashboardPage } from './pages/dashboard'
import { whitepaperPage } from './pages/whitepaper'
import { vestingPage } from './pages/vesting'
import { legalPage } from './pages/legal'

const app = new Hono()

// Static files
app.use('/static/*', serveStatic({ root: './' }))

// Pages
app.get('/', (c) => c.html(homePage()))
app.get('/login', (c) => c.html(loginPage()))
app.get('/mypage', (c) => c.html(dashboardPage()))
app.get('/vesting', (c) => c.html(vestingPage()))
app.get('/whitepaper', (c) => c.html(whitepaperPage()))
app.get('/privacy', (c) => c.html(legalPage('privacy')))
app.get('/terms', (c) => c.html(legalPage('terms')))
app.get('/disclaimer', (c) => c.html(legalPage('disclaimer')))

// API
app.get('/api/health', (c) => c.json({ status: 'ok', project: 'ZentarAI', version: '1.0.0' }))

export default app
