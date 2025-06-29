import type { NextApiRequest, NextApiResponse } from 'next'

// Generate 200 diverse mock members
const roles = [
  'Frontend Developer', 'Backend Developer', 'Full Stack Developer', 'UI/UX Designer',
  'Data Scientist', 'Mobile Developer', 'DevOps Engineer', 'QA Engineer',
  'Product Manager', 'Marketing Specialist', 'Business Analyst', 'Content Creator',
  'Sales Executive', 'HR Specialist', 'Finance Analyst', 'Healthcare Consultant',
  'Education Expert', 'Legal Advisor', 'Mechanical Engineer', 'Civil Engineer'
]
const skills = [
  'React', 'TypeScript', 'Node.js', 'Python', 'UI/UX', 'Figma', 'Django', 'PostgreSQL',
  'Flutter', 'Dart', 'AWS', 'Docker', 'CI/CD', 'Machine Learning', 'Pandas', 'Kotlin',
  'Swift', 'Agile', 'Scrum', 'Roadmapping', 'Marketing', 'SEO', 'Copywriting', 'Sales',
  'Negotiation', 'Recruitment', 'Payroll', 'Accounting', 'Healthcare', 'Teaching',
  'Legal Research', 'AutoCAD', 'Project Management', 'Data Analysis'
]
const availabilities = [
  'Weekday Mornings', 'Weekday Afternoons', 'Weekday Evenings', 'Weekends'
]
const experiences = ['Beginner', 'Intermediate', 'Advanced', 'Expert']

function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}

function getRandomSkills() {
  const n = Math.floor(Math.random() * 3) + 2
  const shuffled = skills.sort(() => 0.5 - Math.random())
  return shuffled.slice(0, n)
}

const members = Array.from({ length: 200 }, (_, i) => {
  const gender = i % 2 === 0 ? 'men' : 'women'
  const imgNum = (i % 50) + 1
  return {
    id: i + 1,
    name: `User ${i + 1}`,
    role: getRandom(roles),
    image: `https://randomuser.me/api/portraits/${gender}/${imgNum}.jpg`,
    skills: getRandomSkills(),
    availability: getRandom(availabilities),
    experience: getRandom(experiences),
    matchScore: Math.floor(Math.random() * 51) + 50 // 50-100
  }
})

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    return res.status(200).json(members)
  }
  if (req.method === 'POST') {
    const newMember = { ...req.body, id: members.length + 1 }
    members.push(newMember)
    return res.status(201).json(newMember)
  }
  return res.status(405).json({ error: 'Method not allowed' })
}