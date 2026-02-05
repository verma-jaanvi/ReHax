import { Link } from 'react-router-dom';
import { Heart, Shield, Users, ArrowRight } from 'lucide-react';
import { Button } from '@/app/components/ui/button';

export default function SeniorCarePage() {
  return (
    <div className="w-full">
      <section className="bg-gradient-to-br from-purple-600 to-pink-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Senior Care & Assisted Living Facilities</h1>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto mb-8">
            Accessible, safe, and dignity-focused rehabilitation solutions for elderly care
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
              Learn More <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
