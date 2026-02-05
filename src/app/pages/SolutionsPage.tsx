import { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import {
  Activity, Heart, Zap, Brain, Dumbbell, Users,
  ArrowRight, Eye, ChevronRight, X
} from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { Card, CardContent } from '@/app/components/ui/card';
import { Badge } from '@/app/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/app/components/ui/tabs';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/app/components/ui/dialog';

export default function SolutionsPage() {
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [visualizerOpen, setVisualizerOpen] = useState(false);

  const therapyCategories = [
    {
      id: 'orthopedic',
      name: 'Orthopedic Therapy',
      icon: Activity,
      color: 'blue',
      description: 'Advanced equipment for musculoskeletal rehabilitation',
      products: [
        {
          name: 'Premium Therapy Table',
          model: 'RT-Pro-3000',
          price: '₹1,25,000',
          image: 'https://images.unsplash.com/photo-1764314138160-5f04f4a50dae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaHlzaWNhbCUyMHRoZXJhcHklMjBlcXVpcG1lbnR8ZW58MXx8fHwxNzY5MzQzMDU3fDA&ixlib=rb-4.1.0&q=80&w=400',
          specs: ['Electric height adjustment', 'Load capacity: 200kg', 'Memory foam padding', 'ISO certified'],
          useCases: ['Post-operative rehab', 'Manual therapy', 'Spinal mobilization'],
        },
        {
          name: 'Traction Unit',
          model: 'TU-2500',
          price: '₹2,50,000',
          image: 'https://images.unsplash.com/photo-1761971974992-6df33df97c3a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjByZWhhYmlsaXRhdGlvbiUyMGNlbnRlcnxlbnwxfHx8fDE3NjkzNDMwNTd8MA&ixlib=rb-4.1.0&q=80&w=400',
          specs: ['Cervical & lumbar modes', 'Digital force control', 'Safety auto-stop', 'Timer function'],
          useCases: ['Disc herniation', 'Nerve compression', 'Chronic back pain'],
        },
        {
          name: 'CPM Machine',
          model: 'CPM-Knee-1000',
          price: '₹1,80,000',
          image: 'https://images.unsplash.com/photo-1764314138160-5f04f4a50dae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaHlzaWNhbCUyMHRoZXJhcHklMjBlcXVpcG1lbnR8ZW58MXx8fHwxNzY5MzQzMDU3fDA&ixlib=rb-4.1.0&q=80&w=400',
          specs: ['0-120° ROM', 'Adjustable speed', 'Portable design', 'Digital display'],
          useCases: ['Post knee surgery', 'Joint stiffness', 'Arthritis management'],
        },
      ],
    },
    {
      id: 'neurological',
      name: 'Neurological Therapy',
      icon: Brain,
      color: 'purple',
      description: 'Equipment for stroke, spinal cord injury, and neuro rehab',
      products: [
        {
          name: 'Gait Training System',
          model: 'GTS-Pro-5000',
          price: '₹8,50,000',
          image: 'https://images.unsplash.com/photo-1762392050946-685f2dec9da7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjByZWhhYmlsaXRhdGlvbnxlbnwxfHx8fDE3NjkyNzI0OTl8MA&ixlib=rb-4.1.0&q=80&w=400',
          specs: ['Body weight support', 'Treadmill integrated', 'Real-time feedback', 'Adjustable harness'],
          useCases: ['Stroke recovery', 'Spinal cord injury', 'Balance disorders'],
        },
        {
          name: 'Standing Frame',
          model: 'SF-Advanced-200',
          price: '₹3,20,000',
          image: 'https://images.unsplash.com/photo-1761971974992-6df33df97c3a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjByZWhhYmlsaXRhdGlvbiUyMGNlbnRlcnxlbnwxfHx8fDE3NjkzNDMwNTd8MA&ixlib=rb-4.1.0&q=80&w=400',
          specs: ['Electric tilt adjustment', 'Multi-position support', 'Safety straps', 'Therapy tray included'],
          useCases: ['Paraplegia', 'Cerebral palsy', 'Prolonged immobilization'],
        },
      ],
    },
    {
      id: 'cardiac',
      name: 'Cardiac Rehab',
      icon: Heart,
      color: 'red',
      description: 'Monitored exercise equipment for heart patients',
      products: [
        {
          name: 'Medical Treadmill',
          model: 'MT-Cardio-4000',
          price: '₹4,50,000',
          image: 'https://images.unsplash.com/photo-1762392050946-685f2dec9da7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjByZWhhYmlsaXRhdGlvbnxlbnwxfHx8fDE3NjkyNzI0OTl8MA&ixlib=rb-4.1.0&q=80&w=400',
          specs: ['ECG integration', 'Emergency stop', 'Low-speed precision', 'Heart rate zones'],
          useCases: ['Post-MI rehab', 'Heart failure', 'Pre-surgery conditioning'],
        },
      ],
    },
    {
      id: 'sports',
      name: 'Sports Medicine',
      icon: Dumbbell,
      color: 'green',
      description: 'High-performance recovery for athletes',
      products: [
        {
          name: 'Isokinetic Dynamometer',
          model: 'ISO-Sport-Pro',
          price: '₹12,00,000',
          image: 'https://images.unsplash.com/photo-1762392050946-685f2dec9da7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjByZWhhYmlsaXRhdGlvbnxlbnwxfHx8fDE3NjkyNzI0OTl8MA&ixlib=rb-4.1.0&q=80&w=400',
          specs: ['Multiple joint testing', 'Strength profiling', 'Bilateral comparison', 'Cloud data storage'],
          useCases: ['ACL injury', 'Return to sport testing', 'Injury prevention'],
        },
      ],
    },
    {
      id: 'electrotherapy',
      name: 'Electrotherapy',
      icon: Zap,
      color: 'yellow',
      description: 'TENS, IFT, ultrasound, and laser therapy',
      products: [
        {
          name: '4-Channel IFT Unit',
          model: 'IFT-Deluxe-400',
          price: '₹85,000',
          image: 'https://images.unsplash.com/photo-1764314138160-5f04f4a50dae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaHlzaWNhbCUyMHRoZXJhcHklMjBlcXVpcG1lbnR8ZW58MXx8fHwxNzY5MzQzMDU3fDA&ixlib=rb-4.1.0&q=80&w=400',
          specs: ['4 independent channels', '50+ pre-set programs', 'Vector mode', 'LCD display'],
          useCases: ['Pain management', 'Muscle stimulation', 'Edema reduction'],
        },
      ],
    },
    {
      id: 'geriatric',
      name: 'Geriatric Care',
      icon: Users,
      color: 'teal',
      description: 'Accessible solutions for elderly rehabilitation',
      products: [
        {
          name: 'Parallel Bars with Platform',
          model: 'PB-Senior-300',
          price: '₹1,40,000',
          image: 'https://images.unsplash.com/photo-1765896387398-1e1ae8d2eb85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZW5pb3IlMjBjYXJlJTIwZmFjaWxpdHl8ZW58MXx8fHwxNzY5MzQzMDU5fDA&ixlib=rb-4.1.0&q=80&w=400',
          specs: ['Height adjustable', 'Anti-slip surface', 'Folding design', 'Mirror optional'],
          useCases: ['Gait training', 'Balance exercises', 'Fall prevention'],
        },
      ],
    },
  ];

  const handleVisualize = (product: any) => {
    setSelectedProduct(product);
    setVisualizerOpen(true);
  };

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-600 to-teal-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Complete Rehabilitation Equipment Portfolio
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Browse our comprehensive range of therapy equipment across all specialties. 
              Each product comes with 3D visualization and instant quotes.
            </p>
            <Link to="/space-planner">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                Try 3D Space Planner
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Products by Category */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue={therapyCategories[0].id} className="w-full">
            <TabsList className="w-full flex flex-wrap justify-center gap-2 bg-gray-100 p-2 rounded-lg mb-12">
              {therapyCategories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="flex items-center space-x-2 px-6 py-3 data-[state=active]:bg-white data-[state=active]:shadow-md"
                >
                  <category.icon className="w-5 h-5" />
                  <span className="font-medium">{category.name}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {therapyCategories.map((category) => (
              <TabsContent key={category.id} value={category.id} className="mt-8">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-3">{category.name}</h2>
                  <p className="text-lg text-gray-600">{category.description}</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.products.map((product, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1 }}
                    >
                      <Card className="overflow-hidden hover:shadow-xl transition-all group">
                        <div className="relative aspect-square overflow-hidden bg-gray-100">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute top-4 right-4">
                            <Badge className={`bg-${category.color}-600 text-white`}>
                              {product.model}
                            </Badge>
                          </div>
                        </div>
                        <CardContent className="p-6">
                          <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
                          <p className="text-2xl font-bold text-blue-600 mb-4">{product.price}</p>
                          
                          <div className="mb-4">
                            <h4 className="text-sm font-semibold text-gray-700 mb-2">Key Specifications:</h4>
                            <ul className="text-sm text-gray-600 space-y-1">
                              {product.specs.slice(0, 3).map((spec, i) => (
                                <li key={i} className="flex items-start">
                                  <ChevronRight className="w-4 h-4 text-blue-600 mr-1 flex-shrink-0 mt-0.5" />
                                  {spec}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="mb-4">
                            <h4 className="text-sm font-semibold text-gray-700 mb-2">Clinical Use:</h4>
                            <div className="flex flex-wrap gap-1">
                              {product.useCases.slice(0, 2).map((useCase, i) => (
                                <Badge key={i} variant="outline" className="text-xs">
                                  {useCase}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          <div className="flex gap-2">
                            <Button 
                              onClick={() => handleVisualize(product)}
                              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white"
                            >
                              <Eye className="w-4 h-4 mr-2" />
                              Visualize 3D
                            </Button>
                            <Button 
                              onClick={() => setSelectedProduct(product)}
                              variant="outline"
                              className="flex-1"
                            >
                              Details
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-teal-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Need a Custom Solution?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Our team can design a complete package tailored to your specific requirements and budget.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              Speak with an Expert
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* 3D Visualizer Dialog */}
      <Dialog open={visualizerOpen} onOpenChange={setVisualizerOpen}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">
              {selectedProduct?.name} - 3D Visualization
            </DialogTitle>
          </DialogHeader>
          <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 grid grid-cols-8 grid-rows-6 gap-px">
              {Array.from({ length: 48 }).map((_, i) => (
                <div key={i} className="bg-white/20"></div>
              ))}
            </div>
            <div className="relative z-10 text-center p-8">
              <div className="w-32 h-32 mx-auto mb-4 bg-white/90 rounded-lg shadow-xl flex items-center justify-center">
                <Activity className="w-16 h-16 text-blue-600 animate-pulse" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Interactive 3D View</h3>
              <p className="text-gray-600 mb-4">
                Rotate, zoom, and place this equipment in your virtual space
              </p>
              <Link to="/space-planner">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                  Open in Space Planner
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
