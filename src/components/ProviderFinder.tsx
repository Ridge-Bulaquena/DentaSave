
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin } from "lucide-react";
import { motion } from "framer-motion";

// Mock data for dentists
const mockDentists = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    specialty: "General Dentistry",
    address: "123 Main St, Anytown, USA",
    distance: "0.8 miles",
    discountLevel: "40% discount on services",
    rating: 4.9,
    reviews: 124
  },
  {
    id: 2,
    name: "Dr. Michael Chen",
    specialty: "Orthodontist",
    address: "456 Oak Ave, Anytown, USA",
    distance: "1.2 miles",
    discountLevel: "35% discount on services",
    rating: 4.7,
    reviews: 89
  },
  {
    id: 3,
    name: "Dr. Lisa Rodriguez",
    specialty: "Pediatric Dentistry",
    address: "789 Elm Blvd, Anytown, USA",
    distance: "2.1 miles",
    discountLevel: "45% discount on services",
    rating: 4.8,
    reviews: 156
  },
];

const ProviderFinder = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [specialty, setSpecialty] = useState("");
  const [searchResults, setSearchResults] = useState(mockDentists);

  // Mock search function
  const handleSearch = () => {
    // In a real app, this would call an API with the search parameters
    console.log("Searching for dentists with:", { searchTerm, specialty });
    
    // For demo purposes, we'll just filter our mock data
    const filtered = mockDentists.filter(dentist => 
      (searchTerm === "" || dentist.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
       dentist.address.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (specialty === "" || dentist.specialty === specialty)
    );
    
    setSearchResults(filtered);
  };

  return (
    <section className="py-16" id="find-dentist">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Find a Dentist
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Locate affordable dental care providers in your area
          </p>
        </div>

        <motion.div 
          className="mt-12 bg-white shadow-md rounded-lg overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="p-6 bg-dentasave-50">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              <div className="md:col-span-1">
                <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                <Input
                  id="location"
                  type="text"
                  placeholder="Enter ZIP code or city"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="md:col-span-1">
                <label htmlFor="specialty" className="block text-sm font-medium text-gray-700 mb-1">Specialty</label>
                <Select value={specialty} onValueChange={setSpecialty}>
                  <SelectTrigger>
                    <SelectValue placeholder="Any specialty" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">Any specialty</SelectItem>
                    <SelectItem value="General Dentistry">General Dentistry</SelectItem>
                    <SelectItem value="Orthodontist">Orthodontist</SelectItem>
                    <SelectItem value="Pediatric Dentistry">Pediatric Dentistry</SelectItem>
                    <SelectItem value="Periodontist">Periodontist</SelectItem>
                    <SelectItem value="Endodontist">Endodontist</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="md:col-span-1 flex items-end">
                <Button className="w-full" onClick={handleSearch}>Search</Button>
              </div>
            </div>
          </div>
          
          <div className="p-6">
            <div className="space-y-4">
              {searchResults.length > 0 ? (
                searchResults.map((dentist) => (
                  <Card key={dentist.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <CardContent className="p-0">
                      <div className="flex flex-col md:flex-row">
                        <div className="p-6 flex-grow">
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="text-lg font-semibold text-gray-900">{dentist.name}</h3>
                              <p className="text-sm text-gray-500">{dentist.specialty}</p>
                            </div>
                            <div className="bg-dentasave-50 px-3 py-1 rounded-full text-dentasave-600 text-sm font-medium">
                              {dentist.discountLevel}
                            </div>
                          </div>
                          
                          <div className="mt-3 flex items-center text-sm text-gray-500">
                            <MapPin className="h-4 w-4 mr-1 text-gray-400" />
                            <span>{dentist.address}</span>
                            <span className="mx-2">•</span>
                            <span>{dentist.distance}</span>
                          </div>
                          
                          <div className="mt-3 flex items-center">
                            <div className="flex items-center">
                              <div className="flex items-center">
                                {[...Array(5)].map((_, i) => (
                                  <svg
                                    key={i}
                                    className={`w-4 h-4 ${i < Math.floor(dentist.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                  >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                  </svg>
                                ))}
                              </div>
                              <span className="ml-1 text-sm text-gray-600">{dentist.rating}</span>
                              <span className="mx-1">•</span>
                              <span className="text-sm text-gray-500">{dentist.reviews} reviews</span>
                            </div>
                          </div>
                        </div>
                        <div className="bg-dentasave-50 md:w-48 flex flex-col justify-center items-center p-4 md:p-6">
                          <Button className="w-full mb-2">View Profile</Button>
                          <Button variant="outline" className="w-full">Book Now</Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))
              ) : (
                <div className="text-center py-8">
                  <p className="text-gray-500">No dentists found matching your search criteria.</p>
                  <p className="text-gray-500 mt-2">Try expanding your search area or changing filters.</p>
                </div>
              )}
            </div>
          </div>
        </motion.div>
        
        <div className="mt-8 text-center">
          <p className="text-gray-500">
            Don't see what you're looking for?
            <Button variant="link" className="text-dentasave-500 hover:text-dentasave-600">
              View all network dentists
            </Button>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProviderFinder;
