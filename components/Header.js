import { Home, Settings, User } from 'lucide-react';
export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <div className="flex items-center gap-2">
          <Home size={28} className="text-blue-600" />
          <span className="text-2xl font-bold text-blue-700 tracking-tight">
            Cloud Resource Monitoring
          </span>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <User size={20} className="text-gray-500" />
            <span className="font-medium text-gray-700">James Hutton</span>
          </div>
          <Settings size={22} className="text-gray-400 hover:text-blue-600 cursor-pointer" />
        </div>
      </div>
    </header>
  );
}