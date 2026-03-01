module.exports = {
  apps: [{
    name: 'zentarai',
    script: 'npx',
    args: 'wrangler pages dev dist --ip 0.0.0.0 --port 3002',
    cwd: '/home/user/zentarai',
    env: { NODE_ENV: 'development' },
    watch: false,
    instances: 1,
    exec_mode: 'fork'
  }]
}
