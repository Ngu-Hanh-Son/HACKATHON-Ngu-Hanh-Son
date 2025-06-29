'use client'

import { useState } from 'react'
import GroupPerformanceMetrics from './GroupPerformanceMetrics'
import GroupSkillGapAnalysis from './GroupSkillGapAnalysis'
import GroupDynamicsChart from './GroupDynamicsChart'
import GroupRecommendations from './GroupRecommendations'

const ANALYTICS_TABS = [
  { id: 'performance', label: 'Performance Metrics' },
  { id: 'skills', label: 'Skill Analysis' },
  { id: 'dynamics', label: 'Team Dynamics' },
  { id: 'recommendations', label: 'AI Recommendations' }
]

export default function GroupAnalyticsDashboard() {
  const [activeTab, setActiveTab] = useState('performance')

  const renderContent = () => {
    switch (activeTab) {
      case 'performance':
        return <GroupPerformanceMetrics />
      case 'skills':
        return <GroupSkillGapAnalysis />
      case 'dynamics':
        return <GroupDynamicsChart />
      case 'recommendations':
        return <GroupRecommendations />
      default:
        return null
    }
  }

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100">
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8 px-6" aria-label="Group Analytics">
          {ANALYTICS_TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`
                whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm
                ${activeTab === tab.id
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }
              `}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      <div className="p-6">
        {renderContent()}
      </div>
    </div>
  )
}