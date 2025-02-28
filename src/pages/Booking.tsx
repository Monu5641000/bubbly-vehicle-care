
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { toast } from "@/components/ui/use-toast";
import { Car, Bike, ArrowRight } from "lucide-react";

const Booking = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    address: "",
    city: "",
    pincode: "",
    vehicleType: "car" as "car" | "bike",
  });

  // Pricing based on vehicle type
  const pricing = {
    car: {
      basic: 499,
      standard: 799,
      premium: 1299,
    },
    bike: {
      basic: 299,
      standard: 499,
      premium: 899,
    },
  };

  const [selectedPackage, setSelectedPackage] = useState<"basic" | "standard" | "premium">("standard");
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleVehicleChange = (value: "car" | "bike") => {
    setFormData(prev => ({ ...prev, vehicleType: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.mobile || !formData.address || !formData.city || !formData.pincode) {
      toast({
        title: "Missing information",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    // Show success message
    toast({
      title: "Booking successful!",
      description: "We'll contact you shortly to confirm your booking.",
    });
    
    // Navigate back to home after successful booking
    setTimeout(() => navigate("/"), 2000);
  };

  return (
    <div className="min-h-screen bg-soft-yellow">
      <div className="container mx-auto px-6 py-10">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Complete Your Booking</h1>
            <p className="text-gray-600">Please provide your details to schedule your doorstep vehicle cleaning service</p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
            <form onSubmit={handleSubmit}>
              {/* Vehicle Type Selection */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4">Select Your Vehicle Type</h2>
                <RadioGroup 
                  defaultValue={formData.vehicleType} 
                  onValueChange={(value) => handleVehicleChange(value as "car" | "bike")}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <div className={`border rounded-xl p-4 flex items-center gap-4 flex-1 ${formData.vehicleType === "car" ? "border-blue-500 bg-blue-50" : "border-gray-200"}`}>
                    <RadioGroupItem value="car" id="car" className="text-blue-600" />
                    <Label htmlFor="car" className="flex items-center gap-2 cursor-pointer">
                      <Car className="w-5 h-5 text-blue-600" />
                      <span>Car</span>
                    </Label>
                  </div>
                  
                  <div className={`border rounded-xl p-4 flex items-center gap-4 flex-1 ${formData.vehicleType === "bike" ? "border-blue-500 bg-blue-50" : "border-gray-200"}`}>
                    <RadioGroupItem value="bike" id="bike" className="text-blue-600" />
                    <Label htmlFor="bike" className="flex items-center gap-2 cursor-pointer">
                      <Bike className="w-5 h-5 text-blue-600" />
                      <span>Bike</span>
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              {/* Service Package Selection */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4">Choose a Service Package</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {(["basic", "standard", "premium"] as const).map((pkg) => (
                    <div
                      key={pkg}
                      className={`border rounded-xl p-4 cursor-pointer transition-all ${
                        selectedPackage === pkg ? "border-orange-400 bg-orange-50" : "border-gray-200 hover:border-gray-300"
                      }`}
                      onClick={() => setSelectedPackage(pkg)}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium capitalize">{pkg}</span>
                        <span className="font-bold text-orange-500">
                          ₹{pricing[formData.vehicleType][pkg]}
                        </span>
                      </div>
                      <p className="text-sm text-gray-500">
                        {pkg === "basic" && "Exterior wash, wheels & tires cleaning"}
                        {pkg === "standard" && "Basic + interior vacuum & glass cleaning"}
                        {pkg === "premium" && "Standard + wax & dashboard polish"}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Details */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4">Your Contact Details</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="mobile">Mobile Number</Label>
                    <Input
                      id="mobile"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleInputChange}
                      placeholder="+91 98765 43210"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Address Details */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4">Service Location</h2>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="address">Address</Label>
                    <Input
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      placeholder="123 Main Street, Apartment 4B"
                      required
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="city">City</Label>
                      <Input
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        placeholder="Mumbai"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="pincode">Pincode</Label>
                      <Input
                        id="pincode"
                        name="pincode"
                        value={formData.pincode}
                        onChange={handleInputChange}
                        placeholder="400001"
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Checkout Summary */}
              <div className="bg-gray-50 p-6 rounded-xl mb-8">
                <h2 className="text-xl font-semibold mb-4">Booking Summary</h2>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">{formData.vehicleType === "car" ? "Car" : "Bike"} - {selectedPackage.charAt(0).toUpperCase() + selectedPackage.slice(1)} Package</span>
                    <span className="font-medium">₹{pricing[formData.vehicleType][selectedPackage]}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Service Fee</span>
                    <span className="font-medium">₹99</span>
                  </div>
                  <div className="pt-2 mt-2 border-t border-gray-200 flex justify-between">
                    <span className="font-semibold">Total</span>
                    <span className="font-bold text-lg">₹{pricing[formData.vehicleType][selectedPackage] + 99}</span>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <Button 
                type="submit" 
                className="w-full bg-orange-400 hover:bg-orange-500 text-white text-lg py-6 h-auto rounded-full"
              >
                Proceed to Checkout
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
