import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { Card, CardContent } from '@/app/components/ui/card';
import LeadGenForm from '@/app/components/LeadGenForm';

export default function ContactPage() {
  return (
    <div className="w-full">
      <section className="bg-gradient-to-br from-blue-600 to-teal-600 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Get in Touch</h1>
          <p className="text-xl text-blue-100">
            Let's discuss how we can transform your rehabilitation space
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Send us a Message</h2>
              <LeadGenForm />
            </div>

            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <MapPin className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Head Office</p>
                        <p className="text-sm text-gray-600">123 Healthcare Blvd, Mumbai 400001</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Phone className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Phone</p>
                        <a href="tel:+911234567890" className="text-sm text-blue-600">+91 123 456 7890</a>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Mail className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Email</p>
                        <a href="mailto:info@rehabspace.in" className="text-sm text-blue-600">info@rehabspace.in</a>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Clock className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Business Hours</p>
                        <p className="text-sm text-gray-600">Mon-Sat: 9AM - 6PM</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-blue-50 border-blue-200">
                <CardContent className="p-6">
                  <h4 className="font-bold text-gray-900 mb-2">Response Time</h4>
                  <p className="text-sm text-gray-700">
                    We typically respond to all inquiries within 24 hours during business days.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
