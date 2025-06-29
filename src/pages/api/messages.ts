import type { NextApiRequest, NextApiResponse } from 'next'

const threads = [
  {
    id: 1,
    participants: ['Sarah Chen', 'John Doe'],
    lastMessage: 'Let\'s meet tomorrow to discuss the project!',
    lastTimestamp: '2025-06-29T10:30:00Z',
    messages: [
      {
        id: 1,
        sender: 'Sarah Chen',
        content: 'Hi John, are you available for a quick call?',
        timestamp: '2025-06-29T10:00:00Z'
      },
      {
        id: 2,
        sender: 'John Doe',
        content: 'Sure, let\'s do it!',
        timestamp: '2025-06-29T10:05:00Z'
      },
      {
        id: 3,
        sender: 'Sarah Chen',
        content: 'Let\'s meet tomorrow to discuss the project!',
        timestamp: '2025-06-29T10:30:00Z'
      }
    ]
  },
  {
    id: 2,
    participants: ['Michael Park', 'John Doe'],
    lastMessage: 'I\'ve sent you the documents.',
    lastTimestamp: '2025-06-28T15:20:00Z',
    messages: [
      {
        id: 1,
        sender: 'Michael Park',
        content: 'Hey John, please review the attached files.',
        timestamp: '2025-06-28T15:00:00Z'
      },
      {
        id: 2,
        sender: 'John Doe',
        content: 'Thanks, I\'ll check them out.',
        timestamp: '2025-06-28T15:10:00Z'
      },
      {
        id: 3,
        sender: 'Michael Park',
        content: 'I\'ve sent you the documents.',
        timestamp: '2025-06-28T15:20:00Z'
      }
    ]
  }
]

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    // Return all threads (summary)
    const threadSummaries = threads.map(({ id, participants, lastMessage, lastTimestamp }) => ({
      id, participants, lastMessage, lastTimestamp
    }))
    return res.status(200).json(threadSummaries)
  }
  if (req.method === 'POST') {
    // Add a new thread (not used in demo)
    const newThread = { ...req.body, id: threads.length + 1 }
    threads.push(newThread)
    return res.status(201).json(newThread)
  }
  return res.status(405).json({ error: 'Method not allowed' })
}