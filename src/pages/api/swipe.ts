import type { NextApiRequest, NextApiResponse } from 'next'

// In-memory store for demo purposes
let swipes: any[] = []

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { userId, memberId, action } = req.body
    if (!userId || !memberId || !['like', 'pass'].includes(action)) {
      return res.status(400).json({ error: 'Invalid payload' })
    }
    swipes.push({ userId, memberId, action, timestamp: Date.now() })
    return res.status(200).json({ success: true })
  }
  if (req.method === 'GET') {
    // For testing: return all swipes
    return res.status(200).json(swipes)
  }
  return res.status(405).json({ error: 'Method not allowed' })
}