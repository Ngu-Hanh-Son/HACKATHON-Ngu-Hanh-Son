'use client'

import { useState } from 'react'

export default function ProjectFilters() {
  const [filters, setFilters] = useState({
    subjects: [],
    skills: [],
    teamSize: [2, 8],
    duration: 'any',
  })

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Filters</h2>
      
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Subject Areas
          </label>
          <select className="w-full rounded-md border border-gray-300 py-2 px-3">
            <option>All Subjects</option>
            <option>Computer Science</option>
            <option>Business</option>
            <option>Engineering</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Required Skills
          </label>
          <div className="space-y-2">
            {['Programming', 'Design', 'Research', 'Analytics'].map((skill) => (
              <label key={skill} className="flex items-center">
                <input
                  type="checkbox"
                  className="rounded border-gray-300 text-blue-600"
                />
                <span className="ml-2 text-gray-700">{skill}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Team Size
          </label>
          <div className="flex items-center space-x-4">
            <input
              type="number"
              min="2"
              max="8"
              className="w-20 rounded-md border border-gray-300 py-1 px-2"
              placeholder="Min"
            />
            <span className="text-gray-500">to</span>
            <input
              type="number"
              min="2"
              max="8"
              className="w-20 rounded-md border border-gray-300 py-1 px-2"
              placeholder="Max"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Project Duration
          </label>
          <select className="w-full rounded-md border border-gray-300 py-2 px-3">
            <option value="any">Any Duration</option>
            <option value="short">1-2 weeks</option>
            <option value="medium">3-4 weeks</option>
            <option value="long">5+ weeks</option>
          </select>
        </div>

        <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">
          Apply Filters
        </button>
      </div>
    </div>
  )
}