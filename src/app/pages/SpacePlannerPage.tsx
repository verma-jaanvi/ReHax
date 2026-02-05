import { useState } from "react";
import { motion } from "motion/react";
import {
  Maximize2,
  DollarSign,
  Download,
  Send,
  Grid3x3,
  Plus,
  Minus,
  RotateCw,
  Eye,
  Package2,
  Layers,
} from "lucide-react";
import { Button } from "@/app/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import { Label } from "@/app/components/ui/label";
import { Input } from "@/app/components/ui/input";
import { Slider } from "@/app/components/ui/slider";
import { Badge } from "@/app/components/ui/badge";
import Scene3D from "@/app/components/Scene3D";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/components/ui/select";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/app/components/ui/tabs";
import { toast } from "sonner";

export default function SpacePlannerPage() {
  const [facilityType, setFacilityType] = useState("");
  const [areaSize, setAreaSize] = useState([500]);
  const [budget, setBudget] = useState([1000000]);
  const [therapyFocus, setTherapyFocus] = useState<string[]>([]);
  const [showEstimate, setShowEstimate] = useState(false);

  const facilityTypes = [
    { value: "hospital", label: "Multi-Specialty Hospital", minArea: 800 },
    { value: "clinic", label: "Rehab Clinic", minArea: 300 },
    { value: "sports", label: "Sports Center", minArea: 600 },
    { value: "senior-care", label: "Senior Care Facility", minArea: 400 },
  ];

  const therapies = [
    { id: "ortho", name: "Orthopedic", icon: "🦴" },
    { id: "neuro", name: "Neurological", icon: "🧠" },
    { id: "cardiac", name: "Cardiac", icon: "❤️" },
    { id: "sports", name: "Sports Medicine", icon: "⚡" },
    { id: "geriatric", name: "Geriatric", icon: "👴" },
  ];

  const recommendedProducts = [
    { name: "Therapy Tables (3)", price: 375000, category: "Essential" },
    { name: "Electrotherapy Units (2)", price: 170000, category: "Essential" },
    { name: "Exercise Equipment Set", price: 450000, category: "Recommended" },
    { name: "Parallel Bars", price: 140000, category: "Essential" },
    { name: "CPM Machine", price: 180000, category: "Optional" },
    { name: "Traction Unit", price: 250000, category: "Recommended" },
  ];

  const toggleTherapy = (id: string) => {
    setTherapyFocus((prev) =>
      prev.includes(id) ? prev.filter((t) => t !== id) : [...prev, id],
    );
  };

  const calculateEstimate = () => {
    if (!facilityType || therapyFocus.length === 0) {
      toast.error("Please select facility type and at least one therapy focus");
      return;
    }
    setShowEstimate(true);
    toast.success("Layout generated! Scroll down to see recommendations.");
  };

  const totalCost = recommendedProducts.reduce((sum, p) => sum + p.price, 0);

  return (
    <div className="w-full bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-600 to-teal-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              3D Space Planner
            </h1>
            <p className="text-xl text-blue-100">
              Design your perfect rehab space in minutes. Get instant layout
              suggestions, product recommendations, and accurate cost estimates.
            </p>
          </div>
        </div>
      </section>

      {/* Planning Tool */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Configuration Panel */}
            <div className="lg:col-span-1">
              <Card className="sticky top-24">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl">
                    <Grid3x3 className="w-6 h-6 mr-2 text-blue-600" />
                    Space Configuration
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <Label className="text-base font-semibold mb-2">
                      Facility Type <span className="text-red-500">*</span>
                    </Label>
                    <Select
                      value={facilityType}
                      onValueChange={setFacilityType}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select facility type" />
                      </SelectTrigger>
                      <SelectContent>
                        {facilityTypes.map((type) => (
                          <SelectItem key={type.value} value={type.value}>
                            {type.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label className="text-base font-semibold mb-2">
                      Total Area:{" "}
                      <span className="text-blue-600">{areaSize[0]} sq ft</span>
                    </Label>
                    <Slider
                      value={areaSize}
                      onValueChange={setAreaSize}
                      min={200}
                      max={5000}
                      step={50}
                      className="mt-2"
                    />
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                      <span>200 sq ft</span>
                      <span>5000 sq ft</span>
                    </div>
                  </div>

                  <div>
                    <Label className="text-base font-semibold mb-2">
                      Budget Range:{" "}
                      <span className="text-green-600">
                        ₹{(budget[0] / 100000).toFixed(1)}L
                      </span>
                    </Label>
                    <Slider
                      value={budget}
                      onValueChange={setBudget}
                      min={100000}
                      max={10000000}
                      step={100000}
                      className="mt-2"
                    />
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                      <span>₹1L</span>
                      <span>₹1Cr</span>
                    </div>
                  </div>

                  <div>
                    <Label className="text-base font-semibold mb-3">
                      Therapy Focus <span className="text-red-500">*</span>
                    </Label>
                    <div className="space-y-2">
                      {therapies.map((therapy) => (
                        <button
                          key={therapy.id}
                          onClick={() => toggleTherapy(therapy.id)}
                          className={`w-full flex items-center justify-between p-3 rounded-lg border-2 transition-all ${
                            therapyFocus.includes(therapy.id)
                              ? "border-blue-600 bg-blue-50"
                              : "border-gray-200 hover:border-gray-300"
                          }`}
                        >
                          <span className="flex items-center">
                            <span className="text-2xl mr-2">
                              {therapy.icon}
                            </span>
                            <span className="font-medium">{therapy.name}</span>
                          </span>
                          {therapyFocus.includes(therapy.id) && (
                            <Badge className="bg-blue-600">Selected</Badge>
                          )}
                        </button>
                      ))}
                    </div>
                  </div>

                  <Button
                    onClick={calculateEstimate}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6 text-lg"
                  >
                    <Layers className="w-5 h-5 mr-2" />
                    Generate Layout
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* 3D Viewer */}
            <div className="lg:col-span-2">
              <Card className="h-full">
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle className="flex items-center text-xl">
                    <Eye className="w-6 h-6 mr-2 text-blue-600" />
                    3D Preview
                  </CardTitle>
                  <div className="flex space-x-2">
                    <Button size="sm" variant="outline">
                      <RotateCw className="w-4 h-4 mr-1" />
                      Rotate
                    </Button>
                    <Button size="sm" variant="outline">
                      <Plus className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="outline">
                      <Minus className="w-4 h-4" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  {/* 3D Scene with grid and simulated layout */}
                  <div className="w-full h-[400px] lg:h-[600px]">
                    <Scene3D />
                  </div>

                  {showEstimate && (
                    <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                      <h4 className="font-semibold text-blue-900 mb-2">
                        Layout Summary
                      </h4>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-gray-600">Facility Type:</span>
                          <span className="font-medium ml-2">
                            {
                              facilityTypes.find(
                                (f) => f.value === facilityType,
                              )?.label
                            }
                          </span>
                        </div>
                        <div>
                          <span className="text-gray-600">Total Area:</span>
                          <span className="font-medium ml-2">
                            {areaSize[0]} sq ft
                          </span>
                        </div>
                        <div>
                          <span className="text-gray-600">Therapy Zones:</span>
                          <span className="font-medium ml-2">
                            {therapyFocus.length}
                          </span>
                        </div>
                        <div>
                          <span className="text-gray-600">
                            Equipment Items:
                          </span>
                          <span className="font-medium ml-2">
                            {recommendedProducts.length}
                          </span>
                        </div>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Recommendations */}
          {showEstimate && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-8"
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">
                    Recommended Equipment & Cost Estimate
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="products">
                    <TabsList className="mb-6">
                      <TabsTrigger value="products">Product List</TabsTrigger>
                      <TabsTrigger value="summary">Cost Summary</TabsTrigger>
                    </TabsList>

                    <TabsContent value="products">
                      <div className="space-y-3">
                        {recommendedProducts.map((product, idx) => (
                          <div
                            key={idx}
                            className="flex items-center justify-between p-4 border-2 border-gray-100 rounded-lg hover:border-blue-200 transition-colors"
                          >
                            <div className="flex items-center space-x-4">
                              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                                <Package2 className="w-6 h-6 text-blue-600" />
                              </div>
                              <div>
                                <h4 className="font-semibold text-gray-900">
                                  {product.name}
                                </h4>
                                <Badge variant="outline" className="mt-1">
                                  {product.category}
                                </Badge>
                              </div>
                            </div>
                            <div className="text-right">
                              <p className="text-xl font-bold text-gray-900">
                                ₹{(product.price / 1000).toFixed(0)}K
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </TabsContent>

                    <TabsContent value="summary">
                      <div className="space-y-4">
                        <div className="grid md:grid-cols-3 gap-6">
                          <Card className="bg-blue-50 border-blue-200">
                            <CardContent className="p-6 text-center">
                              <DollarSign className="w-10 h-10 text-blue-600 mx-auto mb-2" />
                              <p className="text-sm text-gray-600 mb-1">
                                Equipment Cost
                              </p>
                              <p className="text-2xl font-bold text-blue-600">
                                ₹{(totalCost / 100000).toFixed(2)}L
                              </p>
                            </CardContent>
                          </Card>
                          <Card className="bg-green-50 border-green-200">
                            <CardContent className="p-6 text-center">
                              <Package2 className="w-10 h-10 text-green-600 mx-auto mb-2" />
                              <p className="text-sm text-gray-600 mb-1">
                                Installation
                              </p>
                              <p className="text-2xl font-bold text-green-600">
                                ₹{((totalCost * 0.1) / 100000).toFixed(2)}L
                              </p>
                            </CardContent>
                          </Card>
                          <Card className="bg-purple-50 border-purple-200">
                            <CardContent className="p-6 text-center">
                              <Maximize2 className="w-10 h-10 text-purple-600 mx-auto mb-2" />
                              <p className="text-sm text-gray-600 mb-1">
                                Total Investment
                              </p>
                              <p className="text-2xl font-bold text-purple-600">
                                ₹{((totalCost * 1.1) / 100000).toFixed(2)}L
                              </p>
                            </CardContent>
                          </Card>
                        </div>

                        <div className="p-6 bg-gray-50 rounded-lg">
                          <h4 className="font-semibold text-gray-900 mb-3">
                            Package Includes:
                          </h4>
                          <ul className="grid md:grid-cols-2 gap-2 text-sm text-gray-700">
                            <li className="flex items-center">
                              ✓ All equipment listed above
                            </li>
                            <li className="flex items-center">
                              ✓ Professional installation
                            </li>
                            <li className="flex items-center">
                              ✓ Staff training (2 days)
                            </li>
                            <li className="flex items-center">
                              ✓ 5-year warranty
                            </li>
                            <li className="flex items-center">
                              ✓ 24/7 support
                            </li>
                            <li className="flex items-center">
                              ✓ Maintenance package
                            </li>
                          </ul>
                        </div>

                        <div className="flex gap-4">
                          <Button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white">
                            <Download className="w-5 h-5 mr-2" />
                            Download PDF Quote
                          </Button>
                          <Button className="flex-1 bg-green-600 hover:bg-green-700 text-white">
                            <Send className="w-5 h-5 mr-2" />
                            Request Consultation
                          </Button>
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}
