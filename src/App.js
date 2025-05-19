
import React from 'react';
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import NavbarSection from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
import AboutSection from "./Components/AboutUs";
import WorkSection from "./Components/Work";
import GallerySection from "./Components/Gallery";
import TestimonalsSection from "./Components/Testimonals";
import GetInTouchSection from "./Components/Getintouch";
import FooterSection from "./Components/Footer";
import AboutUsSection from './Components/AboutSection';
import GalleryViewSection from './Components/GallerySection';
import ExploreMoreSection from './Components/ExploreMore';
import EventScheduleSection from './Components/EventSchedule';
import TermsAndConditionsSection from './Components/Terms';
import ScrollToTop from './Components/ScrollTop';
import PrivacyPolicySection from './Components/PrivacyPolicy';
import ConcertsSection from './Components/Concerts';
import Whatsapp from './Components/Whatsapp';
import SpecialSection from './Components/special';
import EventSection from './Components/Event';
import ClientSection from './Components/Clients';




const Layout = () => {
  return (
    <>
      <NavbarSection />
      <Whatsapp />
      <main>
        <Outlet />
      </main>
      <FooterSection />
    </>
  );
};


const HomePage = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ClientSection/>
      <SpecialSection />
      <EventSection/>
      <WorkSection />
      <GallerySection />
      <TestimonalsSection />


    </>
  );
};

function App() {
  return (
    <Router>
      <ScrollToTop></ScrollToTop>
      <div className="App">
        <Routes>

          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="about-section" element={<AboutUsSection />} />
            <Route path='gallery' element={<GallerySection />} />
            <Route path="gallery-section" element={<GalleryViewSection />} />
            <Route path='explore-more' element={<ExploreMoreSection />} />
            <Route path='event-schedule' element={<EventScheduleSection />} />
            <Route path="terms-conditions" element={<TermsAndConditionsSection />} />
            <Route path="privacy-policy" element={<PrivacyPolicySection />} />
            <Route path="Getintouch" element={<GetInTouchSection />} />

            <Route path="concerts" element={<ConcertsSection />} />
            {/* <Route path="events" element={<EventsPage />} /> */}

            <Route path="testimonials" element={<TestimonalsSection />} />

          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;