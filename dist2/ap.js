// api/hello.js
import { VercelRequest, VercelResponse } from '@vercel/node'
import path from 'path'
import type { VercelRequest, VercelResponse } from '@vercel/node'

export default function handler(req: VercelRequest, res: VercelResponse) {
  const { name = 'World' } = req.query
  return res.send(path.join(__dirname, 'index.html'))
}
