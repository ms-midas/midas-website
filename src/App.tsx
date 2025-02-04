import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import TrainingPage from './pages/TrainingPage';
import BookingPage from './pages/BookingPage';
import SIRICourseInfo from './pages/SIRICourseInfo';
import COSIRICourseInfo from './pages/COSIRICourseInfo';
import ServicesPage from './pages/ServicesPage';
import SiriIntroductionPage from './pages/siri/SiriIntroductionPage';
import SiriCourseInfoPage from './pages/siri/SiriCourseInfoPage';
import SiriTrainingSchedulePage from './pages/siri/SiriTrainingSchedulePage';
import SiriAssessmentsPage from './pages/siri/SiriAssessmentsPage';
import CosiriIntroductionPage from './pages/cosiri/CosiriIntroductionPage';
import CosiriCourseInfoPage from './pages/cosiri/CosiriCourseInfoPage';
import CosiriTrainingSchedulePage from './pages/cosiri/CosiriTrainingSchedulePage';
import CosiriAssessmentsPage from './pages/cosiri/CosiriAssessmentsPage';
import ContactPage from './pages/about/ContactPage';
import GlobalReachPage from './pages/about/GlobalReachPage';
import TeamPage from './pages/about/TeamPage';
import PrivacyPage from './pages/about/PrivacyPage';
import BookingConfirmationPage from './pages/BookingConfirmationPage';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/training" element={<TrainingPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/siri/introduction" element={<SiriIntroductionPage />} />
          <Route path="/siri/course-info" element={<SiriCourseInfoPage />} />
          <Route path="/siri/training-schedule" element={<SiriTrainingSchedulePage />} />
          <Route path="/siri/assessments" element={<SiriAssessmentsPage />} />
          <Route path="/cosiri/introduction" element={<CosiriIntroductionPage />} />
          <Route path="/cosiri/course-info" element={<CosiriCourseInfoPage />} />
          <Route path="/cosiri/training-schedule" element={<CosiriTrainingSchedulePage />} />
          <Route path="/cosiri/assessments" element={<CosiriAssessmentsPage />} />
          <Route path="/courses/siri" element={<SIRICourseInfo />} />
          <Route path="/courses/cosiri" element={<COSIRICourseInfo />} />
          <Route path="/booking/confirmation" element={<BookingConfirmationPage />} />
          <Route path="/about/contact" element={<ContactPage />} />
          <Route path="/about/global-reach" element={<GlobalReachPage />} />
          <Route path="/about/team" element={<TeamPage />} />
          <Route path="/about/privacy" element={<PrivacyPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;