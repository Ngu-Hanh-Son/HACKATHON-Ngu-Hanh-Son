'use client'

import { useState } from 'react'
import ProjectBasicInfo from './ProjectBasicInfo'
import ProjectTeamRequirements from './ProjectTeamRequirements'
import ProjectTimeline from './ProjectTimeline'
import ProjectVisibility from './ProjectVisibility'
import ProjectDocuments from './ProjectDocuments'

const FORM_STEPS = [
  { id: 'basics', title: 'Basic Information' },
  { id: 'team', title: 'Team Requirements' },
  { id: 'timeline', title: 'Timeline & Milestones' },
  { id: 'visibility', title: 'Visibility Settings' },
  { id: 'documents', title: 'Project Documents' }
]

export default function ProjectCreationForm() {
  const [currentStep, setCurrentStep] = useState(0)
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    objectives: [],
    requiredSkills: [],
    teamSize: { min: 2, max: 6 },
    timeline: {
      startDate: '',
      endDate: '',
      milestones: []
    },
    visibility: 'public',
    documents: []
  })

  const updateFormData = (data: Partial<typeof formData>) => {
    setFormData(prev => ({ ...prev, ...data }))
  }

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return <ProjectBasicInfo data={formData} onChange={updateFormData} />
      case 1:
        return <ProjectTeamRequirements data={formData} onChange={updateFormData} />
      case 2:
        return <ProjectTimeline data={formData} onChange={updateFormData} />
      case 3:
        return <ProjectVisibility data={formData} onChange={updateFormData} />
      case 4:
        return <ProjectDocuments data={formData} onChange={updateFormData} />
      default:
        return null
    }
  }

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100">
      <div className="border-b border-gray-200">
        <nav className="flex" aria-label="Progress">
          <ol role="list" className="flex items-center w-full">
            {FORM_STEPS.map((step, index) => (
              <li key={step.id} className={`relative flex-1 ${index !== FORM_STEPS.length - 1 ? 'pr-8' : ''}`}>
                <button
                  onClick={() => setCurrentStep(index)}
                  className={`group flex items-center w-full ${index <= currentStep ? 'hover:opacity-80' : 'opacity-50 cursor-not-allowed'}`}
                  disabled={index > currentStep}
                >
                  <span className="flex items-center px-6 py-4 text-sm font-medium">
                    <span className={`flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full 
                      ${index < currentStep ? 'bg-blue-600' : index === currentStep ? 'bg-blue-600' : 'bg-gray-300'}`}>
                      <span className="text-white">{index + 1}</span>
                    </span>
                    <span className="ml-4 text-sm font-medium text-gray-900">{step.title}</span>
                  </span>
                </button>
                
                {index !== FORM_STEPS.length - 1 && (
                  <div className="absolute top-0 right-0 h-full w-5">
                    <svg
                      className="h-full w-full text-gray-300"
                      viewBox="0 0 22 80"
                      fill="none"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M0 -2L20 40L0 82"
                        vectorEffect="non-scaling-stroke"
                        stroke="currentcolor"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                )}
              </li>
            ))}
          </ol>
        </nav>
      </div>

      <div className="p-8">
        {renderStep()}
        
        <div className="mt-8 flex justify-between">
          <button
            type="button"
            onClick={() => setCurrentStep(prev => Math.max(0, prev - 1))}
            className={`px-6 py-2 text-sm font-medium rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50
              ${currentStep === 0 ? 'invisible' : ''}`}
          >
            Previous
          </button>
          
          <button
            type="button"
            onClick={() => {
              if (currentStep === FORM_STEPS.length - 1) {
                // Handle form submission
                console.log('Form submitted:', formData)
              } else {
                setCurrentStep(prev => Math.min(FORM_STEPS.length - 1, prev + 1))
              }
            }}
            className="px-6 py-2 text-sm font-medium rounded-lg bg-blue-600 text-white hover:bg-blue-700"
          >
            {currentStep === FORM_STEPS.length - 1 ? 'Create Project' : 'Next Step'}
          </button>
        </div>
      </div>
    </div>
  )
}