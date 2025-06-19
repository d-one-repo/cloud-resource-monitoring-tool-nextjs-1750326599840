import { Home, Settings } from 'lucide-react';
import Header from '../components/Header';
import ResourceOverview from '../components/ResourceOverview';
import CostInsights from '../components/CostInsights';
import OptimizationActions from '../components/OptimizationActions';
export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-6">
        <div className="flex flex-col gap-8">
          <ResourceOverview />
          <CostInsights />
          <OptimizationActions />
        </div>
      </main>
      <footer className="border-t mt-8 py-4 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Springer Nature Surgery. All rights reserved.
      </footer>
    </div>
  );
}