import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  Building2, Users, TrendingUp, CheckCircle, ArrowRight,
  Activity, Heart, Brain, Zap
} from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { Card, CardContent } from '@/app/components/ui/card';
import { Badge } from '@/app/components/ui/badge';

export default function HospitalsPage() {
  const challenges = [
    'Managing diverse patient populations across specialties',
    'Optimizing space utilization in constrained hospital environments',
    'Meeting accreditation standards (NABH, JCI)',
    'Coordinating between multiple departments and vendors',
    'Ensuring equipment interoperability and data integration',
  ];

  const solutions = [
    {
      icon: Activity,
      title: 'Multi-Specialty Setup',
      description: 'Complete rehab departments covering ortho, neuro, cardiac, and pediatric rehabilitation under one roof.',
    },
    {
      icon: Brain,
      title: 'Integrated Systems',
      description: 'EMR-connected equipment for seamless patient data flow and automated reporting.',
    },
    {
      icon: TrendingUp,
      title: 'Scalable Design',
      description: 'Modular solutions that grow with your hospital\'s expanding patient volume.',
    },
    {
      icon: Zap,
      title: 'Compliance Ready',
      description: 'All equipment and layouts meet NABH, JCI, and IS healthcare standards.',
    },
  ];

  const caseStudy = {
    hospital: 'Apollo Multispecialty Hospital, Hyderabad',
    area: '3,500 sq ft',
    investment: '₹85 lakhs',
    roi: '18-month payback period',
    impact: [
      '150+ patients/day capacity',
      '40% increase in patient throughput',
      'NABH accreditation achieved',
      '25% reduction in equipment downtime',
    ],
  };

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <Badge className="mb-4 bg-white/20 text-white border-white/30">
                For Multi-Specialty Hospitals
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Complete Rehabilitation Departments for Modern Hospitals
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                From 200-bed community hospitals to 1000+ bed tertiary care centers—we design and deliver 
                end-to-end rehab solutions that enhance patient outcomes and operational efficiency.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/space-planner">
                  <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100">
                    Plan Your Rehab Department
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10">
                    Schedule Site Visit
                  </Button>
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1645026675464-a41ada8ac025?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3NwaXRhbCUyMGludGVyaW9yJTIwZGVzaWdufGVufDF8fHx8MTc2OTM0MzA1OHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Hospital interior"
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Challenges */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Unique Challenges for Hospital Administrators
            </h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {challenges.map((challenge, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-start p-4 bg-red-50 border-l-4 border-red-600 rounded-r-lg"
              >
                <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-0.5">
                  <span className="text-white text-sm font-bold">{idx + 1}</span>
                </div>
                <p className="text-gray-700">{challenge}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Hospital-Specific Solutions
            </h2>
            <p className="text-xl text-gray-600">
              Tailored for the complexity of multi-specialty care
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {solutions.map((solution, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-shadow border-2 border-blue-100">
                  <CardContent className="p-8">
                    <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center mb-4">
                      <solution.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-3">{solution.title}</h3>
                    <p className="text-gray-600 text-lg leading-relaxed">{solution.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-green-100 text-green-700">Success Story</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Case Study: {caseStudy.hospital}
            </h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="bg-gradient-to-br from-blue-600 to-teal-600 text-white">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Project Overview</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-blue-100 mb-1">Facility Size</p>
                    <p className="text-2xl font-bold">{caseStudy.area}</p>
                  </div>
                  <div>
                    <p className="text-blue-100 mb-1">Total Investment</p>
                    <p className="text-2xl font-bold">{caseStudy.investment}</p>
                  </div>
                  <div>
                    <p className="text-blue-100 mb-1">ROI Timeline</p>
                    <p className="text-2xl font-bold">{caseStudy.roi}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Business Impact</h3>
              <div className="space-y-4">
                {caseStudy.impact.map((item, idx) => (
                  <div key={idx} className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                    <p className="text-lg text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-6 bg-blue-50 rounded-lg">
                <p className="text-gray-700 italic">
                  "RehabSpace transformed our physiotherapy department from an afterthought to a 
                  revenue-generating center of excellence. The integrated approach saved us 6 months 
                  of implementation time."
                </p>
                <p className="text-sm text-gray-600 mt-3">
                  — Dr. Sunita Rao, COO, Apollo Hyderabad
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-teal-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Upgrade Your Hospital's Rehab Department?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Schedule a free consultation with our hospital solutions team
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              Book Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}