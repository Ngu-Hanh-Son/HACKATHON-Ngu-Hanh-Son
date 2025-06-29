import { PieChart } from 'lucide-react';

export default function GroupFormationProgress() {
  // Placeholder values
  const progress = 80;
  const steps = [
    { label: 'Define Groups', completed: true },
    { label: 'Assign Members', completed: true },
    { label: 'Review Skills', completed: true },
    { label: 'Finalize Groups', completed: false },
  ];

  return (
    <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm space-y-6">
      <div className="flex items-center mb-4">
        <div className="p-2 bg-green-50 rounded-lg">
          <PieChart className="h-6 w-6 text-green-600" />
        </div>
        <h2 className="ml-4 text-xl font-semibold text-gray-900">Group Formation Progress</h2>
      </div>
      <div>
        <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
          <div
            className="bg-green-600 h-2 rounded-full"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <p className="text-sm text-gray-600 mb-4">{progress}% complete</p>
      </div>
      <ul className="space-y-2">
        {steps.map((step, idx) => (
          <li key={idx} className="flex items-center">
            <span
              className={`inline-block w-3 h-3 rounded-full mr-2 ${
                step.completed ? 'bg-green-500' : 'bg-gray-300'
              }`}
            ></span>
            <span className={step.completed ? 'text-gray-900' : 'text-gray-400'}>
              {step.label}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}