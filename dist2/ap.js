// api/hello.js
import { VercelRequest, VercelResponse } from '@vercel/node'
import fs from 'fs'
import path from 'path'

export default function handler(req: VercelRequest, res: VercelResponse) {
  const { name = 'World' } = req.query
  const filePath = path.join(process.cwd(), 'public', 'index.html')
  const fileContents = fs.readFileSync(filePath, 'utf8')

  res.setHeader('Content-Type', 'text/html')
  res.send(fileContents.replace('World', name))
}
