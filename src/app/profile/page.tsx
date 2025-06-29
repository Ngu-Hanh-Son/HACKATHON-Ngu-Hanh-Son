'use client'

import { useState } from 'react'
import ProfileHeader from '@/components/profile/ProfileHeader'
import ProfileTabs from '@/components/profile/ProfileTabs'
import PersonalInfo from '@/components/profile/PersonalInfo'
import SkillsSection from '@/components/profile/SkillsSection'
import ExperienceSection from '@/components/profile/ExperienceSection'
import PreferencesSection from '@/components/profile/PreferencesSection'

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState('personal')

  return (
    <div className="min-h-screen bg-gray-50">
      <ProfileHeader />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-xl shadow-sm border">
          <ProfileTabs activeTab={activeTab} setActiveTab={setActiveTab} />
          
          <div className="p-6">
            {activeTab === 'personal' && <PersonalInfo />}
            {activeTab === 'skills' && <SkillsSection />}
            {activeTab === 'experience' && <ExperienceSection />}
            {activeTab === 'preferences' && <PreferencesSection />}
          </div>
        </div>
      </div>
    </div>
  )
}