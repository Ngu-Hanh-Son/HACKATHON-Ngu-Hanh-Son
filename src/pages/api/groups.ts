import type { NextApiRequest, NextApiResponse } from 'next'

const groups = [
  {
    id: 1,
    name: 'AI Innovators',
    field: 'IT',
    description: 'A team focused on building AI-powered solutions for healthcare.',
    members: ['Sarah Chen', 'David Kim', 'Anna Müller'],
    project: 'AI Research Platform',
    status: 'Active'
  },
  {
    id: 2,
    name: 'Green Marketers',
    field: 'Marketing',
    description: 'Promoting sustainable products and campaigns.',
    members: ['Michael Park', 'Sophie Dubois'],
    project: 'Green Marketing Campaign',
    status: 'Active'
  },
  {
    id: 3,
    name: 'EduTech Pioneers',
    field: 'Education',
    description: 'Innovating online learning experiences.',
    members: ['Emily Johnson', 'Lucas Rossi'],
    project: 'Online Learning Hub',
    status: 'Forming'
  },
  {
    id: 4,
    name: 'Smart Builders',
    field: 'Engineering',
    description: 'Developing smart home and city solutions.',
    members: ['Benjamin Lee', 'William Johnson'],
    project: 'Smart Home Automation',
    status: 'Active'
  },
  {
    id: 5,
    name: 'Health Heroes',
    field: 'Healthcare',
    description: 'Telemedicine and digital health innovation.',
    members: ['Anna Müller', 'Maria Garcia'],
    project: 'Telemedicine App',
    status: 'Forming'
  }
]

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    return res.status(200).json(groups)
  }
  if (req.method === 'POST') {
    const newGroup = { ...req.body, id: groups.length + 1 }
    groups.push(newGroup)
    return res.status(201).json(newGroup)
  }
  return res.status(405).json({ error: 'Method not allowed' })
}