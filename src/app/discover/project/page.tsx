'use client'
import { useState, useEffect } from 'react'

interface Project {
  id: number
  name: string
  image?: string
  field: string
  requiredSkills: string[]
  teamSize: number
  status: string
  description: string
}

import { FolderIcon, XCircleIcon, HeartIcon, UsersIcon, StarIcon, BriefcaseIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/solid'

export default function FindProjectPage() {
  const [projects, setProjects] = useState<Project[]>([])
  const [current, setCurrent] = useState(0)
  const [swiped, setSwiped] = useState<{ id: number; action: string }[]>([])
  const [tab, setTab] = useState<'overview' | 'skills' | 'team' | 'reviews'>('overview')

  useEffect(() => {
    fetch('/api/projects')
      .then(res => res.json())
      .then(data => setProjects(data))
      .catch(() => setProjects([]))
  }, [])

  if (projects.length === 0) {
    return <div className="text-center py-20 text-gray-500">Loading projects...</div>
  }

  const project = projects[current]

  const handleSwipe = (action: string) => {
    setSwiped([...swiped, { id: project.id, action }])
    setCurrent((prev) => prev + 1)
    setTab('overview')
  }

  if (current >= projects.length) {
    return (
      <div className="max-w-5xl mx-auto py-8 px-4 text-center">
        <h1 className="text-3xl font-bold mb-6">Find Project</h1>
        <div className="bg-white rounded-2xl shadow-lg p-10">
          <div className="text-green-600 font-semibold mb-2">You have reviewed all recommendations!</div>
          <div className="text-gray-500">Swiped: {swiped.length}</div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-[90vh] bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="max-w-6xl mx-auto py-10 px-4">
        <h1 className="text-4xl font-extrabold mb-8 text-gray-900 tracking-tight">Find Project</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left: Snapshot/Swipe */}
          <div className="flex flex-col items-center">
            <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md mx-auto flex flex-col items-center border border-blue-100">
              <img
                src={project.image || 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80'}
                alt={project.name}
                className="w-28 h-28 rounded-xl mb-4 object-cover border-4 border-blue-200 shadow"
              />
              <h3 className="text-2xl font-bold mb-1">{project.name}</h3>
              <div className="text-blue-600 font-medium mb-1 flex items-center gap-2">
                <FolderIcon className="h-5 w-5" />
                {project.field}
              </div>
              <div className="text-gray-500 text-sm mb-2 flex items-center gap-2">
                <UsersIcon className="h-5 w-5" />
                Team Size: {project.teamSize}
              </div>
              <div className="flex items-center gap-2 mb-4">
                <StarIcon className="h-5 w-5 text-yellow-400" />
                <span className="text-gray-700 text-sm">Status: {project.status}</span>
              </div>
              <div className="flex space-x-6 mt-2">
                <button
                  className="flex items-center gap-2 bg-gray-100 text-gray-600 px-6 py-2 rounded-lg text-lg font-semibold shadow hover:bg-gray-200 transition"
                  onClick={() => handleSwipe('skip')}
                >
                  <XCircleIcon className="h-6 w-6 text-red-400" />
                  Skip
                </button>
                <button
                  className="flex items-center gap-2 bg-blue-600 text-white px-6 py-2 rounded-lg text-lg font-semibold shadow hover:bg-blue-700 transition"
                  onClick={() => handleSwipe('apply')}
                >
                  <HeartIcon className="h-6 w-6 text-yellow-300" />
                  Apply
                </button>
              </div>
            </div>
          </div>
          {/* Right: Deep Dive */}
          <div>
            <div className="bg-white rounded-2xl shadow-xl p-6 mb-4 border border-blue-100">
              <div className="flex gap-4 border-b pb-2 mb-4">
                <button
                  className={`flex items-center gap-1 px-3 py-1 rounded-full text-sm font-semibold transition ${tab === 'overview' ? 'bg-blue-100 text-blue-700' : 'text-gray-500 hover:bg-gray-100'}`}
                  onClick={() => setTab('overview')}
                >
                  <FolderIcon className="h-5 w-5" /> Overview
                </button>
                <button
                  className={`flex items-center gap-1 px-3 py-1 rounded-full text-sm font-semibold transition ${tab === 'skills' ? 'bg-blue-100 text-blue-700' : 'text-gray-500 hover:bg-gray-100'}`}
                  onClick={() => setTab('skills')}
                >
                  <BriefcaseIcon className="h-5 w-5" /> Skills Required
                </button>
                <button
                  className={`flex items-center gap-1 px-3 py-1 rounded-full text-sm font-semibold transition ${tab === 'team' ? 'bg-blue-100 text-blue-700' : 'text-gray-500 hover:bg-gray-100'}`}
                  onClick={() => setTab('team')}
                >
                  <UsersIcon className="h-5 w-5" /> Team
                </button>
                <button
                  className={`flex items-center gap-1 px-3 py-1 rounded-full text-sm font-semibold transition ${tab === 'reviews' ? 'bg-blue-100 text-blue-700' : 'text-gray-500 hover:bg-gray-100'}`}
                  onClick={() => setTab('reviews')}
                >
                  <StarIcon className="h-5 w-5" /> Reviews
                </button>
              </div>
              {tab === 'overview' && (
                <div>
                  <h4 className="font-semibold mb-2 text-lg">Project Overview</h4>
                  <p className="text-gray-700 text-sm whitespace-pre-line">{project.description}</p>
                </div>
              )}
              {tab === 'skills' && (
                <div>
                  <h4 className="font-semibold mb-2 text-lg">Skills Required</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.requiredSkills.map((skill, idx) => (
                      <span key={idx} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">{skill}</span>
                    ))}
                  </div>
                </div>
              )}
              {tab === 'team' && (
                <div>
                  <h4 className="font-semibold mb-2 text-lg">Team</h4>
                  <div className="text-gray-500 text-sm">Team details coming soon.</div>
                </div>
              )}
              {tab === 'reviews' && (
                <div>
                  <h4 className="font-semibold mb-2 text-lg">Reviews</h4>
                  <div className="text-gray-500 text-sm">No reviews yet.</div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}