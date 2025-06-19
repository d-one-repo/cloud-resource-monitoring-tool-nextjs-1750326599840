import { Layers, FileText, Folder } from 'lucide-react';
const resources = [
  {
    name: 'Compute Instances',
    icon: Layers,
    usage: 68,
    total: 100,
    status: 'Healthy',
    color: 'bg-green-100 text-green-700',
  },
  {
    name: 'Storage Buckets',
    icon: Folder,
    usage: 42,
    total: 60,
    status: 'Warning',
    color: 'bg-yellow-100 text-yellow-700',
  },
  {
    name: 'Databases',
    icon: FileText,
    usage: 15,
    total: 20,
    status: 'Healthy',
    color: 'bg-green-100 text-green-700',
  },
];
export default function ResourceOverview() {
  return (
    <section>
      <div className="flex items-center gap-2 mb-4">
        <Layers size={24} className="text-blue-600" />
        <h2 className="text-xl font-bold">Resource Overview</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {resources.map((res) => (
          <div
            key={res.name}
            className="bg-white rounded-lg shadow p-5 flex flex-col items-center"
          >
            <div className={`rounded-full p-3 mb-2 ${res.color}`}>
              <res.icon size={28} />
            </div>
            <div className="text-lg font-semibold">{res.name}</div>
            <div className="mt-2 text-2xl font-bold">
              {res.usage} <span className="text-base font-normal text-gray-400">/ {res.total}</span>
            </div>
            <div className="mt-1 text-sm">
              <span
                className={`inline-block px-2 py-0.5 rounded ${res.status === 'Healthy'
                  ? 'bg-green-200 text-green-800'
                  : 'bg-yellow-200 text-yellow-800'
                  }`}
              >
                {res.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}