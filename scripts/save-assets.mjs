import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.join(__dirname, '..')
const publicDir = path.join(root, 'public')
fs.mkdirSync(publicDir, { recursive: true })

const payloadPath = process.argv[2]
if (!payloadPath) {
  console.error('Usage: node save-assets.mjs <payload.json>')
  process.exit(1)
}

const payload = JSON.parse(fs.readFileSync(payloadPath, 'utf8'))

if (payload.logoWhite) {
  const b64 = payload.logoWhite.replace(/^data:image\/png;base64,/, '')
  const out = path.join(publicDir, 'mck-logo-white.png')
  fs.writeFileSync(out, Buffer.from(b64, 'base64'))
  console.log('wrote', out, fs.statSync(out).size)
}

if (payload.fontB64) {
  const out = path.join(publicDir, 'mck-icons.ttf')
  fs.writeFileSync(out, Buffer.from(payload.fontB64, 'base64'))
  console.log('wrote', out, fs.statSync(out).size)
}
