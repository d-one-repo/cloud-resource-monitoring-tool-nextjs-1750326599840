import { Check, X, Edit, Trash2, Save, MoreHorizontal } from 'lucide-react';
import { useState } from 'react';
const initialActions = [
  {
    id: 1,
    description: 'Terminate unused compute instances',
    impact: 'High',
    status: 'Pending',
  },
  {
    id: 2,
    description: 'Downsize over-provisioned storage',
    impact: 'Medium',
    status: 'Pending',
  },
  {
    id: 3,
    description: 'Enable auto-scaling for databases',
    impact: 'Medium',
    status: 'Completed',
  },
];
export default function OptimizationActions() {
  const [actions, setActions] = useState(initialActions);
  function handleComplete(id) {
    setActions((prev) =>
      prev.map((a) =>
        a.id === id ? { ...a, status: 'Completed' } : a
      )
    );
  }
  function handleDelete(id) {
    setActions((prev) => prev.filter((a) => a.id !== id));
  }
  return (
    <section>
      <div className="flex items-center gap-2 mb-4">
        <Edit size={24} className="text-blue-600" />
        <h2 className="text-xl font-bold">Optimization Actions</h2>
      </div>
      <div className="bg-white rounded-lg shadow overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="bg-gray-100 text-gray-700">
              <th className="px-4 py-2 text-left">Action</th>
              <th className="px-4 py-2 text-left">Impact</th>
              <th className="px-4 py-2 text-left">Status</th>
              <th className="px-4 py-2 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {actions.map((action) => (
              <tr key={action.id} className="border-b last:border-b-0">
                <td className="px-4 py-3">{action.description}</td>
                <td className="px-4 py-3">
                  <span
                    className={`px-2 py-0.5 rounded font-medium ${action.impact === 'High'
                      ? 'bg-red-100 text-red-700'
                      : 'bg-yellow-100 text-yellow-700'
                      }`}
                  >
                    {action.impact}
                  </span>
                </td>
                <td className="px-4 py-3">
                  {action.status === 'Completed' ? (
                    <span className="flex items-center gap-1 text-green-700">
                      <Check size={16} /> Completed
                    </span>
                  ) : (
                    <span className="flex items-center gap-1 text-gray-600">
                      <X size={16} /> Pending
                    </span>
                  )}
                </td>
                <td className="px-4 py-3 text-center">
                  <div className="flex items-center gap-2 justify-center">
                    {action.status !== 'Completed' && (
                      <button
                        className="p-1 rounded hover:bg-green-100"
                        title="Mark as Completed"
                        onClick={() => handleComplete(action.id)}
                      >
                        <Check size={18} className="text-green-700" />
                      </button>
                    )}
                    <button
                      className="p-1 rounded hover:bg-red-100"
                      title="Delete"
                      onClick={() => handleDelete(action.id)}
                    >
                      <Trash2 size={18} className="text-red-600" />
                    </button>
                    <button
                      className="p-1 rounded hover:bg-gray-100"
                      title="More"
                    >
                      <MoreHorizontal size={18} className="text-gray-500" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
            {actions.length === 0 && (
              <tr>
                <td colSpan={4} className="px-4 py-6 text-center text-gray-400">
                  No optimization actions available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}