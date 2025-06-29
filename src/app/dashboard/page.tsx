import React from 'react';

// Placeholder components for each Dashboard section
import { UserGroupIcon, SparklesIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/solid'

function KpiCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
      <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl shadow-lg p-6 flex flex-col items-center border border-blue-100">
        <UserGroupIcon className="h-8 w-8 text-blue-500 mb-2" />
        <span className="text-3xl font-extrabold text-blue-700">3</span>
        <span className="text-gray-700 font-medium mt-1">Projects Joined</span>
      </div>
      <div className="bg-gradient-to-br from-indigo-50 to-white rounded-2xl shadow-lg p-6 flex flex-col items-center border border-indigo-100">
        <SparklesIcon className="h-8 w-8 text-indigo-500 mb-2" />
        <span className="text-3xl font-extrabold text-indigo-700">5</span>
        <span className="text-gray-700 font-medium mt-1">Matches</span>
      </div>
      <div className="bg-gradient-to-br from-pink-50 to-white rounded-2xl shadow-lg p-6 flex flex-col items-center border border-pink-100">
        <ChatBubbleLeftRightIcon className="h-8 w-8 text-pink-500 mb-2" />
        <span className="text-3xl font-extrabold text-pink-700">12</span>
        <span className="text-gray-700 font-medium mt-1">Messages</span>
      </div>
    </div>
  );
}

import { CheckCircleIcon } from '@heroicons/react/24/solid'

function ActionItems() {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-3 text-gray-900 flex items-center gap-2">
        <CheckCircleIcon className="h-6 w-6 text-green-500" />
        Action Items
      </h2>
      <ul className="space-y-2">
        <li className="flex items-center gap-2">
          <span className="inline-block h-2 w-2 rounded-full bg-blue-500"></span>
          <span className="text-gray-700">Complete your profile</span>
        </li>
        <li className="flex items-center gap-2">
          <span className="inline-block h-2 w-2 rounded-full bg-indigo-500"></span>
          <span className="text-gray-700">Join a new project</span>
        </li>
        <li className="flex items-center gap-2">
          <span className="inline-block h-2 w-2 rounded-full bg-pink-500"></span>
          <span className="text-gray-700">Check your messages</span>
        </li>
      </ul>
    </div>
  );
}

import { UserCircleIcon } from '@heroicons/react/24/solid'

function RecommendedProjectsCarousel() {
  // Placeholder carousel
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-3 text-gray-900">Recommended Projects</h2>
      <div className="flex space-x-6 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-blue-200">
        {[1, 2, 3].map((id) => (
          <div
            key={id}
            className="min-w-[280px] bg-white rounded-2xl shadow-lg p-5 flex-shrink-0 border border-blue-100 hover:shadow-xl transition-shadow duration-200"
          >
            <div className="flex items-center gap-3 mb-2">
              <UserCircleIcon className="h-8 w-8 text-blue-400" />
              <h3 className="font-bold text-lg">Project {id}</h3>
            </div>
            <p className="text-gray-600 text-sm mb-3">Short project description goes here.</p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition">View</button>
          </div>
        ))}
      </div>
    </div>
  );
}

function RecentProjectsList() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-3 text-gray-900">Recent Projects</h2>
      <ul className="divide-y divide-gray-100">
        {[1, 2, 3].map((id) => (
          <li key={id} className="py-4 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <UserCircleIcon className="h-7 w-7 text-indigo-400" />
              <div>
                <span className="font-semibold text-gray-800">Project {id}</span>
                <span className="ml-2 text-gray-500 text-sm">Joined 2 days ago</span>
              </div>
            </div>
            <button className="text-indigo-600 font-medium hover:underline">Details</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function DashboardPage() {
  return (
    <div className="min-h-[90vh] bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="max-w-5xl mx-auto py-10 px-4">
        <h1 className="text-4xl font-extrabold mb-8 text-gray-900 tracking-tight">Dashboard</h1>
        <KpiCards />
        <ActionItems />
        <RecommendedProjectsCarousel />
        <RecentProjectsList />
      </div>
    </div>
  );
}