import { FileText, Download, Upload, ChevronDown, ChevronUp } from 'lucide-react';
const costData = [
  {
    label: 'This Month',
    value: 3200,
    change: -8,
  },
  {
    label: 'Last Month',
    value: 3480,
    change: 0,
  },
  {
    label: 'Forecast',
    value: 3100,
    change: -3,
  },
];
export default function CostInsights() {
  return (
    <section>
      <div className="flex items-center gap-2 mb-4">
        <FileText size={24} className="text-blue-600" />
        <h2 className="text-xl font-bold">Cost Insights</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {costData.map((item) => (
          <div
            key={item.label}
            className="bg-white rounded-lg shadow p-5 flex flex-col items-center"
          >
            <div className="flex items-center gap-2 mb-2">
              {item.change < 0 ? (
                <ChevronDown size={20} className="text-green-600" />
              ) : item.change > 0 ? (
                <ChevronUp size={20} className="text-red-600" />
              ) : (
                <ChevronRight size={20} className="text-gray-400" />
              )}
              <span className="text-2xl font-bold">${item.value}</span>
            </div>
            <div className="text-gray-500">{item.label}</div>
            <div className="mt-1 text-sm">
              {item.change < 0 ? (
                <span className="text-green-700">{item.change}% lower</span>
              ) : item.change > 0 ? (
                <span className="text-red-700">{item.change}% higher</span>
              ) : (
                <span className="text-gray-500">No change</span>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-end mt-4 gap-2">
        <button className="flex items-center gap-1 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
          <Download size={18} />
          Export CSV
        </button>
        <button className="flex items-center gap-1 px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition">
          <Upload size={18} />
          Upload Bill
        </button>
      </div>
    </section>
  );
}