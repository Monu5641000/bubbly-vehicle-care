
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { CheckCircle2 } from 'lucide-react';

const pricingPlans = [
  {
    name: "Basic",
    description: "Essential cleaning for your vehicle",
    price: "299",
    frequency: "per wash",
    features: [
      "Exterior wash",
      "Tire cleaning",
      "Door jambs cleaning",
      "Basic windows cleaning",
      "Dust removal"
    ],
    color: "bg-soft-blue text-primary",
    popular: false
  },
  {
    name: "Standard",
    description: "Most popular cleaning package",
    price: "599",
    frequency: "per wash",
    features: [
      "All Basic features",
      "Interior vacuum",
      "Dashboard cleaning",
      "Complete window cleaning",
      "Floor mat washing",
      "Door panel cleaning"
    ],
    color: "bg-soft-orange text-dark-charcoal",
    popular: true
  },
  {
    name: "Premium",
    description: "Complete vehicle care solution",
    price: "999",
    frequency: "per wash",
    features: [
      "All Standard features",
      "Exterior waxing",
      "Leather conditioning",
      "Engine bay cleaning",
      "Headlight restoration",
      "Interior sanitization",
      "Basic fluid check"
    ],
    color: "bg-soft-purple text-primary",
    popular: false
  },
  {
    name: "Subscription",
    description: "Regular maintenance plan",
    price: "2499",
    frequency: "per month",
    features: [
      "4 Standard washes per month",
      "Priority scheduling",
      "10% off additional services",
      "Free basic servicing check",
      "Emergency washing service",
      "WhatsApp support"
    ],
    color: "bg-primary text-white",
    popular: false
  }
];

const PricingPage = () => {
  return (
    <div className="min-h-screen bg-soft-yellow">
      <Navbar />
      
      {/* Page Header */}
      <div className="pt-28 pb-16 bg-soft-blue/20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Pricing</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Transparent and competitive pricing for all our door-to-door vehicle cleaning and servicing packages.
          </p>
        </div>
      </div>
      
      {/* Pricing plans */}
      <div className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pricingPlans.map((plan, index) => (
              <div 
                key={index} 
                className={`relative rounded-2xl overflow-hidden shadow-card animate-scale-up ${
                  plan.popular ? 'transform scale-105 z-10' : ''
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-soft-orange text-dark-charcoal text-center py-1 font-bold text-sm">
                    Most Popular
                  </div>
                )}
                
                <div className={`${plan.color} p-6 ${plan.popular ? 'pt-8' : ''}`}>
                  <h3 className="text-2xl font-bold mb-1">{plan.name}</h3>
                  <p className="opacity-80 mb-4">{plan.description}</p>
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold">₹{plan.price}</span>
                    <span className="ml-2 opacity-80">{plan.frequency}</span>
                  </div>
                </div>
                
                <div className="bg-white p-6">
                  <ul className="space-y-4 mb-6">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle2 className={`h-5 w-5 mr-2 flex-shrink-0 mt-0.5 ${
                          plan.popular ? 'text-soft-orange' : 'text-primary'
                        }`} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className={`w-full ${
                      plan.popular 
                        ? 'bg-soft-orange text-dark-charcoal hover:bg-soft-orange/90' 
                        : 'bg-primary text-white hover:bg-primary/90'
                    } button-hover`}
                  >
                    Choose Plan
                  </Button>
                </div>
              </div>
            ))}
          </div>
          
          {/* Additional services */}
          <div className="mt-20">
            <h2 className="text-3xl font-bold text-center mb-10">Additional Services</h2>
            <div className="bg-white rounded-2xl shadow-card overflow-hidden">
              <div className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <div>
                    <h3 className="text-xl font-bold mb-4">For Cars</h3>
                    <ul className="space-y-2">
                      <li className="flex justify-between items-center">
                        <span>Engine bay cleaning</span>
                        <span className="font-bold">₹299</span>
                      </li>
                      <li className="flex justify-between items-center">
                        <span>Interior deep cleaning</span>
                        <span className="font-bold">₹699</span>
                      </li>
                      <li className="flex justify-between items-center">
                        <span>Ceramic coating</span>
                        <span className="font-bold">₹3999</span>
                      </li>
                      <li className="flex justify-between items-center">
                        <span>Headlight restoration</span>
                        <span className="font-bold">₹499</span>
                      </li>
                      <li className="flex justify-between items-center">
                        <span>Paint protection</span>
                        <span className="font-bold">₹1299</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold mb-4">For Bikes</h3>
                    <ul className="space-y-2">
                      <li className="flex justify-between items-center">
                        <span>Chain lubrication</span>
                        <span className="font-bold">₹149</span>
                      </li>
                      <li className="flex justify-between items-center">
                        <span>Chrome polishing</span>
                        <span className="font-bold">₹299</span>
                      </li>
                      <li className="flex justify-between items-center">
                        <span>Engine cleaning</span>
                        <span className="font-bold">₹249</span>
                      </li>
                      <li className="flex justify-between items-center">
                        <span>Matte finish care</span>
                        <span className="font-bold">₹399</span>
                      </li>
                      <li className="flex justify-between items-center">
                        <span>Full detailing</span>
                        <span className="font-bold">₹799</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold mb-4">Servicing</h3>
                    <ul className="space-y-2">
                      <li className="flex justify-between items-center">
                        <span>Basic fluid check</span>
                        <span className="font-bold">₹199</span>
                      </li>
                      <li className="flex justify-between items-center">
                        <span>Air filter cleaning</span>
                        <span className="font-bold">₹249</span>
                      </li>
                      <li className="flex justify-between items-center">
                        <span>Battery check & service</span>
                        <span className="font-bold">₹299</span>
                      </li>
                      <li className="flex justify-between items-center">
                        <span>Wiper blade replacement</span>
                        <span className="font-bold">₹399</span>
                      </li>
                      <li className="flex justify-between items-center">
                        <span>Preventive maintenance</span>
                        <span className="font-bold">₹899</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-soft-blue/20 p-6 text-center">
                <p className="font-medium mb-4">
                  Prices may vary based on vehicle size, condition, and location.
                  Contact us for a customized quote.
                </p>
                <Button className="bg-primary text-white hover:bg-primary/90 button-hover">
                  Get Custom Quote
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default PricingPage;
