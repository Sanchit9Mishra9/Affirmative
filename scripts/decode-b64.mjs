import fs from 'fs'
import path from 'path'

const logPath = process.argv[2]
const outPath = process.argv[3]
const j = JSON.parse(fs.readFileSync(logPath, 'utf8'))
const b64 = j.result?.value ?? j.value
if (typeof b64 !== 'string') {
  console.error('Unexpected payload', Object.keys(j))
  process.exit(1)
}
fs.mkdirSync(path.dirname(outPath), { recursive: true })
fs.writeFileSync(outPath, Buffer.from(b64, 'base64'))
console.log('wrote', outPath, fs.statSync(outPath).size)
