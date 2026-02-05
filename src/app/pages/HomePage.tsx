import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  ArrowRight, CheckCircle, Building2, Lightbulb, Users, 
  TrendingUp, Award, Target, ShieldCheck, Clock, 
  DollarSign, Heart, Zap, Package
} from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { Card, CardContent } from '@/app/components/ui/card';
import { Badge } from '@/app/components/ui/badge';
import LeadGenForm from '@/app/components/LeadGenForm';

export default function HomePage() {
  const challenges = [
    {
      icon: Package,
      title: 'Fragmented Procurement',
      description: 'Managing multiple vendors for equipment, furniture, and technology increases complexity and costs.',
    },
    {
      icon: Building2,
      title: 'Space Optimization',
      description: 'Inefficient layouts reduce patient throughput and staff productivity.',
    },
    {
      icon: DollarSign,
      title: 'Budget Uncertainty',
      description: 'Hidden costs and unclear pricing make financial planning difficult.',
    },
    {
      icon: Clock,
      title: 'Project Delays',
      description: 'Lack of coordination between vendors causes timeline overruns.',
    },
  ];

  const solutions = [
    {
      icon: Package,
      title: 'Complete Product Range',
      description: 'From therapy tables to automated systems—everything under one roof.',
      link: '/solutions',
    },
    {
      icon: Lightbulb,
      title: '3D Space Planning',
      description: 'Visualize your rehab space before a single rupee is spent.',
      link: '/space-planner',
    },
    {
      icon: Zap,
      title: 'Smart Automation',
      description: 'Integrated technology for scheduling, monitoring, and reporting.',
      link: '/solutions',
    },
    {
      icon: Users,
      title: 'Operational Training',
      description: 'Comprehensive staff training and ongoing support.',
      link: '/about',
    },
  ];

  const whyChooseUs = [
    {
      icon: ShieldCheck,
      title: 'Quality Certified',
      description: 'All products meet IS, ISO, and international healthcare standards.',
    },
    {
      icon: Award,
      title: '500+ Installations',
      description: 'Trusted by leading hospitals and clinics across India.',
    },
    {
      icon: Heart,
      title: 'Patient-Centric Design',
      description: 'Every solution is designed with patient comfort and safety in mind.',
    },
    {
      icon: Target,
      title: 'ROI-Focused',
      description: 'Our solutions pay for themselves through improved efficiency.',
    },
  ];

  const team = [
    {
      name: 'Dr. Arjun Mehta',
      role: 'Chief Clinical Advisor',
      expertise: '25+ years in Physical Medicine & Rehabilitation',
      image: 'https://images.unsplash.com/photo-1766310550061-7cd0900f7c76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwcHJvZmVzc2lvbmFscyUyMHRlYW18ZW58MXx8fHwxNzY5MjUyMzI4fDA&ixlib=rb-4.1.0&q=80&w=400',
    },
    {
      name: 'Priya Sharma',
      role: 'Head of Space Design',
      expertise: 'Hospital architecture & accessibility specialist',
      image: 'https://images.unsplash.com/photo-1766310550061-7cd0900f7c76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwcHJvZmVzc2lvbmFscyUyMHRlYW18ZW58MXx8fHwxNzY5MjUyMzI4fDA&ixlib=rb-4.1.0&q=80&w=400',
    },
    {
      name: 'Rajesh Kumar',
      role: 'Technical Director',
      expertise: 'Biomedical engineering & equipment integration',
      image: 'https://images.unsplash.com/photo-1766310550061-7cd0900f7c76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwcHJvZmVzc2lvbmFscyUyMHRlYW18ZW58MXx8fHwxNzY5MjUyMzI4fDA&ixlib=rb-4.1.0&q=80&w=400',
    },
  ];

  const stats = [
    { value: '500+', label: 'Installations' },
    { value: '98%', label: 'Client Satisfaction' },
    { value: '15+', label: 'Years Experience' },
    { value: '50+', label: 'Cities Served' },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-teal-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-200">
                Trusted by 500+ Healthcare Facilities
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Build World-Class
                <span className="text-blue-600"> Rehabilitation Spaces</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                From concept to commissioning—we deliver complete rehab solutions including equipment, 3D space planning, automation, and staff training.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/space-planner">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg">
                    Start Free 3D Planning
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" variant="outline" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50">
                    Book Consultation
                  </Button>
                </Link>
              </div>
              <div className="mt-8 flex items-center space-x-6">
                {stats.slice(0, 2).map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-blue-600">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1761971974992-6df33df97c3a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjByZWhhYmlsaXRhdGlvbiUyMGNlbnRlcnxlbnwxfHx8fDE3NjkzNDMwNTd8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Modern rehabilitation center"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              {/* Floating Stats */}
              <div className="absolute -bottom-6 left-6 right-6 bg-white rounded-xl shadow-lg p-6 grid grid-cols-2 gap-4">
                {stats.slice(2).map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-blue-600">{stat.value}</div>
                    <div className="text-xs text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Industry Challenges */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Common Challenges in Rehab Space Setup
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We understand the pain points that healthcare administrators face
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {challenges.map((challenge, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow border-2 border-gray-100">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                      <challenge.icon className="w-6 h-6 text-red-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{challenge.title}</h3>
                    <p className="text-sm text-gray-600">{challenge.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrated Solutions */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Integrated Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need for a complete rehabilitation facility
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link to={solution.link}>
                  <Card className="h-full hover:shadow-xl transition-all hover:-translate-y-1 border-2 border-blue-100 bg-white group cursor-pointer">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-700 transition-colors">
                        <solution.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                        {solution.title}
                      </h3>
                      <p className="text-sm text-gray-600 mb-4">{solution.description}</p>
                      <div className="flex items-center text-blue-600 text-sm font-medium">
                        Learn more <ArrowRight className="ml-1 w-4 h-4" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Budget Transparency */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Badge className="mb-4 bg-green-100 text-green-700">
                Transparent Pricing
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                No Hidden Costs. Complete Budget Clarity.
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Our 3D Space Planner gives you instant cost estimates based on your requirements. Know exactly what you're investing in before making any commitments.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-600 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Detailed product-wise pricing breakdown</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-600 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Installation and training costs included</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-600 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Flexible payment plans and financing options</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-600 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">5-year warranty and maintenance packages</span>
                </li>
              </ul>
              <Link to="/space-planner">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
                  Calculate Your Budget Now
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1764314138160-5f04f4a50dae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaHlzaWNhbCUyMHRoZXJhcHklMjBlcXVpcG1lbnR8ZW58MXx8fHwxNzY5MzQzMDU3fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Physical therapy equipment"
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Healthcare Leaders Choose RehabSpace
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our commitment to excellence sets us apart
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Credibility */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Expert Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Industry veterans with deep healthcare and technical expertise
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-6 text-center">
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                    <p className="text-blue-600 font-medium mb-2">{member.role}</p>
                    <p className="text-sm text-gray-600">{member.expertise}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Generation CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-teal-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Rehab Space?
            </h2>
            <p className="text-xl text-blue-100">
              Get a free consultation and custom proposal for your facility
            </p>
          </div>
          <LeadGenForm />
        </div>
      </section>
    </div>
  );
}
