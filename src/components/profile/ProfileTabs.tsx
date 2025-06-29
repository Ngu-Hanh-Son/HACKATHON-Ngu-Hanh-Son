interface ProfileTabsProps {
  activeTab: string
  setActiveTab: (tab: string) => void
}

export default function ProfileTabs({ activeTab, setActiveTab }: ProfileTabsProps) {
  const tabs = [
    { id: 'personal', label: 'Personal Info' },
    { id: 'skills', label: 'Skills & Expertise' },
    { id: 'experience', label: 'Experience' },
    { id: 'preferences', label: 'Preferences' }
  ]

  return (
    <div className="border-b">
      <nav className="flex -mb-px">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`
              w-1/4 py-4 px-1 text-center border-b-2 font-medium text-sm
              ${activeTab === tab.id
                ? 'border-blue-600 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }
            `}
          >
            {tab.label}
          </button>
        ))}
      </nav>
    </div>
  )
}