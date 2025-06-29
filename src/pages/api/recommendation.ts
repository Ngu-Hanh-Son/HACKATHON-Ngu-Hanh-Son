import type { NextApiRequest, NextApiResponse } from 'next'

// In-memory store for demo purposes
let recommendations: any[] = []

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { userId, memberId, reason } = req.body
    if (!userId || !memberId) {
      return res.status(400).json({ error: 'Invalid payload' })
    }
    recommendations.push({ userId, memberId, reason, timestamp: Date.now() })
    return res.status(200).json({ success: true })
  }
  if (req.method === 'GET') {
    // For testing: return all recommendations
    return res.status(200).json(recommendations)
  }
  return res.status(405).json({ error: 'Method not allowed' })
}