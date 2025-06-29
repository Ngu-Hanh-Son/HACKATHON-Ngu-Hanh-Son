'use client'
import { useState, useEffect } from 'react'

interface Member {
  id: number
  name: string
  image: string
  role: string
  skills: string[]
  availability: string
  experience: string
  matchScore: number
  description?: string // Added for CV-style bio
}

import { UserCircleIcon, XCircleIcon, HeartIcon, StarIcon, ChatBubbleLeftRightIcon, BriefcaseIcon } from '@heroicons/react/24/solid'

export default function FindPalPage() {
  const [members, setMembers] = useState<Member[]>([])
  const [current, setCurrent] = useState(0)
  const [swiped, setSwiped] = useState<{ id: number; action: string }[]>([])
  const [tab, setTab] = useState<'overview' | 'skills' | 'portfolio' | 'reviews'>('overview')

  useEffect(() => {
    fetch('/api/members')
      .then(res => res.json())
      .then(data => {
        // Inject unique descriptions if missing
        const descriptions = [
          "A passionate data scientist who loves collaborating on AI/ML projects and always eager to learn new things.",
          "Creative front-end developer with a knack for building beautiful, user-friendly interfaces and seamless user experiences.",
          "Experienced project manager skilled in agile methodologies, team leadership, and delivering results under tight deadlines.",
          "Full-stack engineer with a strong background in cloud technologies and scalable web applications.",
          "UI/UX designer focused on crafting intuitive, accessible, and visually stunning digital products.",
          "Backend specialist with expertise in databases, APIs, and system architecture for robust applications.",
          "Mobile app developer who enjoys turning ideas into polished, high-performance apps for iOS and Android.",
          "DevOps enthusiast passionate about automation, CI/CD, and cloud infrastructure.",
          "AI researcher with a deep interest in NLP, computer vision, and ethical AI development.",
          "Business analyst who bridges the gap between technical teams and stakeholders for project success."
        ];
        const membersWithDesc = data.map((m: any, i: number) => ({
          ...m,
          description: m.description || descriptions[i % descriptions.length]
        }));
        setMembers(membersWithDesc);
      })
      .catch(() => setMembers([]))
  }, [])

  if (members.length === 0) {
    return <div className="text-center py-20 text-gray-500">Loading members...</div>
  }

  const member = members[current]

  const handleSwipe = (action: string) => {
    setSwiped([...swiped, { id: member.id, action }])
    setCurrent((prev) => prev + 1)
    setTab('overview')
  }

  if (current >= members.length) {
    return (
      <div className="max-w-5xl mx-auto py-8 px-4 text-center">
        <h1 className="text-3xl font-bold mb-6">Find Pal</h1>
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
        <h1 className="text-4xl font-extrabold mb-8 text-gray-900 tracking-tight">Find Pal</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left: Snapshot/Swipe */}
          <div className="flex flex-col items-center">
            <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md mx-auto flex flex-col items-center border border-blue-100">
              <img src={member.image} alt={member.name} className="w-28 h-28 rounded-full mb-4 border-4 border-blue-200 shadow" />
              <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
              <div className="text-blue-600 font-medium mb-1">{member.role}</div>
              <div className="text-gray-500 text-sm mb-2">Skills: {member.skills.join(', ')}</div>
              <div className="flex items-center gap-2 mb-4">
                <StarIcon className="h-5 w-5 text-yellow-400" />
                <span className="text-gray-700 text-sm">Match Score: {member.matchScore}</span>
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
                  onClick={() => handleSwipe('invite')}
                >
                  <HeartIcon className="h-6 w-6 text-yellow-300" />
                  Invite
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
                  <UserCircleIcon className="h-5 w-5" /> Overview
                </button>
                <button
                  className={`flex items-center gap-1 px-3 py-1 rounded-full text-sm font-semibold transition ${tab === 'skills' ? 'bg-blue-100 text-blue-700' : 'text-gray-500 hover:bg-gray-100'}`}
                  onClick={() => setTab('skills')}
                >
                  <BriefcaseIcon className="h-5 w-5" /> Skills
                </button>
                <button
                  className={`flex items-center gap-1 px-3 py-1 rounded-full text-sm font-semibold transition ${tab === 'portfolio' ? 'bg-blue-100 text-blue-700' : 'text-gray-500 hover:bg-gray-100'}`}
                  onClick={() => setTab('portfolio')}
                >
                  <ChatBubbleLeftRightIcon className="h-5 w-5" /> Portfolio
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
                  <h4 className="font-semibold mb-2 text-lg">Profile Snapshot</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li><b>Skills:</b> {member.skills.join(', ')}</li>
                    <li><b>Availability:</b> {member.availability}</li>
                    <li><b>Experience:</b> {member.experience}</li>
                  </ul>
                  <div className="mt-4">
                    <h4 className="font-semibold mb-1">About Member</h4>
                    <p className="text-gray-700 text-sm">Role: {member.role}</p>
                  </div>
                  <div className="mt-4">
                    <h4 className="font-semibold mb-1">Description</h4>
                    <p className="text-gray-700 text-sm whitespace-pre-line">
                      {member.description ||
                        "A passionate and dedicated team player with a strong background in collaborative university projects. Skilled in communication, problem-solving, and always eager to learn new technologies. Looking to join innovative teams and contribute to impactful projects."}
                    </p>
                  </div>
                </div>
              )}
              {tab === 'skills' && (
                <div>
                  <h4 className="font-semibold mb-2 text-lg">Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {member.skills.map((skill, idx) => (
                      <span key={idx} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">{skill}</span>
                    ))}
                  </div>
                </div>
              )}
              {tab === 'portfolio' && (
                <div>
                  <h4 className="font-semibold mb-2 text-lg">Portfolio</h4>
                  <div className="text-gray-500 text-sm">No portfolio projects yet.</div>
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