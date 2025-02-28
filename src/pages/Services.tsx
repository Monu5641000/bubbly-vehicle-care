
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Services from '@/components/Services';
import HowItWorks from '@/components/HowItWorks';
import BookingForm from '@/components/BookingForm';

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-soft-yellow">
      <Navbar />
      
      {/* Page Header */}
      <div className="pt-28 pb-16 bg-soft-blue/20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Professional cleaning and servicing for all types of vehicles, delivered right to your doorstep.
          </p>
        </div>
      </div>
      
      <Services />
      <HowItWorks />
      <BookingForm />
      <Footer />
    </div>
  );
};

export default ServicesPage;
