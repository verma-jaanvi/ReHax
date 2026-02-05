import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'sonner';
import Navigation from '@/app/components/Navigation';
import Footer from '@/app/components/Footer';
import HomePage from '@/app/pages/HomePage';
import SolutionsPage from '@/app/pages/SolutionsPage';
import SpacePlannerPage from '@/app/pages/SpacePlannerPage';
import HospitalsPage from '@/app/pages/industries/HospitalsPage';
import ClinicsPage from '@/app/pages/industries/ClinicsPage';
import SportsPage from '@/app/pages/industries/SportsPage';
import SeniorCarePage from '@/app/pages/industries/SeniorCarePage';
import AboutPage from '@/app/pages/AboutPage';
import ContactPage from '@/app/pages/ContactPage';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-white">
        <Navigation />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/solutions" element={<SolutionsPage />} />
            <Route path="/space-planner" element={<SpacePlannerPage />} />
            <Route path="/industries/hospitals" element={<HospitalsPage />} />
            <Route path="/industries/clinics" element={<ClinicsPage />} />
            <Route path="/industries/sports" element={<SportsPage />} />
            <Route path="/industries/senior-care" element={<SeniorCarePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
        <Toaster position="top-right" richColors />
      </div>
    </Router>
  );
}
