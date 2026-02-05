import { Link } from 'react-router-dom';
import { Trophy, Zap, TrendingUp, ArrowRight } from 'lucide-react';
import { Button } from '@/app/components/ui/button';

export default function SportsPage() {
  return (
    <div className="w-full">
      <section className="bg-gradient-to-br from-green-600 to-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Sports Rehabilitation & Performance Centers</h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto mb-8">
            High-performance recovery equipment for athletes and sports medicine facilities
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
              Request Demo <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
