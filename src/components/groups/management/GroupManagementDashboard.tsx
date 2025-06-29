'use client'

import { useState } from 'react'
import GroupOverview from './GroupOverview'
import GroupFormationProgress from './GroupFormationProgress'
import GroupList from './GroupList'
import GroupSettings from './GroupSettings'

const TABS = [
  { id: 'overview', label: 'Overview' },
  { id: 'formation', label: 'Formation Progress' },
  { id: 'groups', label: 'Groups' },
  { id: 'settings', label: 'Settings' }
]

export default function GroupManagementDashboard() {
  const [activeTab, setActiveTab] = useState('overview')

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return <GroupOverview />
      case 'formation':
        return <GroupFormationProgress />
      case 'groups':
        return <GroupList />
      case 'settings':
        return <GroupSettings />
      default:
        return null
    }
  }

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100">
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8 px-6" aria-label="Group Management">
          {TABS.map((tab) => (
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