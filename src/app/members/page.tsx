'use client'

import { useState } from 'react'
import MemberFilters from '@/components/members/MemberFilters'
import MemberList from '@/components/members/MemberList'
import MemberRecommendations from '@/components/members/MemberRecommendations'
import MemberSearchHeader from '@/components/members/MemberSearchHeader'

export default function MembersPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedFilters, setSelectedFilters] = useState({
    skills: [],
    availability: [],
    experience: [],
    roles: []
  })

  return (
    <div className="min-h-screen bg-gray-50">
      <MemberSearchHeader 
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-1/4">
            <MemberFilters 
              selectedFilters={selectedFilters}
              setSelectedFilters={setSelectedFilters}
            />
          </div>
          
          <div className="w-full lg:w-3/4 space-y-8">
            <MemberRecommendations />
            <MemberList 
              searchQuery={searchQuery}
              selectedFilters={selectedFilters}
            />
          </div>
        </div>
      </div>
    </div>
  )
}