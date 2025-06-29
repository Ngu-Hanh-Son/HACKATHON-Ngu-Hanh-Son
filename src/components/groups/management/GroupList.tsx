import React, { useEffect, useState } from "react";

interface Group {
  id: number
  name: string
  field: string
  description: string
  members: string[]
  project: string
  status: string
}

export default function GroupList() {
  const [groups, setGroups] = useState<Group[]>([])

  useEffect(() => {
    fetch('/api/groups')
      .then(res => res.json())
      .then(data => setGroups(data))
      .catch(() => setGroups([]))
  }, [])

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Groups</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {groups.map(group => (
          <div key={group.id} className="bg-white border rounded-lg p-4 shadow">
            <div className="flex items-center justify-between mb-2">
              <span className="font-semibold text-blue-700">{group.name}</span>
              <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">{group.status}</span>
            </div>
            <div className="text-sm text-gray-600 mb-2">{group.field} • {group.project}</div>
            <div className="mb-2">{group.description}</div>
            <div className="text-xs text-gray-500">Members: {group.members.join(', ')}</div>
          </div>
        ))}
      </div>
    </div>
  );
}