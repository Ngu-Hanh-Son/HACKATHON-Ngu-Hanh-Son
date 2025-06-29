'use client'
import { useState, useEffect } from 'react'
import ProjectCard from './ProjectCard'

interface Project {
  id: number
  name: string
  field: string
  description: string
  requiredSkills: string[]
  teamSize: number
  status: string
}

export default function ProjectList() {
  const [projects, setProjects] = useState<Project[]>([])

  useEffect(() => {
    fetch('/api/projects')
      .then(res => res.json())
      .then(data => setProjects(data))
      .catch(() => setProjects([]))
  }, [])

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-gray-900">Available Projects</h2>
        <select className="rounded-md border border-gray-300 py-2 px-3">
          <option>Most Recent</option>
          <option>Field</option>
          <option>Team Size</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => {
          const mappedProject = {
            id: project.id,
            title: project.name,
            description: project.description,
            skills: project.requiredSkills,
            teamSize: project.teamSize ? project.teamSize.toString() : '4-6',
            deadline: '2025-12-31',
            openPositions: ['Member', 'Collaborator'],
            image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80'
          }
          return <ProjectCard key={mappedProject.id} project={mappedProject} />
        })}
      </div>
    </div>
  )
}