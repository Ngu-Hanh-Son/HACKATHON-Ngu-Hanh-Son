import type { NextApiRequest, NextApiResponse } from 'next'

const fields = [
  'IT', 'Marketing', 'Healthcare', 'Education', 'Engineering', 'Finance', 'Design',
  'Legal', 'Sales', 'Content', 'HR', 'Logistics', 'Construction', 'Environment',
  'Media', 'Automotive', 'Agriculture', 'Tourism', 'Retail', 'Nonprofit'
]

const projectNames = [
  'AI Research Platform', 'Green Marketing Campaign', 'Telemedicine App', 'Online Learning Hub',
  'Smart Home Automation', 'Fintech Analytics', 'Brand Identity Redesign', 'Legal Case Tracker',
  'Sales CRM Booster', 'Content Strategy Suite', 'HR Onboarding Portal', 'Supply Chain Optimizer',
  'Smart Building Monitor', 'Eco-Friendly Initiative', 'Digital Newsroom', 'Connected Car System',
  'AgriTech Dashboard', 'Travel Experience App', 'Retail Analytics', 'Charity Management Tool'
]

const skills = [
  'React', 'Python', 'Marketing', 'Healthcare', 'Teaching', 'AutoCAD', 'Finance', 'UI/UX',
  'Legal Research', 'Sales', 'Copywriting', 'Recruitment', 'Logistics', 'Sustainability',
  'Journalism', 'IoT', 'Agronomy', 'Travel Planning', 'Retail Analysis', 'Fundraising'
]

function getRandom(arr, n = 3) {
  const shuffled = arr.slice().sort(() => 0.5 - Math.random())
  return shuffled.slice(0, n)
}

const projects = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  name: projectNames[i],
  field: fields[i],
  description: `This is a ${fields[i]} project called "${projectNames[i]}". It aims to innovate in the ${fields[i]} sector.`,
  requiredSkills: getRandom(skills, Math.floor(Math.random() * 3) + 2),
  teamSize: Math.floor(Math.random() * 5) + 3,
  status: Math.random() > 0.5 ? 'Open' : 'In Progress'
}))

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    return res.status(200).json(projects)
  }
  if (req.method === 'POST') {
    const newProject = { ...req.body, id: projects.length + 1 }
    projects.push(newProject)
    return res.status(201).json(newProject)
  }
  return res.status(405).json({ error: 'Method not allowed' })
}