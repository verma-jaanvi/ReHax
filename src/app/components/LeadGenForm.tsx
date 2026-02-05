import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { Send } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Textarea } from '@/app/components/ui/textarea';
import { Label } from '@/app/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/app/components/ui/select';

type FormData = {
  name: string;
  email: string;
  phone: string;
  organization: string;
  facilityType: string;
  message: string;
};

export default function LeadGenForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log('Form data:', data);
    toast.success('Thank you! We\'ll contact you within 24 hours.');
    reset();
    setIsSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-white rounded-2xl shadow-2xl p-8">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="name" className="text-gray-700 font-medium">
            Full Name <span className="text-red-500">*</span>
          </Label>
          <Input
            id="name"
            {...register('name', { required: 'Name is required' })}
            className="mt-1"
            placeholder="Dr. Rahul Sharma"
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
          )}
        </div>

        <div>
          <Label htmlFor="email" className="text-gray-700 font-medium">
            Email Address <span className="text-red-500">*</span>
          </Label>
          <Input
            id="email"
            type="email"
            {...register('email', { 
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address'
              }
            })}
            className="mt-1"
            placeholder="rahul@hospital.com"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
          )}
        </div>

        <div>
          <Label htmlFor="phone" className="text-gray-700 font-medium">
            Phone Number <span className="text-red-500">*</span>
          </Label>
          <Input
            id="phone"
            type="tel"
            {...register('phone', { required: 'Phone is required' })}
            className="mt-1"
            placeholder="+91 98765 43210"
          />
          {errors.phone && (
            <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
          )}
        </div>

        <div>
          <Label htmlFor="organization" className="text-gray-700 font-medium">
            Organization Name <span className="text-red-500">*</span>
          </Label>
          <Input
            id="organization"
            {...register('organization', { required: 'Organization is required' })}
            className="mt-1"
            placeholder="ABC Hospital"
          />
          {errors.organization && (
            <p className="mt-1 text-sm text-red-600">{errors.organization.message}</p>
          )}
        </div>

        <div className="md:col-span-2">
          <Label htmlFor="facilityType" className="text-gray-700 font-medium">
            Facility Type <span className="text-red-500">*</span>
          </Label>
          <Select onValueChange={(value) => setValue('facilityType', value)}>
            <SelectTrigger className="mt-1">
              <SelectValue placeholder="Select facility type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="hospital">Hospital</SelectItem>
              <SelectItem value="clinic">Rehabilitation Clinic</SelectItem>
              <SelectItem value="sports">Sports Center</SelectItem>
              <SelectItem value="senior-care">Senior Care Facility</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
          {errors.facilityType && (
            <p className="mt-1 text-sm text-red-600">{errors.facilityType.message}</p>
          )}
        </div>

        <div className="md:col-span-2">
          <Label htmlFor="message" className="text-gray-700 font-medium">
            Tell us about your requirements
          </Label>
          <Textarea
            id="message"
            {...register('message')}
            className="mt-1"
            rows={4}
            placeholder="E.g., We're setting up a 2000 sq ft rehab center and need equipment for ortho and neuro therapy..."
          />
        </div>

        <div className="md:col-span-2">
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white text-lg py-6"
          >
            {isSubmitting ? (
              'Submitting...'
            ) : (
              <>
                Get Free Consultation
                <Send className="ml-2 w-5 h-5" />
              </>
            )}
          </Button>
        </div>

        <div className="md:col-span-2 text-center">
          <p className="text-sm text-gray-500">
            By submitting, you agree to our{' '}
            <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>
            {' '}and{' '}
            <a href="#" className="text-blue-600 hover:underline">Terms of Service</a>
          </p>
        </div>
      </div>
    </form>
  );
}
