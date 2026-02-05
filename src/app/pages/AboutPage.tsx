import { motion } from 'motion/react';
import { Award, Target, Heart, Users, TrendingUp, Shield } from 'lucide-react';
import { Card, CardContent } from '@/app/components/ui/card';

export default function AboutPage() {
  const values = [
    { icon: Heart, title: 'Patient-First', desc: 'Every decision is guided by patient outcomes' },
    { icon: Shield, title: 'Quality Certified', desc: 'ISO 13485 and all regulatory compliances' },
    { icon: Users, title: 'Partnership Approach', desc: 'We succeed when our clients succeed' },
    { icon: Target, title: 'Innovation-Driven', desc: 'Constantly improving our solutions' },
  ];

  const timeline = [
    { year: '2010', event: 'Started as equipment importer' },
    { year: '2015', event: 'Expanded to space planning services' },
    { year: '2020', event: 'Launched 3D visualization platform' },
    { year: '2024', event: '500+ installations across India' },
  ];

  return (
    <div className="w-full">
      <section className="bg-gradient-to-br from-blue-600 to-teal-600 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">
            From Product Supplier to Complete Solution Provider
          </h1>
          <p className="text-xl text-blue-100">
            Our journey of transforming rehabilitation space setup in India
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Evolution</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {timeline.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold">
                  {item.year}
                </div>
                <p className="text-gray-700 font-medium">{item.event}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {values.map((value, idx) => (
              <Card key={idx} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
