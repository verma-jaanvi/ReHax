import { Link } from 'react-router-dom';
import { Building, DollarSign, Users, Zap, ArrowRight } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { Card, CardContent } from '@/app/components/ui/card';

export default function ClinicsPage() {
  return (
    <div className="w-full">
      <section className="bg-gradient-to-br from-teal-600 to-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Specialized Rehabilitation Clinics</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Turnkey solutions for standalone rehab clinics—from equipment to branding support
          </p>
          <Link to="/space-planner">
            <Button size="lg" className="bg-white text-teal-600 hover:bg-gray-100">
              Start Planning <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: DollarSign, title: 'Cost-Effective Packages', desc: 'Starting from ₹5 lakhs for basic setups' },
              { icon: Zap, title: 'Quick Setup', desc: '15-day installation and commissioning' },
              { icon: Users, title: 'Staff Training', desc: 'Comprehensive clinical and operational training' },
            ].map((item, idx) => (
              <Card key={idx} className="text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-8 h-8 text-teal-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
